import * as React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import RegistTab from '../components/auth/regist'

const Regists = styled.div`
    
`

export default class Regist extends React.Component<{}, {}> {
    public render() {
        return <Regists>
                <Header title={'注册'} showMenus={false}/>
                <RegistTab/>
        </Regists>
    }
}