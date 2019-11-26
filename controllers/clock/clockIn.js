

module.exports.byId = (req, res) => {
   
   res.status(200).json(
      {
         "id" : req.params.id,
	      "day": req.body.day,
	      "month": req.body.month,
	      "year": req.body.year
      }
   );
}