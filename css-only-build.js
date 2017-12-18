var shell = require('shelljs');

shell.exec("node-sass ./src/css/final.scss styles.css");
shell.cp('styles.css', './server/public/css');
shell.rm('styles.css');
shell.echo("********** built css only via npm run build-css *************");