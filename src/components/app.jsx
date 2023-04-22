import React from "react"
import Header from "./header"
import Note from "./note"
import Footer from "./footer"
import notes from "../notes"
console.log(notes);
function App() {
    return (<div>
        <Header />
        {notes.map((noteItem) =>  <Note title = {noteItem.title}
                content = {noteItem.content} key = {noteItem.id}/>
         )}
        
        <Footer/>
    </div>);
}
export default App;