import * as React from 'react'
// import { NavLink  } from 'react-router-dom'
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
        this.setState({inTab, tabTitle})
    }
}
export default Index