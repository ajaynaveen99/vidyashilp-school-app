import "./BoardDirectors.css";
import directorImg1 from "../assets/images/directorImg1.avif";
import directorImg2 from "../assets/images/directorImg2.avif";
import directorImg3 from "../assets/images/directorImg3.avif";
import directorImg4 from "../assets/images/directorImg4.avif";
import qualityImg1 from "../assets/images/qualityImg1.avif"; // for hero background

const directors = [
  {
    img: directorImg2,
    name: "Mr. Nagender V. Mali",
    role: "Chairman"
  },
  {
    img: directorImg3,
    name: "Mrs. Chandrakala Mali",
    role: "Vice President"
  },
  {
    img: directorImg4,
    name: "Mrs. Soumya Mali",
    role: "Administrator"
  }
];

const BoardDirectors = () => {
  return (
    <section className="board-page">

      {/* HERO */}
      <div
        className="board-hero"
        style={{ backgroundImage: `url(${qualityImg1})` }}
      >
        <div className="board-overlay">
          <h1>Board Of Directors</h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="board-intro director-text">
        <h2 style={{textAlign: "center"}}>Vidyashilp International School</h2>
        <p className="board-content">
         At Vidyashilp International School, we firmly believe that our school should inspire a love of learning while promoting children’s social and emotional growth, intellectual development along creativity. We believe that children learn best in a positive environment with careful direction and guidance from teachers who demonstrate care and concern for each child. We believe that a school should encourage exploration and inquiry in an environment enriched with opportunities in the arts and sciences, and we also believe that a school’s instructional programs should ensure that students reach their full potential for academic achievement.

​

The mission of the Vidyashilp International School is to ensure that no child is left behind. Education should foster in its learners a curiosity to discover who they are and what they are capable of, together with developing the resilience for them to test the boundaries of their abilities, and build the skills necessary to face the future with confidence.
        </p>
      </div>

      {/* DIRECTORS GRID */}
      <div className="directors-grid">
        {directors.map((director, index) => (
          <div className="director-card" key={index}>
            <div className="director-image">
              <img src={director.img} alt={director.name} />
            </div>
            <div className="director-info">
              <h3>{director.name}</h3>
              <p>{director.role}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default BoardDirectors;