# Bee

## Variables d'environnement

- ./service/.env

## Commandes utiles

- Installer les dépendances (quand vous n'êtes pas sous docker)

`docker-compose run <nom-du-service> npm i`

- Lancer le projet sous docker

`docker-compose up`

- Entrer dans le container 

`docker exec -ti <nom-du-service> bash`

- Consulter la base de donnée 

`localhost:8080`
`Les identifiants sont dans le fichier .env.model et sont a mettre dans un fichier .env au même niveau que ce dernier`
`En utilisant l'utilisateur root il faut le root password et en utilisant l'utilisateur iut_db_abeille c'est le second qu'il faut utiliser`

- Consulter la partie front du site 

`localhost:3535`