import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import theme from "../../../utils/theme";
import DashboardCardItem, { IDashboardCardItemProps } from "../../molecules/DashboardCardItem";

export interface IDashboardProps {
    cardItems: IDashboardCardItemProps[];
};

const Dashboard = ({ cardItems }: IDashboardProps) => {
    return (
        <Grid
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
        </Grid>
    );
};

export default Dashboard;