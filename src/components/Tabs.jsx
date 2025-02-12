export function Tabs(props) {
    const {todos, selectedTab, setSelectedTab} = props
    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav>
            {tabs.map((tab,tabIndex) => {
                const numofTask = tab === 'All' ? todos.length : tab === 'Open' ? todos.filter(todo => !todo.complete).length : todos.filter(todo => todo.complete).length
                return (
                    <button onClick={() => {
                        setSelectedTab(tab)
                    }} key={tabIndex} className={"tab-button"+(tab === selectedTab ? 'tab-selected' : ' ') }><h4>{tab}<span>{numofTask}</span></h4></button>
                )
            })}
            <hr />
        </nav>
    )
}