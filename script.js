const { exec } = require("child_process");

const extensions = {
  ":emojisense:": "bierner.emojisense",
  "Bracket Pair Colorizer": "CoenraadS.bracket-pair-colorizer",
  "Color Info": "bierner.color-info",
  "Git Lens": "eamodio.gitlens",
  "Lorem Ipsum": "Tyriar.lorem-ipsum",
  "Material Icon Theme": "PKief.material-icon-theme",
  "Night Owl": "sdras.night-owl",
  "Polacode": "pnp.polacode",
  "Prettier ESLint": "rvest.vs-code-prettier-eslint",
  "Prettier": "esbenp.prettier-vscode",
  "ESLint": "dbaeumer.vscode-eslint",
  "Docket": "ms-azuretools.vscode-docker",
  "Import Cost": "wix.vscode-import-cost",
  "Swagger Viewer": "Arjun.swagger-viewer"
};

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error || stderr) {
        return reject({
          error,
          stderr
        });
      }

      return resolve(stdout);
    });
  });
}

Promise.all(Object.entries(extensions).map(([key, value]) => {
  console.log(`Installing ${key}`);

  return executeCommand(`code --install-extension ${value}`);
})).catch((error) => {
  console.log(error.stderr);
});
