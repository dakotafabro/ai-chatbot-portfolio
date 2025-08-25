import { render, screen, fireEvent } from "@testing-library/react";
import { Providers } from "../../lib/providers";
import FAQList from "../../components/FAQList";

function renderWithProviders(ui: React.ReactNode) {
  return render(<Providers>{ui}</Providers>);
}

test("renders and filters FAQs", async () => {
  renderWithProviders(<FAQList />);
  expect(await screen.findByText(/Loading FAQs/i)).toBeInTheDocument();
  // Wait for one known FAQ to appear
  const item = await screen.findByText(/What are we building in this course/i);
  expect(item).toBeInTheDocument();

  const input = screen.getByLabelText(/Search FAQs/i);
  fireEvent.change(input, { target: { value: "deploy" } });

  // After filtering, we should see deploy FAQ
  expect(await screen.findByText(/How do I deploy this app/i)).toBeInTheDocument();
});
