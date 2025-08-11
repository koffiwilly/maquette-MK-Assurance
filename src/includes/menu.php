<?php
$classText = $_GET["page"] === "Accueil" ? "whiteColor" : "blackColor";
?>
<header>
    <nav>
        <div>
            <!-- Logo principal visible sur desktop -->
            <a href="?page=Accueil" class="logo-main">
                <img src="./medias/LOGO.png" alt="logo_header" />
            </a>

            <!-- Menu principal -->
            <ul id="mainMenu" class="<?= $classText ?>">
                <!-- Logo dans le menu mobile -->
                <li>
                    <a href="?page=pro" class="<?= $classText ?>">Assurances professionnels</a>
                </li>
                <li>
                    <a href="?page=particulier" class="<?= $classText ?>">Assurance particulières</a>
                </li>
                <li id="btn_contact_nav">
                    <a href="?page=contact" class="<?= $classText ?>">Contact</a>
                </li>
            </ul>

            <!-- Bouton burger -->
            <div id="burgerMenuBtn">
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                Menu BURGER
            </div>
        </div>
    </nav>

    <!-- Overlay pour fermer le menu en cliquant en dehors -->
    <div class="menu-overlay" id="menuOverlay"></div>
</header>