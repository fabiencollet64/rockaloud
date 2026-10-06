# Rockaloud, nouvelle version du site : liste des changements

Maquette HTML statique (6 pages) préparée par Collet Marketing pour validation par Cyril Bodin avant intégration WordPress.

Légende des statuts : **appliqué** / **à confirmer** (décision client attendue) / **en attente de fichier** (média à fournir).

## Fichiers livrés

- `index.html`, `ambiances.html`, `experiences.html`, `identite-musicale.html`, `qui-sommes-nous.html`, `contact.html`
- `css/style.css` (feuille unique partagée), `js/main.js` (menu mobile + choix de la vidéo du hero)
- `media/` : les fichiers de la médiathèque utilisés par la maquette, chemins relatifs
- Vidéos YouTube et Vimeo : iframes d'origine conservées, en ratio 16:9 responsive

Pour ouvrir la maquette : double-cliquer sur `index.html` (connexion internet nécessaire pour les polices Google et les vidéos YouTube/Vimeo).

## Remarque sur l'identité visuelle (à confirmer)

- **À confirmer** : le site en ligne rockaloud.fr n'était pas accessible depuis l'environnement de production de la maquette. L'identité a été reconstruite à partir des médias fournis : fond noir, textes blancs, logo ROCKALOUD en capitales fines et espacées (police Josefin Sans), texte courant en Montserrat, accent violet repris des visuels d'onde sonore (`onde-2.png`). Les couleurs et polices sont centralisées en tête de `css/style.css` (variables `--bg`, `--accent`, `--font-title`, `--font-body`) et se changent en une ligne si l'on souhaite coller plus près du site actuel.

## Éléments communs à toutes les pages

| Point | Statut | Détail |
|---|---|---|
| Header : logo `logo-Rockaloud-3-removebg-preview.png`, menu 6 entrées, sélecteur FR / EN | **appliqué** | EN non fonctionnel dans la maquette. Page active soulignée en violet. Menu burger en mobile. |
| Bandeaux d'en-tête avec photo de fond, comme sur le site actuel | **appliqué / à confirmer** | Ambiances : `concert-img-noir-blanc.jpg`. Expériences : `fete-rockaloud.jpg`. Identité musicale : `ambiance-rockaloud.png` (recadrée sur le piano et la chanteuse). Qui sommes-nous : `Q8B4621.jpg`. Contact : `concert-img-noir-blanc.jpg`. Bandeau compact (320 px de haut maximum en desktop), photo assombrie en fond, titre H1 centré par-dessus. **À confirmer** : la page Contact réutilise la même photo que la page Ambiances (c'est ce que semble faire le site actuel). L'accueil garde son hero vidéo. |
| Bloc « Choose your intensity » en bas de chaque page sauf Contact | **appliqué** | Titre, texte, bouton « Contactez-nous », email, téléphone, formulaire Nom / Prénom / Téléphone / Adresse e-mail / Message / Envoyer (non fonctionnel). |
| Email `contact@rockaloud.fr` partout | **appliqué** | `rockaloud1@gmail.com` n'apparaît plus nulle part. |
| Téléphone `+33 6 15 19 81 48` avec lien `tel:+33615198148` | **appliqué** | `0781395954` n'apparaît plus nulle part. |
| Footer : logo `logo-Rockaloud-3.jpg`, Mentions légales, Politique de confidentialité, « Site réalisé par Collet Marketing », icônes Facebook et Instagram | **appliqué** | Commentaire HTML « lien Facebook à vérifier avec le client » ajouté à côté de l'icône. |
| URLs des pages Mentions légales / Politique de confidentialité | **à confirmer** | La maquette pointe vers `https://rockaloud.fr/mentions-legales/` et `https://rockaloud.fr/politique-de-confidentialite/`. À vérifier que ce sont bien les adresses du site en ligne. |
| Suppression des retours à la ligne forcés et des paragraphes vides, espacements réajustés | **appliqué** | Toutes les pages. Seule exception voulue : le texte FRENCH (une ligne par phrase, demandé). |
| Aucun tiret cadratin (—) | **appliqué** | Vérifié dans tout le code. |
| Aucun texte vertical ni élément décoratif rotatif | **appliqué** | Supprimés. |
| Un seul H1 par page, hiérarchie H2 / H3 cohérente, casse homogène | **appliqué** | Titres en capitales espacées via CSS, le texte source garde la casse d'origine. |

## 1. Accueil (`index.html`)

