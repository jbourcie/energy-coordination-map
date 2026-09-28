# Atlas — Coordination énergétique

Cartographie navigable et évolutive de l’état de l’art : smart grids, microgrids, multi-microgrids et communautés énergétiques. Interface en français, quatre branches, onze concepts et quatre premières références illustratives.

**État :** corpus initial, classification partielle. Les notes ne remplacent pas la lecture détaillée ; leurs traces précises restent à compléter. Aucune absence dans cette carte ne démontre un gap scientifique.

## Consulter localement

Aucune installation de dépendances ni compilation.

```sh
python3 -m http.server 8000 --directory docs
```

Ouvrir http://localhost:8000. Ne pas ouvrir directement `index.html` via `file://` : les navigateurs bloquent généralement le chargement du JSON local.

## Publier sur GitHub Pages

1. Créer un dépôt personnel (nom proposé : `energy-coordination-map`), initialisé avec un README pour permettre le premier ajout via le connecteur GitHub. Le dépôt public convient à GitHub Free ; un dépôt privé nécessite un abonnement compatible.
2. Ajouter le contenu de ce projet à la racine du dépôt, en conservant le dossier `docs`.
3. Dans **Settings → Pages → Build and deployment**, sélectionner **Deploy from a branch**, la branche contenant ces fichiers (généralement `main`) et **/docs**, puis **Save**.
4. Attendre la réussite du déploiement Pages ; utiliser l’adresse affichée par GitHub.

Documentation officielle : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Le site fonctionne sous le chemin d’un dépôt, grâce à des chemins relatifs et à des routes `#/concept/communication`. Toute modification de `docs/` sur la branche publiée sera redéployée par GitHub Pages.

## Enrichir ensemble

Le contenu est dans **`docs/data/map.json`**, indépendamment de la présentation. L’interface est dans `docs/app.js` et `docs/style.css`.

- `groups` : branches et identifiants des concepts.
- `nodes` : nom, attributs `attrs`, liens de lecture `rels` et observations bibliographiques `refs`.
- `refs` : références bibliographiques (identifiant stable, titre, nom court, URL DOI, statut et éventuelle correction).
- Une observation est la paire `[identifiantArticle, texte]` dans `nodes[concept].refs`. Elle apparaît automatiquement dans la fiche du concept et dans celle de l’article.
- Une relation est `[libellé, identifiantConceptCible]`. Ces relations sont explicatives ; les distinctions sont indiquées séparément. Elles ne codent pas de contraintes logiques `requires/excludes`.
- Pour ajouter un concept, l’ajouter à `nodes` et à la branche correspondante dans `groups`. Son introduction est facultative (`intro` dans `app.js` pour cette première version).

Préserver les identifiants pour garder les liens existants. Rechercher le DOI avant d’ajouter une référence pour éviter les doublons. Ne pas attribuer une licence au texte intégral d’un article ni intégrer les PDF sans autorisation.

## Prochaine étape du modèle de données

Le schéma v1 garde fidèlement les observations de notre carte initiale. Lors du premier codage approfondi, introduire des enregistrements distincts pour méthode/scénario, hypothèses, affirmations et preuves avec section/page/équation. Ne pas traiter un article entier comme une configuration unique. Les états « non renseigné », « absent explicitement » et « non applicable » doivent rester distincts.

Les volets S1 (modèle), S2 (méthode), S3 (propriétés conditionnelles) et S4 (preuves/expériences) s’attachent à ces objets, et non uniformément à chaque dimension.

## Vérifier les données

```sh
node scripts/validate.cjs
node --check docs/app.js
```

Le validateur vérifie les identifiants de concepts, les références croisées, les attributs et les URL des publications. Une validation structurelle n’est pas une validation scientifique.

## Explications pédagogiques (v0.2)

Chaque concept comporte `explanations`, dans le même ordre que `attrs`. Une entrée contient `attribute`, `question`, `combination` (modalités exclusives, combinables ou paramètres distincts), `implication` et `options` (libellé `label`, `definition`, `example`). Les exemples sont fictifs et les listes non exhaustives. `workedExample` illustre certains concepts et `readingSources` contient des sources complémentaires de définition, hors corpus bibliographique.

La première sous-dimension est ouverte à l’arrivée ; les autres se déplient individuellement ou avec « Tout développer ». La recherche de concepts inclut aussi les définitions et les exemples. Le validateur vérifie la présence d’explications pour chacune des 44 sous-dimensions.
