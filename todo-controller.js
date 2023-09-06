const todos = require('./todos.js')
class todo {
    async postOne(req,res){
        const activity_group_id = req.body.activity_group_id
        const title = req.body.title
        try {
            await todos.create({
                activity_group_id: activity_group_id,
                title: title,
                is_active: 1,
                priority: 'very-high',
                created_at: (new Date).toUTCString(),
                updated_at: (new Date).toUTCString()
            })
            const datum = await todos.findAll({
                attributes: ['id','activity_group_id','title','is_active','priority','created_at','updated_at'],
                order: [['createdAt','desc']],
                limit: 1
            })
            const data = JSON.parse(JSON.stringify(datum))
            for(let items of data){
                if(items.is_active == 1){
                    items.is_active = true
                } else {
                    items.is_active = false
                }
            }
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
            let opt = {}
            if(req.query.activity_group_id == undefined){
                opt = {
                    attributes: ['id','activity_group_id','title','is_active','priority','created_at','updated_at'],
                    order: [['createdAt','desc']]
                }
            } else {
                opt = {
                    attributes: ['id','activity_group_id','title','is_active','priority','created_at','updated_at'],
                    where: {
                        activity_group_id: req.query.activity_group_id
                    },
                    order: [['createdAt','desc']]
                }
            }
            const datum = await todos.findAll(opt)
            const data = JSON.parse(JSON.stringify(datum))
             for(let items of data){
                if(items.is_active == 1){
                    items.is_active = true
                } else {
                    items.is_active = false
                }
            }  
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
            const datum = await todos.findAll({
                attributes: ['id','activity_group_id','title','is_active','priority','created_at','updated_at'],
                where: {
                    id: req.params.user_id
                },
                order: [['createdAt','desc']]
            })
            const data = JSON.parse(JSON.stringify(datum))
            for(let items of data){
               if(items.is_active == 1){
                   items.is_active = true
               } else {
                   items.is_active = false
               }
           }  
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
            await todos.update({
                title: req.body.title,
                is_active: (req.body.is_active == 'true')? 1 : 0,
                updated_at: (new Date).toUTCString()
            },{
                where: {
                    id: req.params.user_id
                } 
            })
            const datum = await todos.findAll({
                attributes: ['id','activity_group_id','title','is_active','priority','created_at','updated_at'],
                where: {
                    id: req.params.user_id
                },
                order: [['createdAt','desc']]
            })
            const data = JSON.parse(JSON.stringify(datum))
            for(let items of data){
               if(items.is_active == 1){
                   items.is_active = true
               } else {
                   items.is_active = false
               }
           }  
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
            await todos.destroy({
                where: {
                    id: req.params.user_id
                } 
            })  
                
            res.status(200).json({
                status: 'Success',
                message: 'Success' 
            }) 
        } catch (e) {
            res.status(400).json({
                status: 'Failed',
                message: e.message
            })
        }
    }
}

module.exports = new todo()