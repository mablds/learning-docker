module.exports = (req, res, next) => {
    if (!req.body.day || !req.body.month || !req.body.year) {
        return res.status(400).send('Informações inválidas');
    } else {
        let clockInReq = new Date(req.body.year, (req.body.month - 1), req.body.day); //new Date(YYYY, MM, DD) => Month - 1 because date.month is 0-indexed (0-11 / Jan-Dec);
        let clockServer = new Date();
        
        if(clockInReq.getDate() === clockServer.getDate() && clockInReq.getMonth() === clockServer.getMonth() && clockInReq.getFullYear() === clockServer.getFullYear()) {
            next();
        } else {
            return res.status(400).send('Data de entrada inválida. ');
        }
    }
}