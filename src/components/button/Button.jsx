const Button = ({content, type, className, onClick = () => console.log('Click')}) => {
    return (
        <button 
            type={type} 
            className={`button__${className}`}
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export default Button;