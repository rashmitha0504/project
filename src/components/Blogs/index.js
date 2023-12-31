import Header from "../Header";
import "./index.css";
import Talk from "../Talk";
import Footer from "../Footer";

const Blogs = () => (
  <div>
    <Header />
    <div className="home-container">
      <div className="home-page">
        <div className="home-page-content">
          <h1 className="home-heading">Blogs</h1>
          <p className="home-description">Know more about us!!</p>
          <h1>COMMING SOON</h1>
        </div>
      </div>
    </div>
    <Talk />
    <Footer />
  </div>
);

export default Blogs;
