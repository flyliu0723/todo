import * as React from 'react'
import styled from 'styled-components'
import http from '../../lib/http'
import { DatePicker, Select } from 'antd'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import "antd/dist/antd.css"

const Option = Select.Option

const Add = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    .content{
        width: 3.2rem;
        height: 4rem;
        text-align: center;
        position: relative;
        font-size: 0px;
        background: rgb(255, 255, 255);
        border-radius: 0.1rem;
        .title{
            font-size: 0.14rem;
            text-align: center;
            line-height: 0.4rem;
            border-bottom: solid 1px #eaeaea;
            color: #666666;
        }
        input{
            border: none;
            outline: none;
        }
        input::-webkit-input-placeholder{
            color:#bfbfbf;
        }
        input::-moz-placeholder{
            color:#bfbfbf;
        }
        input:-moz-placeholder{
            color:#bfbfbf;
        }
        input:-ms-input-placeholder{
            color:#bfbfbf;
        }
        .todo-content{
            width: 90%;
            border-bottom: solid 1px #eaeaea;
            line-height: 0.35rem;
            font-size: 0.12rem;
            color: #bfbfbf;
            margin-top: 0.2rem;
        }
        .date-tab{
            width: 90%;
            border-bottom: solid 1px #eaeaea;
            margin: 0.2rem auto 0;
            display: inline-block;
            input{
                padding: 0;
                color: #bfbfbf;
            }
            .ant-calendar-picker{
                width: 100%;
            }
            .ant-calendar-picker-container{
                left: 0.15rem !important; 
                width: 90%;
                .ant-calendar{
                    width: 100%;
                }
            }
            .ant-calendar-input-wrap{
                height: 0.4rem;
            }

            .ant-select{
                width: 100% !important;
                color: #bfbfbf;
                .ant-select-selection{
                    border: none !important;
                    .ant-select-selection__placeholder, .ant-select-selection__rendered{
                        margin-left: 0;
                    }
                }

            }
        }
        .add-btn{
            width: 1rem;
            height: 0.4rem;
            line-height: 0.4rem;
            background: #80b8ffd6;
            border: none;
            outline: none;
            margin: 0.5rem 0 0;
            color: #fff;
            font-size: 0.16rem;
            border-radius: 0.04rem;
            cursor: pointer;
        }
    }
`


interface IProps {
    addTodo: any
}
interface IState {
    tags: any,
    todo: any
}
export default class Banner extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            tags: [],
            todo: {
                content: '',
                date: '',
                tags: [],
                priority: ''
            }
        }
    }
    public componentDidMount() {
        const tags = [];
        for (let i = 10; i < 36; i++) {
            tags.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        this.setState({
            tags
        })
    }
    public render() {
        return <Add>
            <div className="content">
                <p className="title">添加任务</p>
                <input 
                    type="text"
                    placeholder="添加一个任务"
                    className="todo-content"
                    onChange={(e: any) => this.inputChange(e)}
                />
                <span className="date-tab" id='dateTab'>
                    <DatePicker
                        locale={locale}
                        showTime={true}
                        placeholder="截至日期"
                        getCalendarContainer={() => 
                            document.getElementById("dateTab") || document.body
                        }
                        onOk={(value: any) => this.onOk(value)}
                    /> 
                </span>
                <span className="date-tab">
                    <Select
                        mode="tags"
                        style={{ width: '100%' }}
                        placeholder="添加标签"
                        onChange={(value: any) => this.handleChangeTags(value)}
                    >
                        {this.state.tags}
                    </Select>
                </span>
                <span className="date-tab">
                    <Select 
                        placeholder="优先级从低到高(0-3)"
                        onChange={(value: any) => this.handleChangePriority(value)}>
                        <Option value="">优先级</Option>
                        <Option value="0">0</Option>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                    </Select>
                </span>
                <button 
                    className="add-btn"
                    onClick={() => this.addTodo()}
                >
                    添加
                </button>
            </div>
        </Add>
    }
    public inputChange = (e: any) => {
        console.log(e.target.value)
        let todo = Object.assign(this.state.todo)
        todo.content = e.target.value
        this.setState({
            todo
        })
    }
    public onOk = (value: any) => {
        let todo = Object.assign(this.state.todo)
        todo.date = Date.parse(value._d)
        this.setState({
            todo
        })
    }
    public handleChangePriority = (value: any) => {
        console.log(value)
        let todo = Object.assign(this.state.todo)
        todo.priority = value
        this.setState({
            todo
        })
    }
    public handleChangeTags = (value: any) => {
        console.log(value)
        let todo = Object.assign(this.state.todo)
        todo.tags = value
        this.setState({
            todo
        })
    }
    public addTodo = () => {
        console.log(this.state.todo)
        http.post('/todo/add', this.state.todo)
            .then(d => {
                this.props.addTodo()
            })
    }
}