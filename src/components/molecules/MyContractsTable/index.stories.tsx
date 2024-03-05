import { Meta, StoryObj } from "@storybook/react";
import MyContractsTable, { IMyContractsTableProps } from ".";
import { myContractsTableColumnLabels, myContractsTableData } from "../../../utils/myContracts";

export default {
    title: 'Molecules/MyContractsTable',
    component: MyContractsTable,
} as Meta;

type MyContractsTableType = StoryObj<IMyContractsTableProps>;


export const MyContracts: MyContractsTableType = {
    args: {
        tableColumns: myContractsTableColumnLabels,
        tableData: myContractsTableData,
    }
};
