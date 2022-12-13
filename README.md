# portfolio

• ACCUEIL

    - Présentation
        Illustration qui arrive en dézoom, qui tourne sur l'axe z, décalage vers la droite puis aparition du texte du bas vers le haut, opacité réduite et léger mouvement.

    - Formation
        - BAC S Sciences de l'Ingénieur
        - MANAA
        - BTS DG
        - IMAC
        - Bac Création Numérique
        Scroll horizontal, ligne qui apparapit petit à petit avec les informations. Une fois que le scroll horizontal est fini, on continue à scroll verticalement.

    - Projets à la une
        3 derniers projets, effet de parallax sur trois cadres les uns derrière les autres (voir https://codepen.io/GreenSock/pen/JjYPQpN).

    - Projets
        - Design Graphique
        - Motion Design
        - Photographie
        - Web
        - UX/UI Design
        - Création 3D
        Simple effet d'apparition. Quand on scroll, d'autres images avec les titres apparaissent à l'intérieur des cadres puis s'en vont (réapparaissent avec un hover).

    - Contact
        - CV (Bouton "Télécharger mon CV")
        - Mail
        - Réseaux sociaux Insta et LinkedIn (Liens qui ouvrent sur d'autres pages)
        - Bouton "Me recruter"
        Simple effet d'appariition.
        https://www.flaticon.com/fr/auteurs/taufik/detailed-outline?author_id=400

    Essayer de faire un effet de fluidité sur la backgrround avec le mouvement de la souris.

• PRÉSENTATION
• PROJETS
• CONTACT



PROBLÈMES
    - ligne 556 CSS : menu-hamburger:hover fonctionne pas et ligne-hamburger fonctionne que quand c'est hover sur ligne-1 et ligne-2
    - ligne 69 CSS : align-items > flex-end qui ressemble à un flew-start en responsive, alors qu'il fonctionne bien en flex-end en pas responsive (display:block)
    - ligne 24 JS : position fixed du background quand on ouvre le menu hamburger



.menu-hamburger-open : z-index 300
.menu-hamburger : z-index 200
.section-menu : z-index 100
.background-menu-hamburger : z-index 50
#bouton-voir-projets-1 : z-index 4
#parallax-box-3 : z-index 3
#parallax-box-2 : z-index 2
#parallax-box-1 : z-index 1