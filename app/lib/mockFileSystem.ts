export type FileNode = {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
};

export const mockFileSystem: FileNode[] = [
  {
    id: "1",
    name: "node_modules",
    type: "folder",
    children: [
      {
        id: "1-1",
        name: "react",
        type: "folder",
        children: [{ id: "1-1-1", name: "index.js", type: "file" }],
      },
      { id: "1-2", name: "tailwindcss", type: "folder", children: [] },
    ],
  },
  {
    id: "2",
    name: "src",
    type: "folder",
    children: [
      {
        id: "2-1",
        name: "components",
        type: "folder",
        children: [{ id: "2-1-1", name: "FileExplorer.tsx", type: "file" }],
      },
      { id: "2-2", name: "App.tsx", type: "file" },
      { id: "2-3", name: "index.css", type: "file" },
    ],
  },
  { id: "3", name: "package.json", type: "file" },
  { id: "4", name: "README.md", type: "file" },
];
