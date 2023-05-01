## ex3 - BULLS AND COWS
ex3-yaakovhaimoff created by GitHub

## Contact info
<ul>
<li>Name: Yaakov Haimoff</li>
<li>ID: 318528510 </li>
<li>Edu mail: yaakovha@edu.hac.ac.il</li>
</ul>
# task-2-yaakovhaimoff

## Usage

In order to use the webb app you need to clone the project using this https url

```
https://github.com/Solange-s-Courses/ex3-react-java-ex3_yaakov_haimoff.git
```

## Explanations
This is a simple implementation of the Bulls and Cows game, also known as Mastermind. 
The game generates a random 4-digit number and the player has to guess the number. 
The game provides feedback to the player in the form of bulls and cows. 
A bull is a correct digit in the correct position, and a cow is a correct digit in the wrong position.

 ## How to Play
Clone or download the repository to your local machine
Open the terminal and navigate to the project directory
Run npm install to install the required dependencies
Run npm start to start the application
Open a web browser and go to http://localhost:3000 to access the game
Enter a 4-digit number in the input field and click the "Guess" button to make a guess
The game will provide feedback in the form of bulls and cows
Keep guessing until you guess the correct number

### Create a run configuration for the Server
* In IntelliJ, go to Run->Edit Configurations
* Click on the + sign and select Tomcat Server -> Local
* In the Tomcat Server Settings, select your local installation of tomcat (you can download it from https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.45/bin/apache-tomcat-9.0.45.tar.gz)
* In the Deployment tab, select the java-react:war file to deploy (the war file in the target folder of your project), IntelliJ should automatically detect it and display a "Fix" button. Click on it.
* uncheck the "After launch: Open in browser" checkbox (we don't want to open the browser when we run the server, it's a REST API server)
* Click on the OK button


### initializing IntelliJ
In case you get into trouble with IntelliJ, you should close the project,
delete the .idea folder, re-open the project and follow the instructions above to
recreate a run configuration.

###  dependencies
The template depends on:
* your local installation of tomcat, this template uses
  tomcat 9.0.45 that can be downloaded from https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.45/bin/apache-tomcat-9.0.45.tar.gz.
  In order to point to your own installation of tomcat, edit configuration in IntelliJ change the application server.
* your local installation of nodejs, this template is based on nodejs v18.15.0 (npm 9.5.0). You can download it from https://nodejs.org/en/download.
* your local installation of java (select one SDK at: File->Project Structure->Platform SDK). You can add SDK from IntelliJ by cliking on  File->Project Structure->Platform Settings-> +).
  This template is based on version 19, you can also download it from https://jdk.java.net/19/).

###  source files
The template includes:
* a Java Web template with an empty Servlet to implement your server side REST API under the src/main/java folder
* a React template under the reac-client folder, with an initialized npm project.

## In order to run your exercise you:
* run the server side; with IntelliJ configuration at the upper right (created above)
* run the client side: open the terminal: `cd react-client`, `npm install`,  run with the command `npm start`

Then browse:
* your react client at http://localhost:3000
* your server will be available at http://localhost:8080/api/highscores (you have of course to implement the REST API).
  Note that you should never specify the host and port in your React code! (use 'api/' instead of 'http://localhost:8080/api/')


