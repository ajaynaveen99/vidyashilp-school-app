import "./PrincipalSpeak.css";
import principalImg1 from "../assets/images/PrincipaIImg1.avif";
import principalImg2 from "../assets/images/principalImg2.avif";
import logo from "../assets/images/logo.avif";


const PrincipalSpeak = () => {
  return (
    <section className="principal-page">

      {/* HERO */}
      <div
        className="principal-hero"
        style={{ backgroundImage: `url(${principalImg1})` }}
      >
        <div className="principal-overlay">
          <h1>Principal Speaks</h1>
        </div>
      </div>

      {/* PROFILE SECTION */}
      <div className="principal-container">

      {/* PROFILE CARD */}
<div className="principal-card">

  <div className="principal-left">

    <div className="school-brand">
      <img src={logo} alt="School Logo" className="school-logo" />
     
    </div>

    <div className="principal-details">
      <h2>Mr. Xavier Anthoni L</h2>
      <p className="designation">
        Principal<br />
        Vidyashilp International School, Haveri
      </p>
    </div>

  </div>

  <div className="principal-right">
    <img src={principalImg2} alt="Principal" />
  </div>

</div>

        {/* MESSAGE CARD */}
        <div className="message-card">

          <h2>Principal’s Message</h2>

          <p>
            At Vidyashilp International School we endeavour to provide each
            student with a curriculum which both challenges and inspires them
            to reach their full potentials. We also create an ambiance where a
            child can develop social competencies and foster a positive
            atmosphere which will further encourage intellectual and emotional
            growth.
          </p>

          <p>
            With a strong management team and a dedicated teaching staff –
            Vidyashilp International School moves forward with pride and
            confidence!
          </p>

          <blockquote>
            “Learning gives you creativity and creativity leads to thinking and
            thinking provides knowledge and knowledge makes you great.”
            <br /> – A.P.J. Abdul Kalam
          </blockquote>

        </div>

      </div>

    </section>
  );
};

export default PrincipalSpeak;