README

1. To run project via Dockerfile [http://localhost:8000]:

    #builds the docker image using provided docker file
    > docker build -t doc-summarizer .  

    #runs the docker container, mapping port 8000 from container to port 8000 on host machine
    > docker run -p 8000:8000 doc-summarizer  

2. To run project locally (Django) [http://127.0.0.1:8000/]

    #navigate to project directory, where manage.py is located
    > cd <path to project directory>/doc-summarizer

    #[Activate frontend server] start nextjs server from ./frontend
    > cd frontend
    > npm run dev

    #[Activate backend server] open new terminal window and return to project base directory to run django server
    > COMMAND+T
    > cd ..

    #activate venv 
    > source summarizerenv/bin/activate

    #start django server
    > python manage.py runserver

    #access http://127.0.0.1:8000/

    #to quit server
    > CTRL + C

    #to deactivate venv
    > deactivate

2. To run project locally (frontend Next.js) [http://localhost:3000]

    #navigate to project frontend directory
    > cd <path to project directory>/doc-summarizer/frontend

    #optional: install npm files onto local machine as these aren't tracked by Github
    > npm install

    #start nextjs local dev server
    > npm run dev

    #access http://localhost:3000

    #to quit server
    > CTRL + C