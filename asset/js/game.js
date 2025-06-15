//mise en place des methodes de jeu
//import des variables
import { mapKeys, getRandomStratagem } from './app.js';
import{ displayStratagem } from './view.js';
//filtre les touches pour ne garder que celles qui sont dans le tableau
function filterKeys(event) {
    const key = event.key.toLowerCase();
    return Object.keys(mapKeys).includes(key);
}
//variable globale
export let activeStratagem ="";
export let currentIndex = 0;

const messageElement = document.getElementById('message');// Élément pour afficher les messages


let onRoundCompleteCallback = () => {}; // Fonction de rappel pour la fin du round

// Fonction pour gérer l'entrée du joueur
function handlePlayerInput(event) {
    const key = event.key.toLowerCase();
// Vérifie si la touche pressée est dans les touches autorisées
    if (filterKeys(event)) {
        event.preventDefault();

        if (activeStratagem === "") {
            console.error("Erreur: Le jeu n'est pas initialisé. Appelez la fonction qui lance le jeu depuis start.js.");
            return;// Si le stratagème actif est vide, on ne fait rien
        }
        // Obtient le caractère actuel du stratagème actif
        const currentChar = activeStratagem[currentIndex];
//si la touche pressée correspond au caractère actuel du stratagème on incrémente l'index et on affiche un message de succès
        if (key === currentChar) {
            currentIndex++;
            messageElement.textContent = 'Correct !';

//si l'index actuel est égal à la longueur du stratagème actif, on affiche un message de succès et on appelle la fonction de rappel
            if (currentIndex === activeStratagem.length) {
                messageElement.textContent = 'Stratagème réussi ! Bravo !';
                console.log("Stratagème terminé !");

                // Ici, au lieu d'appeler startGame(), on appelle la fonction de callback
                setTimeout(() => {
                    onRoundCompleteCallback(); // Cela déclenchera la fonction dans start.js
                }, 1000);
            }
            // Si la touche pressée ne correspond pas, on réinitialise l'index et affiche un message d'erreur
        } else {
            messageElement.textContent = 'Faux ! Réessayez.';
            currentIndex = 0;
            console.log("Touche incorrecte. Réinitialisation de la progression.");
            displayStratagem(activeStratagem); // Réaffiche le stratagème
        }
    }
}

// Fonction pour Activer l'Écouteur de Touches
export function addKeyListener() {
    document.addEventListener('keydown', handlePlayerInput);
    console.log("Écouteur de touches activé dans game.js.");
}

//Fonction pour définir le stratagème initial depuis l'extérieur (par start.js)
export function setInitialStratagem(stratagem) {
    activeStratagem = stratagem; // Met à jour la variable d'état interne
    currentIndex = 0;           // Réinitialise l'index
    displayStratagem(activeStratagem); // Affiche le stratagème
    messageElement.textContent = 'Reproduisez la séquence !'; // Message initial
    console.log("Stratagème initial défini par start.js:", activeStratagem);
}

//Fonction pour permettre à start.js de nous donner une fonction à appeler en fin de round
export function setOnRoundComplete(callback) {
    onRoundCompleteCallback = callback;
    console.log("Fonction de fin de round définie.");
}
