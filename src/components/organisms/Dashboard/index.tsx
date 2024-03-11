import { Grid, styled } from "@mui/material";
import theme from "../../../utils/theme";
import DashboardCardItem, { IDashboardCardItemProps } from "../../molecules/DashboardCardItem";

export interface IDashboardProps {
    cardItems: IDashboardCardItemProps[];
};

const StyledGrid = styled(Grid)({
    background: theme.palette.background.default
});

const Dashboard = ({ cardItems }: IDashboardProps) => {
    return (
        <StyledGrid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            width={theme.spacing(175)}
            height={theme.spacing(60)}
            border={theme.spacing()}
            padding={theme.spacing(8)}
            gap={theme.spacing(3)}
            borderRadius={theme.spacing(3)}
            sx={{
                background: theme.palette.background.default
            }}
        >
            {cardItems.map((cardItem, index) => (
                <Grid item key={index}>
                    <DashboardCardItem icon={cardItem.icon} infoText={cardItem.infoText} title={cardItem.title} />
                </Grid>
            ))}
        </StyledGrid>
    );
};

export default Dashboard;