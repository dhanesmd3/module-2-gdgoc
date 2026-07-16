import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section className="hero" id="about">
      <div className="container">
        <p className="eyebrow">STUDENT ENGINEER - BUILDING MY FIRST WEBSITE</p>
        <h1 className="hero-name">
          Dhanesworo Muhammad Datiputro<span className="cursor">_</span>
        </h1>
        <p className="hero-role">Informatics Student, ITB · Class of 2025</p>
        <p className="hero-bio">
          19-year-old Informatics student learning how the web actually works,
          from the DOM to deployment. This portfolio is now a React +
          TypeScript app, my second checkpoint in that journey.
        </p>
        <p className="hero-links">
          <Link to="/projects">See my projects</Link>
          {' · '}
          <Link to="/about">More about me</Link>
        </p>
      </div>
    </section>
  )
}

export default HomePage
