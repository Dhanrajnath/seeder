import { fireEvent, render } from "@testing-library/react";
import TypographyWithInfoIcon from ".";

describe('TypographyWihtInfoIcon test', () => {
    it('renders with title and info icon', () => {
        const { container, getByText, getByAltText } = render(<TypographyWithInfoIcon title="Term cap" isHeading={false} />);
        expect(getByText("Term cap")).toBeInTheDocument();
        expect(getByAltText("Term cap")).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with Heading as title and info icon', () => {
        const { getByText, getByAltText } = render(<TypographyWithInfoIcon title="Cash accleration" isHeading={true} />);
        const headingElement = getByText('Cash accleration');
        expect(headingElement.tagName).toBe('H1');
        expect(getByText("Cash accleration")).toBeInTheDocument();
        expect(getByAltText("Cash accleration")).toBeInTheDocument();
    });

    it('renders tooltip with title and info icon', () => {
        const { getByText } = render(
            <TypographyWithInfoIcon title="Term cap" isHeading={false} />
        );

        const infoIcon = getByText('Term cap');
        fireEvent.mouseOver(infoIcon);

        const tooltip = getByText('Term cap');
        expect(tooltip).toBeInTheDocument();
    });
});