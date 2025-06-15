//declaration des stratagem dans un tableau
export const stratagems = [
    'sdszd',
    'sqdzs',
    'sqszzq',
    'ssqzd',
    'sdqsszzd',
    'sszss',
    'zsqsdd',
    'qsdzqss',
];
//mapper les touches aux lettres des stratagems
export const mapKeys = {
    'z': './asset/img/up.jpg',
    's': './asset/img/down.jpg',
    'q': './asset/img/left.jpg',
    'd': './asset/img/right.jpg',
}

//choisir un stratagem au hasard
export function getRandomStratagem() {
    const randomIndex = Math.floor(Math.random() * stratagems.length);
    return stratagems[randomIndex];
}



















