import './App.css'

function App() {
  return (
    <>
      <div className="Header"></div>
      <div className="Main-Container">
        <div className="Left"></div>
        <div className="Middle">
          <h1>Resume</h1>
          <h2>Emily</h2>
          <hr />
          <br />
          <p>Interests</p>
          <ul>
            <li>Drawing</li>
            <li>Photography</li>
            <li>Design</li>
            <li>Programming</li>
            <li>Computer Science</li>
          </ul>
          <p>Skills</p>
          <ul>
            <li>Web Design with HTML & CSS</li>
          </ul>
          <p>Education</p>
          <ul>
            <li>Wilton High School</li>
            <li>Silvermine School of Arts</li>
            <li>Codeacademy</li>
          </ul>
          <p>Experience</p>
          <ul>
            <li>Student Technology Intern for Wilton School District</li>
            <li>Babysitter</li>
          </ul>
          <p>Extracurriculars</p>
          <ul>
            <li>Recycling Club</li>
            <li>Gardening Club</li>
            <li>Book Club</li>
          </ul>
        </div>
        <div className="Right"></div>
      </div>
      <div className="Footer"></div>
    </>
  );
}

export default App
