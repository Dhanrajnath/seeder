import { Box, PaletteColor, styled } from "@mui/material";
import IconFromSvg from "../../atoms/IconFromSvg";
import theme from "../../../utils/theme";
import Typography from "../../atoms/Typography";

export interface ISidebarItemProps {
    id: number;
    iconPath: string;
    itemName: string;
    isActive: boolean;
    onClick?: (key: number) => void
};

const StyledBox = styled(Box)(({ isActive }: { isActive: boolean }) => ({
    height: theme.spacing(10),
    padding: theme.spacing(4),
    gap: theme.spacing(3),
    borderRadius: theme.spacing(3),
    background: isActive ? theme.palette.background.default : theme.palette.background.paper,
    cursor: 'pointer'
}));

const StyledTypography = styled(Typography)({
    paddingLeft: theme.spacing(3)
});

const SidebarItem = ({ id, iconPath, itemName, isActive, onClick }: ISidebarItemProps) => {
    const clickHandler = () => {
        onClick!(id);
    };

    return (
        <StyledBox
            key={id}
            onClick={clickHandler}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            isActive={isActive}
        >
            <IconFromSvg path={iconPath} alt={itemName} width={24} height={24} />
            <StyledTypography variant="button" color={isActive ? theme.palette.text.primary : theme.palette.text.disabled} >{itemName}</StyledTypography>
        </StyledBox>
    );
};

export default SidebarItem;