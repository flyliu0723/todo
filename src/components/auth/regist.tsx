import * as React from 'react'
import styled from 'styled-components'
import { NavLink  } from 'react-router-dom'
import http from '../../lib/http'

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
        name: '',
        password: '',
        repeatPass: '',
        errMsg: ''
    }
    public render() {
        return <Logins>
            <input type="text" placeholder='输入您的用户名'
                value={this.state.name}
                onChange={(e) => this.change(e, 'name')}    
            />
            <input type="password" placeholder='输入您的密码'
                value={this.state.password}
                onChange={(e) => this.change(e, 'password')}
            />
            <input type="password" placeholder='再次输入您的密码'
                value={this.state.repeatPass}
                onChange={(e) => this.change(e, 'repeatPass')}
            />
            <p>
                <span className='err-msg'>{this.state.errMsg}</span>
            </p>
            <button onClick={this.regist}>注册</button>
            <p>
                <span className='forget'>
                    <NavLink to="/login">去登陆</NavLink>
                </span>
            </p>
        </Logins>
    }
    /**
     * @description 输入框值改变
     * @param e this，key：key
     */
    public change = (e: any, key: any) => {
        const data: any = {}
        data[key] = e.target.value
        this.setState(data)
    }
    public regist = () => {
        if(this.state.password !== this.state.repeatPass){
            this.setState({
                errMsg: '两次输入的密码不一致'
            })
            return
        }
        http.post('/user/regist', {
            account: this.state.name,
            password: this.state.password
        }).then((d: any) => {
            if(d.code === 1100){
                window.location.href = '/login'
            }else if(d.code === 1102) {
                this.setState({
                    errMsg: d.msg
                })
            }
        })
    }
}