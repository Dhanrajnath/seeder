import { Box, styled } from "@mui/material";
import theme from "../../../utils/theme";
import IconFromSvg from "../../atoms/IconFromSvg";
import TypographyWithInfoIcon from "../TypographyWithInfoIcon";
import Typography from "../../atoms/Typography";

export interface IDashboardCardItemProps {
    icon: string;
    infoText: string;
    title: string
};

const StyledOuterBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: theme.spacing(51),
    height: theme.spacing(42),
    gap: theme.spacing(2),
    background: theme.palette.background.paper
});

const StyledInnerBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: theme.spacing(1),
    background: theme.palette.common.black,
    borderRadius: theme.spacing(2)
});

const DashboardCardItem = ({ icon, infoText, title }: IDashboardCardItemProps) => {
    return (
        <StyledOuterBox>
            <StyledInnerBox>
                <IconFromSvg path={icon} alt={title} />
            </StyledInnerBox>
            <TypographyWithInfoIcon title={infoText} isHeading={false} />
            <Typography variant="h1" children={title} color={theme.palette.text.primary} />
        </StyledOuterBox>
    );
};

export default DashboardCardItem;