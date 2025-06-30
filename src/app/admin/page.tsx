
import { ManageBranches } from "./components/manage-branches";
import Header from "@/components/header";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col">
       <Header />
       <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ManageBranches />
      </main>
    </div>
  );
}
