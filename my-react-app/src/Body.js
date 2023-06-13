import "./Styles.css";
import WorkoutImage from "./Images/workout-dude.png";
import VidTutorial from "./Images/vid-tutorial.png";
import WorkoutVids from "./Images/workout-vids.png";
import KMrun from "./Images/km-run.png";

function LandingPageBody() {
  return (
    <>
      <div className="landing-body-container">
        <div className="landing-body-left-content">
          <span className="landing-body-left-content-header">
            WORKOUT WITH ME
          </span>
          <p className="landing-body-left-content-paragraph">
            A huge selection of health and fitness content, healthy recipes and
            transformation stories to help you get fit and stay fit!
          </p>
          <button className="landing-body-left-content-cta">
            Join Club Now!
          </button>
        </div>

        <div className="landing-body-right-content">
          <img
            className="landing-body-right-content-image"
            src={WorkoutImage}
            alt="Workout"
          />
          <img
            className="landing-body-right-content-left-bottom-card"
            src={VidTutorial}
            alt="Video Tutorials"
          />
          <img
            className="landing-body-right-content-right-top-card"
            src={KMrun}
            alt="4.95 KM run"
          />
          <img
            className="landing-body-right-content-right-bottom-card"
            src={WorkoutVids}
            alt="500+ Workout Videos"
          />
        </div>
      </div>
    </>
  );
}

export default LandingPageBody;
