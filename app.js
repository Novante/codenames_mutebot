import puppeteer from "puppeteer/internal/puppeteer.js";

// bot setup

    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage();

    await page.goto('https://codenames.game/room/piano-shoulder-wagon', {waitUntil: 'networkidle0'})

    await page.type('#nickname-input', 'CodeBot')
    await page.click('.button.jsx-2506078312')

await page.waitForNetworkIdle({idleTime: 2000})
await page.screenshot({path: 'test.png'})


// let redPlayerList = await page.evaluate(() => document.querySelector('.jsx-1562487247 > :nth-child(3)').querySelector('section').innerText)

let redPlayerList = await page.evaluate(() => {
    let res = Array.from(document.querySelector('.jsx-1562487247 > :nth-child(3)').querySelectorAll('section'))
    let ans = res.map(el => {return el.innerText})
    return ans
})

console.log(redPlayerList)










