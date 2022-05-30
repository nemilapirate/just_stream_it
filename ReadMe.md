Projet N°6 OpenCLassrooms:
Développer une interface utilisateur pour une appilcation web Python.

Installation:
Pour ce projet, l'installation de python est demander. Créer un répertoire JustStreamIt, placez-vous dedans et suivre les instructions via le lien ci-dessous afin de mettre en place l'API en locale: https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

Option 1 : Installation et exécution avec pipenv
Pour cette méthode, il est nécessaire que pipenv soit déjà installé sur votre installation python. Si pipenv n'est pas déjà installé sur votre ordinateur, reportez-vous à cette page .

Clonez ce référentiel en utilisant $ git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git(vous pouvez également télécharger le code en utilisant un fichier zip )
Accédez au dossier racine ocmovies-api avec$ cd ocmovies-api-en
Installer les dépendances du projet avecpipenv install
Créer et remplir la base de données du projet avecpipenv run python manage.py create_db
Exécutez le serveur avecpipenv run python manage.py runserver
Lorsque le serveur est en cours d'exécution après l'étape 5 de la procédure, l'API OCMovies peut être demandée à partir des points de terminaison en commençant par l'URL de base suivante : http://localhost:8000/api/v1/ .

Les étapes 1 à 4 ne sont requises que pour l'installation initiale. Pour les lancements ultérieurs de l'API, il vous suffit d'exécuter l'étape 5 depuis le dossier racine du projet.

Option 2 : Installation et exécution sans pipenv (en utilisant venv et pip)
Clonez ce référentiel en utilisant $ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git(vous pouvez également télécharger le code en utilisant un fichier zip )
Accédez au dossier racine ocmovies-api avec$ cd ocmovies-api-en
Créez un environnement virtuel pour le projet avec $ py -m venv envsur windows ou $ python3 -m venv envsur macos ou linux.
Activez l'environnement virtuel avec $ env\Scripts\activatesur windows ou $ source env/bin/activatesur macos ou linux.
Installer les dépendances du projet avec$ pip install -r requirements.txt
Créer et remplir la base de données du projet avec$ python manage.py create_db
Exécutez le serveur avec$ python manage.py runserver


Projet:
Un fois la connexion avec l'API faite, cloner le repository dans le dossier JustStreamIt: https://github.com/nemilapirate/just_stream_it.git

Utilisation:
Une fois les installation faites, à partir du répertoire just_stream_it, ouvrir le fichier index.html dans un navigateur ou bien avec un live server.