## Getting Started

### Installation

To get a local copy of the code, clone it using git:

```
git clone https://github.com/ridwanfbnr/portfolio-3d-react
cd portfolio-3d-react
```

Install dependencies:

```
npm install --legacy-peer-deps
```

Start the dev server

```
npm run dev
```

And then open http://localhost:3000 to view it in the browser.


### not required
Change file .env.example to .env or create .env file in the root folder
```
VITE_APP_EMAILJS_SERVICE_ID = "enter your api service id emailjs"
VITE_APP_EMAILJS_TEMPLATE_ID = "enter your api template id emailjs"
VITE_APP_EMAILJS_PUBLIC_KEY = "enter your api public key emailjs"
VITE_APP_EMAILJS_TO_NAME = "enter your api to name emailjs"
VITE_APP_EMAILJS_TO_EMAIL = "enter your api to email emailjs"
```


### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.               |
| npm run build | Builds the app for production to the `dist` folder. |
| npm run serve | Serves the production build from the `dist` folder. |
