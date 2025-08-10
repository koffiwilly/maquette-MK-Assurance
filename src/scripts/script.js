// Script pour le menu burger - Compatible avec votre structure existante

document.addEventListener('DOMContentLoaded', function() {

    // Récupération des éléments
    const burgerBtn = document.getElementById("burgerMenuBtn");
    const mainMenu = document.getElementById("mainMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const menuLinks = document.querySelectorAll('#mainMenu li a');

    // Vérification que les éléments existent
    if (!burgerBtn || !mainMenu || !menuOverlay) {
        console.error('Éléments du menu burger non trouvés');
        return;
    }

    // Fonction pour ouvrir le menu
    function openMenu() {
        burgerBtn.classList.add('active');
        mainMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Empêche le scroll

        // Accessibility
        burgerBtn.setAttribute('aria-expanded', 'true');

        console.log('Menu ouvert');
    }

    // Fonction pour fermer le menu
    function closeMenu() {
        burgerBtn.classList.remove('active');
        mainMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaure le scroll

        // Accessibility
        burgerBtn.setAttribute('aria-expanded', 'false');

        console.log('Menu fermé');
    }

    // Fonction pour basculer le menu
    function toggleMenu() {
        console.log("HELLO TOGGLE", burgerBtn.classList)

        if (burgerBtn.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Event listener principal sur le bouton burger
    burgerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Fermer le menu en cliquant sur l'overlay
    menuOverlay.addEventListener('click', function() {
        closeMenu();
    });

    // Fermer le menu quand on clique sur un lien de navigation
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Petite délai pour permettre la navigation
            setTimeout(() => {
                closeMenu();
            }, 150);
        });
    });

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && burgerBtn.classList.contains('active')) {
            closeMenu();
        }
    });

    // Empêcher la propagation des clics à l'intérieur du menu
    mainMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Gérer le redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        // Si on revient à une taille d'écran large, fermer le menu mobile
        if (window.innerWidth > 768 && burgerBtn.classList.contains('active')) {
            closeMenu();
        }
    });

    // Animation smooth scroll pour les liens d'ancrage (si vous en avez)
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Si c'est un lien d'ancrage (commence par #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    // Fermer le menu d'abord
                    closeMenu();

                    // Puis faire le scroll smooth
                    setTimeout(() => {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
            }
        });
    });

    // Initialisation
    burgerBtn.setAttribute('aria-expanded', 'false');
    console.log('🍔 Menu burger initialisé avec succès !');

});

// Version simplifiée pour votre structure actuelle
// let button = document.getElementById("burgerMenuBtn");
//
// button.addEventListener("click", (event) => {
//     const mainMenu = document.getElementById("mainMenu");
//     const menuOverlay = document.getElementById("menuOverlay");
//
//     // Basculer les classes
//     button.classList.toggle('active');
//     mainMenu.classList.toggle('active');
//     menuOverlay.classList.toggle('active');
//
//     // Empêcher le scroll du body quand le menu est ouvert
//     if (button.classList.contains('active')) {
//         document.body.style.overflow = 'hidden';
//     } else {
//         document.body.style.overflow = '';
//     }
//
//     event.preventDefault();
// });