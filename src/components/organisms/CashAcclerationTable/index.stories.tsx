import { Meta, StoryObj } from "@storybook/react";
import CashAcclerationTable, { ICashAcclerationTableProps } from ".";
import { myCashkicksTableColumnLabels, myCashkicksTableData, myContractsTableColumnLabels, myContractsTableData } from "../../../utils/cashAcclerationTable";

export default {
    title: 'Organisms/CashAcclerationTable',
    component: CashAcclerationTable,
} as Meta;

type HeaderType = StoryObj<ICashAcclerationTableProps>;

export const HeaderComponent: HeaderType = {
    args: {
        heading: 'Cash Accleration',
        cashkicksTableColumns: myCashkicksTableColumnLabels,
        cashkicksTableData: myCashkicksTableData,
        contractsTableColumns: myContractsTableColumnLabels,
        contractsTableData: myContractsTableData
    }
}