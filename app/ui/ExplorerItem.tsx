import { useState } from "react";
import cx from "classnames";
import { FileNode } from "../lib/mockFileSystem";

export default function ExplorerItem({ item }: { item: FileNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const isFolder = item.type === "folder";

  const renderIcon = (isFolder: boolean) => (isFolder ? "📂" : "📄");
  const handleStyle = () => (isOpen ? "h-auto" : "h-0");

  return (
    <div id={item.id} className="ml-4">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer hover:bg-blue-200 rounded-md px-1 py-0.5"
      >
        <div className="flex items-center gap-1.25">
          <span>{renderIcon(isFolder)}</span>
          <span>{item.name}</span>
        </div>
      </div>
      <div
        data-testid={`explorer-item-${item.id}`}
        className={cx(
          "overflow-hidden transition-all duration-300",
          handleStyle(),
        )}
      >
        {isFolder
          ? item.children?.map((item: FileNode) => (
              <ExplorerItem key={item.id} item={item} />
            ))
          : null}
      </div>
    </div>
  );
}
