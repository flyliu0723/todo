import * as React from 'react'
import styled from 'styled-components'
import * as moment from 'moment'
import http from '../../lib/http'
import { DatePicker, Select } from 'antd'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import "antd/dist/antd.css"
import {tips} from 'react-components'

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
        .del-btn{
            background: #ff4d4f;
            margin-left: 0.1rem;
        }
    }
`


interface IProps {
    addTodo: any,
    todoContent: any
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
        if(this.props.todoContent !== ''){
            this.setState({
                todo: {
                    content: this.props.todoContent.todo,
                    date: new Date(parseInt(this.props.todoContent.endDate, 0)).toLocaleString().replace('上午', '').replace('下午', ''),
                    tags: this.props.todoContent.tag.split('_'),
                    priority: this.props.todoContent.priority
                }
            })
        }
        const tags = [];
        for (let i = 10; i < 36; i++) {
            tags.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        this.setState({
            tags
        })
    }
    public render() {
        const dateFormat = 'YYYY-MM-DD HH:mm:ss'
        return <Add
            onClick={() => {this.props.addTodo()}}
        >
            <div 
                className="content"
                onClick={(e: any) => {e.stopPropagation()}}
            >
                <p className="title">添加任务</p>
                <input 
                    type="text"
                    placeholder="添加一个任务"
                    className="todo-content"
                    value={this.state.todo.content}
                    onChange={(e: any) => this.inputChange(e)}
                />
                <span className="date-tab" id='dateTab'>
                    <DatePicker
                        locale={locale}
                        showTime={true}
                        placeholder="截至日期"
                        defaultValue={moment(this.props.todoContent !== '' ? new Date(parseInt(this.props.todoContent.endDate, 0)).toLocaleString().replace('上午', '').replace('下午', '') : new Date())}
                        format={dateFormat}
                        getCalendarContainer={() => 
                            document.getElementById("dateTab") || document.body
                        }
                        onOk={(value: any) => this.onOk(value)}
                    /> 
                </span>
                <span className="date-tab">
                    {
                        this.props.todoContent !== '' ?
                            <Select
                                mode="tags"
                                style={{ width: '100%' }}
                                placeholder="添加标签"
                                defaultValue={ this.props.todoContent.tag.split('_')}
                                onChange={(value: any) => this.handleChangeTags(value)}
                            >
                                {this.state.tags}
                            </Select> :
                            <Select
                                mode="tags"
                                style={{ width: '100%' }}
                                placeholder="添加标签"
                                onChange={(value: any) => this.handleChangeTags(value)}
                            >
                                {this.state.tags}
                            </Select>
                    }
                    
                </span>
                <span className="date-tab">
                    <Select 
                        placeholder="优先级从低到高(0-3)"
                        defaultValue={this.props.todoContent !== '' ? this.props.todoContent.priority : '0'}
                        onChange={(value: any) => this.handleChangePriority(value)}>
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
                    {this.props.todoContent !== '' ? '修改' : '添加'}
                </button>
                {
                    this.props.todoContent !== '' && 
                        <button 
                            className="add-btn del-btn"
                            onClick={() => this.delTodo()}
                        >
                            删除
                        </button>
                }

            </div>
        </Add>
    }
    /**
     *@description 内容输入框改变
     *
     * @memberof Banner
     */
    public inputChange = (e: any) => {
        let todo = Object.assign(this.state.todo)
        todo.content = e.target.value
        this.setState({
            todo
        })
    }
    /**
     * @description 选择日期
     */
    public onOk = (value: any) => {
        let todo = Object.assign(this.state.todo)
        todo.date = Date.parse(value._d)
        this.setState({
            todo
        })
    }
    /**
     *@description 选择优先级
     *
     * @memberof Banner
     */
    public handleChangePriority = (value: any) => {
        let todo = Object.assign(this.state.todo)
        todo.priority = value
        this.setState({
            todo
        })
    }
    /**
     * @description 添加删除标签
     */
    public handleChangeTags = (value: any) => {
        let todo = Object.assign(this.state.todo)
        todo.tags = value
        this.setState({
            todo
        })
    }
    /**
     *@description 添加或编辑todo
     *
     * @memberof Banner
     */
    public addTodo = () => {
        let url = this.props.todoContent === '' ? '/todo/add' : '/todo/update'
        let param = Object.assign({}, this.state.todo)
        if(this.props.todoContent !== ''){
            param.id = this.props.todoContent.id
            param.date = param.date.toString().indexOf('/') > -1 ? Date.parse(param.date) : param.date
        }
        http.post(url, param)
            .then((d: any) => {
                tips(d.msg)
                this.props.addTodo()
            })
    }
    /**
     *@description 删除todo
     *
     * @memberof Banner
     */
    public delTodo = () => {
        http.get('/todo/delete', {id: this.props.todoContent.id})
            .then((d: any) => {
                tips(d.msg)
                this.props.addTodo()
            })
    }
}