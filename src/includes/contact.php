<div id="background_img_contact">

</div>
<main id="contactPage">
<?php

if(count($_POST)){
    echo "<h1 class=\"bouton_contact\">Votre demande de contact a bien été prise en compte</h1>";
    try {
        $postgres_pdo = new PDO(
            'pgsql:host=postgres;dbname=myapp',
            'user',
            'password'
        );
        $req = $postgres_pdo->prepare("INSERT INTO contact (nom, prenom,entreprise, email, telephone, assurance, message) VALUES ('".$_POST["nom"]."', '".$_POST["prenom"]."', '".$_POST["entreprise"]."', '".$_POST["email"]."', '".$_POST["telephone"]."', '".$_POST["assurance"]."', '".$_POST["message"]."')");
        $req->execute();
    } catch (PDOException $e) {
        echo "❌ Erreur connexion PostgreSQL : " . $e->getMessage() . "<br>";
    }
} else {
    ?>
    <h1 class="bouton_contact">Contactez MK Assurance</h1>
    <section id="formualaire_contact">
        <h2>Posez nous vos questions</h2>
        <h3>
            N'hésitez pas à nous adresser vos demandes à l'aide de ce formulaire de
            contact. Nous vous répondrons dans les plus brefs délais.
        </h3>
        <form action="#" method="post">
            <div>
                <label for="nom">Nom :</label><br />
                <input type="text" id="nom" name="nom" required /><br /><br />
            </div>
            <label for="prenom">Prénom :</label><br />
            <input type="text" id="prenom" name="prenom" required /><br /><br />

            <label for="entreprise">Entreprise :</label><br />
            <input type="text" id="entreprise" name="entreprise" /><br /><br />

            <label for="email">Email :</label><br />
            <input type="email" id="email" name="email" required /><br /><br />

            <label for="telephone">Téléphone :</label><br />
            <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
            /><br /><br />

            <label for="assurance">Type d'assurance :</label><br />
            <select id="assurance" name="assurance" required>
                <option value="">-- Sélectionnez une assurance --</option>
                <option value="auto">Assurance Auto</option>
                <option value="VL/PL">flotte VL/PL</option>
                <option value="sante">Assurance Santé TNS</option>
                <option value="prevoyance">Assurance prevoyance</option>
                <option value="Responsabilité civile">Responsabilité civile pro</option>
                <option value="emprunteur">Assurance Emprunteur</option>
                <option value="Multi Risque Professionel">Multi risque professionel</option>
                <option value="santec collecive">Santé collecive</option>
                <option value="DECENNALE">Décennale</option>
                <option value="retraite">retraite</option>
                <option value="EXPATRIE">Expatrié</option>
                    Responsabilité Professionnelle
                </option></select
            ><br /><br />

            <label for="message">Votre message :</label><br />
            <textarea id="message" name="message" rows="5" required></textarea
            ><br /><br />

            <input type="submit" value="Envoyer" />
        </form>
    </section>

<?php

}
?>
    </main>