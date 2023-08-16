import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";

beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', () => {
  const nowText = format(new Date(), "MMMM do yyyy, h:mm:ss a");
  expect(screen.queryByText(nowText)).not.toBeInTheDocument();
  expect(screen.queryByText("Now")).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  expect(screen.getByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  expect(screen.getByTitle("time video")).toBeInTheDocument();
});
