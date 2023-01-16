

const AppButton = ({onClick, buttonClass, text = null, iconUrl}) => {
    return (
        <button onClick={onClick} className={buttonClass}>
            {iconUrl ? <img src={iconUrl} alt={text} /> : null}
            {text}
        </button>
    )
}

export default AppButton;