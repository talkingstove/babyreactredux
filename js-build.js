var shell = require('shelljs');

shell.exec('webpack');
shell.cp('app.bundle.js', './server/public/js');
shell.rm('app.bundle.js');
shell.exec("node-sass ./src/css/final.scss styles.css");
shell.cp('styles.css', './server/public/css');
shell.rm('styles.css');
shell.echo("********** built css and js via npm run build *************");