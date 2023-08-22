const database = {
    fish: [
        {
            id: 1,
            name: "Bart",
            image:"https://e360.yale.edu/assets/site/Atlantic-Salmon_Getty-Small.jpg",
            species:"Salmon",
            food: "crustaceans",
            length: "58 inches",
            location:["Atlantic Ocean", "Pacific Ocean"] 
        },
        {
            id: 2,
            name: "Homer",
            image:"https://www.saltwatersportsman.com/wp-content/uploads/sites/19/2021/09/swordfish-midatlantic-fishing-sls0619_f1-swrd_mid-atlantic_swordfish33.jpg",
            species:"Swordfish",
            food: ["mackerel", "barracudinas", "silver hake", "rockfish", "herring","lanternfishes"],
            length: "168 inches",
            location:["Atlatic Ocean", "Indian Ocean", "Pacific Ocean"]
        },
        {
            id: 3,
            name: "Lisa",
            image:"https://nationaltoday.com/wp-content/uploads/2022/06/9-Tuna-Rights-Day.jpg.webp",
            species:"Tuna",
            food: ["herring", "bluefish", "mackerel"],
            length: "120 inches",
            location: ["Atlantic Ocean", "Pacific Ocean"]
        },
        {
            id: 4,
            name: "Marge",
            image:"https://riverheadlocal.com/wp-content/uploads/2019/12/2019_1215_bluefish_adobe-stock.jpeg",
            species:"Bluefish",
            food: ["Squid", "Menhaden", "Silversides"],
            length: "39 inches",
            location:["Atlantic Ocean", "Pacific Ocean", "Gulf of Mexico"]
        },
    
        ],
        
        locations : [
               {
                id: 1,
                name: "Atlantic Ocean"
               },
               {
                id: 2,
                name: "Pacific Ocean"
               },
               {
                id:3,
                name: "Indian Ocean"
               },
               {
                id:4,
                name: "Gulf of Mexico"
               } 
        ],
        
        tankCare: [
            {
                id:1,
                name: "Gravel"
            },
            {
                id:2, 
                name: "Decorations"
            },
            {
                id:3,
                name: "Water Conditioner"
            },
            {
                id:4,
                name: "Net"
            },
            {
                id:5,
                name: "Gravel washer"
            }

        ]
        
    }








export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tankCare.map(tankCare => ({...tankCare}))
}

export const getLocation = () => {
    return database.locations.map(locations => ({...locations}))
}