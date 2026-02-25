import "./MandatoryDisclosure.css";
import disclosuImg from "../assets/images/disclosureImg.avif";

const MandatoryDisclosure = () => {

  const openPdf = (fileName) => {
    window.open(`/pdf/${fileName}`, "_blank");
  };

  return (
    <section className="disclosure-page">

      {/* HERO */}
      <div
        className="disclosure-hero"
        style={{ backgroundImage: `url(${disclosuImg})` }}
      >
        <div className="overlay">
          <h1>MANDATORY PUBLIC DISCLOSURE</h1>
        </div>
      </div>

      {/* SECTION A */}
      <div className="disclosure-section">
        <h2>A : GENERAL INFORMATION</h2>

        <table className="styled-table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>INFORMATION</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>NAME OF THE SCHOOL</td><td>VIDYASHILP INTERNATIONAL SCHOOL</td></tr>
            <tr><td>2</td><td>AFFILIATION NO.(IF APPLICABLE)</td><td>830741</td></tr>
            <tr><td>3</td><td>SCHOOL CODE (IF APPLICABLE)</td><td>45628</td></tr>
            <tr><td>4</td><td>COMPLETE ADDRESS WITH PIN CODE</td><td>SHRIKANTAPPA BADAVANE, HANAGAL ROAD, HAVERI 581110</td></tr>
            <tr><td>5</td><td>PRINCIPAL NAME</td><td>XAVIER ANTHONI L</td></tr>
            <tr><td>6</td><td>SCHOOL EMAIL ID</td><td>vidya@vidyashilphaveri.in</td></tr>
            <tr><td>7</td><td>CONTACT DETAILS</td><td>8277800380</td></tr>
          </tbody>
        </table>
      </div>

      {/* SECTION B */}
      <div className="disclosure-section">
        <h2>B : DOCUMENTS & INFORMATION</h2>

        <table className="styled-table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>DOCUMENTS / INFORMATION</th>
              <th>DOCUMENT</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>COPY OF EXTENSION OF AFFILIATION</td><td><button className="view-btn" onClick={()=>openPdf("extension.pdf")}>VIEW</button></td></tr>
            <tr><td>2</td><td>COPY OF SOCIETY REGISTRATION CERTIFICATE</td><td><button className="view-btn" onClick={()=>openPdf("society.pdf")}>VIEW</button></td></tr>
            <tr><td>3</td><td>COPY OF NAVACHETANA FOUNDATION MEMBERS</td><td><button className="view-btn" onClick={()=>openPdf("foundation.pdf")}>VIEW</button></td></tr>
            <tr><td>4</td><td>COPY OF BUILDING SAFETY CERTIFICATE</td><td><button className="view-btn" onClick={()=>openPdf("building.pdf")}>VIEW</button></td></tr>
            <tr><td>5</td><td>COPY OF FIRE SAFETY CERTIFICATE</td><td><button className="view-btn" onClick={()=>openPdf("fire.pdf")}>VIEW</button></td></tr>
            <tr><td>6</td><td>COPY OF SELF CERTIFICATION BY SCHOOL</td><td><button className="view-btn" onClick={()=>openPdf("selfcert.pdf")}>VIEW</button></td></tr>
            <tr><td>7</td><td>COPY OF SAFE DRINKING WATER CERTIFICATE</td><td><button className="view-btn" onClick={()=>openPdf("water.pdf")}>VIEW</button></td></tr>
            <tr><td>8</td><td>COPY OF RECOGNITION ORDER</td><td><button className="view-btn" onClick={()=>openPdf("recognition.pdf")}>VIEW</button></td></tr>
            <tr><td>9</td><td>COPY OF TEACHING NON - TEACHING STAFF LIST</td><td><button className="view-btn" onClick={()=>openPdf("staff.pdf")}>VIEW</button></td></tr>
            <tr><td>10</td><td>COPY OF NO OBJECTION CERTIFICATE</td><td><button className="view-btn" onClick={()=>openPdf("noc.pdf")}>VIEW</button></td></tr>
            <tr><td>11</td><td>COPY OF SCHOOL T.C.</td><td><button className="view-btn" onClick={()=>openPdf("tc.pdf")}>VIEW</button></td></tr>
          </tbody>
        </table>
      </div>

      {/* SECTION C */}
      <div className="disclosure-section">
        <h2>C : RESULT AND ACADEMICS</h2>

        <table className="styled-table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>DOCUMENTS / INFORMATION</th>
              <th>DOCUMENT</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>FEE STRUCTURE OF THE SCHOOL</td><td><button className="view-btn" onClick={()=>openPdf("fees.pdf")}>VIEW</button></td></tr>
            <tr><td>2</td><td>ANNUAL ACADEMIC CALENDAR</td><td><button className="view-btn" onClick={()=>openPdf("calendar.pdf")}>VIEW</button></td></tr>
            <tr><td>3</td><td>COPY OF HOLIDAY CALENDAR 2024 - 25</td><td><button className="view-btn" onClick={()=>openPdf("holiday.pdf")}>VIEW</button></td></tr>
            <tr><td>4</td><td>LIST OF SCHOOL MANAGEMENT COMMITTEE</td><td><button className="view-btn" onClick={()=>openPdf("management.pdf")}>VIEW</button></td></tr>
            <tr><td>5</td><td>LIST OF PARENTS TEACHERS ASSOCIATION MEMBERS</td><td><button className="view-btn" onClick={()=>openPdf("pta.pdf")}>VIEW</button></td></tr>
          </tbody>
        </table>
      </div>

      {/* SECTION D */}
      <div className="disclosure-section">
        <h2>D : STAFF (TEACHING)</h2>

        <table className="styled-table">
          <tbody>
            <tr><td>PRINCIPAL</td><td>1</td></tr>
            <tr><td>TOTAL NO. OF TEACHERS</td><td>18</td></tr>
            <tr><td>PGT</td><td>00</td></tr>
            <tr><td>TGT</td><td>6</td></tr>
            <tr><td>PRT</td><td>9</td></tr>
            <tr><td>NTT</td><td>3</td></tr>
            <tr><td>TEACHERS SECTION RATIO</td><td>1:15</td></tr>
            <tr><td>DETAILS OF SPECIAL EDUCATOR</td><td>1</td></tr>
            <tr><td>DETAILS OF COUNSELOR AND WELLNESS TEACHER</td><td>1</td></tr>
          </tbody>
        </table>
      </div>

      {/* SECTION E */}
      <div className="disclosure-section">
        <h2>E : RESULT Xth</h2>

        <table className="styled-table">
          <thead>
            <tr>
              <th>YEAR</th>
              <th>NO. OF REGISTERED STUDENTS</th>
              <th>NO. OF STUDENTS PASSED</th>
              <th>PASS PERCENTAGE</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2021-22</td><td>32</td><td>32</td><td>100%</td></tr>
            <tr><td>2022-23</td><td>19</td><td>17</td><td>89.47%</td></tr>
            <tr><td>2023-24</td><td>18</td><td>17</td><td>94.44%</td></tr>
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default MandatoryDisclosure;