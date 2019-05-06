import * as React from 'react'
// import { NavLink  } from 'react-router-dom'
// import { loginStatus } from '../lib/tools'
import http from '../lib/http'
import Header from '../components/header'
import Bottom from '../components/bottom'

import Banner from '../components/todo/banner'
import List from '../components/todo/list'
import Add from '../components/todo/add'

import FlashList from '../components/flash/flash-list'



class Index extends React.Component<{}, {}> {
    public state:{
        inTab: string,
        tabTitle: string,
        todoList: any,
        showAdd: boolean,
        todoContent: any
    } = {
        inTab: 'todo',
        tabTitle: '待办',
        todoList: [],
        showAdd: false,
        todoContent: ''
    }
    public componentDidMount() {
        document.getElementsByTagName('title')[0].text = this.state.tabTitle
        this.getTodoList()
    }
    public render() {
        return <div>
                    <Header title={this.state.tabTitle} showMenus={false} showBack={false}/>
                    {
                        this.state.inTab === 'todo' && 
                            <div>
                                <Banner/>
                                <List
                                    todoList={this.state.todoList}
                                    addTodo={() => {this.setState({showAdd: true})}}
                                    editTodo={(id: string) => this.getTodoContent(id)}
                                />
                            </div>
                    }
                    {
                        this.state.showAdd && <Add 
                            todoContent={this.state.todoContent}
                            addTodo={() => this.added()}
                        />
                    }

                    {
                        this.state.inTab === 'flash' && 
                            <FlashList/>
                    }
                    


                    <Bottom inTab={this.state.inTab} changeTab={this.changeTab}/>
                 </div>
    }
    /**
     *@description 切换tab
     *
     * @memberof Index
     */
    public changeTab = (inTab: string, tabTitle: string) => {
        this.setState({inTab, tabTitle})
    }
    /**
     *@description 获取todo列表
     *
     * @memberof Index
     */
    public getTodoList = () => {
        http.get('/todo/list', {status: -1})
            .then((d: any)=> {
                this.setState({
                    todoList: d.data
                })
            })
    }
    public getTodoContent = (id: string) => {
        http.get('/todo/getTodoContent', {id})
            .then((d: any) => {
                if(d.code === 1100){
                    this.setState({
                        todoContent: d.data[0],
                        showAdd: true
                    })
                }
            })
    }
    /**
     *@description 添加todo或者关闭todo弹窗
     *
     * @memberof Index
     */
    public added = () => {
        this.getTodoList()
        this.setState({showAdd: false, todoContent: ''})
    }
}
export default Index