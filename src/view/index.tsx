import * as React from 'react'
import { NavLink  } from 'react-router-dom'



class Index extends React.Component<{}, {}> {
    public render() {
        return <div>
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/">indexlink</NavLink>
                            </li>
                            <li>
                                <NavLink to="/app">applink</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">aboutlink</NavLink>
                            </li>
                        </ul>
                        index
                    </div>
                 </div>
    }
}
export default Index