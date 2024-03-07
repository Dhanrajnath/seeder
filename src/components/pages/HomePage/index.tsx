import React from 'react';
import HomeTemplate from '../../templates/HomeTemplate';
import Sidebar from '../../organisms/SideBar';
import { sidebarItems } from '../../../utils/sidebar';
import Header from '../../organisms/Header';
import AvatarSvg from "../../../../public/assets/avatar.svg";
import { Grid } from '@mui/material';
import Dashboard from '../../organisms/Dashboard';
import { dashboardCardItems } from '../../../utils/dashboard';
import NewCashKick from '../../organisms/NewCashKick';
import { newCashkick } from '../../../utils/newCashKick';
import CashAcclerationTable from '../../organisms/CashAcclerationTable';
import { myCashkicksTableColumnLabels, myCashkicksTableData, myContractsTableColumnLabels, myContractsTableData } from '../../../utils/cashAcclerationTable';
import theme from '../../../utils/theme';

const HomePage = () => {
    return (
        <HomeTemplate
            leftNavComponent={
                <Sidebar
                    sidebarNavItems={sidebarItems}
                />
            }
            header={
                <Header
                    title="Cash accleration"
                    description="Place to create new cash kicks to run business"
                    avatarPath={AvatarSvg}
                />
            }
            content={
                <Grid container>
                    <Grid
                        item
                        width='100%'
                        display='flex'
                        flexDirection='row'
                        justifyContent='flex-start'
                    >
                        <Grid item>
                            <Dashboard cardItems={dashboardCardItems} />
                        </Grid>
                        <Grid item paddingLeft={theme.spacing(10)}>
                            <NewCashKick {...newCashkick} />
                        </Grid>
                    </Grid>
                    <Grid item width='95%'>
                        <CashAcclerationTable
                            heading='Cash Accleration'
                            cashkicksTableColumns={myCashkicksTableColumnLabels}
                            cashkicksTableData={myCashkicksTableData}
                            contractsTableColumns={myContractsTableColumnLabels}
                            contractsTableData={myContractsTableData}
                        />
                    </Grid>
                </Grid>
            }
        />
    );
};

export default HomePage;