import * as React from 'react'
import styled from 'styled-components'

const Flashs = styled.div`
    width: 1.5rem;
    height: 1.8rem;
    padding: 0.1rem;
    color: #fff;
    display: inline-block;
    margin: 0.07rem 0.11rem;
    svg{
        margin: 0.48rem 0.33rem;
    }
`
interface Iprops {
    isAdd?: boolean
}
interface Istate {
    backColor: any
}

/**
 * @todo 颜色也应该是一起保存的
 * 
 */
export default class FlashTab extends React.Component<Iprops, Istate> {
    public static defaultProps = { 
        isAdd: false
    }
    constructor(props: Iprops) {
        super(props)
        this.state = {
            backColor: ['#1296db', '#e46a5b', '#7dc5eb', '#a686ba']
        }
    }
    public render() {
        if(this.props.isAdd) {
            return <Flashs
                    style={{
                        background: '#1296db'
                    }}
                >
                <svg viewBox="0 0 1024 1024" width="64" height="64">
                    <path d="M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z" p-id="2454" fill="#ffffff"/>
                </svg>
            </Flashs>
        }else {
            return <Flashs
                style={{
                    background: this.state.backColor[Math.floor((Math.random() * this.state.backColor.length))]
                }}
            >
            This is flash memory!
        </Flashs>
        }
        
    }
}