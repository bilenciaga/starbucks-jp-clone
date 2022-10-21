import './MenuItems.scss'
import { MdNavigateBefore } from 'react-icons/md'

// import data 
import menuItemsData from '../data/menuItemsData.js'

const MenuItems = ({handleSidebarMenuClick}) => {

  const onlineItems = [
    {
      id:1,
      name:'スターバックス リザーブ® ロースタリー デミ キャスクコレクション',
      img:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785516625/4524785516625_1_s.jpg',
      price:'11,000',
    },
    {
      id:2,
      name:'スターバックス® オータム ブレンド',
      img:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785184008/4524785184008_1_s.jpg',
      price:'1,650',
    },
    {
      id:3,
      name:'ハロウィン2022キャニスターフーディーキャット',
      img:'https://asset.menu.starbucks.co.jp/public/sku_images/4524785508484/4524785508484_1_s.jpg',
      price:'2,800',
    }
  ];

  return (
    <div className='menuItems'>
      <div className='menuItems__back' onClick={handleSidebarMenuClick}>
        <MdNavigateBefore  size={30}/>
        <button>メニュー</button>
      </div>

      <div className='menuItems__list'>
        {menuItemsData.map((menuItem) => {
          return (
            <a  href={menuItem.url} key={menuItem.id}className='menuItems__list-item'>
              <img src={menuItem.img} alt={menuItem.name} />
              <p>{menuItem.name}</p>
            </a>
          )
        })}
      </div>

      <div className="menuItems__onlineStore">
        <div className="menuItems__onlineStore-heading">
          <span>ONLINE STORE</span>
          <span>季節のおすすめ</span>
        </div>
        <div className="menuItems__onlineStore-items">
        {onlineItems.map((onlineItem) => {
          return (
          <a href='' key={onlineItem.id} className="menuItems__onlineStore-items-item">
            <img src={onlineItem.img} alt={onlineItem.name} />
            <p>{onlineItem.name}<span>¥ {onlineItem.price}</span></p>
          </a>  
          )
        })}
        </div>
      </div>

      <div className="menuItems__footer">
        <a href="https://www.starbucks.co.jp/oos/huc/?nid=mm">スーパー・コンビニ・百貨店お取り扱い</a>
        <a href="https://product.starbucks.co.jp/allergy/?nid=mm">アレルゲン・栄養成分・原料原産地情報</a>
        <a href="https://starbucks-faq.force.com/s/?nid=mm">よくあるご質問・お問い合わせ</a>
      </div>
    </div>
  )
}

export default MenuItems