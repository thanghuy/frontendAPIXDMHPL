import React from 'react';

const Alert = (props) => {
    return (
        <div className="alert alert-danger" role="alert">
            {props.nameErrors}
        </div>
    );
};

export default Alert;