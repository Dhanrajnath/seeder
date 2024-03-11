import { Box } from "@mui/material";
import theme from "../../../utils/theme";

export interface IHomeTemplate {
    leftNavComponent: any;
    header: any;
    content: any;
};

const HomeTemplate = ({ leftNavComponent, header, content }: IHomeTemplate) => {
    return (
        <Box
            height="100%"
            width="100%"
            display="flex"
            sx={{
                background: theme.palette.background.paper,
            }}
        >
            <Box
                display="flex"
                width={theme.spacing(63)}
                maxHeight={theme.spacing(176)}
            >
                {leftNavComponent}
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                width="100%"
                marginLeft={theme.spacing(8)}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height={theme.spacing(18)}
                    width={'100%'}
                    marginTop={theme.spacing(6)}
                    paddingBottom={theme.spacing(4)}
                >
                    {header}
                </Box>
                <Box
                    width="100%"
                    height="100%"
                    display="flex"
                >
                    {content}
                </Box>
            </Box>
        </Box>
    );
};

export default HomeTemplate;