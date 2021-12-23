import React ,{useState} from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa';
const Navbar = () => {

    const[click,setClick]=useState(false);

    const handleClick =()=>setClick(!click);
const [color,setColor] = useState(false);
const changeColor=()=>{
  if(window.scrollY>=100){
    setColor(true);
  }else{
    setColor(false);
  }
}

window.addEventListener('scroll',changeColor);

  return (
    <div class={color?'header header-bg':'header'}>
      <Link to="/">
        <h1>GLX TRVL</h1>
      </Link>
      <ul class={click?"nav-menu active":"nav-menu"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/contact">Contacts</Link></li>

      </ul>
      <div class="hamburger" onClick={handleClick}>
          {click? (<FaTimes  size={20} style={{color:'#fff'}}/>):( <FaBars size={20} style={{color:'#fff'}}/>)}
           
      </div>
    </div>
  );
};
export default Navbar;
