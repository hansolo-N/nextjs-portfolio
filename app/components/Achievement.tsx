'use client'
import styled from 'styled-components'
import React,{ ReactNode } from 'react'

interface Props{
    header: string,
    icon?: JSX.Element,
    p1?: string,
    p2?: string

}


const StyledAchievement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    height: 180px;
    width: 400px;
    margin: 0;
    line-height: 2;
`

const Header = styled.h1`
    font-size: 18px;
    font-weight: 800 ;
    color: black;

`

const Paragraph = styled.p`
    font-size: medium;
`
const Icon = styled.span`
    font-size: 36px;
    color: #a5bdfd;
`


function Achievement({header,icon,p1,p2}:Props){
  return (
    <StyledAchievement>
        <Icon>{icon}</Icon>
        <Header>{header}</Header>
        <Paragraph>{p1}</Paragraph>
        <Paragraph>{p2}</Paragraph>
    </StyledAchievement>
  )
}

export default Achievement