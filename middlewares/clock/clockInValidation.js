module.exports = (req, res, next) => {
    //new Date('YYYY-MM-DD')
    if (!req.body.day || !req.body.month || !req.body.year) {
        return res.status(400).send('Informações inválidas');
    } else {
        const clockInReq = new Date(`${req.body.year}-${req.body.month}-${req.body.day}`);
        const clockServer = new Date();
        
        //console.log('wat'+clockServer.getUTCDay());
        console.log(Date.now());

        if(!clockInReq < clockServer || !clockServer < clockInReq) {
            next();
        } else {
            return res.status(400).send('Data de entrada inválida. ');
        }

    }
}