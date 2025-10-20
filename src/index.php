
<!-- Ancien code commenté -->
<!--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./styles.css" />
</head>

<?php
include("./includes/menu.php");
?>

<?php
$pageName = null;
if(isset($_GET["page"])){
    $pageName = $_GET["page"] ?? null;
}
if(is_null($pageName)) {
    $pageName = "Accueil";
}
if($pageName =='contact'){
    include("./includes/contact.php");
} else {
include("./includes/$pageName.html");
}
?>

<?php
include("./includes/footer.php");
?>
<script src="./scripts/script.js"></script>
</body>
</html>
-->

<!-- Nouveau code propre avec titre dynamique SEO -->
<?php
$pageName = $_GET['page'] ?? 'Accueil';

// Tableau des titres SEO
$pageTitles = [
    'Accueil' => 'MK Assurance - Votre tranquillité, notre priorité',
    'pro' => 'Assurances pour professionnels - MK Assurance',
    'particulier' => 'Assurances pour particuliers - MK Assurance',
    'contact' => 'Contactez MK Assurance'
];

// Définir le titre selon la page
$title = $pageTitles[$pageName] ?? 'MK Assurance';
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= htmlspecialchars($title) ?></title>
    <link rel="stylesheet" href="./styles.css" />
</head>
<body>

<?php include("./includes/menu.php"); ?>

<?php
if($pageName === 'contact'){
    include("./includes/contact.php");
} else {
    include("./includes/$pageName.html");
}
?>

<?php include("./includes/footer.php"); ?>

<script src="./scripts/script.js"></script>
</body>
</html>
