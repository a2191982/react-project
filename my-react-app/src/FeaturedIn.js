import "./Styles.css";
import FeaturedInCompanies from "./Images/featured-in.png";

function AsFeaturedIn() {
  return (
    <>
      <div className="landing-bottom-container">
        <span className="landing-bottom-description">AS FEATURED IN</span>
        <img
          className="landing-bottom-company-list"
          src={FeaturedInCompanies}
          alt="List of companies featuring us"
        />
      </div>
    </>
  );
}
export default AsFeaturedIn;
