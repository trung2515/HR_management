import './InputField.scss';
// import '../../../assets/css/variables.scss';
const InputField = ({ ...props }) => {
    const { placeholder, type, name, className, onChange, errorMessage, value } = props;
    return (
        <>
            {name && <label className='input-label fs-s'>{name}</label>}
            {errorMessage && (
                <span className="fs-s error-text ml-1">{errorMessage}</span>
            )}
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
                {/* className={`input-field ${className}`}
                type={type || 'text'}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                */}

        </>
    );
};


export default InputField;