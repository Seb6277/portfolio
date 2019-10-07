import React from 'react'
import ProfilePic from '../../assets/images/profil.jpg'

class HomeComponent extends React.Component{
  render() {
    return(
      <div className="content col-md-10 offset-md-1">
        <h1>Bienvenue</h1>
        <p>
          Bonjour est bienvenue sur mon portfolio ! <br/>
          Ici vous trouverez une sélection de mes projets récents ainsi qu'une prise de contact par formulaire et mon CV.
        </p>
        <img className="home_image" src={ProfilePic} alt="TODO"/>
        <p>
          Bonjour, Je m'apelle Sébastien, Développeur web agé de 30 ans.
          
          Il était une fois , il y à environs 15 ans de ça, J'écrivais ma premiére ligne de code. C'était en language C, Souvenir de la librairie SDL et autres réjouissances.
          J'était donc partie de la développement de logiciel desktop.

          Aprés environ 3 ans de C je tente le C++ et écrit mon propre navigateur web, simple certe mais fonctionnel, en utilisant la librairie Qt de Nokia.
          
          Et finalement un jour je découvre Java.
          Et que ce passe t'il quand vous tester Java ? Vous essayez Java EE et ? … Bienvenue dans le développement web !

          Depuis j'ai continué d'apprendre pour le web en prenant au passage quelques compétence en admin systéme, plusieurs language et frameworks.

          Aujourd'hui je suis les sujets du machine learning et du web development. Je cherche toujours l'apect scientifique dérriére tout ce que je fait, et suis tout le temps en recherche de nouvelles technologies.

          Alors ? on parle de demain ?
        </p>
        <p>
          A l'aise avec ES6, ES7 et les technologies autour de Javascript (ECMAScript) je touche parfois aussi au développement
          PHP avec Symfony.
        </p>
        <p>
          Certains projet ici seront des expérimentations, d'autre de vrais site... Vous pouvez toujours suivre mon Github qui
          dispose de la grande majorité des projets en dépôt publique.
        </p>
        <p>Bonne visite !</p>
      </div>
    )
  }
}

export default HomeComponent