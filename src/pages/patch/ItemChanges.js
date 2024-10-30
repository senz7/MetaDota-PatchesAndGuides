export default function ItemChanges({ patchNote }) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-secondary">
        {patchNote.itemsChangesTitle}
      </h2>
      <hr className="my-4 h-[1px] bg-gray-200 border-0 dark:bg-gray-700" />

      <ul className="space-y-8">
        {patchNote.itemsChanges.map((itemChange, index) => (
          <li
            key={itemChange.id || index}
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <div className="flex items-center space-x-4 mb-2">
              {itemChange.image && (
                <img
                  src={itemChange.image}
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
            <ul className="list-disc pl-5 space-y-1 pb-6">
              {itemChange.changes.map((change, changeIndex) => (
                <li key={changeIndex} className="text-lg">
                  {change}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
