//rafce snippet

import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color ={showAdd ? "red" : "green"} text = {showAdd ? "Close" : "Add"} onClick = {onAdd}></Button>
            <Button text = "Bye"/> {/*reusing components and passing in different values for the props*/}
        </header>
    )
}

Header.defaultProps = {
    title:'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired, //This sets the default data type

}

//CSS within JS
// const headingStyle = {
//     color:'red',
//     backgroundColor: 'black'
//use by putting <h1 style = {headingStyle}>{title}</h1>
// }


export default Header
