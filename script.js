const { exec } = require("child_process");

const extensions = {
  ":emojisense:": "bierner.emojisense",
  "Bracket Pair Colorizer": "CoenraadS.bracket-pair-colorizer",
  "Color Info": "bierner.color-info",
  "Debugger for Chrome": "msjsdiag.debugger-for-chrome",
  "Git Lens": "eamodio.gitlens",
  "Lorem Ipsum": "Tyriar.lorem-ipsum",
  "Material Icon Theme": "PKief.material-icon-theme",
  "Night Owl": "sdras.night-owl",
  "Polacode": "pnp.polacode",
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
