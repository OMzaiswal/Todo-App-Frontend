import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddTodos from "./AddTodos";
import './ShowTodo.css';


function ShowTodos() {

    const [todos, setTodos] = useState([])
  
    useEffect( () => {
      async function fetchTodos () {
        const res = await axios.get('http://localhost:3000/todos', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        setTodos(res.data);
        // console.log(res.data);
      }
      fetchTodos();
    },[])

    const handleDelete = async (id) => {
      try {
          await axios.delete(`http://localhost:3000/todos/${id}`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
          })
          // setTodos(todos.filter(todo => todo.id !== id));
          alert("Todo deleted!");
          window.location.reload();
      } catch (error) {
          console.error("Error deleting todo:", error);
          alert("Failed to delete todo. Please try again later.");
      }
  };

    return <div style={{display: "flex" }}>

      <AddTodos />

      <div style={{height:"500px", margin: "20px", paddingLeft: "50px", backgroundColor: "#90e0ef", border:"1px solid red"}}>
        <h2 style={{textDecoration: "underline"}}>Your Todos</h2>
          {todos.map(todo => {
            return ( <div>
              {/* {todo._id}
              &nbsp;&nbsp;&nbsp;&nbsp; */}
              {todo.title}
              &nbsp;&nbsp;&nbsp;&nbsp;
              ----
              &nbsp;&nbsp;&nbsp;&nbsp;
              {todo.description}
              &nbsp;&nbsp;
              <button style={{color:"red"}} onClick={ () => handleDelete(todo._id)}>Delete</button>
            </div> )
          })}
      </div>
    </div>
}

export default ShowTodos;