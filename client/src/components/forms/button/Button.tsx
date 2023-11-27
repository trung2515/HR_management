import './Button.scss'

const Button = ({...props}) => {
    const {type, label, action, onClick, className} = props
    return(
        <button 
            className={`btn btn-${action} ${className}`}
            type={type || 'button'}
            onClick={onClick}
            >
            {label}
        </button>
    )
}

export default Button