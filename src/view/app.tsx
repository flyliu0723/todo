import * as React from 'react'
import styled from 'styled-components'

const Apps = styled.div`
    .test{
        width: 2rem;
    }
`

class App extends React.Component<{}, {}> {
    public render() {
        return <Apps>
                <div className='test'>
                app
            </div>
        </Apps>
    }
}
export default App