
 
### Getting Started
tooling for Vue projects. To get started, clone this repository from GitHub and install the dependencies with npm or yarn.
                
```
npm install
```

or

```
yarn
```

Next step is running the application using the serve script and navigate to **http://localhost:8080/** to view the application.
That is it, you may now start with the development of your application using the Sakai template.</p>

```
npm run serve
```

### Vue CLI Scripts
Following commands are derived from create-app-app.
```
"npm run serve": Starts the development server
"npm run build": Builds the application for deployment.
"npm run lint": Executes the lint checks.
"npm run test:unit": Runs the tests.
```

### Structure
Sakai consists of 2 main parts; the application layout and the resources. **App.vue** inside src folder is the main component containing the template for the base layout whereas required resources such as SASS structure for the layout are placed inside the **src/assets/** folder.</p>

### Layout Components

### Menu

### Dependencies
Dependencies of Sakai are listed below and needs to be added to package.json.

```json
{
    "primevue": "~3.12.2",
    "primeicons": "~5.0.0",
    "primeflex": "~3.1.2",
}
```

### Saki Theme

### SASS Variables

**src/assets/_variables.scss**

```
