export default function HeroesChanges({ patchNote }) {
  return (
    <>
      {patchNote.heroesChangesTitle && (
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          {patchNote.heroesChangesTitle}
        </h2>
      )}

      {patchNote.heroesChanges.map((heroChange, index) => (
        <div key={heroChange.id || index}>
          <div className="flex items-center space-x-4 mb-2">
            {heroChange.image && (
              <img
                src={heroChange.image}
                alt={heroChange.hero}
                width={64}
                height={64}
                className="rounded-lg"
                loading="lazy"
              />
            )}
            <h3 className="text-xl font-semibold text-primary">
              {heroChange.hero}
            </h3>
          </div>

          {/* Base Attributes */}
          {heroChange.baseAttributeChanges &&
            heroChange.baseAttributeChanges.length > 0 && (
              <div>
                {heroChange.baseAttributeChanges.map((baseAttribute, index) => (
                  <div key={index}>{baseAttribute}</div>
                ))}
              </div>
            )}

          {/* Aspects Changes */}
          {heroChange.aspectsChanges &&
            Array.isArray(heroChange.aspectsChanges) &&
            heroChange.aspectsChanges.length > 0 && (
              <div className="list-disc pl-5 space-y-1">
                {heroChange.aspectsChanges.map((aspectChange, aspectIndex) => (
                  <div key={aspectIndex} className="text-lg">
                    {/* First Aspect */}
                    {aspectChange.firstAspect && (
                      <div>
                        {aspectChange.firstAspect.image && (
                          <img
                            src={aspectChange.firstAspect.image}
                            alt={aspectChange.firstAspect.aspectTitle || ""}
                            width={64}
                            height={64}
                            className="rounded-lg"
                            loading="lazy"
                          />
                        )}
                        <h4>{aspectChange.firstAspect.aspectTitle}</h4>
                        <ul>
                          {aspectChange.firstAspect.aspectAbility.map(
                            (ability, index) => (
                              <li key={index}>
                                {ability.image && (
                                  <img
                                    src={ability.image}
                                    alt={ability.title || ""}
                                    width={64}
                                    height={64}
                                    className="rounded-sm"
                                    loading="lazy"
                                  />
                                )}
                                <strong>{ability.title}</strong>
                                <p>{ability.changes}</p>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Second Aspect */}
                    {aspectChange.secondAspect && (
                      <div>
                        {aspectChange.secondAspect.image && (
                          <img
                            src={aspectChange.secondAspect.image}
                            alt={aspectChange.secondAspect.aspectTitle || ""}
                            width={64}
                            height={64}
                            className="rounded-lg"
                            loading="lazy"
                          />
                        )}
                        <h4>{aspectChange.secondAspect.aspectTitle}</h4>
                        <ul>
                          {aspectChange?.firstAspect?.aspectAbility &&
                            Array.isArray(
                              aspectChange.firstAspect.aspectAbility
                            ) &&
                            aspectChange.firstAspect.aspectAbility.map(
                              (ability, index) => (
                                <li key={index}>
                                  {ability.image && (
                                    <img
                                      src={ability.image}
                                      alt={ability.title || ""}
                                      width={64}
                                      height={64}
                                      className="rounded-sm"
                                      loading="lazy"
                                    />
                                  )}
                                  <strong>{ability.title}</strong>
                                  <p>{ability.changes}</p>
                                </li>
                              )
                            )}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

          {/* Abilities Changes */}
          {Array.isArray(heroChange.abilitiesHeroChanges) &&
            heroChange.abilitiesHeroChanges.length > 0 && (
              <div>
                {heroChange.abilitiesHeroChanges.map(
                  (abilityChange, abilityIndex) => (
                    <div key={abilityIndex} className="text-lg">
                      {/* Innate Changes */}
                      {Array.isArray(abilityChange.innateChanges) &&
                        abilityChange.innateChanges.length > 0 && (
                          <div>
                            {abilityChange.innateChanges.map(
                              (innate, index) => (
                                <div key={innate.id || index}>
                                  {innate.image && (
                                    <img
                                      src={innate.image}
                                      alt={innate.innateTitle}
                                      width={64}
                                      height={64}
                                      className="rounded-lg"
                                      loading="lazy"
                                    />
                                  )}
                                  <h5>{innate.innateTitle}</h5>
                                  <ul>
                                    {innate.innateAbility.map(
                                      (ability, index) => (
                                        <li key={index}>{ability}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        )}

                      {/* Abilities Changes */}
                      {Array.isArray(abilityChange.abilitiesChanges) &&
                        abilityChange.abilitiesChanges.length > 0 && (
                          <div>
                            {abilityChange.abilitiesChanges.map(
                              (ability, index) => (
                                <div key={ability.id || index}>
                                  {ability.image && (
                                    <img
                                      src={ability.image}
                                      alt={ability.abilityTitle}
                                      width={64}
                                      height={64}
                                      className="rounded-lg"
                                      loading="lazy"
                                    />
                                  )}
                                  <h5>{ability.abilityTitle}</h5>
                                  <ul>
                                    {ability.abilityChanges.map(
                                      (change, changeIndex) => (
                                        <li key={changeIndex}>{change}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        )}

                      {/* Talent Changes */}
                      {Array.isArray(abilityChange.talentsChanges) &&
                        abilityChange.talentsChanges.length > 0 && (
                          <div>
                            {abilityChange.talentsChanges.map(
                              (talent, index) => (
                                <div key={talent.id || index}>
                                  {talent.image && (
                                    <img
                                      src={talent.image}
                                      alt="Talent Icon"
                                      width={64}
                                      height={64}
                                      className="rounded-lg"
                                      loading="lazy"
                                    />
                                  )}
                                  <h5>Изменения талантов</h5>
                                  <ul>
                                    {talent.talentChanges.map(
                                      (change, changeIndex) => (
                                        <li key={changeIndex}>{change}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        )}
                    </div>
                  )
                )}
              </div>
            )}
        </div>
      ))}
    </>
  );
}
