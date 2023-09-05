const { DataTypes, Model } = require('sequelize')
const sequelize = require('./sequelize.js')

class Todo extends Model {}

Todo.init({
    activity_group_id: {
        type: DataTypes.NUMBER
    },
    title: {
        type: DataTypes.STRING
    },
    is_active: {
        type: DataTypes.NUMBER
    },
    priority: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    },
    deleted_at: {
        type: DataTypes.DATE
    }
},{
    sequelize,
    modelName: 'todo'
})

module.exports = Todo