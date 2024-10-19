const patchNotes = {
  "7.37b": {
    version: "7.33b",
    title: "Обновление баланса",
    itemsChangesTitle: "Изменение предметов",
    itemsChanges: [
      {
        item: "Glepnir",
        changes: ["Eternal Chains: радиус уменьшен с 375 до 350"],
      },
      {
        item: "Kaya",
        changes: [
          "Усиление восстановления маны от нескольких предметов на основе Kaya больше не складывается",
          "Усиление вампиризма заклинаниями от нескольких предметов на основе Kaya больше не складывается",
        ],
      },
      {
        item: "Yasha and Kaya",
        changes: [
          "Усиление восстановления маны от нескольких предметов на основе Kaya больше не складывается",
          "Усиление вампиризма заклинаниями от нескольких предметов на основе Kaya больше не складывается",
        ],
      },
      {
        item: "Kaya and Sange",
        changes: [
          "Усиление восстановления маны от нескольких предметов на основе Kaya больше не складывается",
          "Усиление вампиризма заклинаниями от нескольких предметов на основе Kaya больше не складывается",
        ],
      },
      {
        item: "Meteor Hammer",
        changes: [
          "Усиление восстановления маны от нескольких предметов на основе Kaya больше не складывается",
          "Усиление вампиризма заклинаниями от нескольких предметов на основе Kaya больше не складывается",
        ],
      },
    ],
  },
  "7.37c": {
    version: "7.33c",
    title: "Обновление баланса",
    itemsChangesTitle: "Изменение предметов",
    itemsChanges: [
      {
        item: "Glepnir",
        changes: [
          "Бонус к здоровью уменьшен с 350 до 300",
          "Eternal Chains: урон уменьшен со 180 до 165",
        ],
      },
      {
        item: "Guardian Greaves",
        changes: ["Mend: лечение уменьшено с 350 до 325"],
      },
      {
        item: "Holy Locket",
        changes: ["Holy Blessing: усиление лечения уменьшено с 30% до 25%"],
      },
      {
        item: "Mekansm",
        changes: ["Restore: лечение уменьшено с 275 до 250"],
      },
      {
        item: "Pipe of Insight",
        changes: ["Barrier: поглощаемый магический урон уменьшен с 450 до 425"],
      },
      {
        item: "Rod of Atos",
        changes: ["Бонус к здоровью уменьшен с 300 до 275"],
      },
      {
        item: "Solar Crest",
        changes: ["Shine: бонус к броне уменьшен с 7 до 5"],
      },
    ],
  },
  "7.37d": {
    version: "7.33d",
    title: "Обновление баланса",
    itemsChangesTitle: "Изменение предметов",
    itemsChanges: [
      {
        image: "/itemsImages/arcaneboots.png",
        item: "Arcane Boots",
        changes: [
          "Стоимость рецепта увеличена с 375 до 475 золота (общая стоимость увеличилась с 1300 до 1400 золота)",
          "Бонус к восстановлению маны уменьшен с 0,5 до 0,25",
          "Replenish Mana: восстановление маны уменьшено со 175 до 150",
        ],
      },
      {
        item: "Bracer",
        changes: ["Бонусы от этого предмета больше не удваиваются после 25:00"],
      },
      {
        item: "Crimson Guard",
        changes: ["Guard: длительность уменьшена с 8 до 7 секунд"],
      },
      {
        item: "Disperser",
        changes: [
          "Suppress: больше не защищает владельца или его союзников от замедлений",
          "Suppress: теперь даёт +40% к сопротивлению замедлениям на время действия",
        ],
      },
      {
        item: "Glepnir",
        changes: [
          "Стоимость рецепта увеличена с 250 до 550 золота (общая стоимость увеличилась с 5450 до 5750 золота)",
          "Бонус к урону уменьшен с 30 до 25",
          "Бонус к скорости атаки уменьшен с 30 до 25",
          "Бонус к здоровью уменьшен с 300 до 275",
          "Chain Lightning: урон уменьшен со 160 до 140",
        ],
      },
      {
        item: "Guardian Greaves",
        changes: [
          "Общая стоимость увеличилась с 4950 до 5050 (из-за увеличения стоимости Arcane Boots)",
        ],
      },
      {
        item: "Null Talisman",
        changes: ["Бонусы от этого предмета больше не удваиваются после 25:00"],
      },
      {
        item: "Pavise",
        changes: [
          "Protect: здоровье физического барьера уменьшено с 300 до 250",
          "Protect: длительность уменьшена с 8 до 7 секунд",
          "Protect: расход маны увеличен с 75 до 100",
        ],
      },
      {
        item: "Pipe of Insight",
        changes: ["Barrier: длительность уменьшена с 10 до 8 секунд"],
      },
      {
        item: "Ring of Basilius",
        changes: ["Бонус к восстановлению маны уменьшен с 0,5 до 0,25"],
      },
      {
        item: "Solar Crest",
        changes: [
          "Бонус к здоровью уменьшен с 200 до 175",
          "Shine: длительность уменьшена с 8 до 7 секунд",
          "Shine: здоровье физического барьера уменьшено с 400 до 350",
          "Shine: бонус к скорости атаки уменьшен с 70 до 60",
        ],
      },
      {
        item: "Spirit Vessel",
        changes: [
          "Soul Release: снижение восстановления здоровья усилено с 50% до 60%",
          "Soul Release: теперь всегда получает заряд при смерти владельца",
        ],
      },
      {
        item: "Wraith Band",
        changes: ["Бонусы от этого предмета больше не удваиваются после 25:00"],
      },
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
