import { Box, Grid, PaletteColor, styled } from "@mui/material";
import Typography from "../../atoms/Typography";
import theme from "../../../utils/theme";
import Button from "../../atoms/Button";

export interface INewCashKickProps {
    title: string;
    description: string;
    availableCashKick: string;
    buttonName: string;
    onClick?: () => void;
};

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: theme.spacing(75),
    height: theme.spacing(48),
    borderRadius: theme.spacing(3),
    border: theme.spacing(),
    padding: theme.spacing(6),
    gap: theme.spacing(5),
    background: theme.palette.background.default
});

const StyledButton = styled(Button)({
    ...theme.typography.button,
    borderRadius: theme.spacing(3),
    background: theme.palette.primary["500" as keyof PaletteColor],
    gap: theme.spacing(2),
    padding: `${theme.spacing(5)} ${theme.spacing(10)} ${theme.spacing(5)} ${theme.spacing(10)}`,
    width: '100%',
    height: theme.spacing(15),
    '&:hover': {
        background: theme.palette.primary["500" as keyof PaletteColor],
    }
});

const NewCashKick = ({ title, description, availableCashKick, buttonName, onClick }: INewCashKickProps) => {
    const descriptionParts = description.split('$');
    return (
        <StyledBox>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                gap={2}
            >
                <Grid item width={theme.spacing(40)} height={theme.spacing(15)}>
                    <Typography
                        variant="h1"
                        color={theme.palette.text.primary}
                        children={title} />
                </Grid>
                <Grid item height={theme.spacing(11)} >
                    <Typography
                        variant="body1"
                        color={theme.palette.text.disabled}
                    >
                        {descriptionParts[0]}
                        <span style={{ fontWeight: 'bold', color: theme.palette.text.secondary }} >${availableCashKick}</span>
                        {descriptionParts[1]}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <StyledButton onClick={onClick}>
                    {buttonName}
                </StyledButton>
            </Grid>
        </StyledBox>
    );
};

export default NewCashKick;