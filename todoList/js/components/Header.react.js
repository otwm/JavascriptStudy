import React from 'react';
import NewTodo from './NewTodo.react.js';

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <h1>todos</h1>
                <NewTodo
                    id="newTodo"
                    placeholder="새로운 태스크를 입력하세요."
                    onSave={this._onSave}
                />
            </header>
        );
    }
    _onSave(){
        console.log('_onSave');
    }
}

module.exports = Header;