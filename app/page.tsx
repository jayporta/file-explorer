import { mockFileSystem } from "./lib/mockFileSystem";
import Explorer from "./ui/Explorer";

export default function Home() {
  return (
    <div className="h-full">
      <main className="h-full">
        <div className="bg-blue-100 p-4 rounded-md w-fit h-full">
          <Explorer fileSystem={mockFileSystem} />
        </div>
      </main>
    </div>
  );
}
