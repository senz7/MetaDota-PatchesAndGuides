const patchNotes = {
  "7.37a": {
    version: "7.37",
    title: "Обновление баланса",
    generalChangesTitle: "Общие изменения",
    generalChanges: [
      "В описания способностей добавлена иконка для значений, на которые влияет Bloodstone и другие эффекты, увеличивающие область действия.",
      "Аура области «Рвение рудокопа»: увеличение восстановления здоровья ослаблено с 7 до 5.",
      "Аура области «Волшебные воды»: увеличение восстановления маны ослаблено с 1,5 до 1,2.",
      "Теперь после второй смерти из Рошана всегда выпадает Roshan's Banner.",
      "Теперь после третьей смерти из Рошана выпадают либо Refresher Shard и сыр (днём), либо Refresher Shard и Aghanim's Blessing (ночью).",
      "Время телепортации к аванпостам у логов Рошана уменьшено с 6 до 4 секунд.",
      "Классификация телепортации:",
      "телепортацией считаются Town Portal Scroll",
      "Boots of Travel, Boots of Travel 2",
      "парные порталы",
      "способности Chen (Divine Favor)",
      "Io (Relocate)",
      "Keeper of the Light (Recall)",
      "Lone Druid (Return)",
      "Nature's Prophet (Teleportation)",
      "Templar Assassin (Psionic Projection)",
      "Tinker (Keen Conveyance)",
      "Underlord (Fiend's Gate)",
      "Visage (Faithful Followers).",
      "Обновление правил истощения: способности, отключаемые истощением, теперь помечены специальными пояснениями.",
      "Полностью отключаются такие способности, как Alchemist — Greevil's Greed, Bloodseeker — Thirst, Bounty Hunter — Jinada, Faceless Void — Distortion Field, и другие. Частично отключаются способности таких героев, как Chaos Knight — Phantasmagoria, Ember Spirit — Immolation, Lifestealer — Feast, и другие. Некоторые способности, такие как Lich — Death Charge, больше не отключаются.",
    ],

    generalChangesSubtitle: "Блокирование и отражение способностей",
    generalChangesExtension: [
      "Способности, применяемые при атаке, больше нельзя заблокировать или отразить. Изменилось поведение следующих способностей:",
      "Beastmaster — способность Dive Bomb у ястреба от Call of the Wild",
      "Omniknight — способность Hammer of Purity",
      "Tusk — способность Walrus Punch!",
      "Ogre Magi — способность Fireblast, применяемая при атаках с талантом 25 уровня (в том числе её повторные срабатывания)",
      "Способности, направленные на существо или точку, но не следующие за целью при применении на существо, больше нельзя заблокировать или отразить. Изменилось поведение следующих способностей:",
      "Lion — способность Earth Spike",
      "Sand King — способность Burrowstrike",
      "Способности, следующие за целью при применении на существо, можно заблокировать или отразить. Изменилось поведение следующих способностей:",
      "Dark Seer — способность Ion Shell",
      "Способности, направленные на существо и перемещающие владельца, теперь блокируются в момент применения, а не после перемещения.",
      "Изменилось поведение следующих способностей:",
      "Huskar — способность Life Break",
      "Marci — способность Rebound",
      "Meepo — способность MegaMeepo Fling",
      "Sven — способность Storm Hammer с Aghanim's Scepter",
      "Tiny — способность Toss",
      "Tusk — способность Snowball",
      "Способности, запускающие снаряд в основную цель и действующие на область вокруг неё, теперь блокируются и отражаются только для основной цели. Изменилось поведение следующих способностей:",
      "Alchemist — способность Unstable Concoction",
      "Bristleback — способность Viscous Nasal Goo",
      "Venomancer — способность Noxious Plague",
      "Способности, запускающие отдельные наводящиеся снаряды в несколько целей и накладывающие на них одинаковый эффект, теперь блокируются и отражаются независимо друг от друга. Изменилось поведение следующих способностей:",
      "Bane — способность Brain Sap с Aghanim's Shard",
      "Dazzle — способность Poison Touch",
      "Lion — способность Finger of Death с Aghanim's Scepter",
      "Nyx Assassin — способность Mind Flare с талантом 25 уровня",
      "Skywrath Mage — способность Ancient Seal с Aghanim's Scepter",
      "Visage — способность Soul Assumption с талантом 15 уровня",
      "Gleipnir — заклинание Eternal Chains",
      "Способности, снаряд которых направлен на существо и отскакивает между несколькими существами, теперь блокируются и отражаются только для основной цели. Снаряд продолжит отскакивать в последующие цели, но его нельзя будет заблокировать или отразить. Изменилось поведение следующих способностей:",
      "Dazzle — способность Shadow Wave",
      "Hoodwink — способность Acorn Shot",
      "Medusa — способность Mystic Snake (змея от Cold Blooded больше не блокируется и не отражается)",
      "Nature's Prophet — способность Wrath of Nature (вне зависимости от того, что выбрано целью: существо или точка)",
      "Phantom Lancer — способность Spirit Lance",
      "Rubick — способность Fade Bolt",
      "Tinker — способность Laser с Aghanim's Scepter",
      "Vengeful Spirit — способность Magic Missile с Aghanim's Shard",
      "Witch Doctor — способность Paralyzing Cask",
      "Zeus — способность Arc Lightning (молнии от атак с Aghanim's Shard не блокируются и не отражаются)",
    ],

    neutralCripsChangesTitle: "Изменения нейтральных крипов",
    neutralCripsChanges: [
      {
        image: "/neutralCripsImages/storm_harpy.webp",
        crip: "Штормовая гарпия",
        changes: [
          "Больше не применяет Chain Lightning, если во время отвода её атакуют крипы с линии",
        ],
      },
      {
        image: "/neutralCripsImages/giant_wolf.webp",
        crip: "Гигантский волк",
        changes: ["Intimidate: уменьшение урона от атак усилено с 50% до 60%"],
      },
      {
        image: "/neutralCripsImages/bear_smasher.webp",
        crip: "Медведемон-крушитель",
        changes: [
          "Death Throe: Power: бонус к базовому урону от атак увеличен с 50% до 60%",
        ],
      },
      {
        image: "/neutralCripsImages/medvedemon.webp",
        crip: "Медведемон",
        changes: [
          "Death Throe: Rush: дополнительная скорость атаки увеличена со 100 до 120",
        ],
      },
      {
        image: "/neutralCripsImages/ancient_stone_golem.webp",
        crip: "Древний гранитный голем",
        changes: [
          "Granite Aura: дополнительное здоровье увеличено с 15/16/17/19% до 16/17/18/19%",
        ],
      },
      {
        image: "/neutralCripsImages/ancient_stone_golem.webp",
        crip: "Древний каменный голем",
        changes: [
          "Weakening Aura: снижение брони усилено с 2/3/4/5 до 3/4/5/6",
        ],
      },
    ],

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
        image: "/itemsImages/spiritvessel.png",
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

    neutralItemsChangesTitle: "Изменения нейтральных предметов",
    neutralItemsChanges: [
      {
        image: "neutralItemsImags/first_tier/trusty_shovel.webp",
        item: "Trusty shovel",
        changes: [
          "Dig: теперь не перезаряжается, если предмет не находится в ячейке нейтрального предмета",
          "Dig: при использовании в реке всегда выкапывается руна воды",
        ],
      },
      {
        image: "neutralItemsImags/first_tier/fairys_trinket.webp",
        item: "Fairy's Trinket",
        changes: ["Предмет упразднён"],
      },
      {
        image: "neutralItemsImags/first_tier/ironwood_tree.webp",
        item: "Ironwood Tree",
        changes: [
          "Возвращённый нейтральный предмет 1 разряда",
          "Даёт +5 ко всем атрибутам. Активное заклинание: Plant Tree. Сажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд. Перезарядка: 15 секунд.",
        ],
      },
      {
        image: "neutralItemsImags/first_tier/pig_pole.webp",
        item: "Pig Pole",
        changes: [
          "Бонус ко всем атрибутам уменьшен с 5 до 4",
          "Pig, Out!: бонус к скорости передвижения увеличен с 10% до 15%",
        ],
      },
      {
        image: "neutralItemsImags/second_tier/iron_talon.webp",
        item: "Iron Talon",
        changes: [
          "Возвращённый нейтральный предмет 2 разряда",
          "Даёт +20 к скорости атаки и +4 к броне. Активное заклинание: Chop. Наносит неподконтрольному игрокам вражескому существу урон в размере 80% от его текущего запаса здоровья. При применении на дерево мгновенно его уничтожает. Перезарядка: 20 секунд. Перезарядка после применения на дерево: 4 секунды.",
        ],
      },
      {
        image: "neutralItemsImags/second_tier/philosophers_stone",
        item: "Philosopher's Stone",
        changes: [
          "Теперь имеет 750 зарядов. Тратит заряд каждый раз, когда даёт владельцу золото. Когда зарядов не останется, предмет исчезнет, а его владелец получит 375 золота.",
        ],
      },
      {
        image: "neutralItemsImags/second_tier/pupils_gift.webp",
        item: "Pupil's Gift",
        changes: [
          "Бонус к атрибутам для универсальных героев увеличен с 7 до 8",
        ],
      },
      {
        image: "neutralItemsImags/second_tier/vambrace.webp",
        item: "Vambrace",
        changes: [
          "Теперь это предмет 3 разряда",
          "Бонус к основному атрибуту увеличен с 8 до 10",
          "Бонус к остальным атрибутам увеличен с 2 до 4",
          "Бонус к сопротивлению магии, когда выбрана сила, увеличен с 8% до 10%",
          "Бонус к скорости атаки, когда выбрана ловкость, увеличен с 10 до 15",
          "Бонус к урону от заклинаний, когда выбран интеллект, увеличен с 6% до 8%",
        ],
      },
      {
        image: "neutralItemsImags/third_tier/ogre_seal_totem.webp",
        item: "Ogre Seal Totem",
        changes: [
          "Теперь это предмет 4 разряда",
          "Бонус к силе увеличен с 10 до 12",
          "Ogre Seal Flop: перезарядка уменьшена с 40 до 35 секунд",
          "Ogre Seal Flop: урон увеличен со 150 до 250",
          "Ogre Seal Flop: теперь во время скачков герой может менять направление движение, но с уменьшенной скоростью поворота",
        ],
      },
      {
        image: "neutralItemsImags/fourth_tier/martyrs_plate.webp",
        item: "Martyr's Plate",
        changes: ["Предмет упразднён"],
      },
    ],

    heroesChangesTitle: "Изменения героев",

    // Abaddon
    heroesChanges: [
      {
        id: 1,
        image: "/heroesImages/abaddon.webp",
        hero: "Abaddon",
        baseAttributeChanges: ["Способность Font of Avernus удалена из игры"],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Withering Mist",
                innateAbility: [
                  "Новая врождённая способность. Пассивная, не улучшается.",
                  "Нанеся врагу урон, герой на 5 секунд накладывает на него отрицательный эффект, который уменьшает восстановление здоровья, лечение и любой вампиризм на 35%, если здоровье жертвы ниже 40%",
                ],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/abaddon/abaddon_borrowed_time.png",
                abilityTitle: "Borrowed Time",
                abilityChanges: [
                  "Перезарядка увеличена с 80/70/60 до 90/80/70 секунд",
                ],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Перезарядка увеличена с 80/70/60 до 90/80/70 секунд",
                ],
              },
            ],
          },
        ],
      },

      // Anti-Mage
      {
        id: 2,
        image: "/heroesImages/anti_mage.webp",
        hero: "Anti-Mage",
        baseAttributeChanges: [
          "Базовое восстановление здоровья увеличено с 0,75 до 1",
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Persecutor",
                innateAbility: [
                  "Новая врождённая способность. Пассивная, улучшается вместе с Mana Void.",
                  "Атаки замедляют жертв в зависимости от недостающей у них маны. Замедление в 12,5/15/17,5/20% начинает действовать при 50% маны и достигает 25/30/35/40%, когда мана отсутствует полностью. Длительность замедления: 0,75 секунды.",
                ],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/anti_mage/antimage_mana_break.png",
                abilityTitle: "Mana Break",
                abilityChanges: [
                  "Больше не является врождённой способностью",
                  "Сжигание маны за атаку изменено с 16/23/30/37/44 на 25/30/35/40",
                  "Сжигаемая доля от макс. маны изменена с 0,8/1,6/2,4/3,2/4% на 1,6/2,4/3,2/4%",
                ],
              },
              {
                image: "/heroesAbilitiesImages/anti_mage/antimage_blink.png",
                abilityTitle: "Blink",
                abilityChanges: [
                  "Изменено улучшение от Aghanim's Scepter. Уменьшает перезарядку этой способности на 1 секунду. В течение 5 секунд после её применения следующая атака с эффектом Mana Break дополнительно сожжёт 20% от максимальной маны и на 6 секунд запретит жертве восстанавливать ману (этот эффект нельзя развеять).",
                ],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 15 уровня: «Mana Break замедляет жертв без маны на 40%» заменено на «+10% к макс. замедлению от Persecutor»",
                  "Талант 20 уровня: «–1 сек. перезарядки Blink» заменено на «+0,7 сек. оглушения от Mana Void»",
                ],
              },
            ],
          },
        ],
      },

      // Arc warden
      {
        id: 3,
        image: "/heroesImages/arc_warden.webp",
        hero: "Arc Warden",
        baseAttributeChanges: [""],
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/arc_warden/arc_warden_alt.png",
              aspectTitle: "Order",
              aspectAbility: [
                {
                  firstAbility: {
                    image:
                      "/heroesAbilitiesImages/arc_warden/arc_warden_flux.png",
                    title: "Flux",
                    changes:
                      "Замедление передвижения увеличено с 14/21/28/35% до 15/22/30/39%",
                  },
                  secondAbility: {
                    image:
                      "/heroesAbilitiesImages/arc_warden/arc_warden_spark_wraith.png",
                    title: "Spark Wraith",
                    changes:
                      "Длительность замедления увеличена с 0,4/0,5/0,6/0,7 до 0,6/0,8/1/1,2 секунды",
                  },
                },
              ],
            },
          },
          {
            secondAspect: {
              image: "/heroesAbilitiesImages/arc_warden/arc_warden.png",
              aspectTitle: "Disorder",
              aspectAbility: [
                {
                  firstAbility: {
                    image:
                      "/heroesAbilitiesImages/arc_warden/arc_warden_flux.png",
                    title: "Flux",
                    changes:
                      "Замедление передвижения уменьшено с 6/10/14/18% до 5/8/11/14%",
                  },
                  secondAbility: {
                    image:
                      "/heroesAbilitiesImages/arc_warden/arc_warden_spark_wraith.png",
                    title: "Spark Wraith",
                    changes:
                      "Длительность замедления уменьшена с 0,6/0,8/1/1,2 до 0,4/0,5/0,6/0,7 секунды",
                  },
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 25 уровня: «Magnetic Field действует на крипов и постройки» заменено на «Безмолвие от Flux, если рядом с жертвой никого нет»",
                ],
              },
            ],
          },
        ],
      },

      // Beastmaster
      {
        id: 4,
        image: "/heroesImages/beastmaster.webp",
        hero: "Beastmaster",
        baseAttributeChanges: [""],
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/beastmaster/summons.png",
              aspectTitle: "Wild Hunt",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/beastmaster/beastmaster_inner_beast.png",
                  title: "Inner Beast",
                  changes:
                    "Дополнительная скорость атаки за существо изменена с 1/2/3/4/5 на 2/3/4/5",
                },
              ],
            },
          },
          {
            secondAspect: {
              image: "/heroesAbilitiesImages/beastmaster/damage.png",
              aspectTitle: "Beast Mode",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/beastmaster/beastmaster_inner_beast.png",
                  title: "Inner Beast",
                  changes:
                    "Дополнительная скорость атаки при активации изменена с 10/20/30/40/50 на 20/30/40/50",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Rugged",
                innateAbility: [
                  "Новая врождённая способность. Пассивная, не улучшается.",
                  "Увеличивает шанс заблокировать урон от атак существ, не являющихся героями, с 50% до 100%",
                ],
              },
            ],
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/beastmaster/beastmaster_wild_axes.png",
                abilityTitle: "Wild axes",
                abilityChanges: ["Расход маны увеличен с 50 до 50/55/60/65"],
              },
              {
                image:
                  "/heroesAbilitiesImages/beastmaster/beastmaster_inner_beast.png",
                abilityTitle: "Inner Beast",
                abilityChanges: [
                  "Больше не является врождённой способностью",
                  "Бонус к скорости атаки изменён с 5/10/25/40/55 на 15/30/45/60",
                ],
              },
              {
                image:
                  "/heroesAbilitiesImages/beastmaster/beastmaster_drums_of_slom.png",
                abilityTitle: "Drums of Slom",
                abilityChanges: [
                  "Минимальный интервал увеличен с 0,4 до 0,5 секунды",
                  "Минимальный интервал увеличен с 0,4 до 0,5 секунды",
                  "Атаки по постройкам больше не уменьшают интервал ударов",
                ],
              },
            ],
            talentsChanges: [
              {
                image: "",
                talentChanges: [""],
              },
            ],
          },
        ],
      },

      // Bloodseeker
      {
        id: 5,
        image: "/heroesImages/bloodseeker.webp",
        hero: "Bloodseeker",
        baseAttributeChanges: [""],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Sanguivore",
                innateAbility: [
                  "Теперь даёт полное лечение при добивании союзников",
                ],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 10 уровня: бонус к урону от заклинаний у Bloodrage увеличен с 10% до 15%",
                  "Талант 15 уровня: бонус к урону от Blood Rite увеличен со 120 до 135",
                ],
              },
            ],
          },
        ],
      },

      // Bounty Hunter
      {
        id: 6,
        image: "/heroesImages/bounty_hunter.webp",
        hero: "Bounty Hunter",
        baseAttributeChanges: ["Базовый интеллект уменьшен с 22 до 20"],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Big Game Hunter",
                innateAbility: [
                  "Дополнительная награда в золоте за участие в убийстве врага, совершившего серию убийств, увеличена с 10% до 20%",
                ],
              },
            ],
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/bounty_hunter/bounty_hunter_shuriken_toss.png",
                abilityTitle: "Shuriken Toss",
                abilityChanges: [
                  "Дальность применения с Aghanim's Scepter уменьшена с 700 до 600",
                ],
              },
            ],
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 25 уровня: бонус к урону от Shuriken Toss уменьшен с 275 до 250",
                ],
              },
            ],
          },
        ],
      },

      // Brewmaster
      {
        id: 7,
        image: "/heroesImages/brewmaster.webp",
        hero: "Brewmaster",
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Belligerent",
                innateAbility: [
                  "Новая врождённая способность. Пассивная, не улучшается.",
                  "Герой получает +20% к урону от атак на 15 секунд после окончания Primal Split и на 30 секунд после возрождения",
                ],
              },
            ],
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/brewmaster/brewmaster_thunder_clap.png",
                abilityTitle: "Thunder Clap",
                abilityChanges: [
                  "Перезарядка увеличена с 13 до 16/15/14/13 секунд",
                  "Радиус уменьшен с 400 до 325/350/375/400",
                ],
              },
              {
                image:
                  "/heroesAbilitiesImages/brewmaster/brewmaster_drunken_brawler.png",
                abilityTitle: "Drunken Brawler",
                abilityChanges: [
                  "Больше не является врождённой способностью",
                  "Броня от бойца земли изменена с 1/3/5/7/9 на 1/3/5/7",
                  "Сопротивление магии от бойца земли изменено с 4/8/12/16/20% на 5/10/15/20%",
                  "Уклонение от бойца шторма изменено с 10/15/20/25/30% на 15/20/25/30%",
                  "Дополнительная скорость передвижения от бойца шторма изменена с 4/6/8/10/12% на 5/7/9/11%",
                  "Критический урон от бойца огня изменён со 120/135/150/165/180% на 120/140/160/180%",
                  "Дополнительная скорость атаки от бойца огня изменена с 10/15/20/25/30 на 10/15/20/25",
                  "Дополнительное сопротивление эффектам от бойца пустоты теперь складывается с другими источниками сопротивления эффектам",
                  "Дополнительное сопротивление эффектам от бойца пустоты изменено с 4/8/12/16/20% на 5/10/15/20%",
                  "Замедление атаками от бойца пустоты изменено с 5/10/15/20/25% на 10/15/20/25%",
                ],
              },
            ],
          },
        ],
      },

      // Bristleback
      {
        id: 8,
        image: "/heroesImages/bristleback.webp",
        hero: "Bristleback",
        baseAttributeChanges: ["Базовый урон увеличен на 6"],
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/bristleback/no_vision.png",
              aspectTitle: "Seeing Red (New aspect)",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/bristleback/bristleback_warpath.png",
                  title: "Warpath",
                  changes:
                    "Способность можно активировать, чтобы увеличить её бонус к урону от атак и скорости передвижения на 50% за эффект. В этом состоянии герой видит только в 90-градусном конусе перед собой. Длительность: 4/5/6 секунд. Расход маны: 55/65/75. Перезарядка: 45 секунд.",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Prickly",
                innateAbility: [
                  "Новая врождённая способность. Пассивная, не улучшается.",
                  "Герой наносит врагам позади на 10% больше урона, а его отрицательные эффекты действуют на них на 10% дольше",
                ],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/bristleback/bristleback_bristleback.png",
                abilityTitle: "Bristleback",
                abilityChanges: [
                  "Число волн игл при применении с Aghanim's Scepter уменьшено с 6 до 5",
                ],
              },
              {
                image:
                  "/heroesAbilitiesImages/bristleback/bristleback_warpath.png",

                abilityTitle: "Warpath",
                abilityChanges: [
                  "Больше не является врождённой способностью",
                  "Урон за эффект изменён с 5/15/20/25 на 15/20/25",
                  "Бонус к скорости передвижения за эффект изменён с 0/2/3/4% на 2/3/4%",
                  "Длительность действия эффекта изменена с 12/16/18/20 на 16/18/20 секунд",
                  "Максимум эффектов изменён с 4/8/10/12 на 8/10/12",
                ],
              },
            ],
          },
        ],
      },

      // Broodmother
      {
        id: 9,
        image: "/heroesImages/broodmother.webp",
        hero: "Broodmother",
        baseAttributeChanges: [""],
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/broodmother/debuff.png",
              aspectTitle: "Necrotic Webs",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/broodmother/broodmother_spin_web.png",
                  title: "Spin Web",
                  changes:
                    "Восстановления здоровья врагов теперь снижается, только когда владелец способности находится в той же сети паутин",
                },
              ],
            },
          },
        ],
      },

      // Chaos Knight

      {
        id: 10,
        image: "/heroesImages/chaos_knight.webp",
        hero: "Chaos Knight",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/chaos_knight/rng.png",
              aspectTitle: "Irrationality",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/chaos_knight/chaos_knight_reality_rift.png",
                  title: "Reality Rift",
                  changes:
                    "Шанс в 33% наложить на жертву ничего заменён на шанс в 33% наложить на жертву безмолвие",
                },
              ],
            },
          },
        ],
      },

      // Clockwerk
      {
        id: 11,
        image: "/heroesImages/clockwerk.webp",
        hero: "Clockwerk",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/clockwerk/cooldown.png",
              aspectTitle: "Expanded Armature",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/clockwerk/rattletrap_power_cogs.png",
                  title: "Power Cogs",
                  changes:
                    "Длительность отталкивания от шестерни уменьшена с 0,8 до 0,6 секунды",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Armor Power",
                innateAbility: [
                  "Увеличение урона за единицу брони ослаблено с 0,3% до 0,25%",
                ],
              },
            ],
          },
        ],
      },

      // Crystal Maiden
      {
        id: 12,
        image: "/heroesImages/crystal_maiden.webp",
        hero: "Crystal Maiden",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/crystal_maiden/mana.png",
              aspectTitle: "",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/innate_icon.png",
                  title: "Blueheart Floe",
                  changes:
                    "Теперь также увеличивает усиление восстановления маны от врождённой способности с 50% до 75%",
                },
              ],
            },
          },
        ],
      },

      // Dark Seer
      {
        id: 13,
        image: "/heroesImages/dark_seer.webp",
        hero: "Dark Seer",
        baseAttributeChanges: ["Базовая сила уменьшена с 22 до 20"],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Mental Fortitude",
                innateAbility: [
                  "Интеллект героя не может быть ниже среднего значения между его силой и ловкостью",
                ],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 15 уровня: бонус к радиусу Vacuum уменьшен со 100 до 75",
                ],
              },
            ],
          },
        ],
      },

      // Dazzle
      {
        id: 14,
        image: "/heroesImages/dazzle.webp",
        hero: "Dazzle",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/dazzle/armor.png",
              aspectTitle: "Nothl Boon",
              aspectAbility: [
                {
                  image: "",
                  title: "",
                  changes: "Длительность барьера увеличена с 10 до 12 секунд",
                },
              ],
            },
          },
          {
            secondAspect: {
              image: "/heroesAbilitiesImages/dazzle/ricochet.png",
              aspectTitle: "Poison Bloom",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/dazzle/dazzle_poison_touch.png",
                  title: "Poison Touch",
                  changes:
                    "Урон при распространении увеличен с 25/50/75/100 до 30/60/90/120",
                },
              ],
            },
          },
        ],
      },

      // Death Prophet
      {
        id: 15,
        image: "/heroesImages/death_prophet.webp",
        hero: "Death Prophet",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/death_prophet/spirit.png",
              aspectTitle: "Spirit Collector",
              aspectAbility: [
                {
                  image: "",
                  title: "",
                  changes: "Теперь дух даётся и за смерть владельца аспекта",
                },
              ],
            },
          },
          {
            secondAspect: {
              image: "/heroesAbilitiesImages/death_prophet/healing.png",
              aspectTitle: "Mourning Ritual (New aspect)",
              aspectAbility: [
                {
                  image: "",
                  title: "",
                  changes:
                    "Пассивный эффект. Герой получает 20/30/40/50% урона не сразу, а в течение 5 секунд с интервалами в 1 секунду.",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/death_prophet/death_prophet_carrion_swarm.png",
                abilityTitle: "Crypt Swarm",
                abilityChanges: [
                  "Дальность увеличена с 810 до 900",
                  "Дальность применения теперь равна дальности нанесения урона",
                ],
              },
              {
                image:
                  "/heroesAbilitiesImages/death_prophet/death_prophet_spirit_siphon.png",
                abilityTitle: "Spirit Siphon",
                abilityChanges: [
                  "Теперь можно применять на Рошана и Терзателей",
                ],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 15 уровня: «+250 к здоровью» заменено на «+75 к радиусу Silence»",
                  "Талант 20 уровня: «+50 к урону от Crypt Swarm» заменено на «+400 к здоровью»",
                ],
              },
            ],
          },
        ],
      },

      // Disruptor
      {
        id: 16,
        image: "/heroesImages/disruptor.wepb",
        hero: "Disruptor",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/disruptor/fence.png",
              aspectTitle: "Kinetic Fence",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/disruptor/disruptor_kinetic_fence.png",
                  title: "Kinetic Fence",
                  changes: "Дальность применения увеличена с 900 до 1050",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            abilitiesChanges: [
              {
                image: "/heroesAbilitiesImages/disruptor/disruptor_glimpse.png",
                abilityTitle: "Glimpse",
                abilityChanges: [
                  "Теперь наносит урон в размере 20/25/30/35% от преодолённого целью расстояния. Максимальный урон по-прежнему составляет 100/160/220/280.",
                ],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 15 уровня: «+275 к макс. урону от Glimpse» заменено на «+10%/280 к урону от расстояния / максимальному урону у Glimpse»",
                ],
              },
            ],
          },
        ],
      },

      // Doom
      {
        id: 17,
        image: "/heroesImages/doom.webp",
        hero: "Doom",
        baseAttributeChanges: [""],
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/doom/cooldown.png",
              aspectTitle: "Impending Doom (New aspect)",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/doom/doom_bringer_doom.png",
                  title: "Doom",
                  changes:
                    "Каждые 6,66 минуты увеличивает длительность Doom на 0,66 секунды (бонус вдвое больше в режиме Turbo). Урон в секунду уменьшен с 30/50/70 до 30/45/60",
                },
              ],
            },
          },
        ],
      },

      // Dragon Knight
      {
        id: 18,
        image: "/heroesImages/dragon_knight.webp",
        hero: "Dragon Knight",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/dragon/dragon_poison.png",
              aspectTitle: "Corrosive Dragon",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/dragon/dragon_knight_dragon_blood.png",
                  title: "Wyrm's Wrath",
                  changes:
                    "Снижение брони от яда уменьшено с 1/2/3/4 до 0/1/2/3",
                },
              ],
            },
          },
        ],
      },

      // Drow Ranger
      {
        id: 19,
        image: "/heroesImages/drow_ranger.webp",
        hero: "Drow Ranger",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/drow/multi_arrow.png",
              aspectTitle: "Sidestep",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/drow/drow_ranger_multishot.png",
                  title: "Multishot",
                  changes:
                    "Замедление передвижения владельца уменьшено с 40% до 25%",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/drow/drow_ranger_frost_arrows.png",
                abilityTitle: "Frost Arrows",
                abilityChanges: [
                  "Дополнительный урон увеличен с 6/12/18/24 до 10/15/20/25",
                ],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 15 уровня: «+20% к вампиризму» заменено на «+75 к дальности атаки»",
                ],
              },
            ],
          },
        ],
      },

      // Earth Spirit
      {
        id: 20,
        image: "/heroesImages/earth_spirit.webp",
        hero: "Earth Spirit",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/earth/spinning.png",
              aspectTitle: "Ready to Roll (New aspect)",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/earth/earth_spirit_rolling_boulder.png",
                  title: "Rolling Boulder",
                  changes:
                    "Если прокатиться по союзному герою, владелец способности даст ему +15/20/25/30% к скорости передвижения на 4 секунды, покатится быстрее и дальше, а оглушение будет дольше. Скорость валуна с союзником: 1900. Множитель дальности с союзником: 2,5. Дополнительное оглушение с союзником: 0,3/0,5/0,7/0,9 секунды",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/earth/earth_spirit_rolling_boulder.png",
                abilityTitle: "Rolling Boulder",
                abilityChanges: ["Урон увеличен с 60 до 60/70/80/90"],
              },
              {
                image:
                  "/heroesAbilitiesImages/earth/earth_spirit_magnetize.png",
                abilityTitle: "Magnetize",
                abilityChanges: [
                  "Урон в секунду увеличен с 40/80/120 до 45/85/125",
                ],
              },
            ],
          },
        ],
      },

      // Earthshaker
      {
        id: 21,
        image: "/heroesImages/earthshaker.webp",
        hero: "Earthshaker",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/earthshaker/movement.png",
              aspectTitle: "Slugger",
              aspectAbility: [
                {
                  image: "",
                  title: "",
                  changes:
                    "Теперь тела убитых врагов отлетают при смерти от любых способностей героя, не только от атаки с эффектом Enchant Totem",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Spirit Cairn (New aspect)",
                innateAbility: [
                  "Когда владелец этой способности умирает, на его месте остаётся непроходимая борозда радиусом 75, вокруг которой он продолжает получать опыт и обзор.",
                ],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/earthshaker/earthshaker_aftershock.png",
                abilityTitle: "Aftershock",
                abilityChanges: [
                  "Больше не является врождённой способностью",
                  "Урон изменён с 35/70/100/130/160 на 70/100/130/160",
                  "Длительность изменена с 0,5/1/1,1/1,2/1,3 на 1/1,1/1,2/1,3 секунды",
                ],
              },
            ],
          },
        ],
      },

      // Elder Titan
      {
        id: 22,
        image: "/heroesImages/elder_titan.webp",
        hero: "Elder Titan",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/elder_titan/damage.png",
              aspectTitle: "Momentum",
              aspectAbility: [
                {
                  image: "",
                  title: "",
                  changes:
                    "Доля скорости передвижения, добавляющаяся к скорости атаки, уменьшена с 30% до 25%",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Tip the Scales (New aspect)",
                innateAbility: [
                  "Союзные крипы и постройки, находящиеся под эффектом укрепления или предмета Roshan's Banner, наносят на 100% больше урона",
                ],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/elder_titan/elder_titan_ancestral_spirit.png",
                abilityTitle: "Astral Spirit",
                abilityChanges: [
                  "Больше не является врождённой способностью",
                  "Бонус к скорости за героя изменён с 4/5/6/7/8% на 5/6/7/8%",
                  "Бонус к урону за крипа изменён с 3/3/7/11/15 на 3/7/11/15",
                  "Бонус к урону за героя изменён с 10/17/38/59/80 на 17/38/59/80",
                  "Бонус к броне за героя изменён с 1/1,5/3/4,5/6 на 1,5/3/4,5/6",
                  "Расход маны изменён с 70/80/90/100/110 на 80/90/100/110",
                  "Перезарядка изменена с 25/23/21/19/17 на 23/21/19/17 секунд",
                ],
              },
            ],
          },
        ],
      },

      // Ember Spirit
      {
        id: 23,
        image: "/heroesImages/ember_spirit.webp",
        hero: "Ember Spirit",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/ember_spirit/fist.png",
              aspectTitle: "Double Impact",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/ember_spirit/ember_spirit_sleight_of_fist.png",
                  title: "Sleight of Fist",
                  changes: "Снижение урона второй атаки усилено с 40% до 50%",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle:
                  "Immolation (New aspect, improves with Fire Remnant)",
                innateAbility: [
                  "Герой наносит 10/20/30/40 урона в секунду всем врагам в радиусе 175",
                  "Улучшается с Aghanim's Shard. Увеличивает урон на 10, а радиус — на 175. Копии от способности Fire Remnant получают такой же эффект горения.",
                ],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/ember_spirit/ember_spirit_searing_chains.png",
                abilityTitle: "Searing Chains",
                abilityChanges: [
                  "Расход маны увеличен с 80/90/100/110 до 95/100/105/110",
                ],
              },
              {
                image:
                  "/heroesAbilitiesImages/ember_spirit/ember_spirit_flame_guard.png",
                abilityTitle: "Flame Guard",
                abilityChanges: [
                  "Больше не является врождённой способностью и не имеет пассивного компонента",
                  "Длительность изменена с 10/12/14/16/18 на 12/14/16/18 секунд",
                  "Урон в секунду изменён с 15/25/35/45/55 на 20/30/40/50",
                  "Здоровье магического барьера изменено с 30/60/135/210/285 на 60/135/210/285",
                ],
              },
            ],
          },
        ],
      },

      // Enchantress
      {
        id: 24,
        image: "/heroesImages/enchantress.webp",
        hero: "Enchantress",
        baseAttributeChanges: ["Способность Forest Freebie удалена из игры"],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Rabble-Rouser (New aspect)",
                innateAbility: [
                  "Все нейтральные крипы из лагерей наносят больше урона вражеским героям. Бонус к урону составляет 10% + 3% за каждый уровень владельца способности.",
                ],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/enchantress/enchantress_enchant.png",
                abilityTitle: "Enchant",
                abilityChanges: [
                  "Больше не гарантирует выпадение нейтрального жетона",
                ],
              },
            ],
          },
        ],
      },

      // Enigma
      {
        id: 25,
        image: "/heroesImages/enigma.webp",
        hero: "Enigma",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/enigma/slow.png",
              aspectTitle: "Event Horizon",
              aspectAbility: [
                {
                  image: "",
                  title: "",
                  changes:
                    "Замедление передвижения изменено с 15% на 9/11/13/15%. Теперь улучшается вместе с Black Hole.",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Gravity Well",
                innateAbility: [
                  "Снижение получаемого урона изменено с 15% на 9/11/13/15%. Теперь улучшается вместе с Black Hole.",
                ],
              },
            ],
          },
        ],
      },

      // Faceless Void
      {
        id: 26,
        image: "/heroesImages/faceless_void.webp",
        hero: "Faceless Void",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/faceless_void/area_of_effect.png",
              aspectTitle:
                "Chronosphere (Aspect name changed from Temporal Impunity to Chronosphere)",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/faceless_void/faceless_void_time_walk.png",
                  title: "Time Walk",
                  changes:
                    "Применение этой способности больше не даёт недолгую защиту от любого урона",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 25 уровня: бонус к радиусу Time Zone увеличен со 140 до 200",
                ],
              },
            ],
          },
        ],
      },

      // Grimstroke
      {
        id: 27,
        image: "/heroesImages/grimstroke.webp",
        hero: "Grimstroke",

        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/grimstroke/brush.png",
              aspectTitle: "Fine Art",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/grimstroke/grimstroke_dark_artistry.png",
                  title: "Stroke of Fate",
                  changes:
                    "Дополнительный урон за врага увеличен с 20/35/50/65 до 20/40/60/80",
                },
              ],
            },
          },
        ],
      },

      // Gyrocopter
      {
        id: 28,
        image: "/heroesImages/gyrocopter.webp",
        hero: "Gyrocopter",
        abilitiesHeroChanges: [
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/gyrocopter/gyrocopter_call_down.png",
                abilityTitle: "Call Down",
                abilityChanges: ["Урон увеличен с 250/400/550 до 250/425/600"],
              },
            ],
          },
        ],
      },

      // Hoodwink
      {
        id: 29,
        image: "/heroesImages/hoodwink.webp",
        hero: "Hoodwink",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/hoodwink/range.png",
              aspectTitle: "Go Nuts",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/hoodwink/hoodwink_scurry.png",
                  title: "Scurry",
                  changes:
                    "Дополнительная дальность заклинаний увеличена с 50/100/150/200 до 100/150/200/250. Дополнительная дальность атаки увеличена с 50/100/150/200 до 100/150/200/250",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/hoodwink/hoodwink_acorn_shot.png",
                abilityTitle: "Acorn Shot",
                abilityChanges: [
                  "Расход маны увеличен с 70/75/80/85 до 85/90/95/100",
                ],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 15 уровня: бонус к числу отскоков у Acorn Shot уменьшен с 2 до 1",
                  "Талант 20 уровня: снижение брони от атак ослаблено с 4 до 3",
                ],
              },
            ],
          },
        ],
      },

      // Huskar
      {
        id: 30,
        image: "/heroesImages/huskar.webp",
        hero: "Huskar",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/huskar/damage.png",
              aspectTitle: "Incendiary (New aspect)",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/huskar/huskar_burning_spear.png",
                  title: "Burning Spear",
                  changes:
                    "Копья также раз в секунду наносят урон в размере 1% от максимального здоровья жертвы. Вместо 4% текущего здоровья способность расходует 4% максимального. Уменьшает длительность горения с 9 до 6 секунд.",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 25 уровня: бонус к длительности Burning Spear увеличен с 4 до 6 секунд",
                ],
              },
            ],
          },
        ],
      },

      // Jakiro
      {
        id: 31,
        image: "/heroesImages/jakiro.webp",
        hero: "Jakiro",
        abilitiesHeroChanges: [
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 10 уровня: бонус к дальности атаки уменьшен с 200 до 150",
                ],
              },
            ],
          },
        ],
      },

      // Juggernaut
      {
        id: 32,
        image: "/heroesImages/juggernaut.webp",
        hero: "Juggernaut",
        abilitiesHeroChanges: [
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 10 уровня: «+150 к радиусу лечения от Healing Ward» заменено на «+4% к урону от Duelist»",
                  "Талант 10 уровня: «+10% к критическому урону от Blade Dance» заменено на «–10 сек. перезарядки Healing Ward»",
                  "Талант 15 уровня: бонус к скорости передвижения во время Blade Fury увеличен с 30 до 40",
                  "Талант 15 уровня: «–20 сек. перезарядки Healing Ward» заменено на «+1% к макс. здоровью в секунду у Healing Ward»",
                ],
              },
            ],
          },
        ],
      },

      // Kunkka
      {
        id: 33,
        image: "/heroesImages/kunkka.webp",
        hero: "Kunkka",
        baseAttributeChanges: ["Минимальный урон увеличен на 4"],
        abilitiesHeroChanges: [
          {
            abilitiesChanges: [
              {
                image: "/heroesAbilitiesImages/kunkka/kunkka_admirals_rum.png",
                abilityTitle: "Admiral's Rum (New aspect)",
                abilityChanges: [
                  "Если урон от героя, постройки или Рошана снижает здоровье владельца способности до 65%, он на 10 секунд окатывает себя адмиральским ромом, отчего передвигается быстрее на 10% и получает 20% урона с задержкой. Отложенный урон равномерно наносится в течение 10 секунд после окончания эффекта. Эффекты от разных источников рома складываются. Перезарядка: 60 секунд.",
                ],
              },
              {
                image: "/heroesAbilitiesImages/kunkka/kunkka_torrent.png",
                abilityTitle: "Torrent",
                abilityChanges: [
                  "Радиус увеличен с 225 до 250",
                  "Расход маны уменьшен со 100 до 90",
                ],
              },
              {
                image: "/heroesAbilitiesImages/kunkka/kunkka_tidebringer.png",
                abilityTitle: "Tidebringer",
                abilityChanges: [
                  "Больше не является врождённой способностью",
                  "Дальность прорубания изменена с 500/650/800/950/1100 на 650/800/950/1100",
                  "Дополнительный урон изменён с 10/30/60/90/120 на 30/60/90/120",
                  "Перезарядка изменена с 16/13/10/7/4 на 13/10/7/4 секунды",
                ],
              },
              {
                image: "/heroesAbilitiesImages/kunkka/kunkka_ghostship.png",
                abilityTitle: "Ghostship",
                abilityChanges: [
                  "Корабль окатывает всех задетых союзников усиленным ромом, который ускоряет их на 15% и откладывает 35% полученного урона.",
                  "Добавлено улучшение от Aghanim’s Scepter. Призывает флот из 2 призрачных кораблей, которые разбиваются в указанной точке с интервалом в 2,5 секунды. Каждый корабль даёт три залпа из четырёх пушек с каждого борта, нанося 40% урона от способности врагам, сквозь которых пролетели ядра. Каждому врагу может нанести урон только одно ядро. Радиус ядра: 100. Скорость полёта ядра: 1400.",
                ],
              },
              {
                image: "/heroesAbilitiesImages/kunkka/kunkka_torrent_storm.png",
                abilityTitle: "Torrent Storm",
                abilityChanges: ["Способность удалена из игры"],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [
                  "Талант 25 уровня: «Флот призрачных кораблей» заменено на «+100 к радиусу способностей»",
                ],
              },
            ],
          },
        ],
      },

      // Legion Commander
      {
        id: 34,
        image: "/heroesImages/legion_commander.webp",
        hero: "Legion Commander",
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "Outfight Them! (New aspect)",
                innateAbility: [
                  "Если атаковать вражеского героя, уровень которого превышает уровень владельца способности, восстановление здоровья, вампиризм и получаемое лечение увеличатся на 50%. Длительность: 4 секунды. Срабатывает при каждой атаке по героям максимального уровня.",
                ],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/legion_commander/legion_commander_moment_of_courage.png",
                abilityTitle: "Moment of Courage",
                abilityChanges: [
                  "Больше не является врождённой способностью",
                  "Вампиризм изменён с 40/60/70/80/90% на 55/65/75/85%",
                  "Перезарядка изменена с 2,3/1,9/1,5/1,1/0,7 на 1,9/1,5/1,1/0,7 секунды",
                ],
              },
            ],
          },
        ],
      },

      // Leshrac
      {
        id: 35,
        image: "/heroesImages/leshrac.webp",
        hero: "Leshrac",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/leshrac/nuke.png",
              aspectTitle: "Misanthropy",
              aspectAbility: [
                {
                  image:
                    "/heroesAbilitiesImages/leshrac/leshrac_diabolic_edict.png",
                  title: "Diabolic Edict",
                  changes:
                    "Длительность уменьшена с 7 до 6 секунд (суммарный урон не изменился)",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            abilitiesChanges: [
              {
                image: "/heroesAbilitiesImages/leshrac/leshrac_split_earth",
                abilityTitle: "Split Earth",
                abilityChanges: [
                  "Урон уменьшен со 120/180/240/300 до 115/170/225/280",
                ],
              },
            ],
          },
        ],
      },

      // Lifestealer
      {
        id: 36,
        image: "/heroesImages/life_stealer.webp",
        hero: "Lifestealer",
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/life_stealer/lifestealer_rage.png",
              aspectTitle:
                "Rage (Aspect name changed from Corpse Eater to Rage",
              aspectAbility: [
                {
                  image: "",
                  title: "",
                  changes:
                    "Больше не увеличивает максимальное здоровье за убийство крипов и героев (эта особенность стала частью врождённой способности Feast)",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            abilitiesChanges: [
              {
                image:
                  "/heroesAbilitiesImages/life_stealer/life_stealer_feast.png",
                abilityTitle: "Feast",
                abilityChanges: [
                  "Помимо прежних эффектов, теперь герой получает +1 к максимальному здоровью за каждого убитого крипа и +15 — за каждого убитого героя",
                ],
              },
            ],
          },
        ],
      },

      {
        id: 4,
        image: "/heroesImages/",
        hero: "",
        baseAttributeChanges: [""],
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/",
              aspectTitle: "",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/",
                  title: "",
                  changes: "",
                },
              ],
            },
          },
          {
            secondAspect: {
              image: "/heroesAbilitiesImages/",
              aspectTitle: "",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/",
                  title: "",
                  changes: "",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "",
                innateAbility: [""],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [""],
              },
            ],
          },
        ],
      },

      {
        id: 4,
        image: "/heroesImages/",
        hero: "",
        baseAttributeChanges: [""],
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/",
              aspectTitle: "",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/",
                  title: "",
                  changes: "",
                },
              ],
            },
          },
          {
            secondAspect: {
              image: "/heroesAbilitiesImages/",
              aspectTitle: "",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/",
                  title: "",
                  changes: "",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "",
                innateAbility: [""],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [""],
              },
            ],
          },
        ],
      },

      {
        id: 4,
        image: "/heroesImages/",
        hero: "",
        baseAttributeChanges: [""],
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/",
              aspectTitle: "",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/",
                  title: "",
                  changes: "",
                },
              ],
            },
          },
          {
            secondAspect: {
              image: "/heroesAbilitiesImages/",
              aspectTitle: "",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/",
                  title: "",
                  changes: "",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "",
                innateAbility: [""],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [""],
              },
            ],
          },
        ],
      },

      {
        id: 4,
        image: "/heroesImages/",
        hero: "",
        baseAttributeChanges: [""],
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/",
              aspectTitle: "",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/",
                  title: "",
                  changes: "",
                },
              ],
            },
          },
          {
            secondAspect: {
              image: "/heroesAbilitiesImages/",
              aspectTitle: "",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/",
                  title: "",
                  changes: "",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "",
                innateAbility: [""],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [""],
              },
            ],
          },
        ],
      },
    ],
  },

  "7.37b": {
    version: "7.37b",
    title: "Обновление баланса",
    itemsChangesTitle: "Изменения предметов",
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
    version: "7.37c",
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
    version: "7.37d",
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

// Образ героя

/* {
        id: 4,
        image: "/heroesImages/",
        hero: "",
        baseAttributeChanges: [""],
        aspectsChanges: [
          {
            firstAspect: {
              image: "/heroesAbilitiesImages/",
              aspectTitle: "",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/",
                  title: "",
                  changes: "",
                },
              ],
            },
          },
          {
            secondAspect: {
              image: "/heroesAbilitiesImages/",
              aspectTitle: "",
              aspectAbility: [
                {
                  image: "/heroesAbilitiesImages/",
                  title: "",
                  changes: "",
                },
              ],
            },
          },
        ],
        abilitiesHeroChanges: [
          {
            innateChanges: [
              {
                image: "/heroesAbilitiesImages/innate_icon.png",
                innateTitle: "",
                innateAbility: [""],
              },
            ],
          },
          {
            abilitiesChanges: [
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
              {
                image: "/heroesAbilitiesImages/",
                abilityTitle: "",
                abilityChanges: [""],
              },
            ],
          },
          {
            talentsChanges: [
              {
                image: "/heroesAbilitiesImages/talents_icon.png",
                talentChanges: [""],
              },
            ],
          },
        ],
      },
*/
