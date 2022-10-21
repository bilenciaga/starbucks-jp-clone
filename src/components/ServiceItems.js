import './ServiceItems.scss'
import {MdNavigateBefore} from 'react-icons/md'

const ServiceItems = ({handleSidebarServiceClick}) => {
  return (
  <div className="serviceItems">
    <div className='serviceItems__back' onClick={handleSidebarServiceClick}>
      <MdNavigateBefore  size={30}/>
      <button>サービス</button>
    </div>
  </div>

  )
}

export default ServiceItems