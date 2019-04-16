import * as React from 'react'
import styled from 'styled-components'
import creatHistory from 'history/createBrowserHistory' 

const history = creatHistory();

const Head = styled.div`
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.16rem;
    color: #333;
    display: flex;
    background: #fff;
    border-bottom: solid 1px #ececec;
    span{
        flex: 1;
    }
    .back{
        margin: 0.08rem 0;
    }
    .title{
        flex: 4;
        text-align: center;
    }
    .menus{
        position: relative;
        svg{
            margin: 0.08rem 0 0 0.15rem;
        }
        ul{
            position: absolute;
            width: 0.7rem;
            top: 0.49rem;
            right: 0;
            background: #fff;
            li{
                text-align: center;
                font-size: 0.14rem;
                height: 0.4rem;
                line-height: 0.4rem;
            }
        }
    }
`
interface IProps {
    title?: string,
    showMenus?: boolean,
    showBack?: boolean
}
interface IState {
    showMenus: boolean
}

export default class Header extends React.Component<IProps, IState> {
    public static defaultProps = { 
        showMenus: true,
        showBack: true,
    }
    constructor(props: IProps) {
        super(props)
        this.state = {
            showMenus: false
        }
    }
    public render() {
        const {title} = this.props
        return <Head>
                <span className='back' onClick={this.back}>
                    {
                        this.props.showBack && <svg viewBox="0 0 1024 1024" width="32" height="32">
                            <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="#8a8a8a" p-id="1828"/>
                        </svg>
                    }
                    
                </span>
                <span className='title'>{title}</span>
                <span className='menus'>
                {
                    this.props.showMenus &&
                        <svg onClick={this.show} viewBox="0 0 1024 1024" width="32" height="32">
                            <path d="M820.8 512c0 44.8 36 80.8 80.8 80.8s80.8-36 80.8-80.8-36-80.8-80.8-80.8-80.8 36-80.8 80.8zM431.2 512c0 44.8 36 80.8 80.8 80.8S592.8 556.8 592.8 512 556.8 431.2 512 431.2 431.2 467.2 431.2 512zM40.8 512c0 44.8 36 80.8 80.8 80.8S203.2 556.8 203.2 512s-36-80.8-80.8-80.8S41.6 467.2 40.8 512z" fill="#8a8a8a" p-id="1548"/>
                        </svg>
                }
                {
                    this.props.showMenus && this.state.showMenus &&  
                        <ul>
                            <li>首页</li>
                            <li>待办</li>
                            <li>笔记</li>
                            <li>关于</li>
                        </ul>
                }
                </span>
                
        </Head>
    }
    public show = () => {
        this.setState({showMenus: !this.state.showMenus})
    }
    public back = () => {
        history.goBack()
    }
}