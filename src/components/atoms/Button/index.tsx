import { Button as MUIButton, ButtonProps, styled } from "@mui/material";
import theme from "../../../utils/theme";

const StyledButton = styled(MUIButton)(theme.typography.button);

const Button = ({
    variant = 'contained',
    children,
    ...props
}: ButtonProps) => {
    return (
        <StyledButton variant={variant}  {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;