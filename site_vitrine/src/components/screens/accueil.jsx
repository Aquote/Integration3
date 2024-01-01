import "./accueil.css"
import { TypeAnimation } from "react-type-animation"

function Accueil() {
    return (
        <div id="Accueil" className="page">
            <img className="image" src="https://www.monprojethabitat.com/wp-content/uploads/2021/08/img-surveillance-pourquoi.jpg" alt="Image d'une personne ayant une caméra de surveillance dans sa maison" />
            <div className="flou-image"></div>
            <h1 className="sous-titre">
                Un système de caméra de surveillance&nbsp;
                <TypeAnimation
                    sequence={[
                        'gratuit',
                        1000,
                        ' Open Source',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />
            </h1>
        </div>
    )
}

export default Accueil;





