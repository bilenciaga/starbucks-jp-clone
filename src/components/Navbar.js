import { useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import MenuItems from './MenuItems'
import ServiceItems from './ServiceItems'
// hamburger
import { Twirl as Hamburger } from 'hamburger-react'
// scss
import './Navbar.scss'
//img
import logo from '../assets/img/logo.svg'
import stories from '../assets/img/stories.svg'
import reserve from '../assets/img/reserve.svg'
//icon
import { TfiSearch } from "react-icons/tfi"
import { BsFillCartFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"



const Navbar = () => {
  
  const [isOpen, setOpen] = useState(false);

  const [isNavbarMenuClicked, setNavbarMenuClicked] = useState(false);
  const [isNavbarServiceClicked, setNavbarServiceClicked] = useState(false);

  const handleNavbarMenuClick = () => {
    setNavbarMenuClicked(!isNavbarMenuClicked);
    setNavbarServiceClicked(false);
  }

  const handleNavbarServiceClick = () => {
    setNavbarServiceClicked(!isNavbarServiceClicked);
    setNavbarMenuClicked(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
      <nav className='navbar'>
        <div className="navbar__left">
            <img src={logo} alt="logo" className='navbar__logo'/>
            <div className="navbar__link">
              <button className={`${isNavbarMenuClicked ? 'active' : null}`} onClick={handleNavbarMenuClick}>メニュー</button>
              <button className={`${isNavbarServiceClicked ? 'active' : null}`} onClick={handleNavbarServiceClick}>サービス</button>
              <button>リワード</button>
            </div>
        </div>
        <div className="navbar__pc">
          <TfiSearch size={26} />
          <MdLocationOn size={32}/>
          <FaUserCircle size={28}/>
          <BsFillCartFill size={28}/>
          <a href="https://stories.starbucks.co.jp/" className='navbar__pc-stories'>
            <img src={stories} alt='stories' />
          </a>
          <a href="" className="navbar__pc-reserve">
            <img src={reserve} alt='reserve' />
          </a>
        </div>
        <div className="navbar__phone-tablet">
          <TfiSearch size={28} style={{color: 'black', marginTop:'.3rem' , marginRight:'3rem'}}/>
          <BsFillCartFill size={30} style={{color: 'black' , marginRight:'2.2rem'}}/>
          <Hamburger size={24} className='navbar__hamburger' toggled={isOpen} toggle={setOpen}/>
          <aside className={`${isOpen ? 'active' : ''}`}>
            <Sidebar />
          </aside>
        </div>

        <div className={`${isNavbarMenuClicked ? 'navbar__menu active' : 'navbar__menu'}`}>
          <MenuItems handleNavbarMenuClick={handleNavbarMenuClick}/>
        </div>

        <div className={`${isNavbarServiceClicked ? 'navbar__service active' : 'navbar__service'}`}>
          <ServiceItems handleNavbarServiceClick={handleNavbarServiceClick}/>
        </div>
      </nav>
  )
}

export default Navbar