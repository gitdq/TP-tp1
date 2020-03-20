# TP1 L'objectif du TP est de construire une image qui sera servie pour récupérer le code source et de pourvoir builder pour ensuite obtenir un livrable compressé via un outl (cette partie doit ête réalisée viaa l'image docker). 
Pour celà il faut installer dand l'image :

- git
- npm
- scp
- tar

1/ Les opérations: Créaion d'image à l'aide Dockerfile

* FROM Centos:latest
* ARG GIT_USER
* ARG GIT_PASS
* FROM centos:latest
* ARG GIT_USER
* ARG GIT_PASS

* RUN yum update
* RUN yum install -y epel-release
* RUN yum install -y git

* RUN yum install npm nodejs -y
* RUN yum install scp -y
* RUN yum install tar -y

2/ Build de l'image en donnant un nom:

* docker build -t ci1 .

Résultat:

