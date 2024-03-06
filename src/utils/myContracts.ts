export interface ITableCellObject {
    value: string;
    percentage?: string;
    discount?: string;
};

export interface IMyContractsTableDataDetail {
    Name: string;
    Type: string;
    perPayment: string;
    termLength: ITableCellObject;
    paymentAmount: ITableCellObject;
};

export interface IMyCashkicksTableDataDetail {
    Name: string;
    Status: "Pending" | "Completed";
    Maturity: string;
    totalRecieved: ITableCellObject;
    totalFinanced: string;
};

export interface ITableColumnLabels {
    label: string;
    column: string
};

export const myContractsTableColumnLabels: ITableColumnLabels[] = [
    { label: 'Name', column: 'Name' },
    { label: 'Type', column: 'Type' },
    { label: 'Per payment', column: 'perPayment' },
    { label: 'Term length', column: 'termLength' },
    { label: 'Payment amount', column: 'paymentAmount' }
];

export const myCashkicksTableColumnLabels: ITableColumnLabels[] = [
    { label: 'Name', column: 'Name' },
    { label: 'Status', column: 'Status' },
    { label: 'Maturity', column: 'Maturity' },
    { label: 'Total recieved', column: 'totalRecieved' },
    { label: 'Total financed', column: 'totalFinanced' }
];

export const myContractsTableData: IMyContractsTableDataDetail[] = [
    {
        Name: 'Contracts1',
        Type: 'Monthly',
        perPayment: '$12,000.25',
        termLength: { value: '12 months', percentage: '12.0% fee' },
        paymentAmount: { value: '$126,722.64' }
    },
    {
        Name: 'Contracts2',
        Type: 'Monthly',
        perPayment: '$6,000.00',
        termLength: { value: '12 months', percentage: '12.0% fee' },
        paymentAmount: { value: '$23,277.36', discount: '$63,380.00' },
    }
];

export const myCashkicksTableData: IMyCashkicksTableDataDetail[] = [
    {
        Name: 'My first advance',
        Status: "Pending",
        Maturity: "Apr 03, 2022",
        totalRecieved: { value: "$150,000.00", percentage: "12% fee" },
        totalFinanced: "$170,454,55"
    }
];