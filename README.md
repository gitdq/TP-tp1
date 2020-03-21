# TP1 test1 : L'objectif 

Pour celà il faut installer dand l'image :

- git
- npm
- scp
- tar

1/ Les opérations: Créaion d'image à l'aide Dockerfile

* FROM Centos:latest
* ARG GIT_USER
* ARG GIT_PASS

* RUN yum install npm nodejs -y
* RUN yum install scp -y
* RUN yum install tar -y

2/ Build de l'image en donnant un nom:

* docker build -t --build-arg GIT_USER=<your_user> --build-arg GIT_TOKEN=d0e4467c63... --build-arg GIT_COMMIT=a14dc9f454... <your_image_name> .
* sudo docker build --build-arg GIT_USER=xxx --build-arg GIT_PASS=xxxx --tag ci1 .

3/ Rapatriment des codes manuel por test

* se connecter au conteneur ==> à automatiser
* git clone https://github.com/gitdq/TP-tp1.git ( voir comment ne pas ramener le README dans le conteneur)
* npm install .
* Lance ensuite npm start en passant les paramétres ==>  env PORT=8085 MSG="Hello world" npm start
* passer en background : Ctrl+z puis bg (pour revenir en fordground : fg)
* Pour tester, lancer un curl ==> curl -X GET http://localhost:8085
*******************************************************************************************************************************

*******************************************************************************************************************************

TP1 Test 2 :

Contenu du fichier Dockerfile:

FROM centos:latest
ARG GIT_USER
ARG GIT_PASS

RUN yum install git -y \
&& yum install npm nodejs -y \
&& yum install tar -y \
&& git clone https://github.com/gitdq/TP-tp1 (ici on clone

WORKDIR TP-tp1 ==> se positionner sur le répertoire de travail dans le conteneur

RUN npm install ==> chargement de modules (des dépendances)

CMD env PORT=8085 MSG="Hello world" npm start ==> démarrage de l'application en passant les paramétres à l'appli server.js
******************

Lancer le build en passant les paramétre (GIT_USER=Xxxx --build-arg GIT_PASS=Xxxx) définis dans l'image et tagger l'image au nom "ci1" : ==> sudo docker build --build-arg GIT_USER=Xxxx --build-arg GIT_PASS=Xxxx --tag ci1 .

*******************

==> Instancier un conteneur (nom du conteneur "test" )  avec l'image "ci1" en mappant le port de l'appli "8085" au port d'hôte "8080", celui-ci permet d'accéder à l'application à partir de l'hôte:

==> docker run -d -p 8080:8085 --name test ci1
==> teste d'accès à l'appli : 
    ==> [vagrant@localhost create_image]$ curl -X GET http://localhost:8080
        Résultat: Hello world
