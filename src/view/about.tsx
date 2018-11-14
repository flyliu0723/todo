import * as React from 'react'
import styled from 'styled-components'

const Apps = styled.div`
    .test{
        width: 2rem;
    }
`

export default class About extends React.Component<{}, {}> {
    public render() {
        return <Apps>
                <div className='test'>
                about
            </div>
        </Apps>
    }
}