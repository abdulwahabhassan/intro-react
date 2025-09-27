import classes from './Modal.module.css';

/*
in place of props here, object destructing can be used to quickly access
propeties of the object like so function Modal({children}) { .. }
'children' is a reserved prop name and always refers to the children of a component'
*/
function Modal(props) {
    return <>
        <div className={classes.backdrop} onClick={props.onClickModalBackdrop}>
            {/* The default valie of open is true anyway hence '=true' can be omitted */}
            <dialog open={true} className={classes.modal}>
                {props.children}
            </dialog>
        </div>
    </>
}

export default Modal;