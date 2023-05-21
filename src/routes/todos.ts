// normal importing express...


// import express from 'express';
//  const router = express.Router();


//instead of importing entire express object extracting wat we want..Router we need

import {Router} from 'express';
import {Todo} from '../models/todo';         // importing from named "Todo"

type RequestBody = { text: string };
type RequestParams = { todoId:string};

let todos: Todo[] =[];                      // const--> let because i want override and create new array when delete router api..

const router= Router();

router.get('/', (req,res,next)=>{
res.status(200).json({todos:todos});
});

// normal export
//module.exports=router;


router.post('/todo', (req,res,next)=>{
    const body = req.body as RequestBody;
    const newTodo:Todo ={
        id: new Date().toISOString(),
        text:body.text,
    };

    todos.push(newTodo);
    res.status(201).json({message: 'Added Todo', todo:newTodo, todos:todos});
})

router.put('/todo/:todoId', (req,res,next)=>{
    const params = req.params as RequestParams;
    const tid= params.todoId;
    const body = req.body as RequestBody;
    const todoIndex=todos.findIndex(todoItem=>todoItem.id===tid);
    if(todoIndex>=0){
      todos[todoIndex] = { id: todos[todoIndex].id, text: body.text};
      return res.status(200).json({message:'updated todo', todos:todos});
    }
    res.status(404).json({message:'could not find todo for this id.' });
});



router.delete('/todo/:todoId', (req,res,next)=>{
const params = req.params as RequestParams;
todos=todos.filter((todoItem)=>todoItem.id !== params.todoId);
res.status(200).json({message: 'Deleted todo', todos:todos});
});


//exporting default

export default router;