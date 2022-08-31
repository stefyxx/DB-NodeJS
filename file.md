npm init
npm install
npm install pg
    Error: index.js non accetta import
        - rinominare index.js in index.mjs
        - in package.json aggiungere 'type': 'module' et scrivere.mjs in 'start' et 'main' non serve
    -> non funziona. Allora fare npm install esm e lasciare .js
npm install esm     mi da errore ' Error: Could not find any Python installation to use'