import * as React from 'react'
import styled from 'styled-components'

const Banners = styled.div`
    width: 100%;
    background: url('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1650225575,1248947481&fm=27&gp=0.jpg') no-repeat;
    background-size: 100% 100%;
    height: 1.8rem;
    position: relative;
    .banner-title{
        font-size: 0.25rem;
        color: #fff;
        font-weight: bold;
        margin-left: 0.1rem;
        position: absolute;
        top: 1rem;
        float: left;
    }
    .date{
        font-size: 0.18rem;
        color: #fff;
        margin-left: 0.1rem;
        position: absolute;
        top: 1.4rem;
        float: left;
    }
`



export default class Banner extends React.Component<{}, {}> {
    public state = {
        week: ['日', '一', '二', '三', '四', '五', '六']
    }
    public render() {
        const date = new Date()
        return <Banners>
            <span className="banner-title">我的一天</span>
            <span className="date">{date.getMonth() + 1}月{date.getDate()}日, 星期{this.state.week[date.getDay()]}</span>
        </Banners>
    }
}