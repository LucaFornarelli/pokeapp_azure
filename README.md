# Pokeapp

Bienvenue sur la Pokeapp ! Vous êtes un professionnel de la première génération de Pokémon ? 
Vous cherchez un Pokémon de la première génération ? Ou vous devez faire deviner un Pokémon 
de la première génération Pokémon, mais vous ne savez pas qui choisir 
entre Salaméche ou Pikachu ? Alors cette application est faite pour vous ! 
C'est tout simplement un générateur de Pokémon de la première génération.

## Pour démarrer

Tous d'abord, télécharger le dossier Pokeapp qui contient le back et le front end.

Dans le dossier Front-end, dans un invité de commande faire :
```
docker-compose up -d
```
Ensuite, lancer le back avec votre IDE.

Saisir l'adresse sur votre navigateur ```http://localhost:4200``` pour accéder à la Pokeapp.

### Prérequis

Pour lancer la Pokeapp sur votre machine, vous devez avoir docker et un IDE sur votre machine.


## Déploiement
Pour un déploiement sur Azure, il faut :

* Déposer son code sur github

Sur Azure :
* Créer un groupe de ressource 
* Créer un App Service pour chaque environment voulu (dev et prod)

Avec Visual Studio Code et le plugin Azure App Service
* Récupérer le code distant sur votre dépot
* Faire un ```ng build``` pour s'assurer que vous avez les dernières dépendances
* Avec le plugin, clic droit sur la Web App, deploy

## Technologies utilisées

* [Spring](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/index.html) - Framework Java
* [Maven](https://maven.apache.org/) - Dependency Management 
* [Java](https://docs.oracle.com/en/java/javase/17/docs/api/) - Java
* [Angular](https://angular.io/docs) - Angular

## Versioning

Nous utilisons [SemVer](https://semver.org/lang/fr/) pour le versioning.

## Explication

### Back
Nous avons essayé de déployer un back. Une application Java appelant l'api PokeApi. 
Cette application est fonctionnelle en local. Cependant, nous n'avons pas réussi à la rendre accessible sur Azure.
Nous avons contourné ce problème, en appelant directement [PokeApi](https://pokeapi.co).

### Docker
Nous avons créé un registre de conteneurs où nous avons déployé nos deux dockerfile.
Cependant, nous pensons qu'il n'est pas utilisé.

### Application Insight
Sur Azure, nous avons ajouté une application insight. Celle-ci permet d'obtenir des informations 
et statistiques sur l'application déployée.

## Auteur

* **Dylan Abraham**
* **Luca Fornarelli**
* **Maxime Tillay**
* **Maximilien Hombourger**
