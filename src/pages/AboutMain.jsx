import "./AboutMain.css";
import aboutImg from "../assets/images/aboutImg.avif";

const AboutMain = () => {
  return (
    <section className="about-main">

      <div className="about-card">

        {/* LEFT CONTENT */}
        <div className="about-content">

          <span className="about-badge">About Us</span>

          <h1>
            Finding <span>Inspiration</span> in Every Turn
          </h1>

          <p>
            Vidyashilp International School is a co-education institution committed
            to creating a distinctive edge in students' personalities and cognitive
            abilities.
          </p>

          <p>
            We provide secure and well-supervised accommodation for local and
            international students. Our residential buildings are meticulously
            planned to offer uncompromised schooling in an inspiring educational
            environment that nurtures growth and excellence.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img src={aboutImg} alt="About School" />
        </div>

      </div>

    </section>
  );
};

export default AboutMain;