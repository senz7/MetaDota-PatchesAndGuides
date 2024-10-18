import { LatestPatches } from "@/components/LatestPatches";
import { MostPopularGuides } from "@/components/MostPopularGuides";
import { QuickLinks } from "@/components/QuickLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="container mx-auto px-4 py-8">
        <QuickLinks />
        <LatestPatches />
        <MostPopularGuides />
      </main>
    </div>
  );
}
