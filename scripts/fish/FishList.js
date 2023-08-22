// Import the function that returns a copy of the fish array
import { getFish } from "../database.js"

export const FishList = () => {
    const fishes = getFish()
    let htmlString = '<article class="fishList">'
    for (const fish of fishes) {
            htmlString += `<section class="fishCard">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`       
    }

    htmlString += `</article>`

    return htmlString
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (fish of holyFish) {
        if(fish.length % 3 === 0){
            console.log(fish.length)
        }
    }

    return holyFish
}

export const mostSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFish = []
    for (const fish of soldierFish) {
        if(fish.length % 5 === 0)
        console.log(fish.length)
        
    }
   
   
   
    return soldierFish
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of regularFish) {
        if(fish.length % 2 === 0)
        console.log(fish.length)
    }
    return regularFish
}