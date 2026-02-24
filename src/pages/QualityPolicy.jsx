import "./QualityPolicy.css";
import qualityImg1 from "../assets/images/qualityImg1.avif";
import qualityImg2 from "../assets/images/qualityImg2.avif";

const QualityPolicy = () => {
  return (
    <section className="quality-page">

      {/* HERO */}
      <div
        className="quality-hero"
        style={{ backgroundImage: `url(${qualityImg1})` }}
      >
        <div className="overlay">
          <h1>Quality Policy</h1>
        </div>
      </div>

      {/* IMAGE */}
      <div className="quality-container">

        <div className="quality-image">
          <img src={qualityImg2} alt="School Building" />
        </div>

        {/* INTRO */}
        <div className="quality-intro quality-text">
          <p>
            <strong>Vidyashilp International School</strong> provides an education 
            that emphasizes academic excellence within a caring community.
            The school encourages diversity, ethical awareness and global
            understanding while fostering joy in learning.
          </p>
        </div>

        {/* CARDS SECTION */}
        <div className="quality-cards">

          {/* CARD 1 */}
          <div className="quality-card">
            <h3>Core Values</h3>
            <ul>
              <li>Practicing tolerance and living together in peace</li>
              <li>Leadership with ethical and moral awareness</li>
              <li>Historic and contemporary intellectual growth</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="quality-card">
            <h3>Global & Cultural Development</h3>
            <ul>
              <li>International perception through diversity</li>
              <li>Exchange programs for cultural exposure</li>
              <li>Respect for mother tongue and multilingual excellence</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="quality-card">
            <h3>Continuous Quality Improvement</h3>
            <ul>
              <li>Modern teaching tools & strategies</li>
              <li>Infrastructure enhancement</li>
              <li>Professional staff development</li>
              <li>Library resources</li>
              <li>Curriculum development</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
};

export default QualityPolicy;