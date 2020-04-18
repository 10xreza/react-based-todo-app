import React from 'react' 

const todos = ({todos , deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => 
            {
                return (
                <div className="box column is-two-thirds is-offset-one-fifth" key={todo.id}>
                    <span className="media-content" onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
                )
            })
    ) : (
    <div className="box ">
        <p className="has-text-centered media-content"> You have no todo's left. yay! </p>
    </div>
    )
    return(
        <div className="todos collection ">
            {todoList}
        </div>
    )

}

export default todos;