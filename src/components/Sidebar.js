import './Sidebar.scss'
import { MdNavigateNext } from 'react-icons/md'
import { FaUserCircle, FaMapMarkerAlt } from 'react-icons/fa'


//img
import stories from '../assets/img/stories.svg'
import reserve from '../assets/img/reserve.svg'
import { useState } from 'react'
import MenuItems from './MenuItems'
const Sidebar = () => {

  const [isSidebarMenuClicked, setSidebarMenuCliked] = useState(false);


  const handleClick = () => {
    setSidebarMenuCliked(!isSidebarMenuClicked);
  }

  return (
    <ul className='sidebar'>
      <button className='sidebar__link' onClick={handleClick}>
        メニュー
        <MdNavigateNext size={24}/>
        <div className={`${isSidebarMenuClicked ? 'sidebar__menu active' : 'sidebar__menu'}`}>
          <MenuItems />
        </div>
      </button>
      <li className='sidebar__link'>
        サービス
        <MdNavigateNext size={24}/>
      </li>
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
    </ul>
  )
}


export default Sidebar