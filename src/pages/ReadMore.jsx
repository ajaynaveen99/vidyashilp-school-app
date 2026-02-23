import "../pages/ReadMore.css";
import { useNavigate } from "react-router-dom";

import readImg1 from "../assets/images/ReadImg1.avif";
import readImg2 from "../assets/images/ReadImg2.avif";
import readImg3 from "../assets/images/ReadImg3.avif";

const ReadMore = () => {

  const navigate = useNavigate();

  const handleAdmission = () => {
    navigate("/#admissions");
  };

  return (
    <section className="read-page">
        
        <div className="read-img1">
          <img src={readImg1} alt="Students Class" />
        </div>

      <div className="read-container">

        <h1>WELCOME TO</h1>
        <h2>VIDYASHILP INTERNATIONAL SCHOOL</h2>

        <p className="read-quote">
          Education is a passport to the future, for tomorrow belongs to those who prepare for it today.
        </p>

        <p className="read-text">
          Vidyashilp International School (CBSE), Haveri - is working under Navachetana Foundation with the sole aim of providing meaningful education leading to the transformation of children to a meaningful role in the society of tomorrow embracing the most up to date technology of today.
         
          It was founded in the year 2007 with the name KARNATAKA PUBLIC SCHOOL and in the year 2024 rechristened as VIDYASHILP INTERNATIONAL SCHOOL. It is located in the picturesque countryside of Shrikantappa Extention, Hanagal Road, Haveri catering to learners from Grades PRE-KG to X.
         
          Our 3 acres lush green campus with state-of-the-art infrastructure and sports facilities has been conceptualized to offer students a beautiful landscape in which they live, learn, discover and thrive.
        
          At Vidyashilp, we believe that educating children is a great responsibility and privilege in equal measure. We begin with seeding the desire for lifelong learning in every student. We strive to instill in our students a sense of respect for diversity, an appreciation of what it takes to be a genuine global citizen, the skills to both follow and lead and ultimately the confidence to achieve academic and personal success.
        </p>

        <button className="start-btn" onClick={handleAdmission}>
          Start Now
        </button>

      </div>

      {/* Image + Mission Layout */}
      <div className="read-layout">

        <div className="read-image">
          <img src={readImg2} alt="Students Library" />
        </div>

        <div className="read-text-box">
          <h3>Mission</h3>
          <p>
            To inspire young minds to meet their full potential as learners.
            Our intent is to create a supportive educational environment
            that produces self-motivated students and reliable future citizens.
          </p>
        </div>

        <div className="read-text-box">
          <h3>Vision</h3>
          <p>
            To develop global leaders for tomorrow. We aspire to have our
            students develop into lifelong learners with a sense of purpose,
            good moral judgment and commitment to making the world a better place.
          </p>
        </div>

        <div className="read-image">
          <img src={readImg3} alt="Students Class" />
        </div>

      </div>

    </section>
  );
};

export default ReadMore;