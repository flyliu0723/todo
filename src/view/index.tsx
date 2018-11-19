import * as React from 'react'
// import { NavLink  } from 'react-router-dom'
import * as cookie from '../lib/cookies'
import http from '../lib/http'
import Header from '../components/header'
import Bottom from '../components/bottom'

import Banner from '../components/todo/banner'
import List from '../components/todo/list'

import FlashList from '../components/flash/flash-list'



class Index extends React.Component<{}, {}> {
    public state = {
        inTab: 'todo',
        tabTitle: '待办'
    }
    public componentDidMount() {
        http.get('/', {name: 'get'}).then((d: any) => {
            // console.log(d)
        })
    }
    public render() {
        return <div>
                    <Header title={this.state.tabTitle} showMenus={false} showBack={false}/>
                    {
                        this.state.inTab === 'todo' && 
                            <div>
                                <Banner/>
                                <List/>
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
        if(inTab === 'my' && !cookie.getCookie('ttm_token')) {
            window.location.href = '/login'
        }
        this.setState({inTab, tabTitle})
    }
}
export default Index