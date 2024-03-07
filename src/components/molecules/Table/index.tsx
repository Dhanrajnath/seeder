import { Grid, Table as MUITable, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import theme from "../../../utils/theme";
import Typography from "../../atoms/Typography";
import { ITableColumnLabels, IMyContractsTableDataDetail, IMyCashkicksTableDataDetail } from "../../../utils/cashAcclerationTable";

export interface ITableProps {
    tableColumns: ITableColumnLabels[];
    tableData: IMyContractsTableDataDetail[] | IMyCashkicksTableDataDetail[];
};

const Table = ({ tableColumns, tableData }: ITableProps) => {
    return (
        <MUITable
            sx={{
                maxHeight: theme.spacing(27),
                background: theme.palette.background.default
            }}
        >
            <TableHead
                sx={{
                    height: theme.spacing(11),
                    background: theme.palette.common.black,
                    borderRadius: `${theme.spacing(5000)}`
                }}
            >
                <TableRow>
                    {tableColumns.map((column) => (
                        <TableCell
                            variant="head"
                            align="left"
                            width="20%"
                            sx={{
                                pl: theme.spacing(9),
                                borderBottom: 0
                            }}
                            key={column.column}
                        >
                            <Typography
                                variant="body2"
                                sx={{ color: theme.palette.text.disabled }}
                            >
                                {column.label}
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map((element, index) => (
                    <TableRow key={index} sx={{ height: theme.spacing(15) }}>
                        {Object.values(element).map((element, i) => (
                            <TableCell
                                key={i}
                                variant="body"
                                align="left"
                                sx={{
                                    pl: theme.spacing(9),
                                    borderBottom: 0
                                }}
                            >
                                <Grid container>
                                    <Grid item>
                                        {typeof element === 'object' ?
                                            <>
                                                <Typography
                                                    variant="body2"
                                                    color={
                                                        i === 0 ?
                                                            theme.palette.text.primary
                                                            : theme.palette.text.disabled}
                                                >
                                                    {element?.value}
                                                </Typography>
                                                {element?.percentage ?
                                                    <Typography
                                                        variant="caption"
                                                        color={theme.palette.text.disabled}
                                                    >
                                                        {element?.percentage}
                                                    </Typography>
                                                    :
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: theme.palette.text.disabled,
                                                            textDecoration: "line-through"
                                                        }}
                                                    >
                                                        {element?.discount}
                                                    </Typography>
                                                }
                                            </>
                                            :
                                            <Typography
                                                variant="body2"
                                                color={
                                                    i === 0 ?
                                                        theme.palette.text.primary
                                                        : theme.palette.text.disabled}
                                            >
                                                {element}
                                            </Typography>
                                        }
                                    </Grid>
                                </Grid>
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </MUITable>
    );
};

export default Table;