import './ServiceItems.scss'
import {MdNavigateBefore} from 'react-icons/md'

const ServiceItems = ({handleSidebarServiceClick}) => {
  return (
  <div className='serviceItems__back'>
    <MdNavigateBefore  size={30}/>
    <button onClick={handleSidebarServiceClick}>Service</button>
  </div>
  )
}

export default ServiceItems