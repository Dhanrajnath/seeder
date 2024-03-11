import { Grid, Table as MUITable, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";
import theme from "../../../utils/theme";
import Typography from "../../atoms/Typography";
import { ITableColumnLabels, IMyContractsTableDataDetail, IMyCashkicksTableDataDetail } from "../../../utils/cashAcclerationTable";

export interface ITableProps {
    tableColumns: ITableColumnLabels[];
    tableData: IMyContractsTableDataDetail[] | IMyCashkicksTableDataDetail[];
};

const StyledMUITable = styled(MUITable)({
    maxHeight: theme.spacing(27),
    background: theme.palette.background.paper
});

const StyledTableHead = styled(TableHead)({
    height: theme.spacing(11),
    background: theme.palette.background.default
});

const StyledTableCell = styled(TableCell)({
    paddingLeft: theme.spacing(9),
    borderBottom: 0
});

const StyledTypography = styled(Typography)({
    textDecoration: "line-through"
});

const StyledTableRow = styled(TableRow)({
    height: theme.spacing(15)
});

const Table = ({ tableColumns, tableData }: ITableProps) => {
    return (
        <StyledMUITable>
            <StyledTableHead>
                <TableRow>
                    {tableColumns.map((column) => (
                        <StyledTableCell
                            variant="head"
                            align="left"
                            width="20%"
                            key={column.column}
                        >
                            <Typography
                                variant="body2"
                                color={theme.palette.text.disabled}
                            >
                                {column.label}
                            </Typography>
                        </StyledTableCell>
                    ))}
                </TableRow>
            </StyledTableHead>
            <TableBody>
                {tableData.map((element, index) => (
                    <StyledTableRow key={index}>
                        {Object.values(element).map((element, i) => (
                            <StyledTableCell
                                key={i}
                                variant="body"
                                align="left"
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
                                                    <StyledTypography
                                                        variant="caption"
                                                        color={theme.palette.text.disabled}
                                                    >
                                                        {element?.discount}
                                                    </StyledTypography>
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
                            </StyledTableCell>
                        ))}
                    </StyledTableRow>
                ))}
            </TableBody>
        </StyledMUITable>
    );
};

export default Table;