import styled, {createGlobalStyle} from 'styled-components'

//@ts-ignore
import BGImage from './images/background-image.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100vh;
        overflow: hidden;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Alegreya', sans-serif;
        background-image: url(${BGImage});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        display:flex;
        justify-content:center;
        color: #001548;
        
    
        &::before {
            content:'';
            background-color: #e7e7e7e8;
            opacity: 0.7;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }

`

export const Wrapper = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 80vh;
    max-width: 80vw;
    justify-self: flex-start;
    margin: auto;
    padding-top: 4rem;
    > p {
        font-size: 3.2rem;
        font-weight:400;
    }

    .score {
        margin: 0;
    }

    h1 {
        font-size: 3.1rem;
        font-weight: 800;
        margin: 0;
    }

    .start, .next {
        cursor: pointer;
        border: 3px solid black;
        border-radius: 2px;
        background: none;
        padding: 0.5rem 1.5rem;
        font-family: 'Alegreya';
        margin: 2rem 0 3rem;
        font-size: 1.4rem;
    }

    .dataRow {
        display:flex;
        justify-content:flex-start;
        justify-content: space-between;
        width: 100%;    

        p {
            margin: 0;
        }
    }
`