import styled from 'styled-components'


export const Wrapper = styled.div`
    max-width: 100%;
    border-radius: 2px;
    text-align:center;

    p {
        font-size: 1rem;
    }
    .question {
        font-weight: 800;
        font-size: 1.3rem;
    }
`
type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`

    button {
        cursor: pointer;
        user-select: none;
        font-size: 1.4rem;
        background: ${({correct, userClicked}) => 
        correct 
        ?  'rgba(0,150,33, 0.3);'
        : !correct && userClicked 
        ? '#ff8a8a'
        : 'none'
        };
            border: 3px solid ${({correct, userClicked}) => 
        correct 
        ?  'rgba(0,150,33, 0.3);'
        : !correct && userClicked 
        ? '#ff0000'
        : '#001548'
        };;
        margin: 10px;
        width: 100%;
        font-family: 'Alegreya', sans-serif;
        color: ${({correct, userClicked}) => 
        correct 
        ?  '#009621'
        : !correct && userClicked 
        ? '#ff0000'
        : '#001548'
        };

        &:disabled {
            opacity: 1;
            color:${({correct, userClicked}) => 
        correct 
        ?  '#009621'
        : !correct && userClicked 
        ? '#ff0000'
        : '#001548'
        };
        }
    }

  

`
