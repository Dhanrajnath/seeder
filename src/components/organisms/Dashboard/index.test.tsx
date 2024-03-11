import { render } from "@testing-library/react";
import CalendarSvg from "../../../../public/assets/calendar.svg";
import DocumentDownloadSvg from "../../../../public/assets/document-download.svg";
import PercentageSquareSvg from "../../../../public/assets/percentage-square.svg";
import Dashboard from ".";

describe('Dashboard tests', () => {
    const cardItems = [
        {
            icon: CalendarSvg,
            infoText: 'Term cap',
            title: '12 months'
        },
        {
            icon: DocumentDownloadSvg,
            infoText: 'Available credit',
            title: '$709.45k'
        },
        {
            icon: PercentageSquareSvg,
            infoText: 'Max interest rate',
            title: '12.00%'
        }
    ];

    it('renders Dashboard carditems', () => {
        const { getByText } = render(<Dashboard cardItems={cardItems} />);

        cardItems.forEach(item => {
            expect(getByText(item.title)).toBeInTheDocument();
            expect(getByText(item.infoText)).toBeInTheDocument();
        });
    });
});