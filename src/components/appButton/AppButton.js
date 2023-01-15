

const AppButton = ({onClick, buttonClass, text = null, iconUrl}) => {
    return (
        <button onClick={onClick} className={buttonClass}>
            <img src={iconUrl} alt={text} />
            {text}
        </button>
    )
}

export default AppButton;