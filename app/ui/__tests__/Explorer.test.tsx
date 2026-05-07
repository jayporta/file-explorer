import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FileNode, mockFileSystem } from "@/app/lib/mockFileSystem";
import { largeMockFileSystem } from "@/app/lib/largeMockFileSystem";
import Explorer from "../Explorer";

type ExplorerScenario = {
  name: string;
  fileSystem: FileNode[];
  toggleFolderLabel: string;
  toggleWrapperTestId: string;
  siblingWrapperTestId: string;
  siblingVisibleLabel: string;
};

const countItems = (items: FileNode[]): number => {
  return items.reduce((acc, item) => {
    acc += 1;
    if (item.children) acc += countItems(item.children);
    return acc;
  }, 0);
};

const explorerScenarios: ExplorerScenario[] = [
  {
    name: "default mock file system",
    fileSystem: mockFileSystem,
    toggleFolderLabel: "src",
    toggleWrapperTestId: "explorer-item-2",
    siblingWrapperTestId: "explorer-item-1",
    siblingVisibleLabel: "react",
  },
  {
    name: "large mock file system",
    fileSystem: largeMockFileSystem,
    toggleFolderLabel: "apps",
    toggleWrapperTestId: "explorer-item-a",
    siblingWrapperTestId: "explorer-item-b",
    siblingVisibleLabel: "ui",
  },
];

const runExplorerScenario = (scenario: ExplorerScenario) => {
  describe(scenario.name, () => {
    test("renders correct number of items", () => {
      render(<Explorer fileSystem={scenario.fileSystem} />);
      const totalItems = countItems(scenario.fileSystem);
      const folderIcons = screen.getAllByText("📂");
      const fileIcons = screen.getAllByText("📄");
      expect(folderIcons.length + fileIcons.length).toBe(totalItems);
    });

    test("does not have infinite loop", () => {
      render(<Explorer fileSystem={scenario.fileSystem} />);
      expect(screen.getByText("Explorer")).toBeInTheDocument();
    });

    test("clicking folder toggles children without affecting siblings", async () => {
      const user = userEvent.setup();
      render(<Explorer fileSystem={scenario.fileSystem} />);

      const toggleWrapper = screen.getByTestId(scenario.toggleWrapperTestId);
      const siblingWrapper = screen.getByTestId(scenario.siblingWrapperTestId);

      expect(toggleWrapper.className).toContain("h-auto");
      expect(siblingWrapper.className).toContain("h-auto");

      const toggleItem = screen.getByText(scenario.toggleFolderLabel);
      await user.click(toggleItem);

      expect(toggleWrapper.className).toContain("h-0");
      expect(siblingWrapper.className).toContain("h-auto");
      expect(screen.getByText(scenario.siblingVisibleLabel)).toBeVisible();
    });
  });
};

describe("Explorer", () => {
  explorerScenarios.forEach(runExplorerScenario);
});
