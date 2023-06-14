import "./Styles.css";

// const links = [
//   { name: "WORKOUTS", id: 1 },
//   { name: "PROGRAMS", id: 2 },
//   { name: "HEALTHY LIVING", id: 3 },
//   { name: "COMMUNITY", id: 4 },
//   { name: "ABOUT", id: 5 },
//   { name: "STORE", id: 1 },
// ];

const links = [
  "WORKOUTS",
  "PROGRAMS",
  "HEALTHY LIVING",
  "COMMUNITY",
  "ABOUT",
  "STORE",
];

function TopNavBar() {
  let linkList = [];
  return (linkList = links.map((link) => (
    <span className="landing-top-navigation-right-link">{link}</span>
  )));
}

export default TopNavBar;
