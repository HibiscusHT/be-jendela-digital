const activities = require('./activity.js')
class activity {
    async postOne(req,res){
        const email = req.body.email
        const title = req.body.title
        try {
            await activities.create({
                email: email,
                title: title,
                created_at: (new Date).toUTCString(),
                updated_at: (new Date).toUTCString()
            })
            const data = await activities.findOne({
                attributes: ['id','email','title','created_at','updated_at'],
                order: [['createdAt','desc']]
            })
            res.status(200).json({
                status: 'Success',
                message: 'Success',
                data: data
            })
        } catch (e) {
            res.status(400).json({
                status: 'Failed',
                message: e.message 
            })
        }
        
    }
    async getAll(req,res){
        try {
            const data = await activities.findAll({
                attributes: ['id','email','title','created_at','updated_at'],
                order: [['createdAt','desc']]
            })
            res.status(200).json({
                status: 'Success',
                message: 'Success',
                data: data
            })
        } catch (e) {
            res.status(400).json({
                status: 'Failed',
                message: e.message
            })
        }
    }
    async getOne(req,res){
        try {
            const data = await activities.findAll({
                attributes: ['id','email','title','created_at','updated_at'],
                where: {
                    id: req.params.user_id
                },
                order: [['createdAt','desc']]
            })
            res.status(200).json({
                status: 'Success',
                message: 'Success',
                data: data
            })
        } catch (e) {
            res.status(400).json({
                status: 'Failed',
                message: e.message
            })
        }
    }
    async updateOne(req,res){
        try {
            await activities.update({
                title: req.body.title,
                updated_at: (new Date).toUTCString()
            },{
                where: {
                    id: req.params.user_id
                } 
            })
            const data = await activities.findAll({
                attributes: ['id','email','title','created_at','updated_at'],
                where: {
                    id: req.params.user_id
                },
                order: [['createdAt','desc']]
            })
            res.status(200).json({
                status: 'Success',
                message: 'Success',
                data: data
            })
        } catch (e) {
            res.status(400).json({
                status: 'Failed',
                message: e.message
            })
        }
    }
    async destroyOne(req,res){
        try {
            await activities.destroy({
                where: {
                    id: req.params.user_id
                } 
            })
            const data = await activities.findAll({
                attributes: ['id','email','title','created_at','updated_at'],
                where: {
                    id: req.params.user_id
                },
                order: [['createdAt','desc']]
            })
            if(data.length == 0){
                
            res.status(404).json({
                status: 'Failed',
                message: `Activity id:${req.params.user_id} not found`
            })
            } else {
                
            res.status(200).json({
                status: 'Success',
                message: 'Success',
                data: data
            })
            }
        } catch (e) {
            res.status(400).json({
                status: 'Failed',
                message: e.message
            })
        }
    }
}

module.exports = new activity()