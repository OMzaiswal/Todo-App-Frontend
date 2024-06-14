import { useState } from "react";
import axios from "axios";


function AddTodos() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    
    return <div className="max-w-md mx-4 p-6 bg-white rounded-lg shadow-lg"> 
        <h2 className="text-lg font-semibold mb-4">Add New Todo</h2>
        <input 
        id="title" 
        placeholder="Title" 
        onChange={e => setTitle(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <textarea
        id="desc"
        placeholder="Type here"
        onChange={e => setDescription(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" 
            onClick={ async () => {
                const res = await axios.post("https://todo-api.uparkom.lol/todos", {
                    title: title,
                    description: description
                }, {
                    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
                });
                // alert(res.data.message);
                window.location.reload();
            }}>Add Todo</button>
    </div>
}

export default AddTodos;