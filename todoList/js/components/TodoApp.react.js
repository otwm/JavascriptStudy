import React from 'react';
import Header from './Header.react.js';
import TodoList from './TodoList.react.js';
import Footer from './Footer.react.js';

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <TodoList/>
                <Footer/>
            </div>
        )
    }
}

module.exports = TodoApp;