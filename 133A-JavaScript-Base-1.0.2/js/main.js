/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande une interprétation stricte du code

    const prenom = prompt('Entre votre prénom :');
    const nom = prompt('Entrez votre nom : ');
    alert(`Bonjour, ${prenom} ${nom} `);

    const nombre1 = prompt('Entrez le premier nombre : ');
    const nombre2 = prompt('Entrez le deuxième nombre : ');
    const resultat = nombre1 / nombre2;

    alert(`Résultat : ${resultat}`);
}()); // Main IIFE

