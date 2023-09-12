import {Component} from "react"

import "./index.css"

class Home extends Component{
      
   render(){
      return(
         <div className="kalyan-bio">
            <div className="kalyan-photo-and-name-container">
               <div className="image-container mb-3 shadow-lg bg-body-tertiary rounded d-none">
                  <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694514115/PROFILE_mbtsld.jpg" alt="profile" className="profile-photo"/>
                  <a className="btn btn-outline-dark resume-button" href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/KALYAN_2023-09-04-185346.pdf" download>Resume</a>
               </div>
               <div className="main-card mb-3">
                  <div className="card">
                     <div className="flip-card">
                        <div className="flip-front image-container mb-3 shadow-lg bg-body-tertiary rounded">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694514115/PROFILE_mbtsld.jpg" alt="profile" className="profile-photo"/>
                        </div>
                        <div className="flip-back">
                           <p>I have hands on experience with Technologies like HTML, CSS, JavaScript, Python, ReactJS, NodeJS, SQL</p>
                           <p>Please refer my resume for more details.</p>
                           <a className="btn btn-outline-dark resume-button" target="_blank" href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/KALYAN_2023-09-04-185346.pdf" download>Resume</a>
                        </div>
                     </div>
                  </div>
               </div>
               <h1 className="kalyan-name-heading">kalyan Gottimukkala</h1>
               <h1 className="kalyan-role-heading m-2">MERN Stack Developer</h1>
               <a href = "mailto: kalyanchakri1438@gmail.com" className="btn btn-light email-button mt-2">Email Me</a>
               <div className="social-media-icons-container">
                  <a href="https://www.instagram.com/kalyan_gottimukkala/" target="_blank">
                     <i className="bi bi-instagram social-icon"></i>
                  </a>
                  <a href="https://twitter.com/Kalyanchakri143" target="_blank">
                  <i className="bi bi-twitter social-icon"></i>
                  </a>
                  <a href="https://m.facebook.com/profile.php?id=100020317927071" target="_blank">
                  <i className="bi bi-facebook social-icon"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/kalyan-gottimukkala-b8260b246/" target="_blank">
                  <i className="bi bi-linkedin social-icon"></i>
                  </a>
               </div>
               <a className="last-one" href="#kalyan-bio-and-details-container">Click Here <i className="bi bi-arrow-down"></i></a>
            </div>
            <div className="kalyan-bio-and-details-container" id="kalyan-bio-and-details-container">
               <div className="alert alert-primary">
                  <h1 className="side-headings">About Me</h1>
                  <p className="p-3 pt-0 pb-0 mb-0">Hello! I'm  <b className="name">KALYAN GOTTIMUKKALA</b>, a passionate and enthusiastic MERN &#40;SQL, Express.js, React.js, Node.js&#41; stack developer, 
                     ready to embark on an exciting journey in the world of web development.
                     I bring a dynamic mix of skills and a hunger for continuous learning to create engaging and user-friendly web applications.
                  </p>
               </div>
               <div className="alert alert-primary">
                  <h1 className="side-headings mt-3">Skills Highlights:</h1>
                  <ul className="skills-container mt-0">
                     <li className="matter-para"><b>Front-end Development:</b> I have a strong foundation in HTML, CSS, and JavaScript,
                        enabling me to craft responsive and visually appealing user interfaces. 
                        My experience with React.js allows me to build interactive and efficient front-end components, 
                        ensuring a seamless user experience.
                     </li>
                     <li className="matter-para"><b>Back-end Development:</b> Proficient in Node.js and Express.js, 
                        I am well-versed in server-side development. I can create robust APIs, manage server logic, 
                        and implement authentication and authorization mechanisms to secure applications.
                     </li>
                     <li className="matter-para"><b>Database Management:</b> My knowledge of SQL equips me with the ability to design, 
                        optimize, and manage relational databases effectively. I'm also comfortable with NoSQL databases like MongoDB, 
                        making me adaptable to various project requirements.
                     </li>
                     <li className="matter-para"><b>Problem-Solving:</b> I have a knack for problem-solving and debugging, 
                        which allows me to identify and resolve issues 
                        efficiently, ensuring the smooth operation of web applications.
                     </li>
                     <li className="matter-para"><b>Full-Stack Proficiency:</b> With expertise in both front-end and back-end technologies, 
                        I'm capable of taking a project from concept to completion, 
                        ensuring a cohesive and functional end product.
                     </li>
                     <li className="matter-para"><b>Python:</b> I also have experience with Python, which provides me with additional versatility in scripting, automation, and data manipulation.
                     </li>
                  </ul>
               </div>
               <div className="alert alert-primary">
                  <h1 className="side-headings">My Approach:</h1>
                  <p className="p-3 pt-0">I am a firm believer in the power of teamwork and collaboration. 
                     I enjoy working with cross-functional teams to brainstorm ideas, tackle challenges, 
                     and collectively achieve project goals. My attention to detail, dedication to writing clean and maintainable code, 
                     and commitment to staying up-to-date with the latest industry trends make me a valuable asset to any development project.
                  </p>
               </div>
               <div className="alert alert-primary">
                  <h1 className="side-headings">What Drives Me:</h1>
                  <p className="p-3 pt-0">I am deeply passionate about creating digital solutions that not only meet but exceed user expectations. 
                     I find joy in turning complex problems into elegant and user-friendly applications that enhance the online experience.
                  </p>
               </div>
               <div className="alert alert-primary">
               <h1 className="side-headings">Looking Ahead:</h1>
               <p className="p-3 pt-0 pb-0 mb-0">As a fresher in the field of MERN stack development, I am excited about the opportunities to learn and grow. 
                  I am eager to contribute my skills, work collaboratively with teams, 
                  and take on new challenges that will help me evolve into a seasoned developer.
               </p>
               <p className="p-3 pt-0">Feel free to reach out to me to discuss exciting projects, collaborate on innovative ideas, or simply have a tech chat. Let's build amazing things together!</p>
               </div>
               <div className="footer">
               <div className="alert alert-primary thankyou" role="alert">
                  Thankyou for visiting <i className="bi bi-heart"></i>
               </div>
               </div>
            </div>
         </div>
      )  
   }
}

export default Home