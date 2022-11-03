const puppeteer = require('puppeteer')


const browser = await puppeteer.launch({headless: false})
const page = await browser.newPage();

await page.goto('https://codenames.game/room/reindeer-russia-stick', {waitUntil: 'networkidle0'})

await page.type('#nickname-input', 'CodeBot')
await page.click('.button.jsx-2506078312')

await page.waitForNetworkIdle({idleTime: 2000})

await page.waitForFunction(
    'document.querySelector("#layoutRoot").innerText.includes("you need to join")'
)

console.log('set up done')

let redPlayerList = await page.evaluate(() => {
    let res = Array.from(document.querySelector('.red > :nth-child(3)').querySelectorAll('section'))
    let ans = res.map(el => {
        return el.innerText
    })
    return ans
})

let redSpymasterList = await page.evaluate(() => {
    let res = Array.from(document.querySelector('.red > :nth-child(6)').querySelectorAll('section'))
    let ans = res.map(el => {
        return el.innerText
    })
    return ans
})

let bluePlayerList = await page.evaluate(() => {
    let res = Array.from(document.querySelector('.blue > :nth-child(3)').querySelectorAll('section'))
    let ans = res.map(el => {return el.innerText})
    return ans
})

let blueSpymasterList = await page.evaluate(() => {
    let res = Array.from(document.querySelector('.blue > :nth-child(6)').querySelectorAll('section'))
    let ans = res.map(el => {
        return el.innerText
    })
    return ans
})

export default
