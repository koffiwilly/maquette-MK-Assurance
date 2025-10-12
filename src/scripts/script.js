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
//
//
//CAROUSEL
//
//

// JavaScript à ajouter dans votre script.js existant - CAROUSEL PARTENAIRES

// Configuration des logos partenaires (remplacez par vos vrais logos)
const partnerLogos = [
    './medias/partner/1.png',
    './medias/partner/2.png',
    './medias/partner/3.png',
    './medias/partner/4.png',
    './medias/partner/5.png',
    './medias/partner/6.png',
    './medias/partner/7.png',
    './medias/partner/8.png',
    './medias/partner/9.png'
];

// Ou avec noms pour fallback
const partnersData = [
    { name: 'Partenaire 1', logo: './medias/partner/1.png' },
    { name: 'Partenaire 2', logo: './medias/partner/2.png' },
    { name: 'Partenaire 3', logo: './medias/partner/3.png' },
    { name: 'Partenaire 4', logo: './medias/partner/4.png' },
    { name: 'Partenaire 5', logo: './medias/partner/5.png' },
    { name: 'Partenaire 6', logo: './medias/partner/6.png' },
    { name: 'Partenaire 6', logo: './medias/partner/7.png' },
    { name: 'Partenaire 6', logo: './medias/partner/8.png' },
    { name: 'Partenaire 6', logo: './medias/partner/9.png' }
];

// Fonction pour initialiser le carousel partenaires
function initPartnersCarousel() {
    const carousel = document.getElementById('carousel');

    if (!carousel) {
        console.error('Div #carousel non trouvée');
        return;
    }

    // Créer le HTML du carousel
    let carouselHTML = '<div class="carousel-track">';

    // Version simple avec juste les logos
    partnerLogos.forEach((logoSrc, index) => {
        carouselHTML += `
            <div class="partner-slide">
                <img src="${logoSrc}" alt="Partenaire ${index + 1}" class="partner-logo" loading="lazy">
            </div>
        `;
    });

    // Dupliquer pour l'effet infini
    partnerLogos.forEach((logoSrc, index) => {
        carouselHTML += `
            <div class="partner-slide">
                <img src="${logoSrc}" alt="Partenaire ${index + 1}" class="partner-logo" loading="lazy">
            </div>
        `;
    });

    carouselHTML += '</div>';

    // Injecter le HTML dans la div
    carousel.innerHTML = carouselHTML;

    // Gestion des erreurs d'images (affiche le nom si logo ne charge pas)
    const logos = carousel.querySelectorAll('.partner-logo');
    logos.forEach((logo, index) => {
        logo.addEventListener('error', function() {
            this.style.display = 'none';
            const partnerName = document.createElement('div');
            partnerName.className = 'partner-name';
            partnerName.textContent = `Partenaire ${(index % partnerLogos.length) + 1}`;
            this.parentElement.appendChild(partnerName);
        });
    });

    console.log('🤝 Carousel partenaires initialisé avec', partnerLogos.length, 'logos');
}

// Version avec données complètes (nom + logo)
function initPartnersCarouselWithNames() {
    const carousel = document.getElementById('carousel');

    if (!carousel) return;

    let carouselHTML = '<div class="carousel-track">';

    // Ajouter les partenaires originaux
    partnersData.forEach(partner => {
        carouselHTML += `
            <div class="partner-slide">
                <img src="${partner.logo}" alt="${partner.name}" class="partner-logo" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="partner-name" style="display:none;">${partner.name}</div>
            </div>
        `;
    });

    // Dupliquer pour l'effet infini
    partnersData.forEach(partner => {
        carouselHTML += `
            <div class="partner-slide">
                <img src="${partner.logo}" alt="${partner.name}" class="partner-logo" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="partner-name" style="display:none;">${partner.name}</div>
            </div>
        `;
    });

    carouselHTML += '</div>';
    carousel.innerHTML = carouselHTML;
}

// Initialiser quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    // Choisissez la version que vous préférez :
    initPartnersCarousel(); // Version simple
    // OU
    // initPartnersCarouselWithNames(); // Version avec fallback de noms
});

// Fonction pour mettre à jour les logos dynamiquement
function updatePartnerLogos(newLogos) {
    partnerLogos.length = 0;
    partnerLogos.push(...newLogos);
    initPartnersCarousel();
}

// Exemple d'utilisation :
// updatePartnerLogos(['./medias/new-logo1.png', './medias/new-logo2.png']);

