import "./Styles.css";
import TopNavBar from "./TopNavBar";

function LandingPageHeader() {
  return (
    <>
      <div className="landing-top-navigation">
        <span className="landing-top-navigation-left">WORKOUT</span>
        <div className="landing-top-navigation-right">
          <TopNavBar />
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
