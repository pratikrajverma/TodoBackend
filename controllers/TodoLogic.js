
const Todo = require('../modals/todo')

const createTodo = async (req,res) => {
    try{
        const {title, description} = req.body;

        console.log('title, description', req)

        const response = await Todo.create({ 
            title,
            description
        })

        res.status(200).json({
            success: true,
            data: response,
            message: 'Todo created successfully'
        })


    }catch(err){
        console.error(err)
        res.status(500).json({
            success: false,
            message: 'An error occurred while creating todo',
            error: err,
        })
    }
}



const deleteTodo = async (req, res) => {
    try{
        const {id} = req.body;
     
        await Todo.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: 'Todo deleted successfully'
        })


    }catch(err){
        console.log('error while deleting todo')
        res.status(500).json({
            success: false,
            message: 'An error occurred while deleting todo',
            error: err,
        })
    }
}


const updateTodo = async (req, res) => {
    try{
        const {id, title, description} = req.body;

        const response = await Todo.findByIdAndUpdate(id, {title, description}).exec();

        res.status(200).json({
            success: true,
            data: response,
            message: 'Todo updated successfully'
        })


    }catch(err){
        console.log('error while updating todo')
        res.status(500).json({
            success: false,
            message: 'An error occurred while updating todo',
            error: err,
        })
    }
}


const getTodoById = async (req, res) => {
    try{
        console.log(req.params)

        const {id} = req.params 

        if(!id)
        {
            return res.status(500).json({
                success: false,
                message: 'Invalid ID',
            })
        }

        const response = await Todo.findById(id).exec();

        res.status(200).json({
            success: true,
            data: response,
            message: 'Todo fetched successfully',
        })


    }
    catch(error)
    {
        res.status(404).json({
            success: false,
            message: 'Todo not found',
            error: error,
        })
    }
}



const getAllTodo = async (req, res) => {
    try{
       
        const response = await Todo.find({})

        res.status(200).json({
            success: true,
            data: response,
            message: 'Todo fetched successfully',
        })


    }
    catch(error)
    {
        res.status(404).json({
            success: false,
            message: 'Todo not found',
            error: error,
        })
    }
}
module.exports = {createTodo, deleteTodo, updateTodo, getTodoById, getAllTodo}