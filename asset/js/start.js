// Import
import { setInitialStratagem, addKeyListener, setOnRoundComplete } from './game.js';
// Importez getRandomStratagem depuis app.js (votre fichier de données)
import { getRandomStratagem } from './app.js';

// gestion du debut du jeu et des rounds
function startGame() {
    console.log("Démarrage d'un nouveau tour dans start.js");
    const newStratagem = getRandomStratagem(); // Génère un nouveau stratagème
    setInitialStratagem(newStratagem); // Dit à game.js de prendre ce stratagème et de l'afficher
}

// attendre chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM entièrement chargé. Lancement du jeu...");

    // automatiquement, on affiche le premier stratagème
    setOnRoundComplete(startGame);

    // lance le jeu pour la première fois
    startGame();

    //on active l'écouteur de touches
    addKeyListener();
});