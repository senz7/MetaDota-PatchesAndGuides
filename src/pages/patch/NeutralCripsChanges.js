export default function NeutralCripsChanges({ patchNote }) {
  if (
    !patchNote.neutralCripsChanges ||
    !Array.isArray(patchNote.neutralCripsChanges) ||
    patchNote.neutralCripsChanges.length === 0
  ) {
    return null;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-secondary">
        {patchNote.neutralCripsChangesTitle || "Neutral Crips Changes"}
      </h2>
      <hr className="my-4 h-[1px] bg-gray-200 border-0 dark:bg-gray-700" />
      <ul className="space-y-8">
        {patchNote.neutralCripsChanges.map((neutralChange, index) => (
          <li
            key={neutralChange.id || index}
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <div className="flex items-center space-x-4 mb-2">
              {neutralChange.image && (
                <img
                  src={neutralChange.image}
                  alt={neutralChange.crip}
                  width={64}
                  height={64}
                  className="rounded-lg"
                  loading="lazy"
                />
              )}
              <h3 className="text-xl font-semibold text-primary">
                {neutralChange.crip}
              </h3>
            </div>
            {neutralChange.changes &&
              Array.isArray(neutralChange.changes) &&
              neutralChange.changes.length > 0 && (
                <ul className="list-disc pl-5 space-y-1">
                  {neutralChange.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="text-lg">
                      {change}
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </>
  );
}
