const config = require('./config/config.js')
const PORT = 8080;
const app = config.setUp();

app.listen(PORT, () => {
    console.log(` --------------------------------------------\n|              SERVER ON!                   |\n|      Running on http://localhost:${PORT}     |\n --------------------------------------------`)
})
console.log(`Running on http://localhost:${PORT}`);