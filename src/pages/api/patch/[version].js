const patchNotes = {
  "7.37a": {
    version: "7.37",
    title: "Обновление баланса",
    itemsChangesTitle: "Изменение предметов",
    itemsChanges: [
      {
        image: "/itemsImages/roshanbanner.webp",
        item: "Roshan's banner",
        changes: ["Радиус действия увеличен с 600 до 650"],
      },
      {
        image: "/itemsImages/bracer.png",
        item: "Bracer",
        changes: [
          "Больше не даёт +3/6 к урону",
          "Теперь даёт +50/100 к здоровью",
        ],
      },
      {
        image: "/itemsImages/bloodstone.webp",
        item: "Bloodstone",
        changes: [
          "Бонус к вампиризму заклинаниями уменьшен с 30% до 20%",
          "Bloodpact: множитель вампиризма заклинаниями увеличен с 2,5 до 4",
          "Bloodpact: длительность уменьшена с 6 до 5 секунд",
        ],
      },
      {
        image: "/itemsImages/bloodthorn.webp",
        item: "Bloodthorn",
        changes: [
          "Soul Rend: магический урон, наносимый атаками существ, не являющихся героями, уменьшен с 50 до 25",
        ],
      },
      {
        image: "/itemsImages/crimsonguard.webp",
        item: "Crimson Guard",
        changes: [
          "Guard: перезарядка увеличена с 35 до 40 секунд",
          "Guard: дополнительный блок урона уменьшен с 2,5% до 2,2% от максимального здоровья владельца",
        ],
      },
      {
        image: "/itemsImages/dagon.webp",
        item: "Dagon",
        changes: [
          "Бонус к вампиризму заклинаниями изменён с 15% на 15/16/17/18/19%",
        ],
      },
      {
        image: "/itemsImages/eternalshroud.webp",
        item: "Eternal Shroud",
        changes: [
          "Eternal Endurance: сопротивление магии за эффект уменьшено с 4% до 3,5%",
        ],
      },
      {
        image: "/itemsImages/etherealblade.webp",
        item: "Ethereal Blade",
        changes: ["Ether Blast: скорость снаряда увеличена с 1275 до 1400"],
      },
      {
        image: "/itemsImages/guardiangreaves.webp",
        item: "Guardian Greaves",
        changes: ["Mend: перезарядка увеличена с 40 до 45 секунд"],
      },
      {
        image: "/itemsImages/heartoftarrasque.webp",
        item: "Heart of Tarrasque",
        changes: [
          "Восстановление здоровья в секунду уменьшено с 1,6% до 1,4% от максимального здоровья",
        ],
      },
      {
        image: "/itemsImages/heavenshalberd.webp",
        item: "Heaven's Halberd",
        changes: [
          "Бонус к сопротивлению замедлениям увеличен с 20% до 25%",
          "Disarm: расход маны уменьшен со 100 до 75",
        ],
      },
      {
        image: "/itemsImages/lotusorb.webp",
        item: "Lotus Orb",
        changes: ["Echo Shell: длительность уменьшена с 6 до 5 секунд"],
      },
      {
        image: "/itemsImages/mantastyle.webp",
        item: "Manta Style",
        changes: [
          "Mirror Image: время существования иллюзий уменьшено с 20 до 18 секунд",
        ],
      },
      {
        image: "/itemsImages/pavise.webp",
        item: "Pavise",
        changes: ["Бонус к здоровью увеличен со 150 до 175"],
      },
      {
        image: "/itemsImages/pipeofinsight.webp",
        item: "Pipe of Insight",
        changes: [
          "Barrier: длительность уменьшена с 12 до 10 секунд",
          "Insight Aura: бонус к сопротивлению магии уменьшен с 10% до 8%",
        ],
      },
      {
        image: "/itemsImages/solarcrest.webp",
        item: "Solar Crest",
        changes: [
          "Стоимость рецепта уменьшена с 600 до 500 золота (общая стоимость уменьшилась с 2700 до 2600 золота)",
        ],
      },
      {
        image: "/itemsImages/shadowamulet.webp",
        item: "Shadow Amulet",
        changes: [
          "Fade: теперь цели заклинания не обязательно стоять на месте",
          "Fade: перезарядка больше не сбрасывается при применении на себя",
          "Fade: теперь невидимость замедляет цель заклинания на 35%",
          "Fade: теперь эффект можно развеять",
          "Fade: перезарядка увеличена с 7 до 18 секунд",
          "Fade: длительность уменьшена с 15 секунд до 3,5 секунд",
        ],
      },
      {
        image: "/itemsImages/spiritvessel.webp",
        item: "Spirit Vessel",
        changes: [
          "Рецепт изменён. Теперь собирается из Urn of Shadows, Vitality Booster и рецепта за 300 золота. Общая стоимость прежняя.",
          "Больше не даёт +6 ко всем атрибутам. Теперь даёт +375 к здоровью.",
          "Soul Release: перезарядка увеличена с 7 до 10 секунд",
          "Soul Release: урон в секунду уменьшен с 35 до 25",
          "Soul Release: снижение восстановления здоровья усилено с 45% до 50%",
        ],
      },
      {
        image: "/itemsImages/urnofshadows.webp",
        item: "Urn of Shadows",
        changes: [
          "Рецепт изменён. Теперь собирается из Sage's Mask, Ring of Protection, Fluffy Hat и рецепта за 280 золота. Общая стоимость прежняя.",
          "Больше не даёт +2 ко всем атрибутам. Теперь даёт +125 к здоровью.",
          "Soul Release: перезарядка увеличена с 7 до 10 секунд",
        ],
      },
    ],
  },
  "7.37b": {
    version: "7.33b",
    title: "Обновление баланса",
    itemsChangesTitle: "Изменение предметов",
    itemsChanges: [
      {
        image: "/itemsImages/glepnir.webp",
        item: "Glepnir",
        changes: ["Eternal Chains: радиус уменьшен с 375 до 350"],
      },
      {
        image: "/itemsImages/kaya.webp",
        item: "Kaya",
        changes: [
          "Усиление восстановления маны от нескольких предметов на основе Kaya больше не складывается",
          "Усиление вампиризма заклинаниями от нескольких предметов на основе Kaya больше не складывается",
        ],
      },
      {
        image: "/itemsImages/yashaandkaya.webp",
        item: "Yasha and Kaya",
        changes: [
          "Усиление восстановления маны от нескольких предметов на основе Kaya больше не складывается",
          "Усиление вампиризма заклинаниями от нескольких предметов на основе Kaya больше не складывается",
        ],
      },
      {
        image: "/itemsImages/kayaandsange.webp",
        item: "Kaya and Sange",
        changes: [
          "Усиление восстановления маны от нескольких предметов на основе Kaya больше не складывается",
          "Усиление вампиризма заклинаниями от нескольких предметов на основе Kaya больше не складывается",
        ],
      },
      {
        image: "/itemsImages/meteorhammer.webp",
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
        image: "/itemsImages/glepnir.webp",
        item: "Glepnir",
        changes: [
          "Бонус к здоровью уменьшен с 350 до 300",
          "Eternal Chains: урон уменьшен со 180 до 165",
        ],
      },
      {
        image: "/itemsImages/guardiangreaves.webp",
        item: "Guardian Greaves",
        changes: ["Mend: лечение уменьшено с 350 до 325"],
      },
      {
        image: "/itemsImages/holylocket.webp",
        item: "Holy Locket",
        changes: ["Holy Blessing: усиление лечения уменьшено с 30% до 25%"],
      },
      {
        image: "/itemsImages/mekansm.webp",
        item: "Mekansm",
        changes: ["Restore: лечение уменьшено с 275 до 250"],
      },
      {
        image: "/itemsImages/pipeofinsight.webp",
        item: "Pipe of Insight",
        changes: ["Barrier: поглощаемый магический урон уменьшен с 450 до 425"],
      },
      {
        image: "/itemsImages/rodofatos.webp",
        item: "Rod of Atos",
        changes: ["Бонус к здоровью уменьшен с 300 до 275"],
      },
      {
        image: "/itemsImages/solarcrest.webp",
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
        image: "/itemsImages/bracer.png",
        item: "Bracer",
        changes: ["Бонусы от этого предмета больше не удваиваются после 25:00"],
      },
      {
        image: "/itemsImages/crimsonguard.webp",
        item: "Crimson Guard",
        changes: ["Guard: длительность уменьшена с 8 до 7 секунд"],
      },
      {
        image: "/itemsImages/disperser.png",
        item: "Disperser",
        changes: [
          "Suppress: больше не защищает владельца или его союзников от замедлений",
          "Suppress: теперь даёт +40% к сопротивлению замедлениям на время действия",
        ],
      },
      {
        image: "/itemsImages/glepnir.webp",
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
        image: "/itemsImages/guardiangreaves.webp",
        item: "Guardian Greaves",
        changes: [
          "Общая стоимость увеличилась с 4950 до 5050 (из-за увеличения стоимости Arcane Boots)",
        ],
      },
      {
        image: "/itemsImages/nulltalisman.webp",
        item: "Null Talisman",
        changes: ["Бонусы от этого предмета больше не удваиваются после 25:00"],
      },
      {
        image: "/itemsImages/pavise.webp",
        item: "Pavise",
        changes: [
          "Protect: здоровье физического барьера уменьшено с 300 до 250",
          "Protect: длительность уменьшена с 8 до 7 секунд",
          "Protect: расход маны увеличен с 75 до 100",
        ],
      },
      {
        image: "/itemsImages/pipeofinsight.webp",
        item: "Pipe of Insight",
        changes: ["Barrier: длительность уменьшена с 10 до 8 секунд"],
      },
      {
        image: "/itemsImages/ringofbasilius.webp",
        item: "Ring of Basilius",
        changes: ["Бонус к восстановлению маны уменьшен с 0,5 до 0,25"],
      },
      {
        image: "/itemsImages/solarcrest.webp",
        item: "Solar Crest",
        changes: [
          "Бонус к здоровью уменьшен с 200 до 175",
          "Shine: длительность уменьшена с 8 до 7 секунд",
          "Shine: здоровье физического барьера уменьшено с 400 до 350",
          "Shine: бонус к скорости атаки уменьшен с 70 до 60",
        ],
      },
      {
        image: "/itemsImages/spiritvessel.png",
        item: "Spirit Vessel",
        changes: [
          "Soul Release: снижение восстановления здоровья усилено с 50% до 60%",
          "Soul Release: теперь всегда получает заряд при смерти владельца",
        ],
      },
      {
        image: "/itemsImages/wraithband.webp",
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
