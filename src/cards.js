// This file contains all the code for loading card objects with their respective names and images

class Card {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

// to return random cards everytime
function getRandomElements(array, count) {
    const shuffled = [...array];

    // Using Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, count);
}

const allium = new Card("allium", "./assets/flowers/allium.jpg");
const alstromeria = new Card("alstromeria", "./assets/flowers/alstromeria.jpg");
const aster = new Card("aster", "./assets/flowers/aster.jpg");
const azalea = new Card("azalea", "./assets/flowers/azalea.jpg");
const carnation = new Card("carnation", "./assets/flowers/carnation.jpg");
const daffodil = new Card("daffodil", "./assets/flowers/daffodil.jpg");
const daisy = new Card("daisy", "./assets/flowers/daisy.jpg");
const gardenia = new Card("gardenia", "./assets/flowers/gardenia.jpg");
const iris = new Card("iris", "./assets/flowers/iris.jpg");
const jasmine = new Card("jasmine", "./assets/flowers/jasmine.jpg");
const lavender = new Card("lavender", "./assets/flowers/lavender.jpg");
const lily = new Card("lily", "./assets/flowers/lily.jpg");
const marigold = new Card("marigold", "./assets/flowers/marigold.jpg");
const orchid = new Card("orchid", "./assets/flowers/orchid.jpg");
const peony = new Card("peony", "./assets/flowers/peony.jpg");
const poppy = new Card("poppy", "./assets/flowers/poppy.jpg");
const rose = new Card("rose", "./assets/flowers/rose.jpg");
const snapdragon = new Card("snapdragon", "./assets/flowers/snapdragon.jpg");
const sunflower = new Card("sunflower", "./assets/flowers/sunflower.jpg");
const tulip = new Card("tulip", "./assets/flowers/tulip.jpg");

const cards = [
    allium,
    alstromeria,
    aster,
    azalea,
    carnation,
    daffodil,
    daisy,
    gardenia,
    iris,
    jasmine,
    lavender,
    lily,
    marigold,
    orchid,
    peony,
    poppy,
    rose,
    snapdragon,
    sunflower,
    tulip,
];

async function loadCards(collection = getRandomElements(cards, 12)) {
    const loadCard = (item) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = item.url;

            img.onload = () => {
                item.img = img;
                resolve(item);
            };

            img.onerror = () => {
                console.error(`failed to load image of ${item.name}`);
                resolve(item);
            };
        });
    };

    const promises = collection.map(loadCard);
    const finishedCards = await Promise.all(promises);
    return finishedCards;
}

export default loadCards;
