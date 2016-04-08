import expect from 'expect'
import counter from '../../reducers'

describe('reducers', ()=> {
    describe('counter', () => {
        it('초기 상태를 제공하여야 한다. 초기 상태는 0', () => {
            expect(counter(undefined, {})).toBe(0)
        })

        it('증가 액션에 대한 테스트', () => {
            expect(counter(0, {type: 'INCREMENT'})).toBe(1)
        })

        it('감소 액션에 대한 테스트', () => {
            expect(counter(10, {type: 'DECREMENT'})).toBe(9)
        })

        it('언노운 케이스 테스트', () => {
            expect(counter(1, {type: 'Unknown'})).toBe(1)
        })
    })
})