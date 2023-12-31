import Header from "../Header";
import "./index.css";

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <div className="home-page">
        <div className="home-page-content">
          <h1 className="home-heading">
            Create a Powerful Pitch That Gets Noticed
          </h1>
          <p className="home-description">
            A comprehensive platform for startups and businesses to create,
            deliver and improve powerful pitches with customized visuals,
            practice tools and expert feedback. With PitchLab, increase your
            chances of success with actionable insights and analytics.
          </p>
          <button className="find-jobs-button" type="button">
            Get Started
          </button>
          <button className="another-button" type="button">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
