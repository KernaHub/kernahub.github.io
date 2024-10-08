---
title: Documentation Kernalan
description: Petit tutoriel créé pour la Kernalan pour pouvoir lancer Minecraft sans un BAC+5
---

Super ! Vous participez au plus grand évènement gaming de toute la planète !
<span style="color:green">Mais heuuu.... Comment on lance Minecraft </span>?
Comme le resaux de kernanec est plus sinueux que le labyrinthe du Minotaure, cette page existe pour vous donner un coup de main !
*Et croyez moi, <span style="color:green">vous allez en avoir besoin</span>...*

## Lancer Prism Launcher

La première étape est de lancer <span style="color:green">Prism Launcher</span>.
Prism Launcher est une version modifié de minecraft qui nous permet de pouvoir l'utiliser dans le résaux plutot spécial du lycée kernanec.
Pour le lancer, ouvrez un terminal (par exemple <span style="color:green">Tilix</span>) et exécutez la commande suivante :


```sh title="Tilix"
/var/prism/PrismLauncher
```

:::danger[Une erreur ?]
Si vous avez une erreur indiquant que le fichier n'existe pas, appellez un professeur. 
:::


Cliquez ensuite jusqu'a suivant - si un boutton suivant s'affiche - jusqu'a arriver sur <span style="color:green">cette fenetre</span> :

![image screen](https://github.com/Funasitien/kernadoc/assets/86372093/8fefa799-9643-4c7d-91df-67ae88747554)

## Ajouter un compte
Cliquez sur le boutton "Add Offline" pour ajouter un compte. Choissisez votre pseydonyme, puis cliquez sur "OK". Vous pouvez utiliser un compte microsoft pour vous connecter, mais il vous faut un compte Minecraft officiel.

Cliquez ensuite sur le boutton "Proxy". Ici, vous allez ajouter votre session au client Minecraft pour le faire fonctionner correctement.

- Séléctionez d'abbord HTTP comme type de proxy.
- Comme adresse, entrez `172.16.0.253`
- Comme port, entrez `3128`
- Pour le nom d'utilisateur et le mot de passe, utilisez ceux de votre session (que vous utilisez pour vous connecter). 

![image screen proxy](/img/proxy.png)

## (Dé)configurer Java

La dernière étape de configuration est de dire à votre ordinateur de ne pas vérifier qu'il est en bonne santé, car il est très loin de l'être. Après avoir remplis tout les champs de la catégorie Proxy, cliquer sur l'onglet Java, et cocher les deux cases `Skip Java compatiblity checks` & `Skip Java Wizard` (`Passer les vérifications de compatibilité Java` et `Ignorer l'assistant d'installation Java` en français) Et après ça, <span style="color:green">c'est finit</span> ! Votre Minecraft est pret à démarrer !

## Mais il est où, le boutton jouer ?
Bon. Votre Launcher fonctionnne. Mais il n'y a pas de bouttons jouer. C'est parce que il faut créé une "instance", une "version" du jeu avec ses propres fichiers et ses propres mods

:::info[Si vous vous y conaissez en mod]

Dans ce tuto, je vais vous conseille d'utiliser le modpack **SIMPLY OPTIMIZED** pour jouer au lycée, car c'est le meilleur modpack optimizé que je conaisse. Mais tant que votre client est en 1.16.5 (fonctionne avec Java 16), vous pouvez installer les mods que vous voulez ! (sauf des cheats. Je vous surveille 🧐)

:::

### Créer un profil
Pour cela, cliquez sur le boutton "Ajouter une instance" en haut de votre launcher.
![Screen Modrinth](/img/mod1.png)

Nous allons utiliser Modrinth pour télécharger le modpack. Cliquez donc sur "Modrinth" (le logo vert).
![Screen Modrinth](/img/mod2.png)

Le pack que nous allons utiliser s'apelle "Simply Optimized". Cliquez dessus, puis séléctionné dans le menu déroulant en bas une version qui commence par `1.16.5`.
![Screen Modrinth](/img/mod3.png)

:::caution[Aucun pack ne s'affiche ?]

:::

Après le téléchargement du modpack, l'icone de Simply Optimized deverais apparaitre à l'écran. Cliquez dessus, puis sur le boutton "Lancer". Vous n'avez plus qu'a attendre que le jeu se lance !
![Screen Modrinth](/img/mod4.png)

Et c'est finit !