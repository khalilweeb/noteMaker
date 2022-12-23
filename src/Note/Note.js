import './note.css';


const MakeNote = props => {


    return (
        <div className="note"> 
            <h2>title</h2>
            <input type='text'  placeholder='Title' onChange={props.changed} />
            <h3>Note</h3>
            <input type='text' placeholder='note'/>
            <button  onClick={props.click}>Go</button>
        </div>

    )


}


export default MakeNote;