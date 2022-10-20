import './Sidebar.scss'
import { MdNavigateNext } from 'react-icons/md'
import { FaUserCircle, FaMapMarkerAlt } from 'react-icons/fa'


//img
import stories from '../assets/img/stories.svg'
import reserve from '../assets/img/reserve.svg'

//react
import { useState } from 'react'
import MenuItems from './MenuItems'
import ServiceItems from './ServiceItems'

const Sidebar = () => {

  const [isSidebarMenuClicked, setSidebarMenuClicked] = useState(false);
  const [isSidebarServiceClicked, setSidebarServiceClicked] = useState(false);


  const handleSidebarMenuClick = () => {
    setSidebarMenuClicked(!isSidebarMenuClicked);
  }

  const handleSidebarServiceClick = () => {
    setSidebarServiceClicked(!isSidebarServiceClicked);
  }

  return (
    <ul className='sidebar'>

    <button className='sidebar__link' onClick={handleSidebarMenuClick}>
      メニュー
      <MdNavigateNext size={24}/>
    </button>

    <button className='sidebar__link' onClick={handleSidebarServiceClick}>
      サービス
      <MdNavigateNext size={24}/>        
    </button>

    <li className='sidebar__link'>
      リワード
      <MdNavigateNext size={24}/>
    </li>

    <hr/>

    <a className="sidebar__icon-location">
      <FaMapMarkerAlt size={24}/>
      <p>店舗検索</p>
    </a>
    <a className="sidebar__icon-user">
      <FaUserCircle size={24}/>
      <p>アカウント</p>
    </a>

    <hr/>

    <div className="sidebar__img">
      <a href="">
        <img src={stories} alt="stories" />
      </a>
      <a href="">
        <img src={reserve} alt="reserve" />
      </a>
    </div>

      <div className={`${isSidebarMenuClicked ? 'sidebar__menu active' : 'sidebar__menu'}`}>
        <MenuItems handleSidebarMenuClick={handleSidebarMenuClick}/>
      </div>

      <div className={`${isSidebarServiceClicked ? 'sidebar__service active' : 'sidebar__service'}`}>
        <ServiceItems handleSidebarServiceClick={handleSidebarServiceClick}/>
      </div>

    </ul>
  )
}


export default Sidebar