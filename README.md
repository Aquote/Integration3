# Integration3
#  Description
***
**Gcam** est un projet de système de vidéosurveillance utilisant des caméras/puces ESP32-CAM, connectées à un Raspberry Pi agissant en tant que serveur principal. L'objectif est de fournir une solution de vidéosurveillance flexible et abordable. 


Voici quelques points clés :
***
- **Objectif du projet :** Notre objectif fondamental est de créer une solution entièrement open-source, flexible et autonome. Nous souhaitons éliminer la nécessité de faire appel à des entreprises tierces et réduire les coûts de gestion. Gcam vise à être accessible à tout individu ou entreprise souhaitant mettre en place une surveillance vidéo de manière indépendante.

- **Fonctionnalités principales :** Gcam offre un ensemble de fonctionnalités robustes, telles que la visualisation en temps réel des flux vidéo, la possibilité d'enregistrer des vidéos, et une grande flexibilité pour ajouter de nouvelles caméras en fonction des besoins. L'autonomie du projet signifie que les utilisateurs peuvent adapter les fonctionnalités selon leurs propres exigences.

- **Architecture du système :** Les caméras ESP32-CAM sont intelligemment connectées au Raspberry Pi, agissant en tant que serveur principal. Ce dernier assume également le rôle de serveur DHCP pour distribuer des adresses IP aux caméras. Les flux vidéo générés sont stockés de manière centralisée sur le Raspberry Pi, assurant un accès facile et efficace.
- **Interface utilisateur :**  L'interface utilisateur de l'application Gcam offre une expérience conviviale pour la visualisation des flux vidéo et la gestion des enregistrements. Les utilisateurs peuvent choisir entre la visualisation simultanée de plusieurs caméras ou se concentrer sur une caméra spécifique. Une maquette détaillée de l'interface utilisateur est fournie pour illustrer l'ergonomie de l'application.

- **Contraintes :** 
    - Tout d'abord nous avons le **budget** :
       - _Verisure :_ 
          -  Vous pouvez compter aux alentours de __400€__ de frais de matériel .
          -  Les frais d'installation se situent autour de __300€__.
          -  Ensuite, pour tout le service de télésurveillance et les services tiers il faut compter __10€/mois__.
       - _Sécuritas :_  
          -  Un abonnement existe avec tous les services de télésuveillance pour __200€/mois__ avec l'installation et le matériel offert. 
       - _GCam :_  
          - Il suffit d'acheter les _ESP32-CAM_ pour le prix de __27€__ (set de 3 puces) sur [Amazon Belgique](https://www.amazon.com.be/AZDelivery-ESP32-Cam-Bluetooth-Compatible-incluant/dp/B089MDBMR1/ref=sr_1_5?crid=301RJCT85YVBV&keywords=ESP32+cam&qid=1700335443&sprefix=esp32+cam%2Caps%2C83&sr=8-5)
          - Pour le serveur distant il faudra aussi acheter le _Raspberry Pi_ pour __79€__ sur [Amazon Belgique](https://www.amazon.com.be/AZDelivery-ESP32-Cam-Bluetooth-Compatible-incluant/dp/B089MDBMR1/ref=sr_1_5?crid=301RJCT85YVBV&keywords=ESP32+cam&qid=1700335443&sprefix=esp32+cam%2Caps%2C83&sr=8-5) 
   - Ensuite, la contrainte de **consommation** :
      - Une caméra classique sur le marché consomme en moyenne __288W/h__.
      - Un _ESP32-CAM_ consomme __10W/h__.
   - Il y a aussi toutes les lois du [RGPD](https://www.autoriteprotectiondonnees.be/professionnel/themes/les-cameras-et-votre-vie-privee-/cameras-de-surveillance).
