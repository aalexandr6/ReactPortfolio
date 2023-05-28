import React from 'react';
import "..//pages/style.css";
import project1 from '..//../assets/img/fastmunchies.png';
import project2 from '..//../assets/img/transline.png';
import project3 from '..//../assets/img/datenight.png';
import project4 from '..//../assets/img/Notetaker.png';
import project5 from '..//../assets/img/password.png';
import project6 from '..//../assets/img/weatherdb.png';
import project7 from '..//../assets/img/horiseon.png';


export default function Home () {
    return (
        <div className="card-fluid">
             <img src={project1} class="card-img-bottom"  alt="https://github.com/aalexandr6/FastMunchies"></img>
        <div class="card-body">
          <h5 class="card-title mb-2 text-muted">FastMunchies</h5>
          <h6 class="card-subtitle mb-2 text-muted"> 🍔🍟 Food ordering application</h6>
          <p class="card-text card-subtitle mb-2 text-muted">Recent collabartion with other develops to make a application with a menu and login</p>
          
        </div>
      
      <div className="card-fluid">
      <div class="card-body">
      <img src={project2} class="card-img-top" alt="https://github.com/aalexandr6/Trans-Line"></img>
        <h5 class="card-title mb-2 text-muted">Transline</h5>
        <h6 class="card-subtitle mb-2 text-muted"> 🚛 Truck Business Website</h6>
        <p class="card-text card-subtitle mb-2 text-muted">A website for s trucking business to be able to login as admin, show services and keep track of drivers</p>
      </div>
    </div>
    <div className="card-fluid">
    <div class="card-body">
    <img src={project3} class="card-img-top" alt="https://github.com/amsudekum/DateNightMeal"></img>
      <h5 class="card-title mb-2 text-muted">Date Night Meal</h5>
      <h6 class="card-subtitle mb-2 text-muted"> 💙 Date Activity Application</h6>
      <p class="card-text card-subtitle mb-2 text-muted">A Quiz and recipe application to  choosing a date night meal a little bit easier!</p>
    </div>
  </div>
  <div className="card-fluid">
        <div class="card-body">
        <img src={project4} class="card-img-top" alt="..."></img>
          <h5 class="card-title mb-2 text-muted">Note Taker </h5>
          <h6 class="card-subtitle mb-2 text-muted">📝 Note-Taking Application</h6>
          <p class="card-text card-subtite mb-2 text-muted"> A note-taking application to take some quick noted (helps me study)</p>
        </div>
      </div>
      <div className="card-fluid">
      <div class="card-body">
        <img src={project5} class="card-img-top" alt="..."></img>
        <h5 class="card-subtitle mb-2 text-muted">🔐 Password-Generator</h5>
        <p class="card-text card-subtitle mb-2 text-muted">Application to make quick password</p>
      </div>
    </div>
    <div className="card-fluid">
        <div class="card-body">
          <img src={project6} class="card-img-top" alt="..."></img>
          <h5 class="card-subtitle mb-2 text-muted"> 🌦️ Weather Forecast</h5>
          <p class="card-text card-subtitle mb-2 text-muted">First time working with an API and making this application that get the weather for the week!</p>
      </div>
      </div>
      <div className="card-fluid">
      <div class="card-body">
        <h5 class="card-title mb-2 text-muted">Horiseon Refactor</h5>
        <img src={project7} class="card-img-top" alt="..."></img>
        <h6 class="card-subtitle mb-2 text-muted"> ㊢ Horiseon Website Refactor</h6>
        <p class="card-text card-subtite mb-2 text-muted">First time ever trying to geta working html working with no errors</p>
      </div>
    </div>
    </div>
    )
}