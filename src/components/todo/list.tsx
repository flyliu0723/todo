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



export default class List extends React.Component<{}, {}> {
    
    public render() {
        return <Lists>
            <li className="todo-list">
                <span/>
                <span>todo项目</span>
            </li>

            <li className="todo-add">
                <span>+</span>
                <span>添加任务</span>
            </li>
        </Lists>
    }
}