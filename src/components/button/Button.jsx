const Button = ({content, type, className}) => {
    return (
        <button type={type} className={`button__${className}`}>
            {content}
        </button>
    )
}

export default Button;