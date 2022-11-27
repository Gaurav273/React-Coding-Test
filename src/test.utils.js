import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });
const renderWithRouter = (ui) => {
  return {
    ...render(ui, { wrapper: Providers }),
  };
};

// eslint-disable-next-line import/export
export * from "@testing-library/react";
// eslint-disable-next-line import/export
export { customRender as render };
export { renderWithRouter };
