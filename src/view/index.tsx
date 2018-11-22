import * as React from 'react'
// import { NavLink  } from 'react-router-dom'
import { loginStatus } from '../lib/tools'
import http from '../lib/http'
import Header from '../components/header'
import Bottom from '../components/bottom'

import Banner from '../components/todo/banner'
import List from '../components/todo/list'

import FlashList from '../components/flash/flash-list'



class Index extends React.Component<{}, {}> {
    public state = {
        inTab: 'todo',
        tabTitle: '待办',
        todoList: []
    }
    public componentWillMount() {
        if(!loginStatus()) {
            window.location.href = '/login'
        }
    }
    public componentDidMount() {
        http.get('/todo/list', {
            tag: '',
            sort: ''
        })
            .then((d: any) => {
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
                                <List list={this.state.todoList}/>
                            </div>
                    }
                    {
                        this.state.inTab === 'flash' && 
                            <FlashList/>
                    }
                    

                    <Bottom inTab={this.state.inTab} changeTab={this.changeTab}/>
                 </div>
    }
    public changeTab = (inTab: string, tabTitle: string) => {
        this.setState({inTab, tabTitle})
    }
}
export default Index