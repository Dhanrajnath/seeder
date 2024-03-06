import { render } from "@testing-library/react";
import CalendarSvg from "../../../../public/assets/calendar.svg";
import DashboardCardItem from ".";

describe('DashboardCardItem test', () => {
    it('renders card item', () => {
        const { container, getByText, getByAltText } = render(<DashboardCardItem icon={CalendarSvg} infoText="Term cap" title="12 months" />);

        expect(getByAltText('12 months')).toBeInTheDocument();
        expect(getByText('Term cap')).toBeInTheDocument();
        expect(getByText('12 months')).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});