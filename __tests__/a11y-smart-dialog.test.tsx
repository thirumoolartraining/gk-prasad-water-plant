import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import SmartDialog from "@/components/ui/SmartDialog";

test("SmartDialog has no axe violations", async () => {
  const { container } = render(
    <SmartDialog open title="Hidden SR title">
      <p>Hello</p>
    </SmartDialog>
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("SmartDialog with visible title has no axe violations", async () => {
  const { container } = render(
    <SmartDialog open title="Visible title" showTitle>
      <p>Content with visible title</p>
    </SmartDialog>
  );
  expect(await axe(container)).toHaveNoViolations();
});

test("SmartDialog always has exactly one DialogTitle", () => {
  const { container } = render(
    <SmartDialog open title="Test title">
      <p>Content</p>
    </SmartDialog>
  );
  
  const titles = container.querySelectorAll('[role="dialog"] h2');
  expect(titles).toHaveLength(1);
  expect(titles[0]).toHaveTextContent("Test title");
});