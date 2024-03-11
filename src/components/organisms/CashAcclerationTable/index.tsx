import { ButtonProps, Grid, PaletteColor, styled } from "@mui/material";
import theme from "../../../utils/theme";
import TypographyWithInfoIcon from "../../molecules/TypographyWithInfoIcon";
import Table from "../../molecules/Table";
import Button from "../../atoms/Button";
import { useEffect, useState } from "react";
import { ITableColumnLabels, IMyContractsTableDataDetail, IMyCashkicksTableDataDetail, MY_CONTRACTS, MY_CASH_KICKS } from "../../../utils/cashAcclerationTable";

export interface ICashAcclerationTableProps {
    heading: string;
    contractsTableColumns: ITableColumnLabels[];
    cashkicksTableColumns: ITableColumnLabels[];
    contractsTableData: IMyContractsTableDataDetail[];
    cashkicksTableData: IMyCashkicksTableDataDetail[];
};

const StyledGrid = styled(Grid)({
    width: '100%',
    height: theme.spacing(80),
    borderRadius: theme.spacing(3),
    padding: theme.spacing(8),
    gap: theme.spacing(5),
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
});

interface StyledButtonProps extends ButtonProps {
    active: string;
};

const StyledButton = styled(Button)<StyledButtonProps>(({ theme, active }) => ({
    background: active === "true" ? theme.palette.primary["600" as keyof PaletteColor] : theme.palette.common.black,
    border: active === "true" ? `1px solid ${theme.palette.primary["400" as keyof PaletteColor]}` : 'none',
    borderRadius: theme.spacing(3),
    color: active === "true" ? theme.palette.primary["400" as keyof PaletteColor] : theme.palette.text.secondary,
    gap: theme.spacing(2),
    padding: `${theme.spacing(3)} ${theme.spacing(4)} ${theme.spacing(2)} ${theme.spacing(4)}`,
    height: theme.spacing(11),
    width: theme.spacing(37),
    '&:hover': {
        background: active === "true" ? theme.palette.primary["600" as keyof PaletteColor] : theme.palette.common.black,
        color: theme.palette.primary["400" as keyof PaletteColor],
        border: `1px solid ${theme.palette.primary["400" as keyof PaletteColor]}`
    }
}));

const CashAcclerationTable = (
    {
        heading,
        contractsTableColumns,
        cashkicksTableColumns,
        contractsTableData,
        cashkicksTableData
    }: ICashAcclerationTableProps) => {
    const [table, setTable] = useState<string>(MY_CONTRACTS);

    const [tableData, setTableData] = useState<{
        columns: ITableColumnLabels[],
        data: IMyContractsTableDataDetail[] | IMyCashkicksTableDataDetail[]
    }>({
        columns: [],
        data: []
    });

    const handleButtonClick = (event: any) => {
        const buttonId = event.target.id;
        setTable(buttonId);
    };

    useEffect(() => {
        setTableData({
            columns: table === MY_CONTRACTS ? contractsTableColumns : cashkicksTableColumns,
            data: table === MY_CONTRACTS ? contractsTableData : cashkicksTableData
        });
    }, [table]);

    return (
        <StyledGrid>
            <Grid item paddingTop={theme.spacing(2)} >
                <TypographyWithInfoIcon
                    title={heading}
                    isHeading={true}
                />
            </Grid>

            <Grid item display='flex' flexDirection='row' gap={2} >
                <Grid item>
                    <StyledButton
                        theme={theme}
                        id={MY_CONTRACTS}
                        active={table === MY_CONTRACTS ? "true" : "false"}
                        onClick={handleButtonClick}
                    >
                        {MY_CONTRACTS}
                    </StyledButton>
                </Grid>
                <Grid item>
                    <StyledButton
                        theme={theme}
                        id={MY_CASH_KICKS}
                        active={table === MY_CASH_KICKS ? "true" : "false"}
                        onClick={handleButtonClick}
                    >
                        {MY_CASH_KICKS}
                    </StyledButton>
                </Grid>
            </Grid>

            <Grid item>
                <Table
                    tableColumns={tableData.columns}
                    tableData={tableData.data} />
            </Grid>
        </StyledGrid>
    );
};

export default CashAcclerationTable;