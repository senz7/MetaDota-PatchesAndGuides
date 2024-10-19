import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PatchPage() {
  const router = useRouter();
  const { version } = router.query;
  const [patchNote, setPatchNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (version) {
      setLoading(true);
      fetchPatchNote(version);
    }
  }, [version]);

  const fetchPatchNote = async (version) => {
    try {
      const res = await fetch(`/api/patch/${version}`);
      if (!res.ok) {
        throw new Error("Failed to fetch patch note");
      }
      const data = await res.json();
      setPatchNote(data);
    } catch (err) {
      console.error("Error fetching patch note:", err);
      setError("Failed to load patch note");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8">{error}</div>;
  }

  if (!patchNote) {
    return (
      <div className="container mx-auto px-4 py-8">Patch note not found</div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !error && !patchNote && (
          <div>Patch note not found or doesn't exist</div>
        )}
        {patchNote && (
          <>
            <h1 className="text-3xl font-bold mb-4">
              Patch {patchNote.version}
            </h1>
            <h2 className="text-xl font-semibold mb-2">{patchNote.title}</h2>
            <ul className="list-disc pl-5 mb-4">
              {patchNote.itemsChanges.map((itemChange, index) => (
                <div key={index}>
                  <div>
                    {itemChange.image && (
                      <img
                        src={itemChange.image}
                        alt={itemChange.item}
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                    )}
                    <h1>{itemChange.item}</h1>
                  </div>
                  <ul className="list-disc pl-5 mt-2">
                    {itemChange.changes.map((change, changeIndex) => (
                      <li key={changeIndex}>{change}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}
