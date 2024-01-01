import "./page.css"
import React from 'react';

const TelechargementPage = () => {
  return (
    <div className="div" id='Télécharger'>
      <h1 className="titre_div" >Téléchargement</h1>
        <div className="text">
          <p>
          Nous sommes fiers d'annoncer que notre projet est open source, ce qui signifie que le code source est entièrement disponible au public. 
          Nous croyons en la transparence, la collaboration et le partage des connaissances, c'est pourquoi nous offrons l'accès gratuit à notre code. 
          En adoptant cette approche open source, nous favorisons la création d'une communauté de développeurs, d'utilisateurs et de contributeurs dédiés.
          </p>
          <p>
          Pour accéder au code source de notre projet, il vous suffit de cliquer sur le bouton ci-dessous. Vous serez redirigé vers une page où vous pourrez explorer, 
          télécharger et contribuer au code. Profitez de cette opportunité pour personnaliser le projet selon vos besoins spécifiques et bénéficier du support d'une communauté 
          passionnée.
          </p>
        </div>
        <div className="bouton">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" >
            Télécharger le code
          </a>
      </div>
    </div>
  );
};

export default TelechargementPage;