| Point | Statut | Détail |
|---|---|---|
| Hero vidéo plein écran, autoplay muet en boucle | **appliqué** | `rockaloud-accueil-4.mp4` (1920 x 1080) en desktop, `video-rockaloud-mobile-2.mp4` (800 x 800) en mobile, choix automatique par JS selon la largeur d'écran. Si la vidéo desktop venait à manquer, le JS bascule sur la vidéo mobile et affiche une étiquette. |
| Bloc « L'Art de faire vibrer vos événements » + paragraphes « Entre lives, DJ sets… » et « Du dîner intimiste… » | **appliqué** | Supprimé entièrement. Le hero enchaîne sur la suite. |
| Image Fancy.jpeg (image générée par IA) | **en attente de fichier / à confirmer** | Remplacée par un emplacement gris « Photo à remplacer (fournie par Cyril) ». **À confirmer** : est-ce bien `Fancy.jpeg` qui doit être remplacée, ou `8_s9q3jv-1024x683-1-1.jpg` ? Dans la maquette, `8_s9q3jv` est conservée à côté de la liste des styles. |
| « L'Expérience Rockaloud » / « Un pied dans le club, l'autre sur scène » / texte | **appliqué** | Texte repris tel quel (H1 de la page). |
| « Ils nous ont fait confiance » : grille de logos | **appliqué** | 10 logos au même format : hauteur max 60 px desktop / 40 px mobile, `object-fit: contain`, grille centrée, monochrome clair (filtre CSS). Les marges noires des fichiers ont été rognées pour un rendu homogène. Logos identifiés dans la médiathèque : Moma Group, Paris Society, Maison Tournier, Celine, Le Parisien, Canal+, Haig Club, Jack Daniel's, La Maison Sage, Bus Palladium. |
| Logo Bus Palladium | **appliqué** | Fichier `logo bus palladium.jpg` trouvé dans la médiathèque, renommé `logo-bus-palladium.jpg` (sans espace) et affiché en inversé (disque blanc) pour rester en monochrome clair. |
| Mention « ET BEAUCOUP D'AUTRES… » | **appliqué** | Supprimée. |
| Image `8_s9q3jv-1024x683-1-1.jpg` | **appliqué** | Affichée à côté de la liste des styles. |
| Liste des styles LOUNGE, POP, FRENCH, ROCK, SOUL-FUNK-DISCO, CLASSIC, JAZZ, ALT & LOUD avec ancres vers Ambiances | **appliqué / à confirmer** | Chaque style renvoie à son ancre sur `ambiances.html`. **À confirmer** : la liste de l'accueil cite LOUNGE et JAZZ alors que la page Ambiances présente SOFT et aucun JAZZ. En attendant, LOUNGE pointe vers `#soft` et JAZZ vers `#classic`. Le client doit choisir une liste unique. |
| Titre « Ambiances Musicales » | **appliqué** | Supprimé. |
| Bouton « Découvrir une sélection d'artistes » | **appliqué / à confirmer** | Le brief demandait « MEET SOME OF OUR ARTISTS » ; à la demande de Collet Marketing, le bouton est en français : « Rencontrez quelques-uns de nos artistes » (vers `ambiances.html`). Libellé exact à valider avec le client. |
| « Nos expériences lives » / « Le live dans le bon timing. » / texte / bouton « Découvrir nos shows » / vidéos YouTube `1nhEU0BC05g` et `jf1HSmLZHQw` / image `IMG_2701.jpg` | **appliqué** | Repris tels quels. |
| « Identité Sonore et Playlists » / sous-titre / texte / bouton « Écouter nos playlists » | **appliqué / à confirmer** | Texte conservé, espaces parasites supprimés. **À confirmer** : le client voulait-il supprimer ce texte ou seulement corriger ses espaces ? |
| « Ce qu'on pense de nous ! » : 9 témoignages | **appliqué** | Grille de 9 cartes, textes et signatures repris à l'identique (« Dj David » corrigé en « DJ David »). |
| Bloc « Choose your intensity » + footer | **appliqué** | |

## 2. Ambiances (`ambiances.html`)

