import "./AboutMain.css";
import aboutImg from "../assets/images/aboutImg.avif";

const AboutMain = () => {
  return (
    <section className="about-main">

      <div className="about-main-container">

        <h1>About Us</h1>
        <h3>Finding Inspiration in Every Turn</h3>

        <p>
          Vidyashilp International school is a co-education school committed to
          creating a distinctive edge in students personalities and cognitive abilities.
          We now provide secure and well-supervised accommodation for local and
          international students. The residential buildings are meticulously planned
          to offer uncompromised schooling in an inspiring educational environment.
        </p>

      </div>

      <div className="about-main-image">
        <img src={aboutImg} alt="About School" />
      </div>

    </section>
  );
};

export default AboutMain;