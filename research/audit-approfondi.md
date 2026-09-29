# Audit du codage : Zhou, Morstyn, Jani

29 septembre 2026. Trois textes examinés : Zhou et Morstyn (versions précisées ci-dessous), puis PDF éditeur de Jani fourni par l’utilisateur. Les 44 dimensions de chacun ont été examinées.

| Travail | Explicite | Déduit | Non précisé après examen | Non applicable | Bilan |
|---|---:|---:|---:|---:|---|
| Zhou, communication failures | 31 | 6 | 4 | 3 | 44 dimensions examinées |
| Morstyn, bilateral contracts | 32 | 4 | 4 | 4 | 44 dimensions examinées |
| Jani, two-layer stochastic | 32 | 4 | 5 | 3 | 44 dimensions examinées |

Ces nombres mesurent le traitement des dimensions, pas la qualité des travaux ni une exhaustivité des hypothèses. Une dimension explicite peut signaler une exclusion explicite ou un résultat expérimental, sans constituer une garantie. Une dimension peut être renseignée en texte libre si ses modalités proposées ne conviennent pas.

## Conclusion sur notre grille

La première cause du faible remplissage était notre lecture trop superficielle. Les trois lectures montrent que des hypothèses importantes sont effectivement explicitées dans les modèles et les expériences. Le classement intégral est consultable sur chaque fiche, avec sections et équations.

La grille a néanmoins quatre défauts :

1. **Temporalités mélangées.** Un horizon de simulation journalier ne dit pas que les décisions sont planifiées la veille. Conserver séparément horizon d’anticipation, durée de l’expérience, pas de décision et temps d’apprentissage.
2. **Architecture trop simplifiée.** Séparer lieu du calcul, circuit de transmission et opérateur de marché. Plusieurs valeurs peuvent coexister à différents niveaux.
3. **Modalités incomplètes.** Il manque notamment l’aversion au risque, les observations/croyances, les architectures hybrides et la stabilité économique. Ne pas forcer ces notions dans « équité » ou « stabilité électrique ».
4. **Garanties et constats confondus.** Un modèle contenant des contraintes, une preuve conditionnelle et une convergence observée sont trois objets distincts. Les justifications les séparent désormais.

Il subsiste aussi de vrais silences dans les textes consultés, notamment sur les protocoles réseau. Leur importance dépend de la question posée par l’article : ce n’est pas automatiquement un défaut scientifique.

## Portée de l’examen

- [Zhou : manuscrit auteur accepté](https://arxiv.org/pdf/2111.11868). Sections III–VI, algorithmes, tableaux, résultats et annexe examinés. La version IEEE publiée reste la référence bibliographique.
- [Morstyn : texte déposé par l’auteur](https://www.researchgate.net/publication/322904080_Bilateral_Contract_Networks_for_Peer-to-Peer_Energy_Trading). Modèles, négociation, résultats, limites et preuves examinés. La transcription publique des équations n’équivaut pas à une vérification mathématique indépendante des théorèmes.
- [Jani : publication](https://doi.org/10.1016/j.apenergy.2022.119630). PDF éditeur de 13 pages fourni par l’utilisateur, intégralement dépouillé : structure, modèle, équations, études de cas, conclusion et annexe. Les références des cellules pointent vers les pages/sections de cette version ; le PDF lui-même n’est pas redistribué dans le dépôt.

L’unité de codage reste l’article, mais les justifications distinguent son modèle général et ses cas d’expérience. La séparation en configurations méthode × scénario sera nécessaire pour une comparaison plus fine.

## Ce que précise Jani

- **Deux axes distincts** : les étapes temporelles DA/RT et les niveaux organisationnels MG/MGC. En DA, décisions horaires locales puis communautaires ; en RT, révision toutes les 15 minutes. Dans le cas hybride, seul MGC participe au marché RT et seule sa batterie y intervient (§4, §5.1 p. 10).
- **Engagement n’est pas livraison exacte** : engagements à la clôture DA, consignes ajustées en RT, écarts réglés financièrement (§3.7, eq. 53–59). Les prix bilatéraux sont convenus auparavant ; l’algorithme ne les négocie pas.
- **Communications non spécifiées** : échanges MG–MGC décrits, sans modèle de délai, perte, partition ou reprise. Ce silence ne vaut pas hypothèse explicite de réseau parfait.
- **Optimalité revendiquée, argument incorrect** : p. 8, la convexité de l’espace des solutions MILP est invoquée. Les variables entières rendent cette affirmation fausse en général. Cela ne réfute pas les solutions numériques, mais ne prouve pas l’optimalité globale du schéma hiérarchique. Ni gap solveur ni certificat n’est rapporté.
- **Résultats à lire avec leurs signes** : coût DA avec DR de 2 182,75 à 1 922,38 $ (−11,93 %). Coût total à prix unique de 1 538,95 à 1 452,68 $ (−86,27 $). Les coûts d’écart RT sont −643,8 et −469,7 $ : le second est moins négatif, donc pas une baisse numérique de ce poste (tableaux 2–4). Les périmètres d’ajustement RT diffèrent entre les comparateurs.

| Travail | Question centrale | Limite à garder visible |
|---|---|---|
| Jani | Planifier DA et ajuster les ressources en RT | Communication dégradée non étudiée ; argument d’optimalité insuffisant |
| Zhou | Décider lorsque des transmissions échouent | Observations probabilistes encore disponibles ; petite échelle expérimentale |
| Morstyn | Former des contrats bilatéraux économiquement stables | Stabilité contractuelle distincte de la sûreté électrique et de la tolérance aux pannes |

Le codage demeure une lecture critique, pas une reproduction des expériences ni une validation indépendante des preuves. Les silences identifiés chez Jani portent surtout sur la propriété juridique, les communications et les garanties collectives. Les modalités manquantes (prix incertains, critère en espérance, architecture électrique non assez détaillée pour nos deux choix) sont signalées sans forcer leur placement.
