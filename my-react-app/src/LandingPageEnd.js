import "./Styles.css";
import Divider from "./Images/divider.png";
import ListPopulator from "./ListPopulator";
import Pointer from "./Images/pointer.png";

const JoinForFreeList = [
  { id: 1, description: "~600 Full-Length Workout Videos" },
  { id: 2, description: "Customizable Calendar" },
  { id: 3, description: "Healthy Recipes" },
  { id: 4, description: "Health and Fitness Articles" },
  { id: 5, description: "Positive and Supportive Online Community" },
  { id: 6, description: "No Credit Card Needed" },
];

const WOPlusList = [
  { id: 1, description: "Ads-Free Website and Videos" },
  { id: 2, description: "Surprise Me Workout Selection Tool" },
  { id: 3, description: "Statistics for Your Activities" },
  { id: 4, description: "Enter and Track Custom Workouts" },
  { id: 5, description: "FB Plus Exclusive Workouts" },
  { id: 6, description: "Trackers to See Your Progress" },
  { id: 7, description: "FB Plus Content and Challenges" },
  { id: 8, description: "Video Tags" },
  { id: 9, description: "FB Plus Routines" },
  { id: 10, description: "Rest Day Complete" },
];

function Membership() {
  return (
    <>
      <div className="landing-page-end-container">
        <span className="landing-page-end-header">Membership</span>
        <img
          className="landing-page-end-divider"
          src={Divider}
          alt="Divider"
        ></img>
        <div className="landing-page-end-cards-container">
          <div className="landing-page-end-card">
            <span className="landing-page-end-card-heading">Join for Free</span>
            <p className="landing-page-end-card-description">
              Reach your fitness goals or maintain your healthy lifestyle with
              professional training and support from a positive and active
              online community.
            </p>
            <span className="landing-page-end-list-container">
              <ListPopulator listitems={JoinForFreeList} />
            </span>
            <span className="landing-page-end-link">
              See more{" "}
              <img
                src={Pointer}
                className="landing-page-end-pointer"
                alt="Pointer"
              ></img>
            </span>
          </div>
          <div className="landing-page-end-card">
            <span className="landing-page-end-card-heading">WO Plus</span>
            <span className="landing-page-end-card-description">
              WO Plus includes everything you get with a free membership and
              adds brand new convenience features, fitness tools, and unique
              content.
            </span>
            <span className="landing-page-end-list-container">
              <ListPopulator listitems={WOPlusList} />
            </span>
            <span className="landing-page-end-link">
              <button className="landing-page-end-join-now-button">
                Join Club Now!
              </button>
            </span>
          </div>
        </div>
        <button className="landing-page-end-back-to-top-button">
          <span>
            <a href="#landing-top-nav" className="back-to-top-link">
              Back to Top{" "}
            </a>
          </span>
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
}

export default Membership;
