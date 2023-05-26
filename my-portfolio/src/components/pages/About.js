import React from 'react';
import Me from '..//../assets/img/fall.JPG';

export default function About() {
  return (
    
    <div className="card">
      
            <div className="card-body">
                <h1 className="text-dark card-title text-dark">Aaron Padilla</h1>
                <h2 className="card-subtitle mb-2 text-muted"> ⭐️ Full Stack Web Developer</h2>
                <p className="card-text">I am a Full Stack Web Developer with a background in Business Administration. I am a team player and I am always looking for ways to improve myself and my team. I am a Graduate of KU Full Stack Coding Bootcamp. I am proficient in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, React.js, and more. I am currently looking for a position as a Full Stack Web Developer.</p>
                <img src={Me} className="img-fluid" alt="..."></img>
            </div>
        </div>
        
  );
}