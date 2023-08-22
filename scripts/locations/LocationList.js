import { getLocation } from "../database.js"

export const locationList = () => {
    const locations = getLocation()
    let htmlString = '<article class="locationList">'
    for (const location of locations) {
            htmlString += `<section class="locationCard">
            
            <div class="location__name">${location.name}</div>
        </section>
`       
    }

    htmlString += `</article>`

    return htmlString

}