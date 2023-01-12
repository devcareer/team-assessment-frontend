import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const portalElement = document.getElementById('modal');

const Modal = props => {
  return (
    <Fragment>
      {' '}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
