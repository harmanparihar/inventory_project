# inventory_project

Backend : Spring Boot
Front-end : ReactJS
Database: MYSQL


## Instructions to run the project:
### Run the front-end using following commands:

<code> cd /client/inventory </code>

<code> npm install </code>

<code> npm start </code>

### Run the backend using following commands:

<code> cd /server </code>

<code> ./mvnw package && java -jar target/inventory-0.0.1-SNAPSHOT.jar  </code>


### Commands to run Docker Container:

<code >docker pull hkaur023/spring-backend:0.1 </code>

<code >docker run --net=host -dit hkaur023/spring-backend:0.1 </code>
