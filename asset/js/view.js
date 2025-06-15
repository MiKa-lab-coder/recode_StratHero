import { mapKeys } from './app.js';
/**
 * Affiche le stratagème donné en créant des éléments <img> et en les ajoutant au DOM.
 * @param {string} chosenStratagem Le stratagème (chaîne de caractères) à afficher.
 */
export function displayStratagem(chosenStratagem) {
    console.log("view.js: displayStratagem appelé avec stratagème:", chosenStratagem);

    const stratagemDiv = document.getElementById('stratagem');

    //vide la div existante pour éviter les doublons
    while (stratagemDiv.firstChild) {
        stratagemDiv.removeChild(stratagemDiv.firstChild);
    }

    // Vérifie si un stratagème valide est fourni
    if (!chosenStratagem || typeof chosenStratagem !== 'string') {
        console.warn("view.js: displayStratagem appelé sans stratagème valide (chaîne de caractères).");
        return;
    }

    // crée les éléments <img> pour chaque caractère du stratagème
    chosenStratagem.split('').forEach(char => {
        if (mapKeys[char]) {
            const img = document.createElement('img'); // Crée un nouvel élément <img>
            img.src = mapKeys[char];                   // Définit l'attribut src
            img.alt = char;                            // Définit l'attribut alt
            img.classList.add('stratagem-arrow');      // Ajoute la classe CSS

            stratagemDiv.appendChild(img);             // Ajoute l'image à la div du stratagème
        } else {
            console.warn(`view.js: Caractère non mappé trouvé: ${char}. Ignoré.`);
            // on peut choisir de gérer les caractères non mappés différemment si nécessaire
        }
    });

    console.log("view.js: Éléments du stratagème mis à jour via manipulations DOM directes.");
}