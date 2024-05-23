
import style from './taskbar.module.css'
import VecSearch from '/TASK 1/my-app/src/home/asset/icon/VectorSearchTaskbar.svg'
import vecA from '/TASK 1/my-app/src/home/asset/icon/VectorAccount.svg'

import { Link, useNavigate } from 'react-router-dom'
import Cart from 'productDetail/Cart/cart'
type Props = {}

const Taskbar = (props: Props) => {
  const navigate = useNavigate()

  const headingClickHandler = () => {
    navigate('/')
  }
  return <>
  <div className={style.container}>
    <div className={style.containerRight}>
    <h1 className={style.shopCo} onClick={headingClickHandler}>SHOP.CO</h1>
    <div className={style.category}>
        <ul>
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
        </ul>
    </div>
    </div>
    <div className={style.containerLeft}>
    <div className={style.containerSearch}>
        <div className={style.btnSearch}>
        <img src={VecSearch}/>
        </div>
        <p className={style.contentSearch}>Search for products...</p>
    </div>
    <div className={style.account}>
          <Cart/>
          <a><img src={vecA}/></a>
    </div>
    </div>
  </div>
  </>
}

export default Taskbar