//Imports required
import Sequalize from 'sequelize'

//Create Mysql db instance
const mysqlDB = new Sequalize('little_mix', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export default mysqlDB