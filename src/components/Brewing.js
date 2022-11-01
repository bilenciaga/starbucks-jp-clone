import './Brewing.scss'
import brewingItemsData from '../data/brewingItemsData'
import { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Brewing = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };


  return (
    <section className='brewing'>
      <h2 className="brewing__title">what's brewing</h2>

      <div className="brewing__carousel">
        <div className="brewing__carousel-cards" ref={scrollRef}>
        {brewingItemsData.map((brewingItem, index) => (
          <div className='brewing__carousel-card'>
            <a href={brewingItem.url} key={index}>
              <div className="brewing__carourel-cardImg">
                <img src={brewingItem.imgUrl} alt={index} />
              </div>
              <p>{brewingItem.desc}</p>
              <span>{brewingItem.date}</span>
            </a>
          </div>
        ))}
        </div>
        <div className="brewing__carousel-arrow">
          <div className="brewing__carousel-leftArrow" onClick={() => scroll('left')}>
            <BsArrowLeftShort />
          </div>
          <div className="brewing__carousel-rightArrow" onClick={() => scroll('right')}>
            <BsArrowRightShort />
          </div>
        </div>
      </div>

      <div className="brewing__bottom">
        <a href="" className="brewing__bottom-item">
          <img src="" alt="" />
          新型コロナウィルス に関する営業状況と感染予防へのご協力のお願い
        </a>
        <a href="" className="brewing__bottom-item">
          <img src="" alt="" />
        </a>
        <a href="" className="brewing__bottom-item">
          <img src="" alt="" />
        </a>
      </div>
    </section>
  )
}

export default Brewing