"use client";
import { FileNode } from "../lib/mockFileSystem";
import ExplorerItem from "./ExplorerItem";

export default function Explorer({ fileSystem }: { fileSystem: FileNode[] }) {
  return (
    <div>
      <b>Explorer</b>
      <div>
        {fileSystem.map((item: FileNode) => (
          <ExplorerItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
