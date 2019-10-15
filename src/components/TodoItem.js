import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title ,handleDelete,handleEdit} = this.props;

        return (
            <li className="list-group-item d-flex justify-content-between border-0 mb-3">
                <h6 className=""> {title} </h6>

                <div className="todo-icon">
                    <span className="mx-2">
                        <i className="fas fa-pen yellow" onClick={handleEdit}></i>
                    </span>
                    <span className="mx-2 " onClick={handleDelete}>
                        <i className="fa fa-trash yellow"></i>
                    </span>
                </div>
            </li>
            );
    }
}

