import "../pages/Home.css";
import hero from "../assets/images/hero.avif";
import admission from "../assets/images/admission.avif";
import img1 from "../assets/images/img1.avif"
import img2 from "../assets/images/img2.avif"
import missionImg from "../assets/images/mission.avif"
import vissionImg from "../assets/images/vission.avif"
import news1 from "../assets/images/news1.avif"
import news2 from "../assets/images/news2.avif"
import news3 from "../assets/images/news3.avif"
import { Link } from "react-router-dom";





const Home = () => {
  return (
    <>
     

      {/* HERO SECTION */}
      <section className="hero">
        <img src={hero} alt="hero" />
      </section>

     {/* WELCOME SECTION */}
<section className="welcome">

  <h2 className="welcome-title">
    Welcome to <br />
    <span>Vidyashilp International School</span>
  </h2>

  <p className="welcome-quote">
    Education is a passport to the future, for tomorrow belongs to those who prepare for it today.
  </p>

  <p className="welcome-text">
    <strong>Vidyashilp International School (CBSE),</strong> Haveri - is working under Navachetana Foundation with the sole aim of providing meaningful education leading to the transformation of children to a meaningful role in the society of tomorrow embracing the most up to date technology of today.
 
    It was founded in the year 2007 with the name <strong>KARNATAKA PUBLIC SCHOOL</strong> and in the year 2024 rechristened as <strong>VIDYASHILP INTERNATIONAL SCHOOL.</strong> It is located in the picturesque countryside of Shrikantappa Extention, Hanagal Road, <strong>Haveri</strong> catering to learners from Grades PRE-KG to X.

    Our 3 acres lush green campus with state-of-the-art infrastructure and sports facilities has been conceptualized to offer students a beautiful landscape in which they live, learn, discover and thrive.
   
    At Vidyashilp, we believe that educating children is a great responsibility and privilege in equal measure. We begin with seeding the desire for lifelong learning in every student. We strive to instill in our students a sense of respect for diversity, an appreciation of what it takes to be a genuine global citizen, the skills to both follow and lead and ultimately the confidence to achieve academic and personal success.
   <Link to="/about-school" className="read-more">
  Read more.....
</Link>
  </p>

  {/* IMAGE SECTION */}
  <div className="welcome-images">

    {/* LEFT BIG IMAGE (Admission Banner) */}
    <div className="left-image">
      <img src={admission} alt="Admission Open" />
    </div>

    {/* RIGHT STACK IMAGES */}
    <div className="right-images">
      <img src={img1} alt="Students Activity" />
      <img src={img2} alt="Playground" />
    </div>

  </div>

</section>

  {/* MISSION & VISION */}
<section className="mission">
  <div className="mission-container">

    <h2 className="mission-heading">OUR MISSION & VISION</h2>

    <div className="mission-grid">

      {/* MISSION CARD */}
      <div className="mission-card">
        <h3>MISSION</h3>

        <img src={missionImg} alt="Mission" />

        <p>
          To inspire young minds to meet their full potential as learners. 
          Our intent is to create a supportive educational environment that 
          produces self-motivated students and reliable future citizens.
        </p>

        <div className="card-footer">
          Where Young Minds Reach Their Potential.
        </div>
      </div>

      {/* VISION CARD */}
      <div className="mission-card">
        <h3>VISION</h3>

        <img src={vissionImg} alt="Vision" />

        <p>
          To develop global leaders for tomorrow. We aspire to have our 
          students develop into lifelong learners with a sense of purpose, 
          good moral judgment and commitment to making the world a better place.
        </p>

        <div className="card-footer">
          Learning for Life. Leading the World.
        </div>
      </div>

    </div>

  </div>
</section>

    {/* NEWS */}
<section className="news">
  <div className="news-container">

    <h2 className="news-heading">LATEST NEWS AND EVENTS</h2>

    <div className="news-grid">

      <div className="news-card">
        <h3>100% RESULT</h3>

        <div className="news-image">
          <img src={news1} alt="News 1" />
        </div>

        <div className="news-footer">
          C.B.S.E.10th RESULT
        </div>
      </div>

      <div className="news-card">
        <h3>100% RESULT</h3>

        <div className="news-image">
          <img src={news2} alt="News 2" />
        </div>

        <div className="news-footer">
          C.B.S.E.10th RESULT
        </div>
      </div>

      <div className="news-card">
        <h3>100% RESULT</h3>

        <div className="news-image">
          <img src={news3} alt="News 3" />
        </div>

        <div className="news-footer">
          C.B.S.E.10th RESULT
        </div>
      </div>

    </div>
  </div>
</section>

  {/* TAKE A TOUR */}
<section className="video-section">
  <div className="video-container">

    <h2 className="video-heading">Take a Tour</h2>

    <div className="video-grid">

      <div className="video-card">
        <iframe
          src="https://www.youtube.com/embed/1wssJJfdDq4"
          title="tour1"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-card">
        <iframe
          src="https://www.youtube.com/embed/QSWhsUBeb8I"
          title="tour2"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-card">
        <iframe
          src="https://www.youtube.com/embed/jfByZH7Vabw"
          title="tour3"
          allowFullScreen
        ></iframe>
      </div>

    </div>

  </div>
</section>
{/* WHAT OUR PARENTS SAY */}
<section className="video-section">
  <div className="video-container">

    <h2 className="video-heading">What Our Parent's Say</h2>

    <div className="video-grid">

      <div className="video-card">
        <iframe
          src="https://www.youtube.com/embed/hEiArqwau2U"
          title="parent1"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-card">
        <iframe
          src="https://www.youtube.com/embed/N13szcG46Ww"
          title="parent2"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-card">
        <iframe
          src="https://www.youtube.com/embed/bkkJulo0Buw"
          title="parent3"
          allowFullScreen
        ></iframe>
      </div>

    </div>

  </div>
</section>


    </>
  );
};

export default Home;