import { Meta, StoryObj } from "@storybook/react";
import Table, { ITableProps } from ".";
import { myCashkicksTableColumnLabels, myCashkicksTableData, myContractsTableColumnLabels, myContractsTableData } from "../../../utils/cashAcclerationTable";

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

export const MyCashkicks: MyContractsTableType = {
    args: {
        tableColumns: myCashkicksTableColumnLabels,
        tableData: myCashkicksTableData
    }
}