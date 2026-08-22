import { useEffect, useState } from 'react'

const careerStart = new Date(2021, 7, 2)

const getExperience = () => {
  const today = new Date()
  let years = today.getFullYear() - careerStart.getFullYear()
  let months = today.getMonth() - careerStart.getMonth()
  let days = today.getDate() - careerStart.getDate()

  if (days < 0) {
    months -= 1
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0)
    days += previousMonth.getDate()
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  return { years, months, days }
}

const Experience = () => {
  const [experience, setExperience] = useState(getExperience)

  useEffect(() => {
    const timer = window.setInterval(() => setExperience(getExperience()), 86400000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="experience" className="experience-section">
      <div className="section-heading">
        <span className="eyebrow">The journey so far</span>
        <h2>Work experience</h2>
      </div>
      <div className="experience-layout">
        <div className="experience-intro">
          <span className="experience-index">01 / 02</span>
          <h3>Building digital experiences that make complexity feel simple.</h3>
          <p>{experience.years} years of turning thoughtful design and reliable engineering into products people enjoy using.</p>
          <div className="experience-counter" aria-label="Total professional experience">
            <strong>{experience.years}<small>y</small> {experience.months}<small>m</small> {experience.days}<small>d</small></strong>
            <span>Professional experience</span>
          </div>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-meta"><span>Aug 2021 — Present</span><span>DEPT</span></div>
              <h3>Frontend Developer</h3>
              <p>Developing responsive digital experiences for enterprise clients using Adobe Experience Manager, Edge Delivery Services, and modern frontend practices.</p>
              <div className="tag-list"><span>AEM</span><span>ReactJS</span><span>EDS</span><span>OSGi</span><span>REST APIs</span></div>
              <div className="work-projects">
                <span className="work-projects-label">Selected work</span>
                <div className="work-project">
                  <strong>Bajaj Allianz General Insurance Company</strong>
                  <p>Built responsive insurance interfaces with reusable UI patterns and client-side API integration.</p>
                </div>
                <div className="work-project">
                  <strong>IDFC FIRST BANK — Personal Loan</strong>
                  <p>Developed user interfaces and supported workflow design for a smoother personal-loan journey.</p>
                </div>
                <div className="work-project">
                  <strong>Motilal Oswal AMC</strong>
                  <p>Developed high-performance sites on AEM EDS (Edge Delivery Services) to follow best practices for search and SEO results.</p>
                </div>
              </div>
            </div>
          </article>
          <article className="timeline-item timeline-item-muted">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-meta"><span>Jun 2020 — Jul 2020</span><span>CODEWIND</span></div>
              <h3>Java Intern</h3>
              <p>Built a foundation in Java programming and relational database development while working with MySQL.</p>
              <div className="tag-list"><span>Java</span><span>MySQL</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience