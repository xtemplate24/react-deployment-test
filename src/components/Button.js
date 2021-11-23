import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    //If you want to set the function within the component


    return (
        <button onClick = {onClick} className = 'btn' style={{backgroundColor: color}}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propType = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
