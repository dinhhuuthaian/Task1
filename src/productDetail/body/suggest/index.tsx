import style from './suggest.module.css'
import img7 from '../../../home/asset/image/image 7.png'
import img8 from '../../../home/asset/image/image 8.png'
import img9 from '../../../home/asset/image/image 9.png'
import img10 from '../../../home/asset/image/image 10.png'
import star4 from '../../../home/asset/icon/Star 4.svg'
import star5 from '../../../home/asset/icon/Star 5.svg'

type Props = {}

const Suggest = (props: Props) => {
  return <>
  <div className={style.container}>
    <h1>YOU MIGHT ALSO LIKE</h1>
    <div className={style.containerP}>
        <div className={style.containerProduct}>
            <img src={img7}/>
            <p>Polo with Contrast Trims</p>
            <ul>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <div className={style.number}>
                <a>4.0/</a>
                <a className={style.five}>5</a>
                </div>
            </ul>
            <div>
                <div className={style.containerPrice}>
                    <p>$212</p>
                    <p className={style.numberGray}>$242</p>
                    <div className={style.discount}>
                        <div className={style.containerDiscount}>
                            <a>-20%</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.containerProduct}>
            <img src={img8}/>
            <p>Polo with Contrast Trims</p>
            <ul>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <li><img src={star5}/></li>
                <div className={style.number}>
                <a>3.5/</a>
                <a className={style.five}>5</a>
                </div>
            </ul>
            <div>
                <div className={style.containerPrice}>
                    <p>$145</p>
                </div>
            </div>
        </div>
        <div className={style.containerProduct}>
                <img src={img9}/>
                <p>Polo with Contrast Trims</p>
            <ul>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <li><img src={star5}/></li>
                <div className={style.number}>
                <a>4.5/</a>
                <a className={style.five}>5</a>
                </div>
            </ul>
            <div>
                <div className={style.containerPrice}>
                    <p>$180</p>
                </div>
            </div>
        </div>
        <div className={style.containerProduct}>
            <img src={img10}/>
            <p>Polo with Contrast Trims</p>
            <ul>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <li><img src={star4}/></li>
                <div className={style.number}>
                <a>5.0/</a>
                <a className={style.five}>5</a>
                </div>
            </ul>
            <div>
                <div className={style.containerPrice}>
                    <p>$120</p>
                    <p className={style.numberGray}>$150</p>
                    <div className={style.discount}>
                        <div className={style.containerDiscount}>
                            <a>-30%</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default Suggest