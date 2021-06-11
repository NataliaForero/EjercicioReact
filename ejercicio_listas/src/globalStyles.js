import {createGlobalStyle} from 'styled-components'
import PrimaryFont from '-/utils/fonts/Hind-Light.woff'
const GlobalStyles = createGlobalStyle`

.ContainerImage{
    display: flex;
    width: 50%;
    height: 100%;
    margin-right: 10px;
    justify-content: center;
}
.ContainerText{
    display: flex;
    flex-direction: colum;
    width: 50%;
    margin:10px;
    font-family: Impact;
    font-size: 17px;
}
.ContainerText p{
    font-family:'Hind'
}
.ContainerImage img{
    width: 100%;
    height: auto;
}
//FUENTES
@fonfont-face {
    font-family:'Hind';
    src: local('Hind'), url(${PrimaryFont}) format('woff');
    font-style:normal;
}
`;


export default GlobalStyles;