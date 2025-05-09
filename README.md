# tech_test_ppub
Test Technique pour ProfilPublic


## Setup Initial
1. Clonez le projet :  
   ```git clone <repository_url>```
2. Accédez au répertoire du projet :
    ```cd profil-public-test```
3. Installez les dépendances :
    ```npm install```
4. Lancez le serveur de dev:
    ```npm run dev```
5. Ouvrez cette adresse dans un navigateur:
    ```http://localhost:3000```

## Présentation du Projet

### Design
Pour le design du site, je me suis inspiré de l’idée principale de **Profil Public**.  
J’ai utilisé les miniatures pour la `favicon.ico` et le logo pour l’en-tête.

### Fonctionnalités Implémentées
#### Liste des Offres d’Emploi
- Sans documentation de l’API, j’ai tenté de reverse-engineer les appels fetch via l’onglet **Network** lors du premier chargement du site officiel.
- Les résultats obtenus étaient différents de ceux du site officiel donc j’ai utilisé les données disponibles et appliqué un tri basé sur `validatedAt`, qui semble correspondre aux offres les plus récentes.

#### Populating des Offres
- Données enrichies avec :
  - Data des employeurs.  
  - Ville et région pour chaque offre.  
  - Secteur d’activité affiché dans le coin supérieur droit des cartes.

#### Détails des Offres
- En cliquant sur une carte, des informations importantes s’affichent :
  - Champs utilisés : `answer1` et `answer3`, probablement des réponses données par les employeurs sur des questions posées pour la création des job listings. 
  - Le formatage des cartes peut varier selon les réponses et n'est pas vraiment optimal sans connaitre les questions.

---

### Infinite Scrolling
- J’ai essayé d’implémenter un **scroll infini** avec des fetch de l'API.
- Les tests avec pagination et tri n’ont pas donné des résultats satisfaisants sans documentation de l’API.
- J’ai opté pour une page simple pour la démonstration du coup.

---

### Développement avec Nuxt et Vue.js
- Première expérience avec **Nuxt** et **Vue.js**.
- Structuration en composants pour garder `App.vue` lisible.
- Framework clair et agréable à utiliser. Je le réutiliserais volontiers pour d’autres projets.

---

## Améliorations Futures
- **Scroll Infini** : Ajouter un chargement dynamique des offres via pagination.  
- **Formatage des Cartes** : Uniformiser et améliorer la présentation des informations.

---

## Conclusion
Avec plus de temps et un accès à la documentation de l’API, ces fonctionnalités auraient été mieux optimisées.  
En espérant que cette démonstration vous plaise !

