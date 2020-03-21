# TP1 L'objectif du TP est de construire une image qui sera servie pour récupérer le code source et de pourvoir builder pour ensuite obtenir un livrable compressé via un outil (cette partie doit ête réalisée viaa l'image docker). 
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


