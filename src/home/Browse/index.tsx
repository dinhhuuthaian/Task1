import browse from "./browse.module.css";
import imgCasual from "../asset/image/imageCasual.png";
import imgFormal from "../asset/image/imageFormal.png";
import imgParty from "../asset/image/imageParty.png";
import imgGym from "../asset/image/imageGym.png";
type Props = {};

const Browse = (props: Props) => {
  return (
    <nav>
      <div className={browse.rowContainer}>
        <div className={browse.columnContainer}>
          <h1 className={browse.Title}>BROWSE BY dress STYLE</h1>
          <div className={browse.wrapper}>
            <div className={browse.rowContainer}>
              <div className={browse.containerSquare}>
                <img src={imgCasual} alt="Casual"></img>
              </div>
              <div className={browse.containerRec}>
                <img src={imgFormal} alt="Formal"></img>
              </div>
            </div>
            <div className={browse.rowContainer}>
              <div className={browse.containerRec}>
                <img src={imgParty} alt="Party"></img>
              </div>
              <div className={browse.containerSquare}>
                <img src={imgGym} alt="Gym"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Browse;
