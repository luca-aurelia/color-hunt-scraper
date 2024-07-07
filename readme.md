# Color Hunt Palettes Scraper

## Installation:

To install this project, clone the repository from GitHub using the following command:

```bash
git clone https://github.com/your-username/color-hunt-palettes-scraper.git
```


## Usage
To run the scraper, navigate to the project directory and execute the following command:

```npm i puppeteer```

```node index.js```

This will launch the scraper and retrieve the color palettes from Color Hunt.


## What the Code Does
This Node.js script uses the Puppeteer library to scrape color palettes from Color Hunt. It launches a headless Chrome browser, navigates to four different pages on Color Hunt (new, trendy, popular, and random), and extracts the color palettes from each page.

The script uses the page.evaluate() method to execute a function in the context of the page, which allows it to interact with the page's DOM. The function uses querySelectorAll() to select all elements with the class palette, and then maps over each palette to extract the individual colors.

The script filters out any palettes that contain blank elements, and then returns an object with the scraped palettes organized by category (new, trendy, popular, and random).

## Output
The script outputs the scraped palettes in a pretty-printed JSON format to the console. The output will look something like this:

```bash
{
  "new": [
    ["#FF69B4", "#33CC33", "#666666"],
    ["#FFC080", "#808080", "#FFFFFF"]
  ],
  "trendy": [
    ["#8BC34A", "#E5E5EA", "#9C27B0"],
    ["#4CAF50", "#F8E231", "#2196F3"]
  ],
  "popular": [
    ["#FF9800", "#9C27B0", "#4CAF50"],
    ["#E5E5EA", "#66D9EF", "#FFC107"]
  ],
  "random": [
    ["#9E9E9E", "#66D9EF", "#FF9800"],
    ["#4CAF50", "#F8E231", "#2196F3"]
  ]
}
```


## License
--

## Contributing

- [maybe9999](https://github.com/maybe9999)


## Issues
If you encounter any issues while running the script, please open an issue on the GitHub repository.
