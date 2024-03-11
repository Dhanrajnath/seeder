import { fireEvent, render } from "@testing-library/react";
import NewCashKick from ".";

describe('NewCahKick tests', () => {
    const title = "Launch a new Cash Kick";
    const description = "You have upto $ available for a new cash advance";
    const availableCashKick = "709,546.00";
    const buttonName = "New Cash Kick";
    const onClick = jest.fn();

    it('renders NewCashKick component', () => {
        const { getByText } = render(
            <NewCashKick
                title={title}
                description={description}
                availableCashKick={availableCashKick}
                buttonName={buttonName}
                onClick={onClick}
            />
        );

        expect(getByText(title)).toBeInTheDocument();
        expect(getByText(`$${availableCashKick}`)).toBeInTheDocument();
        expect(getByText(buttonName)).toBeInTheDocument();

        fireEvent.click(getByText(buttonName));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});