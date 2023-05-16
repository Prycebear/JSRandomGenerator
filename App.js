const armies = ['Space marines', 'Tyranids', 'Astra Militarum', 'Eldar', 'Orks', 'Dark Eldar', 'Imperial Knights'];
const point = [500, 1000, 1500, 2000, 3000, 5000];
const missionPack = ['Tempest of War', 'Arks of Omen', 'FFA']
const randomNumberGenerator = arr => {
    return Math.floor(Math.random() * arr.length);
}

let armyOne = armies[randomNumberGenerator(armies)];
let armyTwo = armies[randomNumberGenerator(armies)];
let points = point[randomNumberGenerator(point)];
let mission = missionPack[randomNumberGenerator(missionPack)];

console.log(`Todays game will be a match up between ${armyOne} & ${armyTwo} at ${points} while attempting to complete ${mission} missions`);