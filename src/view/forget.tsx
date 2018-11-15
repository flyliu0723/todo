import * as React from 'react'
import styled from 'styled-components'
import Header from '../components/header'

const Forgets = styled.div`
    font-size: 0.18rem;
    color: #999;
`

export default class Forget extends React.Component<{}, {}> {
    public render() {
        return <Forgets>
                <Header title={'找回密码'} showMenus={false}/>
                <div>
                    我也没办法，再注册一个吧
                </div>
        </Forgets>
    }
}