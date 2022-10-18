import './MenuItems.scss'
import { MdNavigateBefore } from 'react-icons/md'
const MenuItems = () => {
  return (
    <div className='menuItems__header'>
      <MdNavigateBefore />
      <span>メニュー</span>
    </div>
  )
}

export default MenuItems