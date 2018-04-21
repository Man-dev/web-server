module.exports = {
	requireAuthentication: function (req, res, next) {
		console.log('private route accessed!');
		next();
	},
	logger : function (req,res,next) {
		console.log(req.method);
		next();
	}
};