| Point | Statut | Détail |
|---|---|---|
| H1 « Nos Ambiances : L'Âme de vos Soirées », H2 « Choisissez la Signature Scénique qui vous ressemble » | **appliqué** | |
| Blocs par style avec ancres `#soft`, `#pop`, `#french`, `#rock`, `#soul-funk-disco`, `#classic`, `#alt-loud` | **appliqué** | Textes repris tels quels. FRENCH : une ligne par phrase comme demandé. |
| Vidéos : une par style | **appliqué** | Le brief listait les vidéos par paires (SOFT : `XnOeB2_qpro` + `W85wO7x4e9c`, FRENCH : `azG9ca8zM-I` + `wUS4tdbfYSM`, SOUL-FUNK-DISCO : `5r3Q8YeS9tQ` + `HcSu9LlsYuk`, ALT & LOUD : `fIWCS2iRZ34`), mais les titres YouTube montrent que la seconde vidéo de chaque paire appartient au style suivant. Affectation retenue : SOFT `XnOeB2_qpro` (« Rockaloud / Soft »), POP `W85wO7x4e9c` (« Rockaloud / Pop »), FRENCH `azG9ca8zM-I` (« Rockaloud / French »), ROCK `wUS4tdbfYSM` (« Rockaloud / Rock »), SOUL-FUNK-DISCO `5r3Q8YeS9tQ` (« Rockaloud / Soul Funk »), CLASSIC `HcSu9LlsYuk` (« Rockaloud /classique »), ALT & LOUD `fIWCS2iRZ34`. Iframes YouTube 16:9. |
| Mise en page : un bloc fermé par style | **appliqué** | Chaque style forme un bloc délimité par un filet : titre avec repère violet et texte à gauche, sa vidéo à droite (empilés en mobile). Ordre du brief respecté : SOFT, POP, FRENCH, ROCK, SOUL-FUNK-DISCO, CLASSIC, ALT & LOUD. Une barre d'ancres en haut de page permet d'aller directement à un style. |
| Texte en gras « Chaque prestation est modulable… » + bouton « Demander un devis sur-mesure » | **appliqué** | Bouton vers `contact.html`. |
| Cohérence LOUNGE / JAZZ (accueil) vs SOFT / pas de JAZZ (Ambiances) | **à confirmer** | Voir point correspondant dans Accueil. |
| Bloc « Choose your intensity » + footer | **appliqué** | |

## 3. Expériences (`experiences.html`)

| Point | Statut | Détail |
|---|---|---|
| Nouvelle accroche : H1 « More than Music. », sous-titre « Live, interaction, inattendu. », ligne « Créer du lien, faire monter l'énergie, surprendre. » | **appliqué / à confirmer** | Dans la maquette, elle **remplace** l'intro actuelle « Nos Expériences : Bien plus qu'un concert, un happening. » et ses deux paragraphes. **À confirmer** : remplacement ou ajout au-dessus de l'intro actuelle ? Si ajout, les deux paragraphes seront réintégrés (avec « Que vous souhaitiez » corrigé). |
| Coquille « More than Music . » | **appliqué** | Devient « More than Music. » |
| H2 « Le Live au cœur de l'action » : Karaoké Live Band (image `Capture-decran-2026-02-16-a-16.42.55.png`) et Blind Tests & Formats Ludiques (image `blind-test-Philippe-Manoeuvre.jpg`) | **appliqué** | Textes repris tels quels, « belle mère » corrigé en « belle-mère ». L'image de capture a été réduite à 1600 px de large pour alléger la page. |
| Nouveau bloc « LIVE GUESTS » | **appliqué / en attente de fichier** | Même style que les blocs précédents, texte fourni, emplacement vidéo 16:9 libellé « Vidéo à venir ». |
| H2 « L'Inattendu : Nos Happenings » + texte | **appliqué** | Coquille « Pour lui transformer » corrigée en « Pour transformer ». |
| Liste en cartes : Performers, Danseurs et comédiens / Art du Drag / Close-up & Magie / Happenings Iconiques | **appliqué** | 4 cartes. |
| Sous-bloc « Art du Drag » : vidéos Vimeo `1189180743` et `1184787347` | **appliqué** | Iframes Vimeo 16:9. Une courte phrase d'introduction (« Deux performances à découvrir en vidéo. ») a été ajoutée pour ne pas laisser un titre seul : à supprimer si non souhaitée. |
| H2 « Ce petit « Twist » qui change tout » + texte + bouton « Imaginez votre expérience avec nous » | **appliqué** | Bouton vers `contact.html`. |
| Bloc « Choose your intensity » + footer | **appliqué** | |

## 4. Identité musicale (`identite-musicale.html`)

