import * as React from 'react'
import styled from 'styled-components'
import { NavLink  } from 'react-router-dom'
import http from '../../lib/http'
import {tips} from 'react-components'

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

export default class RegistTab extends React.Component<{}, {}> {
    public state = {
        account: '',
        password: '',
        rePassword: ''
    }
    public render() {
        return <Logins>
            <input 
                type="text" 
                placeholder='输入您的用户名' 
                value={this.state.account}
                onChange={(e) => this.changeValue(e, 'account')}
            />
            <input 
                type="password" 
                placeholder='输入您的密码' 
                value={this.state.password}
                onChange={(e) => this.changeValue(e, 'password')}
            />
            <input 
                type="password" 
                placeholder='再次输入您的密码' 
                value={this.state.rePassword}
                onChange={(e) => this.changeValue(e, 'rePassword')}
            />
            <button onClick={() => this.regist()}>
                注册
            </button>
            <p>
                <span className='forget'>
                    <NavLink to="/login">去登陆</NavLink>
                </span>
            </p>
        </Logins>
    }
    /**
     * @description 输入框改变
     */
    public changeValue = (e: any, key: any) => {
        const data: any = {}
        data[key] = e.target.value
        this.setState(data)
    }
    /**
     * @description 注册按钮事件
     */
    public regist = () => {
        if(this.state.password !== this.state.rePassword){
            tips('密码输入不一致！')
            return
        }
        http.post('/user/regist', {
            account: this.state.account,
            password: this.state.password,
            rePassword: this.state.rePassword,
        }).then((d: any) => {
            if(d.code === 1100) {
                window.location.href = `/login?account=${this.state.account}&password=${this.state.password}`
            }else {
                tips(d.msg)
            }
        })
    }
}