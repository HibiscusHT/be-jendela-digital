const { DataTypes, Model } = require('sequelize')
const sequelize = require('./sequelize.js')

class Activity extends Model {}

Activity.init({
    email: {
        type: DataTypes.STRING
    },
    title: {
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
    modelName: 'activity'
})

module.exports = Activity