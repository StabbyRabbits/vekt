import React, { useRef, useState, useEffect, createRef } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import  styled  from '@emotion/styled';

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  border-bottom: 1px solid #eee;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Item = styled(Link)`
  padding: 18px 28px;
  cursor: pointer;
  transition: color 0.3s ease-out;
  text-decoration: none;
  color: #111;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 12px;
  margin: 5px 0;

  &.active {
    color: #fff;
  }

  &:hover {
    color: #f8f8f8; /* Change color on hover */
  }
`;

const Indicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 30px;
`;

export const items = [
  {
    name: 'Home',
    color: '#f44336',
    to: '/homepage',
  },
  {
    name: 'About',
    color: '#e91e63',
    to: '/about',
  },
  {
    name: 'Contact',
    color: '#9c27b0',
    to: '/contact',
  },
  {
    name: 'Games',
    color: '#673ab7',
    to: '/games',
  },
];

const Navbar = () => {
    const $root = useRef(null);
    const $indicator1 = useRef(null);
    const $indicator2 = useRef(null);
    const $items = useRef(items.map(() => createRef()));
    const [active, setActive] = useState(0);
  
    const animate = () => {
      const menuOffset = $root.current.getBoundingClientRect();
      const activeItem = $items.current[active].current;
      const { width, height, top, left } = activeItem.getBoundingClientRect();
  
      const settings = {
        x: left - menuOffset.x,
        y: top - menuOffset.y,
        width: width,
        height: height,
        backgroundColor: items[active].color,
        ease: 'elastic.out(.7, .7)',
        duration: 0.8,
      };
  
      gsap.to($indicator1.current, {
        ...settings,
      });
  
      gsap.to($indicator2.current, {
        ...settings,
        duration: 1,
      });
    };
  
    useEffect(() => {
      animate();
      const handleResize = () => animate();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [active]);
  
    return (
        <div ref={$root} className="menu">
        {items.map((item, index) => (
          <Link
            key={item.name}
            ref={$items.current[index]}
            className={`item ${active === index ? 'active' : ''}`}
            onMouseEnter={() => {
              setActive(index);
            }}
            to={item.to}
          >
            {item.name}
          </Link>
        ))}
        <div ref={$indicator1} className="indicator" />
        <div ref={$indicator2} className="indicator" />
      </div>
    );
        }
  

export default Navbar;