# mongo-boilerplate

## How to install

1. Fork this git repo and then clone your repo with `git clone`.
2. Run `cd mongo-boilerplate` in the terminal.
3. Run `npm i` in the terminal.
4. Create a Klarna Playground Account + Klarna Playground API Key that you will use below:
5. Create an .env file that looks like this: 
```
PORT=3000
PUBLIC_KEY=PK47125_962053b37cdb
SECRET_KEY=YjKEnheUIegnZR2Q
```
6. Run `sudo npm install -g nodemon` in the terminal.
7. Run `npm run dev` in the terminal.
8. The application should now be running on `http://localhost:3000`

## App Architecture

OBS: .env file is needed to run project, and is not supplied through the `git clone` command.

```
.env                # Environment variables, supplied by @devmattb.
.app.yaml           # Google Cloud deploy container settings.
public              # All static and public assets, such as images and videos.
src
│   start.js        # App start file
│   app.js          # App entry point
└───api             # Express route controllers for all the endpoints of the app
└───config          # Configuration for environment variables
└───loaders         # Splits up the startup process into modules
└───models          # Database models
└───services        # All the business logic is here
```

**Keep in mind that we often group files in to the following categories:**

```
any_folder
└───both          # Both client and server-needed files
└───client        # Only client-side needed files
└───server        # Only server-side files
```
