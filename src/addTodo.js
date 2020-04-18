import React,{ Component } from 'react' 

class addTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.AddTodo(this.state)
        document.querySelector(".input").value = ""
    }

    render() {
        return(
            <div className="box column is-two-thirds is-offset-one-fifth">
                <form onSubmit={this.onSubmit}>
                    <label>
                        Add new Todo:
                    </label>
                    <input type="text" className="input is-focused" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default addTodo;