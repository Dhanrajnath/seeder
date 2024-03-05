export interface IMyContractsTableDataDetail {
    Name: string;
    Type: string;
    perPayment: string;
    termLength: string;
    termLengthPercentage: string;
    paymentAmount: string;
    paymentAmountDiscount?: string;
};

export interface IMyContractsTableColumnLabels {
    label: string;
    column: string
}

export const myContractsTableColumnLabels: IMyContractsTableColumnLabels[] = [
    { label: 'Name', column: 'Name' },
    { label: 'Type', column: 'Type' },
    { label: 'Per payment', column: 'perPayment' },
    { label: 'Term length', column: 'termLength' },
    { label: 'Payment amount', column: 'paymentAmount' }
];

export const myContractsTableData: IMyContractsTableDataDetail[] = [
    {
        Name: 'Contracts1',
        Type: 'Monthly',
        perPayment: '$12,000.25',
        termLength: '12 months',
        termLengthPercentage: '12.0% fee',
        paymentAmount: '$126,722.64'
    },
    {
        Name: 'Contracts2',
        Type: 'Monthly',
        perPayment: '$6,000.00',
        termLength: '12 months',
        termLengthPercentage: '12.0% fee',
        paymentAmount: '$23,277.36',
        paymentAmountDiscount: '$63,380.00'
    }
];