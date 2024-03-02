import { Button as MUIButton, ButtonProps, styled } from "@mui/material";
import theme from "../../../utils/theme";

const StyledButton = styled(MUIButton)(theme.typography.button);

const Button = ({
    variant = 'contained',
    children,
    ...rest
}: ButtonProps) => {
    return (
        <StyledButton variant={variant}  {...rest}>
            {children}
        </StyledButton>
    );
};

export default Button;