| Point | Statut | Détail |
|---|---|---|
| H1 « Identité musicale, Sound design » + intro | **appliqué** | |
| H2 « Notre Expertise » + 2 cartes (Direction Musicale / Sound Design ; DJ's / Playlists Sur-Mesure) | **appliqué** | |
| H2 « Écoutez la Signature Rockaloud » + texte + bouton « Demander à recevoir un extrait » | **appliqué** | Bouton vers `contact.html`. |
| Image `rockaloud-concert-evenement.png` | **appliqué** | Placée à côté du bloc « Écoutez la Signature Rockaloud ». |
| H2 « Faire dialoguer le lieu et le son » + texte + bouton « Imaginez votre expérience avec nous » | **appliqué** | |
| Bloc « Choose your intensity » + footer | **appliqué** | |

## 5. Qui sommes-nous ? (`qui-sommes-nous.html`)

| Point | Statut | Détail |
|---|---|---|
| H1 « Qui sommes-nous ? L'Expérience de la Nuit », chapeau en gras, texte de présentation | **appliqué** | Titre du livre *La véritable histoire du Bus Palladium* en italique. |
| Image `_Q8B4621.jpg` | **appliqué / à confirmer** | Le fichier de la médiathèque s'appelle `Q8B4621.jpg` (sans le tiret bas). Comme sur le site actuel, la photo sert de fond au bandeau d'en-tête de la page, elle n'est donc pas répétée dans le corps du texte. |
| H2 « Notre Histoire : De la Scène au Club » + 2 cartes images (`bus-palladium.jpg`, `concert-img-noir-blanc.jpg`) | **appliqué** | |
| H2 « Notre ADN » + H3 « Un Réseau de Talents Pluridisciplinaires » + 3 cartes | **appliqué** | |
| H2 « Ils nous ont fait confiance » : même grille de logos que l'accueil | **appliqué** | Les 10 logos (dont Bus Palladium) sont disponibles en image, aucun nom en texte n'a été nécessaire. |
| Texte en gras « Chaque format est pensé… » + bouton « Travaillons ensemble sur votre prochain événement » | **appliqué** | Bouton vers `contact.html`. |
| Bloc « Choose your intensity » + footer | **appliqué** | |

## 6. Contact (`contact.html`)

| Point | Statut | Détail |
|---|---|---|
| Un seul formulaire (suppression du doublon avec « Choose your intensity ») | **appliqué** | Pas de bloc « Choose your intensity » sur cette page. |
| H1 « Contact : Donnez une voix à votre événement », chapeau en gras, texte | **appliqué** | |
| Deux colonnes (une seule en mobile) : « Discutons de votre projet » + coordonnées ; « Demande d'informations » + formulaire | **appliqué** | Direction : Cyril Bodin, Téléphone, Email, « Suivez l'actualité Rockaloud » (Facebook, Instagram), signature « Rockaloud, Talent Agency. Faire dialoguer le live, la performance et la nuit. » Formulaire avec le placeholder demandé. |
| Lien Instagram | **à confirmer** | La page Contact actuelle renvoie vers `instagram.com/cyril__bodin` alors que le reste du site pointe vers `rockaloud_talent_agency`. La maquette utilise `rockaloud_talent_agency` partout. |
| Footer sans bloc « Choose your intensity » | **appliqué** | |

## Corrections de forme appliquées sur tout le site

| Correction | Statut |
|---|---|
| « Que vous souhaitez briser la glace » → « Que vous souhaitiez » | **sans objet** dans la maquette (l'intro Expériences est remplacée). À appliquer si l'intro est finalement conservée. |
| « belle mère » → « belle-mère » | **appliqué** |
| « dj set » → « DJ sets » | **appliqué** (texte supprimé sur l'accueil ; forme « DJ sets » utilisée sur Qui sommes-nous) |
| « Dj David » → « DJ David » | **appliqué** |
| Espaces avant virgules et points supprimés ; espace avant les deux points et points d'exclamation | **appliqué** |
| « More than Music . » → « More than Music. » | **appliqué** |
| Aucun tiret cadratin | **appliqué** |

## Contrôle final effectué

- Les 6 pages ont été ouvertes en desktop (1440 px) et mobile (390 px) : aucun défilement horizontal, menu mobile fonctionnel, page active mise en évidence.
- Tous les chemins médias fonctionnent (vidéo desktop du hero incluse).
- Plus aucune occurrence de `0781395954`, `rockaloud1@gmail.com` ou de tiret cadratin dans le code.
- Un seul H1 par page.

## Récapitulatif des points en attente côté client

1. Fournir la vraie photo qui remplace `Fancy.jpeg` (et confirmer qu'il s'agit bien de cette image, et non de `8_s9q3jv-1024x683-1-1.jpg`).
2. Fournir la vidéo du bloc « LIVE GUESTS ».
3. Choisir une liste unique de styles (LOUNGE / JAZZ sur l'accueil vs SOFT / pas de JAZZ sur Ambiances).
4. Confirmer : texte « Identité Sonore et Playlists » de l'accueil, à conserver ou à supprimer ?
5. Confirmer : nouvelle accroche Expériences en remplacement ou en ajout de l'intro actuelle ?
6. Confirmer le lien Instagram (`rockaloud_talent_agency` ou `cyril__bodin`) et le lien Facebook.
7. Valider les couleurs et polices retenues pour la maquette (voir remarque sur l'identité visuelle).
