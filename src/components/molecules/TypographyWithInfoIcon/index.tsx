import { Box, Tooltip } from "@mui/material";
import Typography from "../../atoms/Typography";
import IconFromSvg from "../../atoms/IconFromSvg";
import theme from "../../../utils/theme";
import InfoSvg from "../../../../public/assets/info.svg";

export interface ITypographyWithInfoIconProps {
    title: string;
    isHeading: boolean;
};

const TypographyWithInfoIcon = ({ title, isHeading }: ITypographyWithInfoIconProps) => {
    return (
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            sx={{
                background: theme.palette.background.default
            }}
        >
            <Typography
                variant={isHeading ? "h1" : "body1"}
                children={title}
                color={isHeading ? theme.palette.text.primary : theme.palette.text.secondary}
                sx={{
                    pl: 1,
                    pr: 2,
                }}
            />
            <Tooltip title={title} placement="right">
                <span style={{ paddingTop: theme.spacing(2) }}>
                    <IconFromSvg alt={title} path={InfoSvg} />
                </span>
            </Tooltip>
        </Box>
    );
};

export default TypographyWithInfoIcon;