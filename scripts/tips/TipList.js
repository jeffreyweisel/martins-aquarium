import { getTips } from "../database.js"

export const tipList = () => {
    const tankTips = getTips()
    let htmlString = '<article class="tipList">'
    for (const tip of tankTips) {
            htmlString += `<section class="tipCard">
            
            <div class="tip__name">${tip.name}</div>
        </section>
`       
    }

    htmlString += `</article>`

    return htmlString

}