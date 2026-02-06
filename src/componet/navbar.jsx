import { memo } from 'react';
import logo from "../assets/logo.png"
import './Navbar.css'

function Navbar (){
  return (
    <>
    <header>
        <nav>
            <ul>
                <li><img src={logo} className='logo' alt="" /></li>
                <li><a href="" className='inc'>Explore Incredible</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="" >Community</a></li>
                <li><a href="" className='career'>Careers</a></li>
            </ul>
            <button>take control</button>
        </nav>
    </header>
    </>
  );
};

export default Navbar;