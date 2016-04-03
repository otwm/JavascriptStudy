import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions'

describe('todo actions', ()=> {
    it('할일 추가 액션 생성', ()=> {
        expect(actions.addTodo('new todo')).toEqual({
            type: types.ADD_TODO
            , text: "new todo"
        })
    })

    it('삭제 테스트', () => {
        expect(actions.deleteTodo(1)).toEqual({
            type: types.DELETE_TODO
            , id: 1
        })
    })

    it('todo 수정 테스트', () => {
        expect(actions.editTodo(1, 'test !')).toEqual({
            type: types.EDIT_TODO
            , id: 1
            , text: 'test !'
        })
    })

    it('완료', () => {
        expect(actions.completeTodo(1)).toEqual({
            type: types.COMPLETE_TODO
            , id: 1
        })
    })
})