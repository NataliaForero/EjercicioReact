import {createGlobalStyle} from 'styled-components'
const GlobalStyles = createGlobalStyle`

.ContainerImage{
    display: flex;
    width: 50%;
    margin-right: 10px;
    justify-content: center;
}
.ContainerText{
    display: flex;
    flex-direction: colum;
    width: 50%;
    margin:10px;
    font-family: Impact;
    font-size: 10px;
}
.ContainerImage img{
    width: 100%;
    height: auto;
}
`;


export default GlobalStyles;