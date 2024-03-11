import { render } from "@testing-library/react";
import MyContractsTable from ".";
import { myCashkicksTableColumnLabels, myCashkicksTableData, myContractsTableColumnLabels, myContractsTableData } from "../../../utils/cashAcclerationTable";

describe('MyContractsTable test', () => {
    it('renders the contracts table with data', () => {
        const { getByText } = render(
            <MyContractsTable
                tableColumns={myContractsTableColumnLabels}
                tableData={myContractsTableData}
            />
        );

        expect(getByText('Name')).toBeInTheDocument();
        expect(getByText('Type')).toBeInTheDocument();
        expect(getByText('Per payment')).toBeInTheDocument();
        expect(getByText('Term length')).toBeInTheDocument();
        expect(getByText('Payment amount')).toBeInTheDocument();

        expect(getByText('Contracts1')).toBeInTheDocument();
        expect(getByText('$12,000.25')).toBeInTheDocument();
        expect(getByText('$126,722.64')).toBeInTheDocument();
    });

    it('renders the cashkicks table with data', () => {
        const { getByText } = render(
            <MyContractsTable
                tableColumns={myCashkicksTableColumnLabels}
                tableData={myCashkicksTableData}
            />
        );

        expect(getByText('Name')).toBeInTheDocument();
        expect(getByText('Status')).toBeInTheDocument();
        expect(getByText('Maturity')).toBeInTheDocument();
        expect(getByText('Total recieved')).toBeInTheDocument();
        expect(getByText('Total financed')).toBeInTheDocument();

        myCashkicksTableData.forEach(row => {
            Object.values(row).forEach(value => {
                if (typeof value === 'object') {
                    expect(getByText(value.value)).toBeInTheDocument();
                    if (value.percentage) {
                        expect(getByText(value.percentage)).toBeInTheDocument();
                    } else {
                        expect(getByText(value.discount)).toBeInTheDocument();
                    }
                } else {
                    expect(getByText(value)).toBeInTheDocument();
                }
            });
        });
    });
});
