import './ServiceItems.scss'
// icon
import {MdNavigateBefore} from 'react-icons/md'
import { FaUserCircle } from "react-icons/fa"
import { useState, useRef, useEffect} from 'react'
// data 
import serviceItemsData from '../data/serviceItemsData.js'

const ServiceItems = ({handleSidebarServiceClick}) => {

  return (
  <div className="serviceItems">
    <div className='serviceItems__back' onClick={handleSidebarServiceClick}>
      <MdNavigateBefore size={30}/>
      <button>サービス</button>
    </div>

    <div className="serviceItems__list">
      <div className="serviceItems__list-myStarbucks">
        <FaUserCircle size={52} />
        <p>My Starbucks</p>
      </div>

      <div className="serviceItems__list-items">
      {serviceItemsData.map((serviceItem) => {
          return (
            <a href={serviceItem.url} key={serviceItem.id}className='serviceItems__list-item'>
              <img src={serviceItem.img} alt={serviceItem.title} />
              <p>{serviceItem.title}</p>
            </a>
          )
        })}
      </div>
    </div>

    <div className="serviceItems__howTo">
      <div className="serviceItems__howTo-1st">
        <h4>HOW TO STARBUCKS</h4>
        <ul className='serviceItems__howTo-list'>
          <li><a href="//www.starbucks.co.jp/howto/?nid=mm">スターバックスの楽しみ方</a></li>
          <li><a href="//www.starbucks.co.jp/howto/togo/?nid=mm">STARBUCKS TO GO</a></li>
          <li><a href="//dyf.starbucks.co.jp/?nid=mm">お気に入りの一杯を探そう</a></li>
          <li><a href="//www.starbucks.co.jp/howto/store/tumbler.html?nid=mm">タンブラーを楽しむ</a></li>
          <li><a href="//www.starbucks.co.jp/event/?nid=mm">イベント情報</a></li>
        </ul>
      </div>

      <div className="serviceItems__howTo-2nd">
        <h4>コーヒーを知る・学ぶ</h4>
        <ul className='serviceItems__howTo-list'>
          <li><a href="//www.starbucks.co.jp/howto/coffee/skill.html?nid=mm"><p>おいしいコーヒーをいれるコツ</p></a></li>
          <li><a href="//www.starbucks.co.jp/coffee/roast.html?nid=mm"><p>好みのコーヒー豆を見つけよう</p></a></li>
          <li><a href="//www.starbucks.co.jp/coffee/recipe/?nid=mm"><p>アレンジコーヒーレシピ</p></a></li>
          <li><a href="//www.starbucks.co.jp/seminar/?nid=mm"><p>コーヒーセミナー</p></a></li>
          <li><a href="//www.starbucks.co.jp/howto/coffee/passport.html?nid=mm"><p>コーヒーパスポート</p></a></li>
          <li><a href="//stories.starbucks.co.jp/stories/ethical-sourcing/?nid=mm" target="_blank"><p>倫理的な調達</p></a></li>
          <li><a href="//www.starbucks.co.jp/coffee/meet_your_coffee/?nid=mm"><p>MEET YOUR COFFEE</p></a></li>
        </ul>
      </div>

      <div className="serviceItems__howTo-3rd">
        <a href="//starbucks-faq.force.com/s/?nid=mm">よくあるご質問・お問い合わせ</a>
      </div>
    </div>
      
</div>
  )
}

export default ServiceItems