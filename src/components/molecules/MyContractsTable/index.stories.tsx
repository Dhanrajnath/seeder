import { Meta, StoryObj } from "@storybook/react";
import Table, { ITableProps } from ".";
import { myContractsTableColumnLabels, myContractsTableData } from "../../../utils/myContracts";

export default {
    title: 'Molecules/Table',
    component: Table,
} as Meta;

type MyContractsTableType = StoryObj<ITableProps>;


export const MyContracts: MyContractsTableType = {
    args: {
        tableColumns: myContractsTableColumnLabels,
        tableData: myContractsTableData,
    }
};
