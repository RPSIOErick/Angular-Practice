<div align="center">

## <p style="margin-top: -0.5em;">CRUD System</p>

</div>

<div id="images" style="display: flex; justify-content: space-around;" align="center">

<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" style="height: 3em;"/>

<img src="https://img.shields.io/badge/Express.JS-43853D?style=for-the-badge&logo=node.js&logoColor=white" style="height: 3em;"/>

<img src="https://img.shields.io/badge/Firebase-000?style=for-the-badge&logo=firebase&logoColor=ffca2" style="height: 3em;"/>

</div>

---

<div id="about">

## <p align="center">About the Project</p>

<p>This is a simple project that uses Angular (Front End), Express.JS (Back End), and Firebase (Database). The main focus is on using a RESTful API structure, which is the key learning objective here.</p>

</div>

<div id="how-to-use">

### <p>How to Run It</p>

<p>I strongly recommend running the project in Visual Studio Code. You'll need to install Node.js to run the application.

First, install the node modules in both the API and CRUD-System folders. In the terminal, navigate to the API folder and run:

    npm install

or

    npm i

Do the same in the CRUD-System folder.

To start the API after installing the modules, open the "API" folder and run the following command in the terminal:

    node api.js

If you have Nodemon installed, you can use the following command instead:

    nodemon api.js

This will start the Back End of the application. Next, to run the Front End, open the "CRUDSystem" folder in the terminal and use the command:

    ng serve

</p>

### <p>Setting Up the Database</p>

<p>To run the application with the database, you'll need a Firestore database in Google Firebase (https://firebase.google.com/). <br>
Access your project's settings, go to the Service Accounts tab, and generate a new private key. Name the key "serviceAccountKey.json". Once downloaded, place it in the "db" folder of the project (api -> config -> db). <br><br>
Everything should be set up and ready to go!
</p>

</div>
