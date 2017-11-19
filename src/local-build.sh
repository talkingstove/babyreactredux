#!/bin/bash 
webpack
cp app.bundle.js ../server/public/js
rm app.bundle.js
sass ./css/final.scss:../server/public/css/styles.css
echo "***** local build complete!! *****"