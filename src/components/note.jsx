import React from "react"
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
    function handleDelete() {
        props.onDelete(props.id);
    }
    return (<div className="note">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button onClick={handleDelete}><DeleteIcon/></button>
    </div>);
}

export default Note;