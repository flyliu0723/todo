import * as React from 'react'
import styled from 'styled-components'
import { NavLink  } from 'react-router-dom'

const Logins = styled.div`
    margin: 0.25rem 0.15rem;
    input{
        border: none;
        outline: none;
        border-bottom: solid 1px #eaeaea;
        width: 100%;
        height: 0.5rem;
        color: #999;
    }
    button{
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        background: #d81e06;
        border: none;
        outline: none;
        margin: 0.5rem 0 0;
        color: #fff;
        font-size: 0.16rem;
        border-radius: 0.04rem;
    }
    p{
        width: 100%;
        margin: 0.1rem 0;
        span{
            font-size: 0.12rem;
            color: #999;
        }
        .forget{
            float: right;
        }
    }
`

export default class LoginTab extends React.Component<{}, {}> {
    public render() {
        return <Logins>
            <input type="text" placeholder='输入您的用户名'/>
            <input type="password" placeholder='输入您的密码'/>
            <button>登陆</button>
            <p>
                <span>
                    <NavLink to="/regist">去注册</NavLink>
                </span>
                <span className='forget'>
                    <NavLink to="/forget">忘记密码</NavLink>
                </span>
            </p>
        </Logins>
    }
}