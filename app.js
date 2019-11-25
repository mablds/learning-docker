const config = require('./config/config.js')
const port = process.env.PORT || 3000
const app = config.setUpServer()
 
app.listen(port, () => {
    console.log(' ----------------------\n|      SERVER ON!      |\n|      Porta: ' + port + '     |\n ----------------------')
})