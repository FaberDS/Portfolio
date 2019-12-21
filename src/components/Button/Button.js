import React from 'react';

function Button(props) {
    const {_content, _onClick, _class, _icon} = props;
    return (
            <div className={_class+ ' btn'} onClick={_onClick}>
                  <i class={_icon}></i>
                  {_content}
            </div>
        
    )
}

export default Button;
