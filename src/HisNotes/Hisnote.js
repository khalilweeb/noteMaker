import './Hisnotes.css'

const Hisnote = props => {


    const style = {
        color : 'white'
    }

        return (
            <div className="hisnote">
                <h1>{props.title}</h1>
                <p>{props.note}</p>
                <button>X</button>
            </div>

        )

}

export default Hisnote;