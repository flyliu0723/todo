import * as React from 'react'
import styled from 'styled-components'
import Header from '../components/header'

const Apps = styled.div`
    .about{
        margin: 0.15rem;
        p{
            font-size: 0.14rem;
            color: #333;
        }
    }
`

export default class About extends React.Component<{}, {}> {
    public render() {
        return <Apps>
                <Header title={'关于'}/>
                <div className='about'>
                    <p>本网站暂时定位为一个TODO类型网站，后续功能也许还会添加笔记，备忘等功能</p>
                    <p>制作人： fly</p>
                    <p>日期：2018-11-14</p>
                </div>
        </Apps>
    }
}