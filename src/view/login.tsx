import * as React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import LoginTab from '../components/auth/login'

const Logins = styled.div`
    
`

export default class Login extends React.Component<{}, {}> {
    public render() {
        return <Logins>
                <Header title={'登陆'} showMenus={false}/>
                <LoginTab/>
        </Logins>
    }
}