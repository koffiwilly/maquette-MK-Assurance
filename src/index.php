<?php
$pageName = $_GET['page'] ?? 'Accueil';

$pageTitles = [
    'Accueil' => 'MK Assurance - Votre tranquillité, notre priorité',
    'pro' => 'Assurances pour professionnels - MK Assurance',
    'particulier' => 'Assurances pour particuliers - MK Assurance',
    'contact' => 'Contactez MK Assurance'
];
$title = $pageTitles[$pageName] ?? 'MK Assurance';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= htmlspecialchars($title) ?></title>
    <link rel="stylesheet" href="./styles.css" />
    <link rel="icon" type="image/png" href="./medias/logo_favicon.png" />

</head>
<body>
<?php include("./includes/menu.php"); ?>

<main>
<?php
    if ($pageName === 'contact') {
        include("./includes/contact.php");
    } else {
        include("./includes/$pageName.html");
    }
?>
</main>

<?php include("./includes/footer.php"); ?>
<script src="./scripts/script.js"></script>
</body>
</html>