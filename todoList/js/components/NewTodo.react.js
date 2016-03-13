import React from 'react';

var ENTER_KEY_CODE = 13;

class NewTodo extends React.Component {
    render() {
        return (
            <input
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onBlur={this._save}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                //value={this.state.value}
                autoFocus={true}
                />
        );
    }

    _save() {
        console.log(1);
    }

    _onChange(){
        //console.log(2);
    }

    _onKeyDown(event){
        if (event.keyCode === ENTER_KEY_CODE) {
            var _this = this;
            console.log(112321);
            _this._save();
        }
    }
}

module.exports = NewTodo;