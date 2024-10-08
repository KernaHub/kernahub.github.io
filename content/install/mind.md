---
title: Installation de Linux Mint Xfce
description: Consignes pour installer pas à pas Linux Mint Xfce sur un PC
---

# Avant l'installation

* Accéder au bios en appuyant sur F10 ?
* Dans le bios mettre le démarrage sur la clé en premier


# Démarrage de l'ordinateur

* Dans le menu grub choisir <span style="color:green">OEM Install (for manufacturers)</span>
* Choisir <span style="color:green">Français</span> puis cliquer sur <span style="color:green">continuer</span>

## Disposition du clavier

Choisir <span style="color:green">French</span>, <span style="color:green">French - French (alt.)</span> puis cliquer sur <span style="color:green">continuer</span>

## Codecs multimedia

Cocher <span style="color:green">Installer les codecs multimedia</span> puis cliquer sur <span style="color:green">continuer</span>

## Type d'installation

Choisir <span style="color:green">autre chose</span> puis cliquer sur <span style="color:green">continuer</span>

Supprimer toutes les partitions et créer des nouvelles partitions primaire au début de l'espace en cliquant sur <span style="color:green">+</span>

Voici les partitions à créer :

* /dev/sda1   biosgrub   1Mo (zone réservée pour le chargeur d'amorcage BIOS)
* /dev/sda2   efi        100Mo (Partition système EFI)
* /dev/sda3   swap       4096Mo (espace d'échange («swap»))
* /dev/sda4   ext4       le reste (système de fichiers journalisé ext4) point de montage /

Dans la fenètre d'alerte "Faut-il appliquer les changements sur les disques ?" cliquer sur <span style="color:green">continuer</span>

Cliquer sur <span style="color:green">Installer maintenant</span>

## Où êtes-vous ?

Choisir <span style="color:green">Paris</span> puis cliquer sur <span style="color:green">continuer</span>

## Qui êtes-vous ?

* Laisser les choix par défaut
* Mot de passe : ciinstall

Cliquer sur <span style="color:green">continuer</span>


## Installation terminée

Cliquer sur <span style="color:green">Redémarrer maintenant</span>


## Please remove the installation medium, then press ENTER

* Enlever la clé USB
* Appuyer sur <span style="color:green">entrée</span>


# Redémarrage de l'ordinateur

## Bienvenue

Fermer la fenètre

## Mettre à jour l'ordinateur

Créer le fichier /etc/apt/apt.conf.d/proxyPerso.conf et y placer les lignes suivantes :
```
Acquire::http::Proxy "http://172.16.0.253:3128/";
Acquire::https::Proxy "http://172.16.0.253:3128/";
```


Saisir les commandes suivantes :

```
sudo apt update
sudo apt upgrade -y
sudo apt install -y vlc neofetch htop
sudo apt clean
```

Supprimer le fichier /etc/apt/apt.conf.d/proxyPerso.conf

Cliquer sur <span style="color:green">Préparer en vue de l'expédition à l'utilisateur final</span>