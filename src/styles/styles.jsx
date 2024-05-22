import { ThemeProvider, createGlobalStyle } from "styled-components"



 const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Sofia+Sans:wght@300;500;700&display=swap");

    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: Montserrat, Roboto, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`

const theme = {
    colors: {
        btnPrimary: '#FF4114',
        btnHover: '#F72F00',
        btnActive: '#DC2A00',
    }
}

export const Theme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                {children}
            </>
        </ThemeProvider>
    )
}