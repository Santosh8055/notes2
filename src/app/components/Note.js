import React from "react";

export class Note extends React.Component {
    constructor(props) {
        super();
        this.state = {
            editing: false
        };
    };
    edit() {
        this.setState({ editing: true });
    };
    remove() {
        this.props.removeNote(this.props.index);
    };
    save() {
        this.props.updateNote(this.refs.textAreaRef.value, this.props.index);
        this.setState({ editing: false })
    };
    renderNormal() {
        return (
            <div className="note-container">
                <div className="note-body">
                    {this.props.children}
                </div>
                <div className="note-footer">
                    <button onClick={() => this.edit()} className="btn success">Edit</button>
                    <button onClick={() => this.remove()} className="btn danger">Remove</button>
                </div>
            </div>
        );
    };
    renderForm() {
        return (
            <div className="note-container">
                <textArea
                    ref="textAreaRef"
                    className="note-edit-area" defaultValue={this.props.children}></textArea>
                <div className="note-footer">
                    <button onClick={() => this.save()} className="btn success">save</button>
                </div>
            </div>
        );
    };
    render() {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }
}