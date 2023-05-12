import styled from 'styled-components'

const Button = styled.button`
    background-color: royalblue;
    padding: 10px;
    color: white;
`

const ButtonStyle2 = styled(Button)`
    color: ${props => props.color};
    border: none;
    border-radius: 10px;
    font-weight: bold;
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.3);
`
const ButtonStyle3 = styled(Button)`
    background-color: ${props => props.bgColor};
    width: 80px;
`
const ButtonStyle4 = styled(ButtonStyle2)`
    background-color: salmon;
    border-radius: 20px;
    color: #fff;
`

export {Button, ButtonStyle2, ButtonStyle3, ButtonStyle4}
