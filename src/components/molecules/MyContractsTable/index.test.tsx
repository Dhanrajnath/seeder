import { render } from "@testing-library/react";
import MyContractsTable from ".";
import { myContractsTableColumnLabels, myContractsTableData } from "../../../utils/myContracts";

describe('MyContractsTable test', () => {
    it('renders the contracts table with data', () => {
        const { getByText, container } = render(
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

        expect(container.firstChild).toMatchSnapshot();
    });
});
