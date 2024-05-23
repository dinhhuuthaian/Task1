import style from './review.module.css';
import '@fortawesome/react-fontawesome';
import img from "/TASK 1/my-app/src/home/asset/icon/Star 3.svg"
import vec from "/TASK 1/my-app/src/home/asset/icon/Vector.svg"
type Props = {}

function Review({}: Props) {
  return <nav>
    <div className={style.columnContainer}>
        <div>
        <div className={style.title}>OUR HAPPY CUSTOMERS</div>
        </div>
        <div className={style.rowContainer}>
            <div className={style.card}>
                <div>
                <div className={style.icStar}>
                   <img src={img}></img>
                   <img src={img}></img>
                   <img src={img}></img>
                   <img src={img}></img>
                   <img src={img}></img>
                   </div>
                   <div className={style.container}>
                   <h4 className={style.nameViewer}>Sarah M.</h4>
                   <img src={vec}></img>
                   </div>
                  <p className={style.content}>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>
            </div>
            <div className={style.card}>
                <div>
                <div className={style.icStar}>
                   <img src={img}></img>
                   <img src={img}></img>
                   <img src={img}></img>
                   <img src={img}></img>
                   <img src={img}></img>
                   </div>
                   <div className={style.container}>
                   <h4 className={style.nameViewer}>Alex K.</h4>
                   <img src={vec}></img>
                   </div>
                  <p className={style.content}>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                </div>
            </div>
            <div className={style.card}>
                <div >
                    <div className={style.icStar}>
                   <img src={img}></img>
                   <img src={img}></img>
                   <img src={img}></img>
                   <img src={img}></img>
                   <img src={img}></img>
                   </div>
                   <div className={style.container}>
                   <h4 className={style.nameViewer}>James L.</h4>
                   <img src={vec}></img>
                   </div>
                   <p className={style.content}>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                </div>
            </div>
        </div>
    </div>
  </nav>
}

export default Review