import './AppInfo.css';

const AppInfo = ({header, content}) => {
    return (
        <>
            <div className='info_header'>{`${header}`}</div>
            <p className='info_content'>{content}</p>
        </>
    )
}

export default AppInfo;