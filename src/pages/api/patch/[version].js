const patchNotes = {
  "7.33a": {
    version: "7.33a",
    title: "The New Frontiers Update",
    changes: [
      "Added new Tormentor neutral creeps",
      "Reworked Outposts",
      "Introduced Twin Gates for map traversal",
      "Rebalanced hero talents",
    ],
  },
  "7.33b": {
    version: "7.33b",
    title: "Balance Adjustments",
    changes: [
      "Adjusted Tormentor spawn timings",
      "Modified Twin Gates cooldown",
      "Tweaked various hero abilities",
      "Updated item costs for balance",
    ],
  },
  "7.33c": {
    version: "7.33c",
    title: "Minor Fixes and Improvements",
    changes: [
      "Fixed bugs related to Tormentors",
      "Improved Twin Gates visibility",
      "Adjusted some hero talent values",
      "Resolved minor UI issues",
    ],
  },
};

export default function handler(req, res) {
  const { version } = req.query;

  if (typeof version !== "string") {
    return res.status(400).json({ error: "Invalid version parameter" });
  }

  const patchNote = patchNotes[version];

  if (!patchNote) {
    return res.status(404).json({ error: "Patch note not found" });
  }

  res.status(200).json(patchNote);
}
