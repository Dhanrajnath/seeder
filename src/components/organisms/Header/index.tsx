import { Grid, styled } from "@mui/material";
import Avatar from "../../atoms/Avatar";
import theme from "../../../utils/theme";
import Typography from "../../atoms/Typography";
import ArrowBottomSvg from "../../../../public/assets/arrow-bottom.svg";

export interface IHeaderProps {
    title: string;
    description: string;
    avatarPath?: string;
};

const StyledGrid = styled(Grid)({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1),
    background: theme.palette.background.paper
});

const TitleTypography = styled(Typography)({
    ...theme.typography.h1,
    fontSize: theme.spacing(9),
    fontWeight: 700,
    lineHeight: theme.spacing(10),
    color: theme.palette.text.primary
});

const DescriptionTypography = styled(Typography)({
    ...theme.typography.h2,
    color: theme.palette.text.disabled
});

const Header = ({ title, description, avatarPath }: IHeaderProps) => {
    return (
        <StyledGrid container>
            <Grid item display="flex" flexDirection="column">
                <Grid item>
                    <TitleTypography>
                        {title}
                    </TitleTypography>
                </Grid>
                <Grid item>
                    <DescriptionTypography>
                        {description}
                    </DescriptionTypography>
                </Grid>
            </Grid>
            <Grid item
                display="flex"
                flexDirection="row"
                alignItems="baseline"
                paddingRight={theme.spacing(9)}
            >
                <Avatar
                    isImage={true}
                    variant="circular"
                    alt="Profile Pic"
                    src={avatarPath}
                />
                <Avatar
                    isImage={true}
                    variant='circular'
                    alt="Profile dropdown"
                    src={ArrowBottomSvg}
                    sx={{
                        width: theme.spacing(6),
                        height: theme.spacing(6)
                    }}
                />
            </Grid>
        </StyledGrid>
    );
};

export default Header;