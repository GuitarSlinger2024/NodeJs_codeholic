// const http = require('http')

// const server = http.createServer((req, res) => {
//   //   if (req.url === '/') {
//   //     res.end('Welcome to our home page')
//   //   }
//   //   if (req.url === '/about') {
//   //     res.end('Here is our short history')
//   //   }
//   //   res.end(`
//   //   <h1>Oops!</h1>
//   // <p>We can't seem to find the page you are looking for</p>
//   // <a href="/">back home</a>
//   //   `)
//   // ###################################
//   // ###################################
//   //
//   //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
//   // SWITCH TO IF, ELSE IF, ELSE (BELOW)
//   // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
//   if (req.url === '/') {
//     res.end(`
//   <h1>Welcome</h1>
//   <p>This is the home page</p>
//   <a href="/about">About</a>
//   `)
//   } else if (req.url === '/about') {
//     res.end(`
//     <h1>About Facing</h1>
//     <p>Here is our short history</p>
//     <a href="/">Home</a>
//     `)
//   } else {
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
//   }
// })

// server.listen(5000)

var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
