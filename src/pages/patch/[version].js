import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function PatchPage() {
  const router = useRouter();
  const { version } = router.query;
  const [patchNote, setPatchNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const imageRefs = useRef([]);

  const loadImage = () => {
    imageRefs.current.forEach((img) => {
      if (img && img.getAttribute("data-src")) {
        img.src = img.getAttribute("data-src");
        img.removeAttribute("data-src");
      }
    });
  };

  useEffect(() => {
    if (patchNote) {
      loadImage();
    }
  }, [patchNote]);

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
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <main className="flex-grow container mx-auto px-4 py-8 bg-white">
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
            {patchNote.generalChangesTitle && (
              <h2 className="text-xl font-semibold mb-2">
                {patchNote.generalChangesTitle}
              </h2>
            )}

            {patchNote.generalChanges && (
              <ul className="list-disc pl-5 mb-4">
                {patchNote.generalChanges.map((change, index) => (
                  <li key={index}>{change}</li>
                ))}
              </ul>
            )}

            {patchNote.generalChangesSubtitle && (
              <h3 className="text-lg font-medium mb-2">
                {patchNote.generalChangesSubtitle}
              </h3>
            )}

            {patchNote.generalChangesExtension && (
              <ul className="list-disc pl-5 mb-4">
                {patchNote.generalChangesExtension.map(
                  (extensionChange, index) => (
                    <li key={index}>{extensionChange}</li>
                  )
                )}
              </ul>
            )}
            <ul className="list-disc pl-5 mb-4">
              <h2 className="text-xl font-semibold mb-2">
                {patchNote.itemsChangesTitle}
              </h2>
              {patchNote.itemsChanges.map((itemChange, index) => (
                <div key={index}>
                  <div className="flex justify-start items-center mt-5">
                    {itemChange.image && (
                      <img
                        ref={(el) => (imageRefs.current[index] = el)}
                        data-src={itemChange.image.replace("@/public", "")} // Убедитесь, что путь корректный
                        alt={itemChange.item}
                        width={70}
                        height={70}
                        className="rounded-lg mr-4"
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
