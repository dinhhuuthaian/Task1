import style from './product.module.css'
import img1 from '/TASK 1/my-app/src/home/asset/icon/image 1.png'
import img2 from '/TASK 1/my-app/src/home/asset/icon/image 2.png'
import img3 from '/TASK 1/my-app/src/home/asset/icon/image 3.png'
import imgP from '/TASK 1/my-app/src/home/asset/image/imageProduct.png'
import vecStar from '/TASK 1/my-app/src/home/asset/icon/Star 3.svg'
import HalfStar from '/TASK 1/my-app/src/home/asset/icon/Star 5.svg'
import nike from '/TASK 1/my-app/src/home/asset/icon/Nike.svg'
import minus from '/TASK 1/my-app/src/home/asset/icon/VectorMinus.svg'
import plus from '/TASK 1/my-app/src/home/asset/icon/VectorPlus.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from 'types/product.type'
import { addToCart } from 'features/cart/cartSlice'
import vecH from '/TASK 1/my-app/src/home/asset/icon/VectorH.svg'

interface ProductListProps {
        products: Product[];
      }
      
const ProductList1: React.FC<ProductListProps> = ({ products }) => {
    const dispatch = useDispatch();
      
const handleAddToCart = (product: Product) => {
          dispatch(addToCart(product));
};
return <>
    <div className={style.containerLine3}>
        <hr className={style.line2}></hr>
    </div>
    <div className={style.containerLeft1}>
        <ul>
            <li>Home</li>
            <img src={vecH} />
            <li>Shop</li>
            <img src={vecH} />
            <li>Men</li>
            <img src={vecH} />
            <li>T-shirt</li>
        </ul>
    </div>
  <div className={style.container}>
    <div className={style.containerImage}>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
    </div>
    <div className={style.containerImageP}>
        <img src={imgP} />
    </div>
    <div className={style.containerDescription}>
        <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className={style.containerStar}>
            <ul>
                <li><img src={vecStar}/></li>
                <li><img src={vecStar}/></li>
                <li><img src={vecStar}/></li>
                <li><img src={vecStar}/></li>
                <li><img src={HalfStar}/></li>
                <p>4,5/</p>
                <a>5</a>
            </ul>
        </div>
        <div className={style.containerPrice}>
            <p>$260</p>
            <a>$300</a>
            <div className={style.containerPink}>
                <p>-40%</p>
            </div>
        </div>
        <div className={style.containerContent}>
        <p className={style.content}>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        </div>
        <div className={style.containerLine}>
        <hr className={style.line}></hr>
        </div>
        <p className={style.SeCol}>Select Colors</p>
        <div className={style.containerColor}>
                <p className={style.brown}><img src={nike}/></p>
                <p className={style.green}></p>
                <p className={style.blue}></p>
        </div>
        <div className={style.containerLine2}>
        <hr className={style.line}></hr>
        </div>
        <p className={style.SeCol}>Choose Size</p>
        <div className={style.containerChooseSize}>
            <ul>
                <li>Small</li>
                <li>Medium</li>
                <a >Large</a>
                <li>X-Large</li>
            </ul>
        </div>
        <div className={style.containerLine2}>
        <hr className={style.line}></hr>
        </div>
        <div className={style.containerAddtoCart}>
            <div className={style.containerQuanity}>
                <ul>
                <a><img src={minus}/></a>
                <li>1</li>
                <p><img src={plus}/></p>
                </ul>
            </div>
            <div >
                {products.map(product => (
                <div key={product.id}>
                <button className={style.containerAddtoCartB} onClick={() => handleAddToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
        </div>
    </div>
  </div>
  </>
}

export default ProductList1;