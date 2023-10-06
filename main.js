const defaultAttributeScores = [15, 14, 13, 12, 10, 8];

function shuffleArray(arr) {
    let shuffled = Array.from(arr);
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

class Player{
    constructor(characterName = 'John DungeonsAndDragons'){
        this.name = characterName;
        this.attributes = {
            str:0,
            dex:0,
            con:0,
            int:0,
            wis:0,
            cha:0,
        };
        let shuffleAtri = shuffleArray(defaultAttributeScores);
        for (const [key, value] of Object.entries(this.attributes)){
            let attributeValue = shuffleAtri.pop();
            this.attributes[key] = attributeValue;
        }
    }
    rollAttributes(){
        console.log('Rolling dice...')
        for(const key in this.attributes){
            let results = diceRoller(4, 6);
            results.sort(function(a, b){return a - b});
            results.shift();
            let sum = sumArrayElements(results);
            this.attributes[key] = sum;
        }
    }
    
    printPlayer(){
        console.log(`NAME: ${this.name}`);
        for (const [key, value] of Object.entries(this.attributes)) {
            console.log(`${key.slice(0, 3).toUpperCase()}: ${value}`);
        }
    }
}

function diceRoller(times, sides){
    let results = [];
    for(let i = 0; i < times; i++){
        results.push(Math.floor(Math.random() * sides + 1));
    }
    return results;
}

function sumArrayElements(array){
    let sum = 0;
    for (value in array){
        sum += array[value];
    }
    return sum;
}

const player01 = new Player();
player01.printPlayer();
const player02 = new Player('Jane Pathfinder');
player02.rollAttributes();
player02.printPlayer();
