const md5 = require('md5')
class Helpers 
{
    async header(req,res,next)
    {
        const auth = req.get('Authorization')
        let check = ''
        req.auth = false 
        next()
    }
}

module.exports = new Helpers()