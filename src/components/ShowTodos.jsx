import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddTodos from "./AddTodos";
// import './ShowTodo.css';


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
          // alert("Todo deleted!");
          window.location.reload();
      } catch (error) {
          console.error("Error deleting todo:", error);
          alert("Failed to delete todo. Please try again later.");
      }
  };

    return <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <AddTodos />

      <div className="max-w-md mx-4 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Your Todos</h2>
          {todos.map(todo => {
            return ( <div className="mb-4">
              {/* {todo._id}
              &nbsp;&nbsp;&nbsp;&nbsp; */}
              <h3 className="text-md font-semibold mb-2">{todo.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{todo.description}</p>
              <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600" onClick={ () => handleDelete(todo._id)}>Delete</button>
            </div> )
          })}
      </div>
    </div>
}

export default ShowTodos;