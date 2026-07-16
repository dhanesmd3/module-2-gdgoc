import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <input type="checkbox" id="theme-toggle" className="theme-toggle-input" />

      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">&lt;portofolio/&gt;</Link>
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
          </nav>
          <label htmlFor="theme-toggle" className="theme-toggle-label" aria-label="Toggle dark mode">
            DARK MODE
          </label>
        </div>
      </header>
    </>
  )
}

export default Navbar
