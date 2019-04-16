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
        todoList: any
    } = {
        inTab: 'todo',
        tabTitle: '待办',
        todoList: []
    }
    public componentDidMount() {
        document.getElementsByTagName('title')[0].text = this.state.tabTitle
        http.get('/todo/list', {status: -1})
            .then((d: any)=> {
                this.setState({
                    todoList: d.data
                })
            })
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
                                />
                            </div>
                    }

                    <Add />

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
}
export default Index