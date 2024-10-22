import { LatestPatches } from "@/components/LatestPatches";
import { MostPopularGuides } from "@/components/MostPopularGuides";
import { QuickLinks } from "@/components/QuickLinks";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <QuickLinks />
      <LatestPatches />
      <MostPopularGuides />
    </main>
  );
}
