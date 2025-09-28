import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom'; // This is a hook provided by react-router-dom

/*
in place of props here, object destructing can be used to quickly access
propeties of the object like so function Modal({children}) { .. }
'children' is a reserved prop name and always refers to the children of a component'
*/
function Modal(props) {
    //return a function that lets you navigate programmatically
    const navigate = useNavigate();

    function closeHandler() {
        // Goes one step back to previous route
        // could also use navigate('/') to return to home route
        navigate('..')
    }

    return <>
        <div className={classes.backdrop} onClick={closeHandler} />
        {/* The default valie of open is true anyway hence '=true' can be omitted */}
        <dialog open={true} className={classes.modal}>
            {props.children}
        </dialog>
    </>
}

export default Modal;