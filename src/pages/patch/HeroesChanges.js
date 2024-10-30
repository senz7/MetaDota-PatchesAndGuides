export default function HeroesChanges({ patchNote }) {
  return (
    <>
      {patchNote.heroesChangesTitle && (
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          {patchNote.heroesChangesTitle}
        </h2>
      )}

      {patchNote.heroesChanges.map((heroChange, index) => (
        <div>
          <div
            key={heroChange.id || index}
            className="flex items-center space-x-4 mb-2"
          >
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
          {heroChange.baseAttributeChanges.map((baseAttribute, index) => (
            <div>{baseAttribute}</div>
          ))}
          {heroChange.aspectsChanges &&
            Array.isArray(heroChange.aspectsChanges) &&
            heroChange.aspectsChanges.length > 0 && (
              <div className="list-disc pl-5 space-y-1">
                {heroChange.aspectsChanges.map((aspectChange, aspectIndex) => (
                  <div key={aspectIndex} className="text-lg">
                    {aspectChange.firstAspect && (
                      <div key={aspectIndex}>
                        {aspectChange.firstAspect.image && (
                          <img
                            src={aspectChange.firstAspect.image}
                            alt={aspectChange.firstAspect.aspectTitle}
                            width={64}
                            height={64}
                            className="rounded-lg"
                            loading="lazy"
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
                {heroChange.aspectsChanges.map((aspectChange, aspectIndex) => (
                  <div key={aspectIndex} className="text-lg">
                    {Array.isArray(aspectChange.secondAspect) &&
                      aspectChange.secondAspect.map((second, index) => (
                        <div key={second.id || index}>
                          {second.image && (
                            <img
                              src={second.image}
                              alt={second.aspectTitle}
                              width={64}
                              height={64}
                              className="rounded-lg"
                              loading="lazy"
                            />
                          )}
                        </div>
                      ))}
                  </div>
                ))}
                {heroChange.abilitiesHeroChanges.map(
                  (abilityChange, abilityIndex) => (
                    <div key={abilityIndex} className="text-lg">
                      {Array.isArray(abilityChange.innateChanges) &&
                        abilityChange.innateChanges.map((innate, index) => (
                          <div>
                            <h1>Способности</h1>
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
                              <h2>{innate.innateTitle}</h2>
                              <ul>
                                {innate.innateAbility.map((ability, index) => (
                                  <li key={ability.id || index}>{ability}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
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
