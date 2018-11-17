import * as React from 'react'
import styled from 'styled-components'
// import creatHistory from 'history/createBrowserHistory' 


const Bottoms = styled.div`
    width: 100%;
    height: 0.5rem;
    /* line-height: 0.5rem; */
    display: flex;
    position: fixed;
    bottom: 0;
    border-top: solid 1px #ececec;
    font-size: 0.12rem;
    div{
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        svg{
            position: relative;
            top: 0.05rem;
            margin-top: 0.05rem;
        }
        span{
            width: 100%;
            display: inline-block;
            flex: 1
        }
        .no-margin{
            margin-top: 0.030rem;
        }
    }
    .active{
        color: #90CAF9;
        svg{
            path{
                fill: #90CAF9;
            }
        }
    }
`
interface Iprops {
    inTab: string,
    changeTab: any
}
interface Istate {
    inTab: string
}

export default class Bottom extends React.Component<Iprops, Istate> {
    constructor(props: Iprops){
        super(props)
        this.state = {
            inTab: 'todo'
        }
    }
    public render() {
        const {inTab} = this.props
        return <Bottoms>
            <div 
                onClick={() => this.changeTab('todo', '待办')}
                className={inTab === 'todo' ? 'active' : ''}>
                <span>
                    <svg viewBox="0 0 1024 1024" width="18" height="18">
                        <path d="M379.733333 386.133333l-157.866666 155.733334-89.6-87.466667L85.333333 501.333333l136.533334 136.533334 204.8-204.8zM379.733333 108.8l-157.866666 155.733333-89.6-87.466666L85.333333 224l136.533334 136.533333L426.666667 155.733333zM379.733333 663.466667l-157.866666 155.733333-89.6-87.466667L85.333333 778.666667l136.533334 136.533333 204.8-204.8z" fill="#8a8a8a" p-id="3297"/>
                        <path d="M512 469.333333h426.666667v85.333334H512zM512 192h426.666667v85.333333H512zM512 746.666667h426.666667v85.333333H512z" fill="#8a8a8a" p-id="3298"/>
                    </svg>
                </span>
                
                <span>待办</span>
            </div>
            <div
                onClick={() => this.changeTab('flash', '闪念')} 
                className={inTab === 'flash' ? 'active' : ''}>
                <span>
                    <svg className="no-margin" viewBox="0 0 1024 1024" width="20" height="20">
                        <path d="M756.8 428.8c0-134.4-108.8-243.2-243.2-243.2s-243.2 108.8-243.2 243.2c0 91.2 49.6 169.6 123.2 211.2v99.2c0 67.2 54.4 121.6 121.6 121.6s121.6-54.4 121.6-121.6V640c70.4-41.6 120-121.6 120-211.2z m-448 0C308.8 315.2 400 224 512 224s203.2 91.2 203.2 203.2c0 84.8-51.2 156.8-124.8 188.8v-160c0-59.2-40-89.6-78.4-89.6s-78.4 30.4-78.4 89.6v160c-73.6-30.4-124.8-104-124.8-187.2z m243.2 200c-12.8 3.2-25.6 3.2-38.4 3.2-12.8 0-25.6-1.6-38.4-3.2V456c0-35.2 19.2-49.6 38.4-49.6s38.4 16 38.4 49.6v172.8z m41.6 110.4c0 44.8-36.8 81.6-81.6 81.6s-80-36.8-80-81.6v-81.6c25.6 9.6 52.8 14.4 81.6 14.4 28.8 0 56-4.8 81.6-14.4v81.6z" fill="#8a8a8a" p-id="4094"/>
                    </svg>
                </span>
                <span>闪念</span>
            </div>
            <div
                onClick={() => this.changeTab('my', '我的')} 
                className={inTab === 'my' ? 'active' : ''}>
                <span>
                    <svg viewBox="0 0 1024 1024" width="18" height="18">
                    	<path d="M704 329.152C704 209.365333 622.848 128 512 128s-192 81.365333-192 201.152C320 454.762667 407.146667 554.666667 512 554.666667s192-99.904 192-225.514667z m42.666667 0C746.666667 476.714667 642.176 597.333333 512 597.333333s-234.666667-120.618667-234.666667-268.181333C277.333333 181.546667 381.824 85.333333 512 85.333333s234.666667 96.213333 234.666667 243.818667zM512.106667 640c408.96 0 404.864 256.512 404.864 256.512 3.093333 23.274667-13.482667 42.154667-37.098667 42.154667H144.32c-23.573333 0-41.088-19.136-37.077333-42.154667 0 0-4.096-256.512 404.864-256.512zM149.909333 896l0.064 3.861333-0.704 3.968c0.682667-3.882667-2.837333-7.829333-4.949333-7.829333H879.872c-2.154667 0-5.504 3.818667-5.205333 6.144l-0.426667-3.157333 0.064-3.157334c0-0.853333-0.128-3.349333-0.533333-7.125333a161.813333 161.813333 0 0 0-4.266667-23.082667 192.96 192.96 0 0 0-35.242667-71.104C780.330667 725.461333 678.634667 682.666667 512.106667 682.666667c-166.549333 0-268.224 42.794667-322.176 111.850666a192.96 192.96 0 0 0-35.242667 71.104c-2.176 8.426667-3.541333 16.192-4.266667 23.082667a81.045333 81.045333 0 0 0-0.512 7.296z" fill="#8a8a8a" p-id="4868"/>
                    </svg>
                </span>
                <span>我的</span>
            </div>
        </Bottoms>
    }
    public changeTab = (tab: string, tabTitle: string) => {
        // this.setState({inTab: tab})
        this.props.changeTab(tab, tabTitle)
    }
}