function AboutPage() {
  return (
    <section className="plan" id="plan">
      <div className="container">
        <h2 className="section-title">What I want to learn?</h2>
        <div className="plan-grid">
          <article className="plan-card">
            <span className="plan-tag">01</span>
            <h3>HTML5</h3>
            <p>Structuring content the right way, with semantics that matter.</p>
          </article>
          <article className="plan-card">
            <span className="plan-tag">02</span>
            <h3>CSS3</h3>
            <p>Box model, Flexbox, and Grid.</p>
          </article>
          <article className="plan-card">
            <span className="plan-tag">03</span>
            <h3>JavaScript</h3>
            <p>Making pages respond, fetch data, and come alive.</p>
          </article>
          <article className="plan-card">
            <span className="plan-tag">04</span>
            <h3>Git &amp; GitHub</h3>
            <p>Tracking progress, one meaningful commit at a time.</p>
          </article>
          <article className="plan-card">
            <span className="plan-tag">05</span>
            <h3>React</h3>
            <p>Currently learning: components, state, and building real apps.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
