import "./page.css"
import React from 'react';

const DocumentationPage = () => {
  return (
    <div className="div" id='Documentation' >
        <h1 className="titre_div" >A propos du projet</h1>
        <div className="text">
          <p >
            Gcam est un projet de caméras de vidéosurveillance qui utilise différentes technologies. Ces caméras, équipées de puces ESP32-CAM, sont connectées à un Raspberry Pi qui joue le rôle de serveur principal. Ce serveur stocke les flux vidéo ainsi que les enregistrements potentiels. 
          </p>
          <p> 
            Le Raspberry Pi fait également office de serveur DHCP, attribuant des adresses IP à chaque caméra (ESP32-CAM). L'un des avantages majeurs de ce projet est son caractère open source, favorisant la transparence, le partage des connaissances et la collaboration entre les développeurs.
          </p>
          <p>
            Les flux vidéo sont retransmis sur une application qui récupère les images directement depuis le Raspberry Pi. Cette application offre plusieurs avantages. Elle permet de visionner en temps réel plusieurs caméras simultanément ou d'en choisir une spécifique. De plus, elle offre la possibilité d'enregistrer des clips vidéo courts pour un visionnage ultérieur, offrant ainsi une flexibilité d'utilisation et un potentiel d'adaptation selon les besoins spécifiques de chaque utilisateur.
          </p>
          
          <p>
            En publiant le code en open source, le projet Gcam encourage la transparence, la collaboration, la personnalisation, et offre un support communautaire. Cela permet également d'attirer une large communauté d'utilisateurs et de contributeurs potentiels, renforçant ainsi la sécurité et la durabilité du projet.
          </p>
        </div>
        <div className="lien">
          <h1>Lien du github</h1>
          <a href="https://thedreamteam.ddns.net/DefaultCollection/GCam/_git/GCam" className="text-[#00ADD4]">https://thedreamteam.ddns.net/DefaultCollection/GCam/_git/GCam</a>
        </div>
        <div className="div" id='durabilité'>
        <h1 className="titre_div"> Impact Environnemental et Durabilité </h1>
          <div className="text">
            <p >
            L'engagement de GCAM envers la durabilité se traduit par une conception éco-responsable. En optant pour des composants à faible consommation énergétique tels que les ESP32-CAM, le projet réduit significativement la demande énergétique par rapport aux caméras traditionnelles. Cette réduction de la consommation énergétique contribue à limiter l'empreinte carbone et favorise une approche plus respectueuse de l'environnement. 
            </p>
          </div>
        </div>
      </div>
  );
};

export default DocumentationPage;