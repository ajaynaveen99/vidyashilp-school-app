import "./Admissions.css";
import { useState } from "react";

const Admissions = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    applyingFor: "",
    startDate: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <section className="admissions-page">

      {/* HEADER */}
      <div className="admissions-hero">
        <h1>Registrations Open for the Academic Year 2026–27</h1>
      </div>

      {/* PROCESS SECTION */}
      <div className="admission-process">

        <h2>Admission Process</h2>

        <div className="process-card">
          <p>
            VIDYASHILP INTERNATIONAL SCHOOL, HAVERI

welcomes applications from all parents who support the school’s mission and values. The admissions are open to all students irrespective of caste, creed, gender and nationality.
          </p>

          <p>
           he first step – create your log-in and verify your e-mail-id.

Next fill up the application form and pay the registration fees online.

After the payment you will receive mail informing the date for interaction session/entrance test for the student.

Only completed application form will be considered for admissions.
          </p>
        </div>

        <div className="entrance-card">
          <h3>Entrance Test</h3>
          <p>
           Kindergarten- An interaction session with the academic team for communication, motor, perceptual and analytical skills.
            <br />
            Grade I to II – English, Math, and EVS.
            <br />
            Grades III to VIII – English, Math, Science and chosen II Language.
            <br />
          Parent will receive the admission confirmation mail only if the student has cleared the entrance test
          </p>
        </div>

      </div>
{/* APPLY + FORM SIDE BY SIDE */}
<div className="admission-apply-wrapper">

  {/* LEFT SIDE - HOW TO APPLY */}
  <div className="apply-card">

    <h2>How To Apply</h2>

    <div className="apply-step">
      <div className="step-number">1</div>
      <div className="step-text">Register / Verify E-mail</div>
    </div>

    <div className="apply-step">
      <div className="step-number">2</div>
      <div className="step-text">Complete Application</div>
    </div>

    <div className="apply-step">
      <div className="step-number">3</div>
      <div className="step-text">Assessment</div>
    </div>

    <div className="apply-step">
      <div className="step-number">4</div>
      <div className="step-text">Virtual / Personal Interview</div>
    </div>

    <div className="apply-step">
      <div className="step-number">5</div>
      <div className="step-text">Confirmation of Admission</div>
    </div>

  </div>

  {/* RIGHT SIDE - FORM */}
  <div className="form-card">

    <form className="admission-form" onSubmit={handleSubmit}>

      <h2>New Admission</h2>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        required
      />

      <div className="row">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />
      </div>

      <div className="row">
        <select name="applyingFor" onChange={handleChange} required>
          <option value="">Applying For</option>
          <option>KG</option>
          <option>Grade 1</option>
          <option>Grade 2</option>
          <option>Grade 3</option>
          <option>Grade 4</option>
          <option>Grade 5</option>
          <option>Grade 6</option>
          <option>Grade 7</option>
          <option>Grade 8</option>
          <option>Grade 9</option>
          <option>Grade 10</option>
        </select>

        <input
          type="date"
          name="startDate"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit Application</button>

    </form>

  </div>

</div>

    </section>
  );
};

export default Admissions;