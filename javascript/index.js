// fnm env --use-on-cd | Out-String | Invoke-Expression
// fnm use --install-if-missing 20
// node -v
// npm -v

const http = require('http')
const fs = require('fs')

const PORT = 3000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: file not found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(PORT, function(error){
    if (error) {
        console.log("Something went wrong")
    } else {
        console.log("Server is listening on port " + PORT)
    }
})

console.log("Hello world")
