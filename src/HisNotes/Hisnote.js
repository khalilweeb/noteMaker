import './Hisnotes.css'

const Hisnote = props => {


    const style = {
        color : 'white'
    }

        return (
            <div className="hisnote">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <button>CLOSE</button>
            </div>

        )

}

export default Hisnote;