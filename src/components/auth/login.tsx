import * as React from 'react'
import styled from 'styled-components'
import { NavLink  } from 'react-router-dom'
import http from '../../lib/http'
import * as cookie from '../../lib/cookies'

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
        background: #80b8ffd6;
        border: none;
        outline: none;
        margin: 0.5rem 0 0;
        color: #fff;
        font-size: 0.16rem;
        border-radius: 0.04rem;
        cursor: pointer;
    }
    p{
        width: 100%;
        margin: 0.1rem 0;
        span{
            font-size: 0.12rem;
            color: #999;
            cursor: pointer;
        }
        .forget{
            float: right;
            cursor: pointer;
        }
        .err-msg{
            color: #d81e06;
        }
    }
`

export default class LoginTab extends React.Component<{}, {}> {
    public state = {
        account: '',
        password: '',
        status: ''
    }
    public render() {
        return <Logins>
            <input type="text" placeholder='输入您的用户名' 
                value={this.state.account} 
                onChange={(e) => this.changeValue(e, 'account')}/>
            <input type="password" placeholder='输入您的密码' 
                value={this.state.password} 
                onChange={(e) => this.changeValue(e, 'password')}/>

            <p>
                <span className='err-msg'>{this.state.status}</span>
            </p>
            <button onClick={this.goLogin}>登陆</button>

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
    /**
     *@description 去登陆
     *
     * @memberof LoginTab
     */
    public goLogin = () => {
        http.post('/user/login', {
            account: this.state.account,
            password: this.state.password
        }).then((d: any) => {
            this.setState({
                status: d.code === 1100 ? '' : d.msg
            })
            if(d.code === 1100) {
                cookie.setCookie('ttm_token', this.state.account)
                window.location.href = '/'
            }
        })
    }
    /**
     *@description 输入框改变值
     *
     * @memberof LoginTab
     */
    public changeValue = (e: any, key: any) => {
        const data: any = {}
        data[key] = e.target.value
        this.setState(data)
    }
}