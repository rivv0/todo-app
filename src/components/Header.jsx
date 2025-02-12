export function Header(props) {
    const { todos } = props
    const todosLength = todos.length

    const isTaskPural = todosLength > 1 ? "tasks" : "task"
    return (
        <header>
            <h1 >You have  {todosLength}  open {isTaskPural}</h1>
        </header>
    )
}