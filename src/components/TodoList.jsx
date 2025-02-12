import { Todocard } from "./TodoCard";
export function TodoList(props) {
    const { todos, selectedTab } = props
    
    const filtertodoslist = selectedTab === 'All' ? todos : selectedTab === 'Completed' ? todos.filter(val => val.complete) : todos.filter(val => !val.complete)
    
    return (
        <>
            {filtertodoslist.map((todo, todoIndex) => {
                return (
                    <Todocard 
                    key={todoIndex}  
                    todoIndex={todos.find(val => val.input == todo.input)}      
                    {...props}
                    todo={todo}/>
                )
            })}
        </>
    );
}