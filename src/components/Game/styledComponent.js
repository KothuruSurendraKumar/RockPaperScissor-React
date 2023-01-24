import Styled from 'styled-components'

export const Container = Styled.div`
display:flex;
justify-content:space-between;
align-items:center;
border:2px;
border-style: solid;
border-color: #ffffff;
border-radius: 7px;
margin-left:200px;
margin-right:200px;
@media (max-width: 576px) {
    margin-left:30px;
    margin-right:30px;
  }
padding-left: 40px;
padding-right: 40px;
`

export const Heading = Styled.h1`
color:#ffffff;
font-family:"Bree Serif";
font-weight: 400;
font-size: 24px;
`

export const Paragraph = Styled.p`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items: center;
 background-color:white;
 padding:10px;
 font-family:"Roboto";
 width: 150px;
 border-radius: 12px;
`
export const Pcount = Styled.p`
   font-family:"Bree Serif";
   color: #223a5f;
 `
export const Pcount1 = Styled.p`
   font-family:"Roboto";
   color: #223a5f;
   font-size:20px;
 `

export const Button = Styled.button`
border:none;
outline:none;
background-color:transparent;
cursor:pointer;
`

export const Button1 = Styled.button`
border:none;
outline:none;
background-color:#ffffff;
color: #223a5f;
width: 120px;
height: 35px;
cursor:pointer;
`

export const Image = Styled.img`
height:150px;
width:150px;
margin: 50px;
`
export const Image1 = Styled.img`
height:150px;
width:150px;
`

export const UnorderList = Styled.ul`
list-style-type:none;
display:flex;
justify-content:center;
flex-wrap:wrap;
width:400px;
align-items:center;
margin-top: 40px;
`
export const ChoiceListContainer = Styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`
export const RulesButton = Styled.button`
align-self:flex-end;
`
export const RulesImage = Styled.img`
 height:500px;
 width:500px;
`
export const PopupContainer = Styled.div`
display:flex;
flex-direction:column;
background-color:white;
padding:20px;
`
export const CloseButton = Styled.button`
align-self:flex-end;
`
export const ResultContainer = Styled.div`
display:flex;
justify-content:center;
align-items:center;
`
export const Result = Styled.div`
  align-self:flex-end;
  color:#ffffff;
  font-family:"Roboto";
  margin-left: 20px;
  margin-right:20px;
`
export const Span = Styled.span``

export const AppContainer = Styled.div`
background-color:#223a5f;
padding:20px;
min-height:100vh;
`
