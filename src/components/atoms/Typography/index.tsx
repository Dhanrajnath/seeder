import { Typography as MUITypography, ThemeProvider, TypographyProps } from '@mui/material';
import theme from '../../../utils/theme';

const Typography = (props: TypographyProps) => {
    return (
        <ThemeProvider theme={theme}>
            <MUITypography {...props}>
                {props.children}
            </MUITypography>
        </ThemeProvider>
    );
};

export default Typography;