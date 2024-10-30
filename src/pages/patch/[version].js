import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import GeneralChanges from "./GeneralChanges";
import ItemChanges from "./ItemChanges";
import NeutralCripsChanges from "./NeutralCripsChanges";

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
          <div className="flex items-center pl-6 pb-6 pt-6">
            <h1 className="text-primary text-3xl font-semibold leading-none tracking-tight pr-2">
              Patch {patchNote.version}
            </h1>
            <span className="text-xl font-semibold">|</span>
            <p className="text-3xl font-semibold text-muted-foreground pl-2">
              {patchNote.title}
            </p>
          </div>

          <div className="p-6 pt-0">
            <GeneralChanges patchNote={patchNote} />
            <NeutralCripsChanges patchNote={patchNote} />
            <ItemChanges patchNote={patchNote} />

            <h2 className="text-2xl font-semibold mb-4 text-secondary">
              {patchNote.heroesChangesTitle}
            </h2>
            <hr className="my-4 h-[1px] bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        </div>
      </main>
    </div>
  );
}
