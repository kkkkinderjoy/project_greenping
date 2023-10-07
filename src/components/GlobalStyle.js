import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}






*{
    margin: 0;
    padding: 0;
    font-family: 'NanumSquareNeo-Variable';
    line-height: 18px;
    ul{list-style: none;}
    a{text-decoration: none; color: #333333;}
}
body{
    overflow-x: hidden;

};
`;

export default GlobalStyle;
