import Header from "../Header";
import "./index.css";
import Talk from "../Talk";
import Footer from "../Footer";

const Works = () => (
  <div>
    <Header />
    <div className="home-container">
      <div className="home-page">
        <div className="home-page-content">
          <h1 className="home-heading">
            Startups that we have <span className="span">Nourished</span>
          </h1>
          <p className="home-description">
            We are a team of experts who are passionate towards our work. Our
            Pitch Decks and Startup Advisory have helped startups raise funds
            and take their business to the next level!
          </p>
          <h1>COMMING SOON</h1>
        </div>
      </div>
    </div>
    <Talk />
    <Footer />
  </div>
);

export default Works;
