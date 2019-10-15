import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange , handleSubmit, editItem } = this.props

        return(
            <form onSubmit = {handleSubmit}>
                <div className="row">
                    <div className="col-md-10">
                        <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-white border-top-0 border-left-0   ">
                                        <i className="fa fa-plus yellow" />
                                    </div>
                                </div>

                                <input type="text" 
                                    className="form-control border-top-0 border-left-0 border-right-0" 
                                    placeholder="Add A Todo Item" 
                                    value={item}
                                    onChange={handleChange}
                                />
                        </div>
                    </div>

                    <div className="col-md-2">
                        <button type="submit" 
                        className=
                        { editItem ? "btn btn-warning text-light" : "btn btn-warning text-light" }>
                        { editItem ? 'Edit Item' : 'Add Item'} 
                        </button>
                    </div>
                </div>
            </form>
        );
        
    }
}
