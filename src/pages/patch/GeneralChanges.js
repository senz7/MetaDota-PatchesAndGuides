export default function GeneralChanges({ patchNote }) {
  return (
    <>
      {patchNote.generalChangesTitle && (
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          {patchNote.generalChangesTitle}
        </h2>
      )}

      {patchNote.generalChanges && (
        <ul className="list-disc pl-5 mb-6 space-y-2">
          {patchNote.generalChanges.map((change, index) => (
            <li key={index} className="text-lg">
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
          {patchNote.generalChangesExtension.map((extensionChange, index) => (
            <li key={index} className="text-lg">
              {extensionChange}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
