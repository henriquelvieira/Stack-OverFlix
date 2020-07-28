import React from 'react';



//const ButtonLink = () => <header id="main-header">JSHunt</header>
function ButtonLink(props) {
    return (
        
    <a href={props.href} className={props.className}>{props.children}</a>

    )


};

export default ButtonLink;