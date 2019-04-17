import * as React from 'react'
import styled from 'styled-components'
import { DatePicker } from 'antd'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import "antd/dist/antd.css";
const Add = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    .content{
        width: 3.2rem;
        height: 4rem;
        text-align: center;
        position: relative;
        font-size: 0px;
        background: rgb(255, 255, 255);
        border-radius: 0.1rem;
        .title{
            font-size: 0.14rem;
            text-align: center;
            line-height: 0.4rem;
            border-bottom: solid 1px #eaeaea;
            color: #666666;
        }
        input{
            border: none;
            outline: none;
        }
        .todo-content{
            width: 90%;
            border-bottom: solid 1px #eaeaea;
            line-height: 0.35rem;
            font-size: 0.12rem;
            color: #666;
            margin-top: 0.2rem;
        }
        .date-tab{
            width: 90%;
            border-bottom: solid 1px #eaeaea;
            margin: 0.2rem auto 0;
            display: inline-block;
            input{
                padding: 0;
            }
            .ant-calendar-picker{
                width: 100%;
            }
            .ant-calendar-picker-container{
                left: 0.15rem !important; 
                width: 90%;
                .ant-calendar{
                    width: 100%;
                }
            }
            .ant-calendar-input-wrap{
                height: 0.4rem;
            }
        }
    }
`



export default class Banner extends React.Component<{}, {}> {
    public render() {
        return <Add>
            <div className="content">
                <p className="title">添加任务</p>
                <input 
                    type="text"
                    placeholder="添加一个任务"
                    className="todo-content"
                />
                <span className="date-tab" id='dateTab'>
                    <DatePicker
                        locale={locale}
                        showTime={true}
                        placeholder="Select Time"
                        getCalendarContainer={() => 
                            document.getElementById("dateTab") || document.body
                        }
                        onChange={(value: any, dataString: any) => this.changDate(value, dataString)}
                        onOk={(value: any) => this.onOk(value)}
                    /> 
                </span>
            </div>
        </Add>
    }
    public changDate = (t: any, data: any) => {
        
    }
    public onOk = (value: any) => {

    }
}