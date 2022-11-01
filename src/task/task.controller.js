
const uuid = require("uuid")

const Task = require('../models/taskModels')

const createTask = async (userId, data) => {
    const newTask = await Task.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        response: data.response,
        calification: data.calification,
        userId: userId

    })
    console.log("hola")
    return newTask
}

const getMyTask = async (id, userId) => {

    const data = await Task.findOne({
        where:{
            userId: id
        }
    })
    return data
}

const editTask = async (id,  role, data) => {
if ('teacher' === role){
    const { response, userId, title, description, calification, ...restOfProperties} = data
    const res = await Task.update(
        {...restOfProperties, calification},
        {where: {id: id }}
   
    )
    return res
}
}

const editTaskByStudent = async (id, role, data) => {
    if ('normal' === role){
        const {title, description, calification, userId, response, ...restOfProperties} = data
        console.log("first")
        const res = await Task.update(
            {...restOfProperties, response},
           {where:{id: id }}
        );

        console.log(res)
        return res
    }
    }


module.exports = {
    createTask,
    getMyTask,
    editTask,
    editTaskByStudent
}