import { useState } from 'react'
import '../CSS/ToDo.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import ToDoItems from './ToDoItems';

const ToDo = () => {

    let count = 0;
    const [todos,setTodos] = useState([]);
    const inputRef=useRef(null);

    

    const add = () =>{
const newNo=todos.length+1;
console.log(newNo);
        setTodos([...todos,{no:newNo,text:inputRef.current.value,display:""}])
        inputRef.current.value="";
        localStorage.setItem("todos_count",count)
    }
     




    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count=localStorage.getItem("todos_count");
    },[])

useEffect(()=>{
    console.log(todos);
    localStorage.setItem("todos",JSON.stringify(todos));
    setTimeout(()=>{
        
    },100);
},[todos])

  return (
    <div className='todo'>
        <div className='todo-header'>To-Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
            <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>

        </div>
        <div className="todo-list">
        {todos.map((item,index)=>{
            return <ToDoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
        })}
        </div>
    </div>
  )
}

export default ToDo