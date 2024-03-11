import { Box, Tooltip, styled } from "@mui/material";
import Typography from "../../atoms/Typography";
import IconFromSvg from "../../atoms/IconFromSvg";
import theme from "../../../utils/theme";
import InfoSvg from "../../../../public/assets/info.svg";

export interface ITypographyWithInfoIconProps {
    title: string;
    isHeading: boolean;
};

const StyledBox = styled(Box)({
    background: theme.palette.background.default
});

const StyledTypography = styled(Typography)({
    paddingLeft: 1,
    paddingRight: 4,
});

const TypographyWithInfoIcon = ({ title, isHeading }: ITypographyWithInfoIconProps) => {
    return (
        <StyledBox
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
        >
            <StyledTypography
                variant={isHeading ? "h1" : "body1"}
                children={title}
                color={isHeading ? theme.palette.text.primary : theme.palette.text.secondary}
            />
            <Tooltip title={title} placement="right">
                <span style={{ paddingTop: theme.spacing() }}>
                    <IconFromSvg alt={title} path={InfoSvg} />
                </span>
            </Tooltip>
        </StyledBox>
    );
};

export default TypographyWithInfoIcon;