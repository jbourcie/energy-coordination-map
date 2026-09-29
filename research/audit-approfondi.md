# Audit du codage : Zhou, Morstyn, Jani

29 septembre 2026. Deux textes auteurs examinés en profondeur ; troisième lecture bloquée par l’accès au texte. Ne pas présenter ce bilan comme trois lectures intégrales achevées.

| Travail | Explicite | Déduit | Non précisé après examen | Non applicable | Bilan |
|---|---:|---:|---:|---:|---|
| Zhou, communication failures | 31 | 6 | 4 | 3 | 44 dimensions examinées |
| Morstyn, bilateral contracts | 32 | 4 | 4 | 4 | 44 dimensions examinées |
| Jani, two-layer stochastic | — | — | — | — | Résumé/extraits seulement ; PDF requis |

Ces nombres mesurent le traitement des dimensions, pas la qualité des travaux ni une exhaustivité des hypothèses. Une dimension explicite peut signaler une exclusion explicite ou un résultat expérimental, sans constituer une garantie. Une dimension peut être renseignée en texte libre si ses modalités proposées ne conviennent pas.

## Conclusion sur notre grille

La première cause du faible remplissage était notre lecture trop superficielle. Deux textes suffisent à montrer que des hypothèses importantes sont effectivement explicitées dans les modèles et les expériences. Le classement intégral est consultable sur chaque fiche, avec sections et équations.

La grille a néanmoins quatre défauts :

1. **Temporalités mélangées.** Un horizon de simulation journalier ne dit pas que les décisions sont planifiées la veille. Conserver séparément horizon d’anticipation, durée de l’expérience, pas de décision et temps d’apprentissage.
2. **Architecture trop simplifiée.** Séparer lieu du calcul, circuit de transmission et opérateur de marché. Plusieurs valeurs peuvent coexister à différents niveaux.
3. **Modalités incomplètes.** Il manque notamment l’aversion au risque, les observations/croyances, les architectures hybrides et la stabilité économique. Ne pas forcer ces notions dans « équité » ou « stabilité électrique ».
4. **Garanties et constats confondus.** Un modèle contenant des contraintes, une preuve conditionnelle et une convergence observée sont trois objets distincts. Les justifications les séparent désormais.

Il subsiste aussi de vrais silences dans les textes consultés, notamment sur les protocoles réseau. Leur importance dépend de la question posée par l’article : ce n’est pas automatiquement un défaut scientifique.

## Portée de l’examen

- [Zhou : manuscrit auteur accepté](https://arxiv.org/pdf/2111.11868). Sections III–VI, algorithmes, tableaux, résultats et annexe examinés. La version IEEE publiée reste la référence bibliographique.
- [Morstyn : texte déposé par l’auteur](https://www.researchgate.net/publication/322904080_Bilateral_Contract_Networks_for_Peer-to-Peer_Energy_Trading). Modèles, négociation, résultats, limites et preuves examinés. La transcription publique des équations n’équivaut pas à une vérification mathématique indépendante des théorèmes.
- [Jani : publication](https://doi.org/10.1016/j.apenergy.2022.119630). Le résumé et les extraits ne permettent pas de trancher les autres dimensions. Un PDF obtenu par l’accès institutionnel permettrait de terminer sans inventer de constats d’absence.

L’unité de codage reste l’article, mais les justifications distinguent son modèle général et ses cas d’expérience. La séparation en configurations méthode × scénario sera nécessaire pour une comparaison plus fine.
