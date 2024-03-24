import { useState } from "react";
import axios from "axios";


function AddTodos() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    
    return <div style={{padding:"20px", width:"400px", height:"120px", border:"1px solid red", margin:"20px", backgroundColor:"#ade8f4"}}> 
        <div>
        Enter Todo Title <input id="title" placeholder="Title" onChange={e => setTitle(e.target.value)}/>
        <br></br><br></br>
        </div>
        <div>
        Enter Todo Description <input id="desc" placeholder="Type here"
        onChange={e => setDescription(e.target.value)} />
        
        <br></br><br></br>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
            <button style={{color:"green"}} id="addTodo" onClick={ async () => {
                const res = await axios.post("http://localhost:3000/todos", {
                    title: title,
                    description: description
                }, {
                    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
                });
                alert(res.data.message);
                window.location.reload();
            }}>Add Todo</button>
        </div>
    </div>
}

export default AddTodos;