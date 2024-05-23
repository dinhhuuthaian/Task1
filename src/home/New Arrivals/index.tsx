import newArrival from './newArrival.module.css';
import tShirt from '/TASK 1/my-app/src/home/asset/image/image1.png'
import jean from '/TASK 1/my-app/src/home/asset//image/image2.png'
import shirt from '/TASK 1/my-app/src/home/asset//image/image3.png'
import tShirt2 from '/TASK 1/my-app/src/home/asset/image/image4.png'
import TsImg1 from '/TASK 1/my-app/src/home/asset/image/image1-TopSelling.png'
import TsImg2 from '/TASK 1/my-app/src/home/asset/image/image2-TopSelling.png'
import TsImg3 from '/TASK 1/my-app/src/home/asset/image/image3-TopSelling.png'
import TsImg4 from '/TASK 1/my-app/src/home/asset/image/image4-TopSelling.png'
import star from '/TASK 1/my-app/src/home/asset/icon/Star 3.svg'
import { Link } from 'react-router-dom';
import hstar from '/TASK 1/my-app/src/home/asset/icon/Hstar 5.svg'
type Props = {}

const NewArrival = (props: Props) => {
  return <nav>
    <div className={newArrival.columnContainer}>
        <a className={newArrival.newArrival}>NEW ARRIVALS</a>
        <div className={newArrival.rowContainer}>
            <Link to ="/productDetail">
            <button className={newArrival.card}>
                <img src={tShirt} alt="T-shirt" />
                <h1>T-SHIRT WITH TAPE DETAILS</h1>
                <div className={newArrival.Icstar}>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={hstar}></img>
                </div>
                <p className={newArrival.price}>$120</p>
            </button>
            </Link>
            <Link to ="/productDetail">
            <button className={newArrival.card}>
            <img src={jean} alt="Skiny Jean" />
                <h1>SKINNY FIT JEANS</h1>
                <div className={newArrival.Icstar}>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={hstar}></img>
                </div>
                <p className={newArrival.price}>$240</p>
            </button>
            </Link>
            <Link to ="/productDetail">
            <button className={newArrival.card}>
            <img src={shirt} alt="Shirt" />
                <h1>CHECKERED SHIRT</h1>
                <div className={newArrival.Icstar}>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={hstar}></img>
                </div>
                <p className={newArrival.price}>$240</p>
            </button>
            </Link>
            <Link to ="/productDetail">
            <button className={newArrival.card}>
            <img src={tShirt2} alt="T-Shirt" />
                <h1>SLEEVE STRIPED T-SHIRT</h1>
                <div className={newArrival.Icstar}>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={hstar}></img>
                </div>
                <p className={newArrival.price}>$240</p>
            </button>
            </Link>
        </div>
        <div className={newArrival.rowContainer}>
        <button className={newArrival.btnviewAll}>View All</button>
        </div>
        <div>
        <hr className={newArrival.new1}></hr>
        </div>
        <a className={newArrival.newArrival}>TOP SELLING</a>
        <div className={newArrival.rowContainer}>
        <Link to ="/productDetail">
            <button className={newArrival.card}>
                <img src={TsImg1} alt="shirt"/>
                <h1>VERTICAL STRIPED SHIRT</h1>
                <div className={newArrival.Icstar}>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                </div>
                <p className={newArrival.price}>$212</p>
            </button>
            </Link>
            <Link to ="/productDetail">
            <button className={newArrival.card}>
            <img src={TsImg2} alt="T-shirt" />
                <h1>COURAGE GRAPHIC T-SHIRT</h1>
                <div className={newArrival.Icstar}>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                </div>
                <p className={newArrival.price}>$145</p>
            </button>
            </Link>
            <Link to ="/productDetail">
            <button className={newArrival.card}>
            <img src={TsImg3} alt="Short" />
                <h1>LOOSE FIT BERMUDA SHORTS</h1>
                <div className={newArrival.Icstar}>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                </div>
                <p className={newArrival.price}>$80</p>
            </button>
            </Link>
            <Link to ="/productDetail">
            <button className={newArrival.card}>
            <img src={TsImg4} alt="skiny jean" />
                <h1>FADED SKINNY JEANS</h1>
                <ul>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={hstar}></img>
                </ul>
                <p className={newArrival.price}>$210</p>
            </button>
            </Link>
        </div>
        <div className={newArrival.rowContainer}>
        <button className={newArrival.btnviewAll}>View All</button>
        </div>
    </div>
  </nav>
}

export default NewArrival