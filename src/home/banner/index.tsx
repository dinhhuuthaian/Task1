import banner from './Banner.module.css';

type Props = {}

const Banner = (props: Props) => {
  return <nav>
    <div className={banner.banner}>
        <div className={banner.versace}>VERSACE</div>
        <div className={banner.zara}>ZARA</div>
        <div className={banner.gucci}>GUCCI</div>
        <div className={banner.parada}>PARADA</div>  
        <div className={banner.calvinKlein}>CALVIN KLEIN</div>  

    </div>
  </nav>
}

export default Banner