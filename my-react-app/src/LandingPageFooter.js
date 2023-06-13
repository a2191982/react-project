import "./Styles.css";
import Cards from "./Cards";

function LandingPageFooter() {
  return (
    <>
      <div className="landing-page-footer">
        <h2 className="landing-page-footer-heading">
          Not sure where to start?
        </h2>
        <div className="landing-page-footer-description">
          Programs offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </div>
        <div className="landing-page-footer-card-container">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default LandingPageFooter;
