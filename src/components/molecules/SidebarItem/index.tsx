import { Box, PaletteColor } from "@mui/material";
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

const SidebarItem = ({ id, iconPath, itemName, isActive, onClick }: ISidebarItemProps) => {
    const clickHandler = () => {
        onClick!(id);
    };

    return (
        <Box
            key={id}
            onClick={clickHandler}
            sx={{
                height: theme.spacing(10),
                padding: theme.spacing(4),
                gap: theme.spacing(3),
                borderRadius: theme.spacing(3),
                background: isActive ? theme.palette.background.default : theme.palette.background.paper,
                cursor: 'pointer'
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