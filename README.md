# portfolio

____________________________________________________________________________

POUR LE PROF  

    • GSAP est capricieux, il semble que la page doit être réactualisée pour utilisée le responsive, c'est-à-dire à chaque redimmensionnement de fenêtre

    J'ai encore plain de choses à travailler dessus mais mon objectif est de pouvoir finir ce portfolio avec tous mes projets pour pouvoir m'en servir lors de ma recherche de stage prochainement !

____________________________________________________________________________


NOTES PERSONNELLES - ARBORESCENCE

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

____________________________________________________________________________

PROBLÈMES

    - ligne 556 CSS : menu-hamburger:hover fonctionne pas et ligne-hamburger fonctionne que quand c'est hover sur ligne-1 et ligne-2
    - ligne 69 CSS : align-items > flex-end qui ressemble à un flew-start en responsive, alors qu'il fonctionne bien en flex-end en pas responsive (display:block)
    - ligne 24 JS : position fixed du background quand on ouvre le menu hamburger


____________________________________________________________________________

Z-INDEX

    .menu-hamburger-open : z-index 300
    .menu-hamburger : z-index 200
    .section-menu : z-index 100
    .background-menu-hamburger : z-index 50
    #bouton-voir-projets-1 : z-index 4
    #parallax-box-3 : z-index 3
    #parallax-box-2 : z-index 2
    #parallax-box-1 : z-index 1

____________________________________________________________________________

À FAIRE / À AJOUTER

    - effet de mouvement de souris sur le background
    - responsive seulement sur les formats tablette et téléphone (taille du tel ?)
    - réduire la taille des boutons en responsive
    - remplacer les images des projets et les rendre cliquables
    - section compétences : faire plutôt un flex wrap pour le responsive plutôt que des lignes définies dans le html
    - ajouter une animation quand le menu hamburger se déplie
    - trouver comment on fait du gsap sur plusieurs media queries
    - hover qui ne fonctionne pas sur les box projets et compétences avec le gsap