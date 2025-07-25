// This file contains all the code for loading card objects with their respective names and images

import alliumURL from "./assets/flowers/allium.jpg";
import alstromeriaURL from "./assets/flowers/alstromeria.jpg";
import asterURL from "./assets/flowers/aster.jpg";
import azaleaURL from "./assets/flowers/azalea.jpg";
import carnationURL from "./assets/flowers/carnation.jpg";
import daffodilURL from "./assets/flowers/daffodil.jpg";
import daisyURL from "./assets/flowers/daisy.jpg";
import gardeniaURL from "./assets/flowers/gardenia.jpg";
import irisURL from "./assets/flowers/iris.jpg";
import jasmineURL from "./assets/flowers/jasmine.jpg";
import lavenderURL from "./assets/flowers/lavender.jpg";
import lilyURL from "./assets/flowers/lily.jpg";
import marigoldURL from "./assets/flowers/marigold.jpg";
import orchidURL from "./assets/flowers/orchid.jpg";
import peonyURL from "./assets/flowers/peony.jpg";
import poppyURL from "./assets/flowers/poppy.jpg";
import roseURL from "./assets/flowers/rose.jpg";
import snapdragonURL from "./assets/flowers/snapdragon.jpg";
import sunflowerURL from "./assets/flowers/sunflower.jpg";
import tulipURL from "./assets/flowers/tulip.jpg";

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

function createCards() {
    const allium = new Card("Allium", alliumURL);
    const alstromeria = new Card("Alstromeria", alstromeriaURL);
    const aster = new Card("Aster", asterURL);
    const azalea = new Card("Azalea", azaleaURL);
    const carnation = new Card("Carnation", carnationURL);
    const daffodil = new Card("Daffodil", daffodilURL);
    const daisy = new Card("Daisy", daisyURL);
    const gardenia = new Card("Gardenia", gardeniaURL);
    const iris = new Card("Iris", irisURL);
    const jasmine = new Card("Jasmine", jasmineURL);
    const lavender = new Card("Lavender", lavenderURL);
    const lily = new Card("Lily", lilyURL);
    const marigold = new Card("Marigold", marigoldURL);
    const orchid = new Card("Orchid", orchidURL);
    const peony = new Card("Peony", peonyURL);
    const poppy = new Card("Poppy", poppyURL);
    const rose = new Card("Rose", roseURL);
    const snapdragon = new Card("Snapdragon", snapdragonURL);
    const sunflower = new Card("Sunflower", sunflowerURL);
    const tulip = new Card("Tulip", tulipURL);

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
    return cards;
}

async function loadCards(collection = getRandomElements(createCards(), 12)) {
    const loadCard = (item) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = item.url;

            img.onload = () => {
                // Use canvas to convert it to dataURL
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                const dataURL = canvas.toDataURL("image/jpeg");
                console.log(dataURL);
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
