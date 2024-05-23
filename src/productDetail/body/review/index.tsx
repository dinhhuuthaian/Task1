import style from './review.module.css'
import vecR from '../../../home/asset/icon/VectorReivew.svg'
import vecLastet from '../../../home/asset/icon/VectorLatest.svg'
import star from '../../../home/asset/icon/Star 3.svg'
import hStar from '../../../home/asset/icon/Star 5.svg'
import vecCheck from '../../../home/asset/icon/Vector.svg'
type Props = {}

const Review = (props: Props) => {
  return <>
  <div className={style.container}>
    <div className={style.containerTop}>
        <ul>
            <li>Product Details</li>
            <li>Rating & Review</li>
            <li>FAQs</li>
        </ul>
    </div>
    <div className={style.containerLine}>
        <hr className={style.line}></hr>
    </div>
    <div className={style.reviewTop}>
        <div className={style.Allreview}>
            <p>All Reviews</p>
            <a>(451)</a>
        </div>
        <div className={style.reviewRight}>
            <div className={style.VectorReview}>
                <a>
                <img src={vecR}/>
                </a>
            </div>
            <div className={style.lastest}>
                <ul>
                    <li>Latest</li>
                    <li><img src={vecLastet}/></li>
                </ul>
            </div>
            <div className={style.writeReview}>
                <p>Write a Review</p>
            </div>
        </div>
    </div>
    <div className={style.containerReview}>
        <div className={style.containerReviewRow}>
            <div className={style.containerReviewPart}>
                <ul>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={hStar}/></li>
                </ul>
                <div className={style.name}>
                <h1>Samantha D.</h1>
                <img src={vecCheck}/>
                </div>
                <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                <h2>Posted on August 14, 2023</h2>
            </div>
            <div className={style.containerReviewPart}>
                <ul>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                </ul>
                <div className={style.name}>
                <h1>Alex M.</h1>
                <img src={vecCheck}/>
                </div>
                <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
                <h2>Posted on August 15, 2023</h2>
            </div>
        </div>
        <div className={style.containerReviewRow}>
        <div className={style.containerReviewPart}>
                <ul>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={hStar}/></li>
                </ul>
                <div className={style.name}>
                <h1>Ethan R.</h1>
                <img src={vecCheck}/>
                </div>
                <p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
                <h2>Posted on August 16, 2023</h2>
            </div>
            <div className={style.containerReviewPart}>
                <ul>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                </ul>
                <div className={style.name}>
                <h1>Olivia P.</h1>
                <img src={vecCheck}/>
                </div>
                <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
                <h2>Posted on August 17, 2023</h2>
            </div>
        </div>
        <div className={style.containerReviewRow}>
        <div className={style.containerReviewPart}>
                <ul>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                </ul>
                <div className={style.name}>
                <h1>Liam K.</h1>
                <img src={vecCheck}/>
                </div>
                <p>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
                <h2>Posted on August 18, 2023</h2>
            </div>
            <div className={style.containerReviewPart}>
                <ul>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={hStar}/></li>
                </ul>
                <div className={style.name}>
                <h1>Ava H.</h1>
                <img src={vecCheck}/>
                </div>
                <p>"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
                <h2>Posted on August 19, 2023</h2>
            </div>
        </div>
    </div>
    <div className={style.containerLMR}>
    <div className={style.loadMoreReview}>
        <p>Load More Review</p>
    </div>
    </div>
  </div>
  </>
}

export default Review