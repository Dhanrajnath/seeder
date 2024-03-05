import { Box, PaletteColor } from "@mui/material";
import IconFromSvg from "../../atoms/IconFromSvg";
import theme from "../../../utils/theme";
import Typography from "../../atoms/Typography";

export interface ISidebarItemProps {
    iconPath: string;
    itemName: string;
    isActive: boolean;
    onClick?: () => void
};

const SidebarItem = ({ iconPath, itemName, isActive, onClick }: ISidebarItemProps) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                width: theme.spacing(52),
                height: theme.spacing(12),
                padding: theme.spacing(4),
                gap: theme.spacing(3),
                borderRadius: theme.spacing(3),
                background: isActive ? theme.palette.background.paper : theme.palette.background.default
            }}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
        >
            <IconFromSvg path={iconPath} alt={itemName} width={24} height={24} />
            <span
                style={{
                    color: isActive ? theme.palette.text.primary : theme.palette.text.disabled,
                    paddingLeft: theme.spacing(3)
                }}>
                <Typography variant="button">{itemName}</Typography>
            </span>
        </Box>
    );
};

export default SidebarItem;