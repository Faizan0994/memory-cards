// This file contains all the code for loading card objects with their respective names and images

class Card {
    constructor(name, url) {
        this.name = name;
        this.url = url;
        this.clicked = false;
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

const allium = new Card("allium", "./src/assets/flowers/allium.jpg");
const alstromeria = new Card(
    "alstromeria",
    "./src/assets/flowers/alstromeria.jpg"
);
const aster = new Card("aster", "./src/assets/flowers/aster.jpg");
const azalea = new Card("azalea", "./src/assets/flowers/azalea.jpg");
const carnation = new Card("carnation", "./src/assets/flowers/carnation.jpg");
const daffodil = new Card("daffodil", "./src/assets/flowers/daffodil.jpg");
const daisy = new Card("daisy", "./src/assets/flowers/daisy.jpg");
const gardenia = new Card("gardenia", "./src/assets/flowers/gardenia.jpg");
const iris = new Card("iris", "./src/assets/flowers/iris.jpg");
const jasmine = new Card("jasmine", "./src/assets/flowers/jasmine.jpg");
const lavender = new Card("lavender", "./src/assets/flowers/lavender.jpg");
const lily = new Card("lily", "./src/assets/flowers/lily.jpg");
const marigold = new Card("marigold", "./src/assets/flowers/marigold.jpg");
const orchid = new Card("orchid", "./src/assets/flowers/orchid.jpg");
const peony = new Card("peony", "./src/assets/flowers/peony.jpg");
const poppy = new Card("poppy", "./src/assets/flowers/poppy.jpg");
const rose = new Card("rose", "./src/assets/flowers/rose.jpg");
const snapdragon = new Card(
    "snapdragon",
    "./src/assets/flowers/snapdragon.jpg"
);
const sunflower = new Card("sunflower", "./src/assets/flowers/sunflower.jpg");
const tulip = new Card("tulip", "./src/assets/flowers/tulip.jpg");

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
                // Use canvas to convert it to dataURL
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                const dataURL = canvas.toDataURL("image/jpeg");
                item.img = dataURL;

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
