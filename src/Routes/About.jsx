import React from 'react';
import "./AboutStyles.css";
import BackgroundVideo from "../video/type.mp4";


const About = () => {
    return(<>
    
    <div className="about-container">
        

           {/* Background Video */}
            <video autoPlay loop muted className="background-video">
                <source src={BackgroundVideo} type="video/mp4" />
            </video>
       
        <h1 className='about'>About Me</h1>
                    <p className='write_up'>

        Hello! I'm Hurtle_Geo, a passionate web developer and security researcher dedicated to creating secure and efficient web applications. 
        With a strong focus on penetration testing and vulnerability analysis, I strive to enhance digital safety while delivering reliable solutions.
         My expertise lies in identifying potential threats and implementing robust security measures to protect systems from cyber attacks. 
 I am committed to continuous learning and staying updated with the latest advancements in web development and cybersecurity to provide the best possible service to my clients.
                   </p>
          </div>
    

    
    </>)
}
export default About;