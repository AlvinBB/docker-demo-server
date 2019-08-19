module.exports = {
	async apiTest( ctx ) {
		ctx.body = {
	        code: 0,
	        data :'This is message from node container'
	    }
	}
}