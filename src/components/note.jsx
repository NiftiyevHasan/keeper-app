import React from "react"

function Note(props) {
    function handleDelete() {
        props.onDelete(props.id);
    }
    return (<div className="note">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button onClick={handleDelete}>DELETE</button>
    </div>);
}

export default Note;