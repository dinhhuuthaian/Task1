import style from "./body.module.css"
import vecH from "/TASK 1/my-app/src/home/asset/icon/VectorH.svg"
import img11 from "/TASK 1/my-app/src/home/asset/image/image 11.png"
import img12 from "/TASK 1/my-app/src/home/asset/image/image 12.png"
import img13 from "/TASK 1/my-app/src/home/asset/image/image 13.png"
import vecTrash from "/TASK 1/my-app/src/home/asset/icon/VectorTrash.svg"
import minus from "/TASK 1/my-app/src/home/asset/icon/VectorMinus.svg"
import plus from "/TASK 1/my-app/src/home/asset/icon/VectorPlus.svg"
import vecAddcode from "/TASK 1/my-app/src/home/asset/icon/VectorAddpromo.svg"
import vecArrow from "/TASK 1/my-app/src/home/asset/icon/VectorArrow.svg"
type Props = {}

const Body = (props: Props) => {
  return (
    <>
    <div className={style.containerLine3}>
          <hr className={style.line2}></hr>
        </div><div className={style.containerLeft1}>
              <ul>
                  <li>Home</li>
                  <img src={vecH} />
                  <li>Cart</li>
              </ul>
        </div>
        <div className={style.yourCart}>
        <h1>YOUR CART </h1>
        </div>
        <div className={style.container}>
            <div className={style.containerLeft}>
                <div className={style.containerProduct}>
                    <div className={style.image}><img src={img11}/></div>
                    <div className={style.description}>
                        <div className={style.content}>
                            <h1>Gradient Graphic T-shirt</h1>
                            <ul>
                                <li>Size: Large</li>
                                <li>Color: White</li>
                            </ul>
                            <p>$145</p>
                        </div>
                        <div className={style.containerIncre}>
                            <div className={style.trash}><img src={vecTrash}/></div>
                            <div className={style.btnIncre}>
                            <div className={style.containerQuanity}>
                                <ul>
                                    <a><img src={minus}/></a>
                                    <li>1</li>
                                    <p><img src={plus}/></p>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.containerProduct}>
                    <div className={style.image}><img src={img12}/></div>
                    <div className={style.description}>
                        <div className={style.content}>
                            <h1>CHECKERED SHIRT</h1>
                            <ul>
                                <li>Size: Medium</li>
                                <li>Color: Red</li>
                            </ul>
                            <p>$180</p>
                        </div>
                        <div className={style.containerIncre}>
                            <div className={style.trash}><img src={vecTrash}/></div>
                            <div className={style.btnIncre}>
                            <div className={style.containerQuanity}>
                                <ul>
                                    <a><img src={minus}/></a>
                                    <li>1</li>
                                    <p><img src={plus}/></p>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.containerProduct}>
                    <div className={style.image}><img src={img13}/></div>
                    <div className={style.description}>
                        <div className={style.content}>
                            <h1>SKINNY FIT JEANS</h1>
                            <ul>
                                <li>Size: Large</li>
                                <li>Color: Blue</li>
                            </ul>
                            <p>$240</p>
                        </div>
                        <div className={style.containerIncre}>
                            <div className={style.trash}><img src={vecTrash}/></div>
                            <div className={style.btnIncre}>
                            <div className={style.containerQuanity}>
                                <ul>
                                    <a><img src={minus}/></a>
                                    <li>1</li>
                                    <p><img src={plus}/></p>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.containerRight}>
                <h1>Order Summary</h1>
                <div className={style.containerPrice}>
                    <div className={style.containerTotalPrice}>
                        <p>Subtotal</p>
                        <a>$565</a>
                    </div>
                    <div className={style.containerTotalPrice}>
                        <p>Discount (-20%)</p>
                        <a className={style.discount}>-$113</a>
                    </div>
                    <div className={style.containerTotalPrice}>
                        <p>Delivery Fee</p>
                        <a>$15</a>
                    </div>
                    <div className={style.containerLine}>
                    <hr className={style.line}></hr>
                    </div>
                    <div className={style.containerTotalPrice}>
                        <a>Total</a>
                        <a>$467</a>
                    </div>
                </div>
                <div className={style.containerAddCode}>
                    <div className={style.btnAddCode}>
                        <a><img src={vecAddcode}/></a>
                        <p>Add promo code</p>
                    </div>
                    <div className={style.btnApply}>
                        <p>Apply</p>
                    </div>
                </div>
                <div className={style.btnCheckOut}>
                    <p>Go to Checkout</p>
                    <a><img src={vecArrow}/></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Body;