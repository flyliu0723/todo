import * as React from 'react'
import styled from 'styled-components'
import FlashTab from './flash-tab'

const Flashs = styled.div`
    margin: 0.15rem;
`



export default class FlashList extends React.Component<{}, {}> {
    
    public render() {
        return <Flashs>
            <FlashTab/>
            <FlashTab/>
            <FlashTab isAdd={true}/>

        </Flashs>
    }
}