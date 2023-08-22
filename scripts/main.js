import { getFish } from './database.js'
import { FishList } from './fish/FishList.js'
import { mostHolyFish } from './fish/FishList.js'
import { mostSoldierFish } from './fish/FishList.js'
import { nonHolyFish } from './fish/FishList.js'
import { tipList } from './tips/TipList.js'
import { locationList } from './locations/LocationList.js'


const allFish = getFish()
for (const fish of allFish) {
    console.log(fish)
}

const holyFish = mostHolyFish()
for (const fish of holyFish) {
    console.log(fish)
    
}
const soldierFish = mostSoldierFish()
for (const fish of soldierFish) {
    console.log(fish)
}

const regularFish = nonHolyFish()
for (const fish of regularFish) {
    console.log(fish)
    
}

const allTips = tipList()
for (const tip of allTips) {
    console.log(tip)
    
}

const allLocations = locationList()
for (const location of allLocations) {
    console.log(location)
    
}

const fishListElement = document.querySelector(".fishList")
const tipListElement = document.querySelector(".tipList")
const locationListElement = document.querySelector(".locationList")

fishListElement.innerHTML = FishList()
tipListElement.innerHTML = tipList()
locationListElement.innerHTML = locationList()


