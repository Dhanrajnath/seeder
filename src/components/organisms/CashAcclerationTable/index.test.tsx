import { fireEvent, render } from "@testing-library/react";
import CashAcclerationTable from ".";
import { MY_CASH_KICKS, myCashkicksTableColumnLabels, myCashkicksTableData, myContractsTableColumnLabels, myContractsTableData } from "../../../utils/cashAcclerationTable";

describe('CashAccleration tests', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <CashAcclerationTable
                heading={"Cash Accleration"}
                contractsTableColumns={myContractsTableColumnLabels}
                cashkicksTableColumns={myCashkicksTableColumnLabels}
                contractsTableData={myContractsTableData}
                cashkicksTableData={myCashkicksTableData}
            />
        );
        expect(getByText('Cash Accleration')).toBeInTheDocument();
        expect(getByText('Contracts1')).toBeInTheDocument();
        fireEvent.click(getByText(MY_CASH_KICKS));
        expect(getByText('My first advance')).toBeInTheDocument();
    });
});