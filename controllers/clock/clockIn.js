

module.exports.byId = async(req, res) => {
   // try {
        const consultant = req.params.id;
        
        res.status(200).json({"hehe":"hihi"});
   // } catch {
   //     res.status(500).send('Internal Error')
   // }
}