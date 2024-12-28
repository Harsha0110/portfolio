import React, { useEffect } from 'react'
import './Home.css'

const Home = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement('div')
      trail.className = 'trail'
      trail.style.left = `${e.pageX}px`
      trail.style.top = `${e.pageY}px`
      trail.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

      // Random size for trail
      const size = Math.random() * 20 + 10 // Range: 10px to 30px
      trail.style.width = `${size}px`
      trail.style.height = `${size}px`

      document.body.appendChild(trail)
      setTimeout(() => {
        trail.remove()
      }, 700) // Extended time for trail visibility
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title"> <span> Welcome to My Portfolio</span></h1>
        <p className="hero-subtitle">
          Transforming ideas into beautiful web experiences.
        </p>
      </section>

      {/* About Section */}
      <section className="about">
        <h2 className="about-title">About Me</h2>
        <div className="about-description">
          <p>
            Hi, I'm <span className="highlight">Harsh Anand</span>, a <span className="highlight">creative web developer</span> with a passion for design and technology. 
            With expertise in <span className="highlight">React</span>, <span className="highlight">JavaScript</span>, and <span className="highlight">CSS</span>, I specialize in building dynamic and responsive web applications.
          </p>
          <p>
            My mission is to craft engaging digital experiences that are not just functional but also visually captivating. 
            Whether it's a sleek user interface or robust backend logic, I take pride in delivering <span className="highlight">high-quality solutions</span> tailored to client needs.
          </p>
          <p>
            Outside of coding, I enjoy <span className="highlight">exploring new technologies</span>, 
            <span className="highlight">mentoring aspiring developers</span>, and contributing to <span className="highlight">open-source projects</span>.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <blockquote className="quote">
          "Design is not just what it looks like and feels like. Design is how it works." 
          <span>— Steve Jobs</span>
        </blockquote>
      </section>
    </div>
  )
}

export default Home
