#!/usr/bin/env node
import puppeteer from 'puppeteer'

const scrape = async url => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const elements = await page.evaluate(() => {
    const query = (selector, root = document) =>
      Array.from(root.querySelectorAll(selector))

    const scrapePalette = palette =>
      query('.place span', palette).map(colorElement => colorElement.innerText)

    const isNotBlank = string => string.trim().length > 0
    const doesNotHaveBlankElements = elements => elements.every(isNotBlank)

    return query('.palette')
      .map(scrapePalette)
      .filter(doesNotHaveBlankElements)
  })

  await browser.close()

  return elements
}

const main = async () => {
  const palettes = {
    new: await scrape('https://colorhunt.co/palettes'),
    trendy: await scrape('https://colorhunt.co/palettes/trendy'),
    popular: await scrape('https://colorhunt.co/palettes/popular'),
    random: await scrape('https://colorhunt.co/palettes/random')
  }

  const prettyJson = JSON.stringify(palettes, undefined, 2)
  console.log(prettyJson)
}

main()
