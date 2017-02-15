import React from "react";
import { render } from "react-dom";

import { Note } from "./components/Note";

class Container extends React.Component {

    constructor(props) {
        super();
        this.state = {
            comments: [
                'This is my very first note.',
                'Second and sweet note.',
                'Third one of course!'
            ]
        };
    };
    updateNote(newNote, i) {
        var notes = this.state.comments;
        notes[i] = newNote;
        this.setState({ comments: notes });

    };
    prepareNote(note, i) {
        return (
            <Note key={i}
                index={i}
                updateNote={(newNote, i) => this.updateNote(newNote, i)}
                removeNote={(i) => this.removeNote(i)}>
                {note}
            </Note>
        );
    };
    removeNote(i) {
        var notes = this.state.comments
        notes.splice(i, 1)
        this.setState({ comments: notes });
    };

    addNote(text) {
        var notes = this.state.comments;
        notes.push(text);
        this.setState({ comments: notes });
    };
    render() {
        return (
            <div className="notes-container">
                <div>
                    <button className="btn primary"
                        onClick={()=>this.addNote('Initial note')}>
                        Add note
                        </button>
                </div>
                {
                    this.state.comments.map((note, i) => this.prepareNote(note, i))
                }
            </div>
        )
    };
}

render(<Container />, document.getElementById('container'));