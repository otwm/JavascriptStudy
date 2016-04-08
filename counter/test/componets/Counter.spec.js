import expect from 'expect'
import React from 'react'
import {shallow} from 'enzyme'
import Counter from '../../components/Counter'

function setup(value = 0) {
    const actions = {
        onIncrement: expect.createSpy(),
        onDecrement: expect.createSpy()
    }

    const component = shallow(
        <Counter value={value} {...actions}/>
    )

    return {
        component: component,
        actions: actions,
        buttons: component.find('button'),
        p: component.find('p')
    }
}

describe('Counter component', ()=> {
    it('카운트가 보이는 지 테스트한다.', () => {
        const {p} = setup()
        expect(p.text()).toMatch(/^Clicked : 0 times/)
    })

    it('첫번째 버튼은 증가를 호출하여야 함.', () => {
        const {buttons, actions} = setup()
        buttons.at(0).simulate('click')
        expect(actions.onIncrement).toHaveBeenCalled()
    })

    it('두번째 버튼은 감소되어야 함.', () => {
        const {buttons, actions} = setup()
        buttons.at(1).simulate('click')
        expect(actions.onDecrement).toHaveBeenCalled()
    })

    it('세번째는 카운터가 홀수면 나누어 호출되면 안됨.', () => {
        const {buttons, actions} = setup(42)
        buttons.at(2).simulate('click')
        expect(actions.onIncrement).toNotHaveBeenCalled()
    })

    it('세번째는 카운터가 짝수면 나누어 호출되어야함.', () => {
        const {buttons, actions} = setup(43)
        buttons.at(2).simulate('click')
        expect(actions.onIncrement).toHaveBeenCalled()
    })

    it('third button should call onIncrement if the counter is odd and negative', () => {
        const {buttons, actions} = setup(-43)
        buttons.at(2).simulate('click')
        expect(actions.onIncrement).toHaveBeenCalled()
    })

    it('4번째 버튼은 알지?', () => {
        const {buttons, actions} = setup()
        buttons.at(3).simulate('click')
        setTimeout(() => {
            expect(actions.onIncrement).toHaveBeenCalled()
            done()
        }, 1000)
    })
})