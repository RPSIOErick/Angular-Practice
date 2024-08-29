<div align='center'>

## <p style='margin-top: -0.5em;'> CRUD System </p>

</div>

<div id='images' style='display: flex; justify-content: space-around;' align='center'>

<img src='https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white' style='height: 3em;'/>

<img src='https://img.shields.io/badge/Express.JS-43853D?style=for-the-badge&logo=node.js&logoColor=white' style='height: 3em;'/>

<img src='https://img.shields.io/badge/Firebase-000?style=for-the-badge&logo=firebase&logoColor=ffca2' style='height: 3em;'/>

</div>

---

<div id='about'>

## <p align='center'> About the project! </p>

<p> The project it's simple. It uses Angular (Front End), Express.JS (Back-End) and Firebase (Data Base). For this project, I chose to use API Rest for it's structure, it is the main subject to study here. </p>

</div>

<div id='how-to-use'>

### <p> How to run it? </p>

<p> I strongly recommend running it in Visual Code Studio. You'll need to install Node.JS to run the application in general.

First, you'll need to install the node modules on both folders, so, you can enter the API folder on the terminal and run:

    npm install

or

    npm i

The same goes to the CRUD-System folder.

To run the API part, open up the "API" file and run the following command on the terminal:

    node api.js

Or, if you have nodemon installed, you can run with the following command:

    nodemon api.js

This should turn on the Back End of the application.
Now, you have to run the Front End, open the file "CRUDSystem" on the terminal and use the command:

    ng serve

</p>

### <p> What about the database? </p>

<p> In order to run it with the database working, you'll need to have a Firestore database on your Google Firebase (https://firebase.google.com/). <br>
You'll need to access your Project Configuration and go to the Service Account tab. There, you'll need to generate a new private key and name it as "serviceAccountKey.json". Once you've download it, put it on the "db" file of the project (api -> config -> db). <br><br>
There, everything should be ready to go now!
</p>

</div>
