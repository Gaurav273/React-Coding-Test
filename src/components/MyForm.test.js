import userEvent from "@testing-library/user-event";
import { render, screen } from "../test.utils";
import MyForm from "./MyForm";

const mockedUseNavigate = jest.fn();

describe("MyForm", () => {
  it("user form should have its labels", () => {
    render(<MyForm />);
    const usernameLabel = screen.getByLabelText("first_name");
    const emailLabel = screen.getByLabelText("Email");
    const passwordLabel = screen.getByLabelText("Lastname");
    expect(usernameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  describe("Button", () => {
    it("should be disabled", () => {
      render(<MyForm />);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeDisabled();
    });

    it("should be enabled with input values", () => {
      render(<MyForm />);
      const buttonElement = screen.getByRole("button");
      const usernameLabel = screen.getByLabelText("first_name");
      const emailLabel = screen.getByLabelText("Email");
      const lastnameLabel = screen.getByLabelText("Lastname");

      userEvent.type(usernameLabel, "gaurav");
      userEvent.type(lastnameLabel, "Wagh");
      userEvent.type(emailLabel, "gaurav@test.com");

      expect(buttonElement).toBeEnabled();
    });
  });
});
