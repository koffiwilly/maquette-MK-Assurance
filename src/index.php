
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mk Assurance</title>
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
