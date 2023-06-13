import "./Styles.css";
import Pointer from "./Images/pointer.png";
const CardContents = [
  {
    header: "Workout Videos",
    description: "Access to hundreds of free, full-length workout videos. ",
  },
  {
    header: "Workout Programs",
    description: "Affordable and effective workout programs. ",
  },
  {
    header: "Meal Plans",
    description: "Plans built with registered dietitians and nutritionists. ",
  },
  {
    header: "WO Plus ALL ACCESS",
    description: "Add powerful features to your membership. ",
  },
];

let cssStylesForCards = [
  "landing-card",
  "landing-card-left-content",
  "landing-card-header",
  "landing-card-description",
  "landing-card-right-content",
  "landing-card-pointer",
];

function Cards() {
  const CardFill = CardContents.map((info) => (
    <div className={cssStylesForCards[0]}>
      <div className={cssStylesForCards[1]}>
        <h3 className={cssStylesForCards[2]}>{info.header}</h3>
        <span className={cssStylesForCards[3]}>{info.description}</span>
      </div>
      <div className={cssStylesForCards[4]}>
        <img className={cssStylesForCards[5]} src={Pointer} alt="Pointer"></img>
      </div>
    </div>
  ));
  return CardFill;
}

export default Cards;
