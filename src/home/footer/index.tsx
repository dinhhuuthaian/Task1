import style from './footer.module.css'
import icEmail from '../asset/icon/VectorEmail.png'
import icFB from '../asset/icon/VectorFB.svg'
import icT from '../asset/icon/logo-twitter 2.svg'
import icIG from '../asset/icon/VectorIG.svg'
import icGit from '../asset/icon/VectorGit.svg'
import icVisa from '../asset/icon/Visa.svg'
import icMSC from '../asset/icon/Mastercard.svg'
import icPaypal from '../asset/icon/Paypal.svg'
import icAP from '../asset/icon/ Pay.svg'
import icGpay from '../asset/icon/G Pay.svg'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={style.columnContainer}>
        <div className={style.containerStay}>
            <h1 className={style.content}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            <div className={style.SubColumnContainer}>
                <div className={style.subContainer}>
                    <div className={style.subContainer}>
                    <div className={style.icEmail}>
                    <img src={icEmail}></img>
                    </div>
                    <p className={style.contentEmail}>Enter your email address</p>
                    </div>
                </div>
                <div className={style.subContainer}>
                    <p className={style.subContent}>Subscribe to Newsletter</p>
                </div>
            </div>
        </div>

        <div className={style.rowContainer}>
            <div className={style.columnContainerContent}>
                <h4 className={style.contentShopCo}>SHOP.CO</h4>
                <p className={style.contentInf}>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                
                <div className={style.social}>
                    <div className={style.socialDiv}><a><img src={icT}/></a></div>
                    <div className={style.socialDivFB}><a><img src={icFB}/></a></div>
                    <div className={style.socialDiv}><a><img src={icIG}/></a></div>
                    <div className={style.socialDiv}><a><img src={icGit}/></a></div>
                </div>
            </div>
            <div className={style.columnContainerContent}>
                <h1 className={style.contentCPN}>COMPANY</h1>
                <p className={style.contentInf}>About</p>
                <p className={style.contentInf}>Features</p>
                <p className={style.contentInf}>Works</p>
                <p className={style.contentInf}>Career</p>
            </div>
            <div className={style.columnContainerContent}>
            <h1 className={style.contentCPN}>HELP</h1>
                <p className={style.contentInf}>Customer Support</p>
                <p className={style.contentInf}>Delivery Details</p>
                <p className={style.contentInf}>Terms & Conditions</p>
                <p className={style.contentInf}>Privacy Policy</p>
            </div>
            <div className={style.columnContainerContent}>
            <h1 className={style.contentCPN}>FAQ</h1>
                <p className={style.contentInf}>Account</p>
                <p className={style.contentInf}>Manage Deliveries</p>
                <p className={style.contentInf}>Orders</p>
                <p className={style.contentInf}>Payments</p>
            </div>
            <div className={style.columnContainerContent}>
            <h1 className={style.contentCPN}>RESOURCES</h1>
                <p className={style.contentInf}>Free eBooks</p>
                <p className={style.contentInf}>Development Tutorial</p>
                <p className={style.contentInf}>How to - Blog</p>
                <p className={style.contentInf}>Youtube Playlist</p>
            </div>
        </div>
        <div>
        <hr className={style.new1}></hr>
        </div>
        <div className={style.containerRow}>
            <p className={style.contentWallet}>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className={style.containerRightEwallet}>
                <a className={style.containerWallet}><img src={icVisa}/></a>
                <a className={style.containerWallet}><img src={icMSC}/></a>
                <a className={style.containerWallet}><img src={icPaypal}/></a>
                <a className={style.containerWallet}><img src={icAP}/></a>
                <a className={style.containerWallet}><img src={icGpay}/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer