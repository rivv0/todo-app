import { useState } from "react";
export function TodoInput(props) {
    const { handleAdd } = props
    const [newTodo, setNewTodo] = useState("")

    return (
        <div className="input-container">
        <input value={newTodo} onChange = {(e) => {setNewTodo(e.target.value)}} placeholder="add task"/>
        <button onClick={() => {
            if(!newTodo) {return}
            handleAdd(newTodo)
            setNewTodo("")
        }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
    }