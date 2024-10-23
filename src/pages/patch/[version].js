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
    return (
      <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>
    );
  }

  if (!patchNote) {
    return (
      <div className="container mx-auto px-4 py-8">Patch note not found</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-500 ease-in-out">
      <main className="container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 transition-colors duration-500 ease-in-out">
          <header className="flex items-center pl-6 pb-6 pt-6">
            <h1 className="text-primary text-3xl font-semibold leading-none tracking-tight pr-2">
              Patch {patchNote.version}
            </h1>
            <a className="text-xl font-semibold">|</a>
            <p className="text-3xl font-semibold text-muted-foreground pl-2">
              {patchNote.title}
            </p>
          </header>

          <div className="p-6 pt-0">
            {patchNote.generalChangesTitle && (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-secondary">
                  {patchNote.generalChangesTitle}
                </h2>
              </>
            )}

            {patchNote.generalChanges && (
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {patchNote.generalChanges.map((change, index) => (
                  <li key={index} className="text-lg">
                    {" "}
                    {/* Используем индекс здесь, если у вас нет уникального идентификатора */}
                    {change}
                  </li>
                ))}
              </ul>
            )}

            {patchNote.generalChangesSubtitle && (
              <h3 className="text-xl font-medium mb-4 text-secondary">
                {patchNote.generalChangesSubtitle}
              </h3>
            )}

            {patchNote.generalChangesExtension && (
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {patchNote.generalChangesExtension.map(
                  (extensionChange, index) => (
                    <li key={index} className="text-lg">
                      {" "}
                      {/* Используем индекс здесь, если у вас нет уникального идентификатора */}
                      {extensionChange}
                    </li>
                  )
                )}
              </ul>
            )}
            <h2 className="text-2xl font-semibold mb-4 text-secondary">
              {patchNote.itemsChangesTitle}
            </h2>
            <a className="my-4 h-[1px] bg-gray-200 border-0 dark:bg-gray-700" />

            <ul className="space-y-8">
              {patchNote.itemsChanges.map((itemChange, index) => (
                <li
                  key={itemChange.id || index} // Используем itemChange.id как уникальный ключ, если он есть
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div className="flex items-center space-x-4 mb-2">
                    {itemChange.image && (
                      <img
                        ref={(el) => (imageRefs.current[index] = el)}
                        data-src={itemChange.image.replace("@/public", "")}
                        alt={itemChange.item}
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                    )}
                    <h3 className="text-xl font-semibold text-primary">
                      {itemChange.item}
                    </h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    {itemChange.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="text-lg">
                        {" "}
                        {/* Если у вас нет уникального идентификатора для изменений */}
                        {change}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
