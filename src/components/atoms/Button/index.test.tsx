import { fireEvent, render } from "@testing-library/react";
import Button from ".";

describe('button tests', () => {
    const mockOnClick = jest.fn();

    it('renders a contained button', () => {
        const { container, getByRole, getByText } = render(<Button onClick={mockOnClick}>Submit</Button>);
        const button = getByRole('button');

        expect(button).toHaveClass('MuiButton-contained');

        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalled();

        const buttonText = getByText('Submit');
        expect(buttonText).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders a outlined button', () => {
        const { container } = render(<Button variant="outlined" onClick={mockOnClick}>Submit</Button>);

        expect(container.firstChild).toMatchSnapshot();
    });

});