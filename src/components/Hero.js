import './Hero.scss'

const Hero = () => {

  return (
    <section className='hero'>
      <div className="hero__img">
        <a href="/cafe/halloween/?nid=tbn_01_pc " className="hero__img-1">
          <img src="https://www.starbucks.co.jp/resource/kv/images/kv_221019_0550_a.jpg" alt="[新商品情報] パープル ハロウィン フラペチーノ®" className="sp-hidden" />
          <img src="https://www.starbucks.co.jp/resource/kv/images/kv_221019_0550_a.jpg" alt="[新商品情報] パープル ハロウィン フラペチーノ®" className="pc-hidden" />
        </a>
        <a href="/rewards/5years_anniversary/?nid=tbn_02_pc " className="hero__img-2">
          <img src="https://www.starbucks.co.jp/resource/kv/images/kv_221018_0945_pc_b.jpg" alt="JSR 5周年" className="sp-hidden" />
          <img src="https://www.starbucks.co.jp/resource/kv/images/kv_221018_0945_sp_b.jpg" alt="JSR 5周年" className="pc-hidden" />
        </a>
        <a href="/coffee/220901/?nid=tbn_03_pc " className="hero__img-3">
          <img src="https://www.starbucks.co.jp/resource/kv/images/kv_221016_2300_pc_c.jpg" alt="[季節のコーヒー] " className="sp-hidden" />
          <img src="https://www.starbucks.co.jp/resource/kv/images/kv_221016_2300_sp_c.jpg" alt="[季節のコーヒー] " className="pc-hidden" />
        </a>
      </div>
    </section>
  )
}

export default Hero
