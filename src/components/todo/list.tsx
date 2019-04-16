import * as React from 'react'
import styled from 'styled-components'

const Lists = styled.ul`
    margin: 0.15rem;
    li{
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        border-bottom: solid 1px #eaeaea;
    }
    .todo-list{
        span:nth-child(1){
            display: inline-block;
            width: 0.2rem;
            height: 0.2rem;
            border: solid 2px #eaeaea;
            background: #fff;
            border-radius: 50%;
            margin-right: 0.15rem;
            position: relative;
            top: 0.03rem;
        }
        span:nth-child(2) {
            display: inline-block;
            width: 3rem;
            color: #333;
        }
    }
    .todo-add{
        span{
            color: blue;
            border: none !important;
            cursor: pointer;
        }
        span:nth-child(1){
            margin-right: 0.15rem;
            font-size: 0.25rem;
            position: relative;
            top: 0.03rem;
        }
        span:nth-child(2){
            font-size: 0.16rem;
        }
    }
    
`
interface Iprops {
    list: any
}

interface IProps {
    todoList?: any
}
interface IState {

}

export default class List extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props)
        this.state = {

        }
    }
    
    public render() {
        const {todoList} = this.props
        return <Lists>
            {
                todoList.map((d: any, i: number) => {
                    return <li className="todo-list" key={i}>
                        <span />
                        <span>{d.todo}</span>
                    </li>
                })
            }
            

            <li className="todo-add" onClick={this.addTodo}>
                <span>+</span>
                <span>添加任务</span>
            </li>
        </Lists>
    }
    /**
     * @description 添加todo
     * @todo 需求 弹出框填写相关信息
     */
    public addTodo = () => {

    }
}