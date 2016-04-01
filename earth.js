const page = require('webpage').create()
page.settings.userAgent = 'Mozilla/5.0 (X11; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0'
page.viewportSize = { width: 1600, height: 800 }
page.clipRect = { top: 200, left: 600, width: 400, height: 400 }
page.open("https://goo.gl/maps/2e3GD9Xxfqv").then(() => {
  setTimeout(() => {
    page.render(`earth-${new Date().toISOString().replace(/([:\-]|\.\d{3})/g, '')}.png`)
    phantom.exit()
  }, 3500)
})

