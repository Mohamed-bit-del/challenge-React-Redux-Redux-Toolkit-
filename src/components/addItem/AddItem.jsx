import React, { Component } from 'react'

export default class AddItem extends Component {

    state = {
        name: '',
        age: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (e.target.name.value === '' || e.target.age.value === '') {
            return false
        } else {
            this.props.addItem(this.state)
            this.setState({
                name: '',
                age: ''
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' id='name' onChange={this.handleChange} value={this.state.name} placeholder='Enter Name...' />
                <input type='number' id='age' onChange={this.handleChange} value={this.state.age} placeholder='Enter Age...' />
                <input type='submit' value='Add' />
            </form>
        )
    }
}
