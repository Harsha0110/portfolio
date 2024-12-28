import React ,{ useEffect}  from 'react'
import './Projects.css'









const Projects = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement('div')
      trail.className = 'trail'
      trail.style.left = `${e.pageX}px`
      trail.style.top = `${e.pageY}px`
      trail.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

      // Random size for trail
      const size = Math.random() * 15 + 10 // Range: 10px to 25px
      trail.style.width = `${size}px`
      trail.style.height = `${size}px`

      document.body.appendChild(trail)
      setTimeout(() => {
        trail.remove()
      }, 700) // Visibility duration
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])














  return (
    <div className="projects-container">
      <div className="project">
        <h1>Project 1</h1>
        <p>Project Name: Login-signup page</p>
        <p>Duration: Oct-24 - Nov-24</p>
        <p>Description: This project provides a basic user authentication interface. Features include:</p>
        <ul>
          <li>Login: Allows existing users to log in with their credentials.</li>
          <li>Signup: Allows new users to create an account by providing their details.</li>
        </ul>
        <p>Technologies Used:</p>
        <ul>
          <li>Frontend: HTML5, CSS3, JavaScript</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB</li>
        </ul>
        <a href="https://github.com/Harsha0110/login_signup" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

      <div className="project">
        <h1>Project 2</h1>
        <p>Project Name: Todo List</p>
        <p>Duration: Nov-24 - Dec-24</p>
        <p>Description: This project provides a basic todo list interface. Features include:</p>
        <ul>
          <li>User can add new todos</li>
          <li>User can view all todos</li>
          <li>User can update existing todos</li>
          <li>User can delete todos</li>
          <li>Data stored in MongoDB</li>
        </ul>
        <p>Technologies Used:</p>
        <ul>
          <li>Frontend: HTML5, CSS3, JavaScript</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB</li>
        </ul>
        <a href="https://github.com/Harsha0110/todo_LIST" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

      <div className="project">
        <h1>Project 3</h1>
        <p>Project Name: Crypto website</p>
        <p>Duration: Dec-23 - Mar-24</p>
        <p>Description: Welcome to CryptoWeb, a cutting-edge cryptocurrency website built using React.js. This project aims to provide up-to-date crypto data, market trends, and insightful analytics. Features include:</p>
        <ul>
          <li>Live Cryptocurrency Prices: Get the latest prices of various cryptocurrencies in real-time.</li>
          <li>Market Trends: Visualize market trends with interactive charts.</li>
        </ul>
        <p>Technologies Used:</p>
        <ul>
          <li>Frontend: HTML5, CSS3, JavaScript</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB</li>
        </ul>
        <a href="https://github.com/Harsha0110/Cryptowebstite-using-Reactjs" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

      <div className="project">
        <h1>Project 4</h1>
        <p>Project Name: Chat bot</p>
        <p>Duration: Mar-24 - Apr-24</p>
        <p>Description: This project provides a basic chatbot interface. Features include:</p>
        <ul>
          <li>User can chat with the bot</li>
          <li>Bot can respond to user queries</li>
          <li>Bot can provide information on various topics</li>
          <li>Bot can provide recommendations</li>
          <li>Bot can provide assistance with common tasks</li>
        </ul>
        <p>Technologies Used:</p>
        <ul>
          <li>Backend: Django, Channels</li>
          <li>AI: Google Generative AI</li>
          <li>Speech Recognition: SpeechRecognition, PyAudio</li>
        </ul>
        <a href="https://github.com/Harsha0110/AI_Chat_using_gemani" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  )
}

export default Projects