import { createTheme } from "@mui/material";

const theme = createTheme({
    spacing: 4,
    palette: {
        primary: {
            "400": "#B4A9FF",
            "500": "#6C5DD3",
            "600": "#393552"
        },
        common: {
            black: "#262529"
        },
        background: {
            default: '#2D2D30',
            paper: '#201F24',
        },
        text: {
            primary: '#E8E7F0',
            secondary: '#C9C8CC',
            disabled: '#A5A5A6',
        }
    },
    typography: {
        fontFamily: 'Gilroy',
        h1: {
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "29px",
            letterSpacing: "-0.005em",
            textAlign: "left",
        },
        h2: {
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "left",
        },
        body1: {
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "22px",
            letterSpacing: "0em",
            textAlign: "left",
        },
        body2: {
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "17px",
            letterSpacing: "0.01em",
            textAlign: "left",
        },
        button: {
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "19px",
            letterSpacing: "0em",
            textAlign: "left",
            borderRadius: "4px",
            textTransform: 'none',
        },
        caption: {
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "15px",
            letterSpacing: "0.02em",
            textAlign: "left",
        }
    },
});

export default theme;