import { Box } from "@mui/material";
import theme from "../../../utils/theme";
import IconFromSvg from "../../atoms/IconFromSvg";
import TypographyWithInfoIcon from "../TypographyWithInfoIcon";
import Typography from "../../atoms/Typography";

export interface IDashboardCardItemProps {
    icon: string;
    infoText: string;
    title: string
};

const DashboardCardItem = ({ icon, infoText, title }: IDashboardCardItemProps) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            sx={{
                width: theme.spacing(51),
                height: theme.spacing(42),
                gap: theme.spacing(2),
                background: theme.palette.background.paper
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                    width: theme.spacing(20),
                    height: theme.spacing(20),
                    border: theme.spacing(1),
                    background: theme.palette.common.black,
                    borderRadius: theme.spacing(2)
                }}
            >
                <IconFromSvg path={icon} alt={title} />
            </Box>
            <TypographyWithInfoIcon title={infoText} isHeading={false} />
            <Typography variant="h1" children={title} sx={{ color: theme.palette.text.primary }} />
        </Box>
    );
};

export default DashboardCardItem;