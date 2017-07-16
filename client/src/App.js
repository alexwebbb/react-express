import React from 'react';
import TitleComponent from './TitleComponent'

var glorp = React.createElement;



// please include num1 and num2
var AdditionComponent = (props) => {
    return glorp('div', { className: 'math' },
        props.num1 + props.num2
    )
}

var App = () => {
    return glorp('div', null,
        glorp(TitleComponent, { title: 'Wuthering Heights', color: 'rebeccapurple' }),
        glorp(AdditionComponent, { num1: 5, num2: 6 }),

    );
}

export default App;
