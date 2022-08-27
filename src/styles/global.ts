import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #131313;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --color-gray-0: #F8F9FA;
        --color-gray-1: #868E96;
        --color-gray-2: #343B41;
        --color-gray-3: #212529;
        --color-gray-4: #121214;

        --success: #3FE864;
        --negative: #E83F5B;
    }

    h1 {
        font-weight: bold;
        font-size: 20px;
        color: var(--color-gray-0);
    }
    
    h2 { 
        font-size: 16px;
        color: var(--color-gray-0);
    }
`

export default GlobalStyle