import "./page.css"
import React from 'react';

const ContactPage = () => {
  return (
    <div className="div" id='Contact'>
      <h1 className="titre_div" >Contact</h1>
      <div className="text">
        <p>Le product Owner de ce projet est <b>Loïc Dero</b>. Mais vous pouvez contacter toute l'équipe du projet :</p>

        <ul className="liste">
          <li>Apostolidis Alex<span className='role'>(Scrum Master)</span></li>
          <li>Dero Loïc <span className='role'>(Product Owner)</span></li>
          <li>Delbrouck Louis <span className="role"></span></li>
          <li>Feron Dylan<span className='role'></span></li>
          <li>Godefroid Mehdi<span className='role'></span></li>
          <li>Gonzalez Shayann<span className='role'></span></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;