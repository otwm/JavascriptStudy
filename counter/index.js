import React from 'react'
import ReactDOM from 'react-dom'

//컴포넌토 임포트
import Counter from './components/Counter'

//리듀서
import counter from './reducers'

//리덕스 스토어
import {createStore} from 'redux'

//리듀서를 이용하여 스토어를 생성한다.
const store = createStore(counter)

//const 를 잘 사용할 것!!
const rootEl = document.getElementById('root')

function render() {
    ReactDOM.render(
        <Counter
            //카운터에는 스토어 할당.
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        rootEl
    )
}

render()
store.subscribe(render)
