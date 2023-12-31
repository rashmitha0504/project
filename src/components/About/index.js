import Header from "../Header";
import Footer from "../Footer";
import Talk from "../Talk";

const About = () => (
  <div>
    <Header />
    <div className="home-container">
      <div className="home-page">
        <div className="home-page-content">
          <h1 className="home-heading">About Us</h1>
          <p className="home-description">
            PitchLab is the ultimate platform for startups and businesses to
            create and deliver a powerful pitch that gets noticed. Our platform
            offers a suite of tools and resources to help you create a pitch
            that is compelling, persuasive, and memorable. With PitchLab, you
            can customize your pitch deck with stunning visuals, graphics, and
            videos, practice your presentation skills, and get feedback from
            experts in the industry. Our platform also provides you with
            insights and analytics to help you improve your pitch and increase
            your chances of success.
          </p>
        </div>
      </div>
    </div>
    <Talk />
    <Footer />
  </div>
);

export default About;
