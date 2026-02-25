import "./Academics.css";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import academicImg1 from "../assets/images/academicImg1.avif";
import academicImg2 from "../assets/images/academicImg2.avif";
import academicImg3 from "../assets/images/academicImg3.avif";

import academicLogo1 from "../assets/images/academicImg1.png";
import academicLogo2 from "../assets/images/academicLogo2.avif";
import academicLogo3 from "../assets/images/academicLogo3.avif";
import academicLogo4 from "../assets/images/academicLogo4.avif";
import academicLogo5 from "../assets/images/academicLogo5.avif";
import academicLogo6 from "../assets/images/academicImg6.png";

const images = [academicImg1, academicImg2, academicImg3];

const labs = [
  {
    img: academicLogo1,
    title: "ROBOTICS LAB",
    desc: "A fun, easy and effective way to learn computer programming and robotics."
  },
  {
    img: academicLogo2,
    title: "ENGLISH LAB",
    desc: "Boosts your child's command over the English language including listening, speaking and writing skills."
  },
  {
    img: academicLogo3,
    title: "MATHS LAB",
    desc: "An innovative platform that allows students to develop insights into various mathematical concepts."
  },
  {
    img: academicLogo4,
    title: "SCIENCE LAB",
    desc: "Hands-on experiments to cultivate curiosity, exploration and scientific reasoning."
  },
  {
    img: academicLogo5,
    title: "ATAL TINKERING LAB",
    desc: "Fosters creativity, innovation and computational thinking skills."
  },
  {
    img: academicLogo6,
    title: "COMPUTER LAB",
    desc: "A space where computer services are provided to a defined community."
  }
];

const Academics = () => {

  const [current, setCurrent] = useState(0);

  // Auto slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <section className="academics-page">

      {/* HERO SLIDER */}
      <div className="slider">
        <img src={images[current]} alt="Academic Slide" />
        <button className="left-arrow" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="right-arrow" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      {/* CONTENT SECTION */}
    <div className="academic-content">

  <h2 className="section-title">Our Academic Programs</h2>

  {/* INTRO CARD */}
  <div className="intro-card">
    <p>
      The Vidyashilp International School, an eminent Co-education CBSE School,
      was established in 2007. Located in the picturesque countryside of Haveri,
      we cater to learners from Grades KG to X.
    </p>
  </div>

  {/* CAMPUS CARD */}
  <div className="campus-card">
    <p>
      Our 3 acres lush green campus with state-of-the-art infrastructure and sports
      facilities has been conceptualized to offer students a beautiful landscape
      in which they live, learn, discover and thrive.   At Vidyashilp, we believe that educating children is a great responsibility
      and privilege in equal measure. We instill respect for diversity,
      leadership qualities, and the confidence to achieve academic and
      personal success.
    
    </p>

    
   
  </div>

  {/* FEATURE GRID */}
  <div className="academic-feature-grid">
    <div className="feature-card">Personalized Student Attention</div>
    <div className="feature-card">Focus on Indian Culture & Tradition</div>
    <div className="feature-card">Robotics Programme for All Classes</div>
    <div className="feature-card">Leadership Training Programmes</div>
    <div className="feature-card">Parent Engagement Programmes</div>
    <div className="feature-card">Career Counseling & Fairs</div>
  </div>

  {/* MISSION BLOCK */}
  <div className="mission-highlight">
    <p>
      Your child's aspirations are the unwritten chapters in life’s storybook.
      As mentors, we craft a tale of triumph and ambition across these pages.
      Our mission is to foster leadership traits in our students,
      equipping them to make a difference in the world.
      <strong> Let’s pen their success story together.</strong>
    </p>
  </div>

  {/* ADMISSION CTA */}
  <div className="admission-cta">
    <h3>Admission Open for 2025 – 2026</h3>
    <p>Apply now to secure a spot for your child’s educational journey with us.</p>

    <p className="details">
      For More Details:
      <br />
      Visit <a href="#">vidyashilphaveri.in</a> or call
      <strong> 827-780-0380</strong>
    </p>

    <button className="apply-btn">Apply Now</button>
  </div>

</div>

      {/* LAB CARDS */}
      <div className="lab-grid">
        {labs.map((lab, index) => (
          <div className="lab-card" key={index}>
            <img src={lab.img} alt={lab.title} />
            <h4>{lab.title}</h4>
            <p className="dsc">{lab.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Academics;