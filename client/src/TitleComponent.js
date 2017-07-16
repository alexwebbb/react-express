import React from 'react';

var glorp = React.createElement;


// please include a title
var TitleComponent = (props) => {
    return glorp('div', null,
        glorp('h1', { style: { color: props.color } }, props.title)
    );
}

export default TitleComponent;