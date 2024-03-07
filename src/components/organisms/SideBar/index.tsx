import { Grid, styled } from "@mui/material";
import theme from "../../../utils/theme";
import IconFromSvg from "../../atoms/IconFromSvg";
import SeederSvg from "../../../../public/assets/seeder.svg";
import FlashSvg from "../../../../public/assets/flash.svg";
import Typography from "../../atoms/Typography";
import SidebarItem from "../../molecules/SidebarItem";
import { useState } from "react";
import { SEEDER, SidebarItemType, WATCH_HOW_TO } from "../../../utils/sidebar";

export interface ISidebarProps {
    sidebarNavItems: SidebarItemType[];
};

const StyledGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    padding: `${theme.spacing(10)} ${theme.spacing(5)} ${theme.spacing(10)} ${theme.spacing(5)}`,
    background: theme.palette.background.default,
    gap: theme.spacing(10)
});

const SeederTypography = styled(Typography)({
    ...theme.typography.h1,
    fontSize: theme.spacing(8),
    fontWeight: 700,
    lineHeight: theme.spacing(7),
    color: theme.palette.text.primary,
    paddingTop: theme.spacing()
});

const SidebarItemsGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    width: theme.spacing(52),
    height: theme.spacing(136),
    gap: theme.spacing(),
});



const Sidebar = ({ sidebarNavItems }: ISidebarProps) => {
    const [selectedItem, setSelectedItem] = useState<number>(2);

    const handleClick = (id: number) => {
        setSelectedItem(id);
    };

    return (
        <StyledGrid>
            <Grid item display="flex" flexDirection="row" >
                <Grid item paddingRight={theme.spacing(2)}>
                    <IconFromSvg alt='Seeder Logo' path={SeederSvg} width={32} height={32} />
                </Grid>
                <Grid item>
                    <SeederTypography>{SEEDER}</SeederTypography>
                </Grid>
            </Grid>

            <SidebarItemsGrid>
                {sidebarNavItems.map((item, index) => (
                    <SidebarItem
                        key={index}
                        id={item.id}
                        iconPath={selectedItem === index + 1 ? item.activeIconPath : item.inActiveIconPath}
                        itemName={item.itemName}
                        isActive={selectedItem === index + 1 ? true : false}
                        onClick={handleClick}
                    />
                ))
                }
            </SidebarItemsGrid>

            <Grid item display="flex" flexDirection="row">
                <Grid item marginLeft={theme.spacing(5)} paddingRight={theme.spacing(2)} >
                    <IconFromSvg alt='Flash SVG' path={FlashSvg} width={16} height={16} />
                </Grid>
                <Grid item>
                    <Typography variant="button" color={theme.palette.text.disabled}>{WATCH_HOW_TO}</Typography>
                </Grid>
            </Grid>
        </StyledGrid>
    );
};

export default Sidebar;