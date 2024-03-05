import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import theme from "../../../utils/theme";
import Typography from "../../atoms/Typography";
import { IMyContractsTableColumnLabels, IMyContractsTableDataDetail } from "../../../utils/myContracts";

export interface IMyContractsTableProps {
    tableColumns: IMyContractsTableColumnLabels[];
    tableData: IMyContractsTableDataDetail[];
};

const MyContractsTable = ({ tableColumns, tableData }: IMyContractsTableProps) => {
    return (
        <Table
            sx={{
                width: theme.spacing(249),
                height: theme.spacing(42),
                background: theme.palette.common.black
            }}
        >
            <TableHead sx={{ height: theme.spacing(11) }}>
                <TableRow>
                    {tableColumns.map((element, index) => (
                        <TableCell
                            variant="head"
                            align="left"
                            width="20%"
                            sx={{
                                pl: theme.spacing(9),
                            }}
                            key={index}
                        >
                            <Typography
                                variant="body2"
                                sx={{ color: theme.palette.text.disabled }}
                            >
                                {element.label}
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map((element, index) => (
                    <TableRow key={index} sx={{ height: theme.spacing(15) }}>
                        <TableCell
                            variant="body"
                            align="left"
                            sx={{
                                pl: theme.spacing(9),
                            }}
                        >
                            <Grid container>
                                <Grid item>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: theme.palette.text.primary }}
                                    >
                                        {element.Name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell
                            variant="body"
                            align="left"
                            sx={{
                                pl: theme.spacing(9),
                            }}
                        >
                            <Grid container>
                                <Grid item>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: theme.palette.text.disabled }}
                                    >
                                        {element.Type}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell
                            variant="body"
                            align="left"
                            sx={{
                                pl: theme.spacing(9),
                            }}
                        >
                            <Grid container>
                                <Grid item>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: theme.palette.text.disabled }}
                                    >
                                        {element.perPayment}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell
                            variant="body"
                            align="left"
                            sx={{
                                pl: theme.spacing(9),
                            }}
                        >
                            <Grid container display="flex" flexDirection="column">
                                <Grid item>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: theme.palette.text.disabled }}
                                    >
                                        {element.termLength}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="caption"
                                        sx={{ color: theme.palette.text.disabled }}
                                    >
                                        {element.termLengthPercentage}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell
                            variant="body"
                            align="left"
                            sx={{
                                pl: theme.spacing(9),
                            }}
                        >
                            <Grid container display="flex" flexDirection="column">
                                <Grid item>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: theme.palette.text.disabled }}
                                    >
                                        {element.paymentAmount}
                                    </Typography>
                                </Grid>
                                {element.paymentAmountDiscount &&
                                    <Grid item>
                                        <Typography
                                            variant="caption"
                                            sx={{ color: theme.palette.text.disabled, textDecoration: "line-through" }}
                                        >
                                            {element.paymentAmountDiscount}
                                        </Typography>
                                    </Grid>
                                }
                            </Grid>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default MyContractsTable;