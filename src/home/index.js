import React, {Component} from "react"

import Slider from "react-slick";
import {Chrono} from "react-chrono"


import "./index.css"

class Home extends Component{

   
    
   render(){ 
      const settings = {
         dots: false,
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
       };
      return(
         <div className="kalyan-bio">
            <div className="kalyan-photo-and-name-container">
               <div className="image-container mb-3 shadow-lg bg-body-tertiary rounded">
                  <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1698065350/qjvapsnmhrmdwnx7wgtp.jpg" alt="profile" className="profile-photo"/>
               </div>
               <div className="main-card mb-3 d-none">
                  <div className="card">
                     <div className="flip-card">
                        <div className="flip-front image-container mb-3 shadow-lg bg-body-tertiary rounded">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1698065350/qjvapsnmhrmdwnx7wgtp.jpg" alt="profile" className="profile-photo"/>
                        </div>
                        <div className="flip-back">
                           <p>I have hands on experience with Technologies like HTML, CSS, JavaScript, Python, ReactJS, NodeJS, SQL</p>
                           <p>Please refer my resume for more details.</p>
                           <a className="btn btn-outline-dark resume-button" target="_blank" rel="noreferrer" href="https://ibb.co/xzPZg95" download>Resume</a>
                        </div>
                     </div>
                  </div>
               </div>
               <h1 className="kalyan-name-heading">Kalyan Gottimukkala</h1>
               <h1 className="kalyan-role-heading m-2">Full Stack Developer</h1>
               <a href = "mailto: kalyanchakri1438@gmail.com" className="btn btn-light email-button mt-2">Email Me</a>
               <div className="social-media-icons-container">
                  <a href="https://github.com/GottimukkalaKalyan" target="_blank" rel="noreferrer">
                  <i class="bi bi-github social-icon"></i>
                  </a>
                  <a href="https://www.instagram.com/kalyan_gottimukkala/" target="_blank" rel="noreferrer">
                     <i className="bi bi-instagram social-icon"></i>
                  </a>
                  <a href="https://twitter.com/Kalyanchakri143" target="_blank" rel="noreferrer">
                  <i className="bi bi-twitter social-icon"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/kalyan-gottimukkala-b8260b246/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin social-icon"></i>
                  </a>
               </div>
               <a className="last-one" href="#kalyan-bio-and-details-container">Click Here <i className="bi bi-arrow-down"></i></a>
            </div>
            <div className="kalyan-bio-and-details-container" id="kalyan-bio-and-details-container">
               <div className="alert alert-primary">
                  <h1 className="side-headings">About Me</h1>
                  <p className="p-3 pt-0 pb-0 mb-0">Hello! I'm  <b className="name">KALYAN GOTTIMUKKALA</b>, a passionate and enthusiastic FULL &#40;SQL, Express.js, React.js, Node.js&#41; stack developer, 
                     ready to embark on an exciting journey in the world of web development.
                     I bring a dynamic mix of skills and a hunger for continuous learning to create engaging and user-friendly web applications.
                  </p>
               </div>
               <div className="alert alert-primary">
                  <h1 className="side-headings">Education</h1>
                  <ul className="skills-container mt-0">
                     {/* <li className="matter-para d-none">
                        <b>Nxtwave Disruptive Technologies:</b> Industry Ready Certification in Full-stack Development 
                         
                        <p className="year-of-study">Sep 22 - Aug 2023</p>
                     </li> */}
                     <li className="matter-para">
                        <b>Nxtwave Disruptive Technologies:</b> Industry Ready Certification in Full-stack Development 
                         
                        <p className="year-of-study">Sep 22 - Ongoing..</p>
                     </li>
                     <li className="matter-para">
                        <b>MKR Government Degree College, DEVARAKONDA: </b>  B.Com (Bachelor of Commerce) Computer Applications (7.19 CGPA)
                        <p className="year-of-study">2019 - 2022</p>
                     </li>
                     <li className="matter-para">
                        <b>Government Junior College, Haliya: </b>  Intermediate MPC (63.0%)
                        <p className="year-of-study">2017 - 2019</p>
                     </li>
                     <li className="matter-para">
                        <b>ZPHS Haliya, Nalgonda: </b>   Secondary School Of Certificate (8.3 CGPA)
                        <p className="year-of-study">2016 - 2017</p>
                     </li>
                  </ul>
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
               <ul className="alert alert-success thankyou" role="alert">
                  <h1 className="side-headings">My Projects:</h1>
                  <hr />
                  <li className="project-list-item">
                     <b><a href="https://gkflipcart.ccbp.tech" target="_blank" rel="noreferrer">Nxt Trendz</a><br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#40; ECommerce Clone - Amazon, Flipkart &#41;</b>
                     <p className="mb-1">Created a modern e-commerce experience with a design inspired by Amazon and Flipkart.</p>
                     <ul className="mt-0">
                        <li className="matter-para">
                           Implemented pages for Login, Products, and Product details with React Router, React components, and form inputs.
                        </li>
                        <li className="matter-para">
                           Secured user data with JWT tokens, REST API calls, and local storage.
                        </li>
                        <p className="p-0"><b>Technologies used: </b> React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authenticatio</p>
                     </ul>
                     <p className="alert alert-danger">Username:-rahul, Password:- rahul@2021</p>
                  </li>
                  <hr />

                  <li className="project-list-item">
                     <b><a href="https://kalyanresturant.ccbp.tech/" target="_blank" rel="noreferrer">Food Munch</a></b>
                     <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers</p>
                     <ul className="mt-0">
                        <li className="matter-para">
                           Designed page using following HTML structure elements like li, header, article, footer elements and
                           different bootstrap components to show different sections in the website and different bootstrap classes
                           for responsiveness through mobile-first approach
                        </li>
                        <li className="matter-para">
                           Implemented product youtube videos by using bootstrap embed and model components.
                        </li>
                        <p className="p-0"><b>Technologies used: </b>  HTML, CSS, Bootstrap</p>
                     </ul>
                  </li>
                  <hr />
                  <li className="project-list-item">
                     <b><a href="https://gktodos.ccbp.tech/" target="_blank" rel="noreferrer">Todos Application</a></b>
                     <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;Developed persistent todo application with CRUD operations to track list of tasks</p>
                     <ul className="mt-0">
                        <li className="matter-para">
                           Displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap
                        </li>
                        <li className="matter-para">
                           Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by
                           using JavaScript DOM operations.
                        </li>
                        <li className="matter-para">
                           Used Arrays, Objects and their methods during todolist CRUD Operations, Persisted todo list state on
                           page reloads using local storage methods.
                        </li>
                        <p className="p-0"><b>Technologies used: </b> HTML, CSS, JS, Bootstrap</p>
                     </ul>
                  </li>
                  <hr />

                  <li className="project-list-item">
                     <b><a href="https://kalyanbrowser.ccbp.tech" target="_blank" rel="noreferrer" className="project-link">Wikipedia Search Application</a></b>
                     <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;A custom Wikipedia search application that provides a simplified and intuitive way for users to access and view
                        relevant information. With the ability to easily search for and view curated results, users can dive deeper into
                        their interests with just a click.</p>
                     <ul className="mt-0">
                        <li className="matter-para">
                           Streamlined search results with HTML list elements, styled for a modern and user-friendly interface
                           using CSS, Bootstrap and responsive design.
                        </li>
                        <li className="matter-para">
                           Effortlessly access information with asynchronous fetch GET HTTP API calls and the option to open the
                           desired result in a new tab for further exploration.
                        </li>
                        <p className="p-0"><b>Technologies used: </b> HTML, CSS, JS, REST API Calls, Bootstrap</p>
                     </ul>
                  </li>
                  <hr />
                  <p className="and-many-more-para d-none">and many more....</p>
                  <div className="popup-button-container">
                     <button type="button" class="and-many-more-button" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>
                        and many more...
                     </button>
                  </div>
                  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div className="modal-dialog">
                        <div className="modal-content p-2 popup-background">
                           <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">All Projects</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                           <p>I'm working on it....</p>
                           <ul className="modal-body alert alert-success thankyou d-none">
                              <li className="project-list-item ">
                                 <b><a href="https://kalyanbrowser.ccbp.tech" target="_blank" rel="noreferrer" className="project-link">Wikipedia Search Application</a></b>
                                 <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;A custom Wikipedia search application that provides a simplified and intuitive way for users to access and view
                                    relevant information. With the ability to easily search for and view curated results, users can dive deeper into
                                    their interests with just a click.</p>
                                 <ul className="mt-0">
                                    <li className="matter-para">
                                       Streamlined search results with HTML list elements, styled for a modern and user-friendly interface
                                       using CSS, Bootstrap and responsive design.
                                    </li>
                                    <li className="matter-para">
                                       Effortlessly access information with asynchronous fetch GET HTTP API calls and the option to open the
                                       desired result in a new tab for further exploration.
                                    </li>
                                    <p className="p-0"><b>Technologies used: </b> HTML, CSS, JS, REST API Calls, Bootstrap</p>
                                 </ul>
                              </li>
                           </ul>
                           <div type="modal-footer">
                           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                           </div>
                        </div>
                     </div>
                  </div>

               </ul>
               <ul className="alert alert-primary">
                  <div>
                     <p className="certifications-tag">Certifications</p>
                     <Slider {...settings}>
                        <div class="carousel-item active" data-bs-interval="10000">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694837657/WMKRPEXKVD_page-0001_n7wskd.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694837657/IZRTOSGADV_page-0001_ly52op.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694837656/RLPTWMRZEW_page-0001_kegtyk.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694837657/ZRFXGPDQOS_page-0001_bfbild.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694837657/REHYWFNWWD_page-0001_luc0db.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694837657/KBDXPICXRQ_page-0001_tgwztm.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694837658/HOZFUKHALF_1__page-0001_wrnwjb.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694837658/NXXURRORPP_udplta.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694837658/DTXUGQVYOT_page-0001_jqhb9q.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                           <img src="https://res.cloudinary.com/dpflxdsri/image/upload/v1694837658/VVBRDRFUJS_1__page-0001_iwuwx2.jpg" class="d-block w-100" alt="..." />
                        </div>
                     </Slider>
                  </div>
               </ul>
               <div className="alert alert-primary thankyou-container" role="alert"> 
                  <p className="thankyou-para d-none">Thankyou for visiting <i className="bi bi-heart"></i></p>
                  <p className="resume-para">Please refer my resume for more details. <a className="resume-button" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/14CDFeI1XfMw6fpz_LjeliTNgAcO_g4-e/view?usp=drive_link" download><i className="bi bi-download dowmload-icon"></i></a></p>
               </div>
            </div>
         </div>
      )  
   }
}

export default Home