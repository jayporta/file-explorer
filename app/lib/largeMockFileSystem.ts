import { FileNode } from "@/app/lib/mockFileSystem";

export const largeMockFileSystem: FileNode[] = [
  {
    id: "a",
    name: "apps",
    type: "folder",
    children: [
      {
        id: "a-1",
        name: "dashboard",
        type: "folder",
        children: [
          { id: "a-1-1", name: "dashboard.tsx", type: "file" },
          { id: "a-1-2", name: "dashboard.css", type: "file" },
          {
            id: "a-1-3",
            name: "components",
            type: "folder",
            children: [
              { id: "a-1-3-1", name: "Chart.tsx", type: "file" },
              { id: "a-1-3-2", name: "Table.tsx", type: "file" },
              {
                id: "a-1-3-3",
                name: "widgets",
                type: "folder",
                children: [
                  { id: "a-1-3-3-1", name: "Metric.tsx", type: "file" },
                  { id: "a-1-3-3-2", name: "Heatmap.tsx", type: "file" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "a-2",
        name: "settings",
        type: "folder",
        children: [
          { id: "a-2-1", name: "profile.ts", type: "file" },
          { id: "a-2-2", name: "security.ts", type: "file" },
          {
            id: "a-2-3",
            name: "policies",
            type: "folder",
            children: [
              { id: "a-2-3-1", name: "privacy.md", type: "file" },
              { id: "a-2-3-2", name: "terms.md", type: "file" },
            ],
          },
        ],
      },
      {
        id: "a-3",
        name: "mobile",
        type: "folder",
        children: [
          { id: "a-3-1", name: "app.tsx", type: "file" },
          { id: "a-3-2", name: "styles.css", type: "file" },
        ],
      },
    ],
  },
  {
    id: "b",
    name: "packages",
    type: "folder",
    children: [
      {
        id: "b-1",
        name: "ui",
        type: "folder",
        children: [
          { id: "b-1-1", name: "Button.tsx", type: "file" },
          { id: "b-1-2", name: "Modal.tsx", type: "file" },
          { id: "b-1-3", name: "Dropdown.tsx", type: "file" },
        ],
      },
      {
        id: "b-2",
        name: "utils",
        type: "folder",
        children: [
          { id: "b-2-1", name: "format.ts", type: "file" },
          { id: "b-2-2", name: "parse.ts", type: "file" },
          { id: "b-2-3", name: "cache.ts", type: "file" },
        ],
      },
      { id: "b-3", name: "README.md", type: "file" },
    ],
  },
  {
    id: "c",
    name: "docs",
    type: "folder",
    children: [
      { id: "c-1", name: "getting-started.md", type: "file" },
      { id: "c-2", name: "api-reference.md", type: "file" },
      {
        id: "c-3",
        name: "examples",
        type: "folder",
        children: [
          { id: "c-3-1", name: "basic.md", type: "file" },
          { id: "c-3-2", name: "advanced.md", type: "file" },
        ],
      },
    ],
  },
  {
    id: "d",
    name: "scripts",
    type: "folder",
    children: [
      {
        id: "d-1",
        name: "build",
        type: "folder",
        children: [
          { id: "d-1-1", name: "build.js", type: "file" },
          { id: "d-1-2", name: "build.test.js", type: "file" },
        ],
      },
      {
        id: "d-2",
        name: "deploy",
        type: "folder",
        children: [
          { id: "d-2-1", name: "deploy.sh", type: "file" },
          { id: "d-2-2", name: "deploy.config.js", type: "file" },
        ],
      },
    ],
  },
  {
    id: "e",
    name: "archive",
    type: "folder",
    children: [
      {
        id: "e-1",
        name: "2023",
        type: "folder",
        children: [
          { id: "e-1-1", name: "release-notes.md", type: "file" },
          { id: "e-1-2", name: "old-config.json", type: "file" },
        ],
      },
      {
        id: "e-2",
        name: "2022",
        type: "folder",
        children: [
          { id: "e-2-1", name: "migration.md", type: "file" },
          { id: "e-2-2", name: "legacy.ts", type: "file" },
        ],
      },
    ],
  },
  { id: "f", name: "CONTRIBUTING.md", type: "file" },
];
