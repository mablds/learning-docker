

module.exports.byId = async(req, res) => {
   // try {
        const consultant = req.params.id;
        const date = new Date();
        const hour = await date.getHours();
        const min = await date.getMinutes();
        res.status(200).json({
            "employerId": consultant,
            "hour": hour,
            "min": min,
            "localTimeTest": `${date.toLocaleTimeString()}`,
            "todayServer": `${date.toLocaleDateString()}`
        });
   // } catch {
   //     res.status(500).send('Internal Error')
   // }
}