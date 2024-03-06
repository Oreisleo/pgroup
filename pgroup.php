<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupérez les données du formulaire
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Envoie un e-mail au gérant avec les données du formulaire
    $to = "vicklionel@yahoo.fr";
    $subject = "Nouveau formulaire de contact";
    $message = "Nom: $name\nE-mail: $email";

    // Utilisez la fonction mail() pour envoyer l'e-mail (cela dépend de la configuration de votre serveur)
    mail($to, $subject, $message);

    // Envoyez une réponse JSON au client (peut être utilisé pour traiter la réponse côté client)
    echo json_encode(["success" => true]);
} else {
    // Si la requête n'est pas de type POST, renvoyez une erreur
    http_response_code(400);
    echo json_encode(["error" => "Méthode non autorisée"]);
}

$result = mail($to, $subject, $message);

if ($result) {
    echo "E-mail envoyé avec succès.";
} else {
    echo "Échec de l'envoi de l'e-mail. Erreur : " . error_get_last()['message'];
}
?>