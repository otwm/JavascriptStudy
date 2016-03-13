import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './components/TodoApp.react.js'


class TodoAppTest extends React.Component {
    render() {
        return <h1>World</h1>
    }
}

ReactDOM.render(<TodoApp/>, document.getElementById('todoApp'));