import './Filler.css';

const Filler = ({width, height, content}) => {
    return (
        <div className="filler" style={{width, height}}>{content}</div>
    )
}

export default Filler;