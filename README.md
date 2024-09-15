README

1. To run project via Dockerfile [http://localhost:8000]:

    #builds the docker image using provided docker file
    > docker build -t doc-summarizer .  

    #runs the docker container, mapping port 8000 from container to port 8000 on host machine
    > docker run -p 8000:8000 doc-summarizer  

2. To run project locally [http://127.0.0.1:8000/]

    #navigate to project directory, where manage.py is located
    > cd <path to project directory>/doc-summarizer

    #activate venv 
    > source summarizerenv/bin/activate

    #start server
    > python manage.py runserver

    #to quit server
    > CTRL + C

    #to deactivate venv
    > deactivate