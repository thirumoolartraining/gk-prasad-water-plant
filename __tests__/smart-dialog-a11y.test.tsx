import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import SmartDialog from "@/components/ui/SmartDialog";

it("SmartDialog with hidden title is axe-clean", async () => {
  const { container } = render(
    <SmartDialog open title="Hidden heading">
      <p>Body content</p>
    </SmartDialog>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it("SmartDialog with visible title is axe-clean", async () => {
  const { container } = render(
    <SmartDialog open title="Visible heading" titleVisible>
      <p>Body content</p>
    </SmartDialog>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it("SmartDialog always has exactly one DialogTitle", () => {
  const { container } = render(
    <SmartDialog open title="Test title">
      <p>Content</p>
    </SmartDialog>
  );
  
  const titles = container.querySelectorAll('[role="dialog"] h2');
  expect(titles).toHaveLength(1);
  expect(titles[0]).toHaveTextContent("Test title");
});