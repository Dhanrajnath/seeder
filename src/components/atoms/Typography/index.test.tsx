import { render } from "@testing-library/react";
import Typography from ".";

describe('Typography tests', () => {
    it('renders a typography component with provided children', () => {
        const { getByText } = render(
            <Typography
                variant='h1'
                color='blue'
                children='Seeder'
            />);
        const text = getByText('Seeder');
        expect(text).toBeInTheDocument();
    });
});