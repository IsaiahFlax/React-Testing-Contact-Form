import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});
it('renders "First Name" text', () => {
    const { queryByText } = render(<ContactForm />);
    const hasFirstName = queryByText(/First Name/i);
  });

  test("renders greeting on Last Name", async () => {
    // Arrange
    const { getByText } = render(<ContactForm />);
    // Act
    const lastName = getByText(/Last Name/i);
    // Assert
    expect(lastName).toBeInTheDocument();
  });
