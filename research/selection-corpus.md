# Corpus ciblé : coordination énergétique et perturbations

28 septembre 2026 — Douze articles retenus pour une première comparaison, sans prétention d’exhaustivité depuis 2010. Les fiches reposent sur les résumés et notices consultés : les hypothèses fines, valeurs temporelles et garanties demandent encore une lecture intégrale.

## Filtre scientifique

- Recherche évaluée par les pairs, pertinente pour la coordination énergétique entre plusieurs acteurs.
- Revues Q1 privilégiées ; Q2 possible avec justification de la pertinence.
- Conférences : CORE A*/A, ou B si particulièrement spécialisée. Aucune conférence ajoutée dans ce lot.
- Prépublications seules hors sélection par défaut ; exception à justifier explicitement. Les manuscrits auteurs d’articles publiés sont des voies d’accès aux textes.
- Le classement de la venue ne remplace pas l’évaluation de l’article.

## Vérification des venues

Référentiel : **meilleur quartile SJR 2025 relayé par IIT Comillas**, consulté le 28 septembre 2026. Ce n’est ni une vérification catégorie par catégorie ni le classement à la date de publication. Aucun classement JCR n’est revendiqué.

| Venue | Quartile | Source |
|---|---|---|
| IEEE Transactions on Smart Grid | Q1 | [IIT Comillas](https://www.iit.comillas.edu/publicacion/info_revista/en/307/IEEE_Transactions_on_Smart_Grid) |
| IEEE Transactions on Power Systems | Q1 | [IIT Comillas](https://www.iit.comillas.edu/publicacion/info_revista/en/3/IEEE_Transactions_on_Power_Systems) |
| Applied Energy | Q1 | [IIT Comillas](https://www.iit.comillas.edu/publicacion/info_revista/en/226/Applied_Energy) |
| Renewable and Sustainable Energy Reviews — contexte | Q1 | [IIT Comillas](https://www.iit.comillas.edu/publicacion/info_revista/en/314/Renewable_&_Sustainable_Energy_Reviews) |

## Comparaison initiale

| Article | Objet principal | Intérêt pour notre problème |
|---|---|---|
| [Parisio et al., 2017](https://doi.org/10.1109/TSG.2017.2726941) | Gestion coopérative à horizon glissant | Couplage des décisions par les ressources partagées |
| [Wang et Huang, 2018](https://doi.org/10.1109/TSG.2016.2614988) | Échanges et partage des bénéfices | Intérêt individuel à coopérer |
| [Morstyn et al., 2019](https://doi.org/10.1109/TSG.2017.2786668) | Contrats bilatéraux | Engagements et stabilité économique |
| [Moret et Pinson, 2019](https://doi.org/10.1109/TPWRS.2018.2808961) | Marché communautaire | Organisation du collectif et équité |
| [Sorin et al., 2019](https://doi.org/10.1109/TPWRS.2018.2872880) | Transactions différenciées | Préférences et calcul décentralisé |
| [Dynge et Cali, 2025](https://doi.org/10.1016/j.apenergy.2025.125463) | Mesure de la justice distributive | Choix des indicateurs d’équité |

Les années suivent les notices de publication ; l’année du DOI peut correspondre à une mise en ligne antérieure. Les fiches du site donnent les sources universitaires consultées.

## Extension ciblée et rôle des travaux

Le site distingue **7 travaux au cœur multi-microgrid**, **4 comparaisons sur les marchés et l’équité**, **1 transfert méthodologique depuis un microgrid**. Les six ajouts sont :

| Article | Question distinctive | Source publiée |
|---|---|---|
| Hussain, Bui et Kim (2018) | Planification day-ahead, gestion imbriquée et confidentialité | [IEEE TSG](https://doi.org/10.1109/TSG.2016.2607422) |
| Jani, Karimi et Jadid (2022) | Articulation day-ahead / temps réel sous incertitude | [Applied Energy](https://doi.org/10.1016/j.apenergy.2022.119630) |
| Hu et al. (2021) | Offres agrégées de microgrids price-makers | [IEEE TSG](https://doi.org/10.1109/TSG.2021.3109111) |
| Ma et al. (2018) | Décision en ligne avec ADMM et historique de production | [IEEE TSG](https://doi.org/10.1109/TSG.2016.2569604) |
| Farzin et al. (2016) | Gestion hiérarchique des coupures électriques | [IEEE TSG](https://doi.org/10.1109/TSG.2016.2558628) |
| Zhou et al. (2021 en ligne, 2022 en volume) | Croyances et apprentissage multi-agent sous pertes de messages, dans un microgrid | [IEEE Internet of Things Journal](https://doi.org/10.1109/JIOT.2021.3131719) |

Venue supplémentaire : **IEEE Internet of Things Journal**, meilleur quartile SJR 2025 **Q1**, [source IIT Comillas](https://www.iit.comillas.edu/publicacion/info_revista/en/937/IEEE_Internet_of_Things_Journal).

## Lecture croisée proposée

Les articles de planification montrent plusieurs façons de décider dans le temps : préparer le lendemain, corriger à horizon glissant ou exploiter les observations passées. Les travaux de marché ajoutent des intérêts individuels, des offres et des engagements. Les travaux sur les perturbations doivent être séparés selon qu’une liaison électrique est coupée ou qu’une information ne parvient plus à un agent.

Une question de recherche à approfondir serait : comment maintenir, adapter ou renégocier des engagements inter-microgrids lorsque les acteurs disposent de vues différentes et que la communication est temporairement indisponible ? Ce corpus ne démontre pas que cette combinaison est nouvelle. Il fournit des points de comparaison pour la rechercher précisément.

## Codage navigable

Chaque fiche affiche les 44 dimensions de la grille. Les modalités renseignées renvoient à la liste des autres travaux codés de la même façon ; la grille permet le parcours inverse. Les dimensions non renseignées restent visibles et ne sont pas interprétées comme absentes. Les garanties ne sont pas codées à partir du seul nom de la méthode.

Le codage est effectué au niveau du problème principal de chaque article, depuis les résumés/notices/extraits accessibles. La séparation méthode × scénario, les traces par section et les valeurs numériques des temporalités restent à approfondir. Les sources de lecture sont accessibles sur les fiches.

## Couverture à compléter

Ce premier lot fournit des points de comparaison pour formuler le problème ; il ne constitue pas encore le noyau définitif des travaux les plus proches de notre contribution.

Recherches suivantes : coordination day-ahead/intraday et engagements de longue durée ; retards, pertes de messages et partitions ; maintien ou renégociation d’accords avec information obsolète ; pannes électriques et restauration si elles entrent dans le périmètre. Distinguer panne de communication, panne électrique et pertes électriques de transport.

Pour chaque article, relever les passages établissant informations disponibles, communications, échéances, garanties et scénarios expérimentaux. Une absence dans ce petit corpus n’établit pas un gap.

Les anciennes références Guo, Alghamdi et Zhou restent visibles mais portent le statut « à réexaminer, hors premier lot ». Ce statut n’est pas un jugement sur leur qualité ou leur venue.
