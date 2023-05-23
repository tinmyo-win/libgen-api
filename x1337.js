const x1337 = require('x1337xapi');

// Perform a search.
// x1337.api().search('Clean Code').then(results => console.log(results[0].info()));

// Get all info for a torrent.
x1337.api().search('clean code').then(results => {
    results[0].info().then(info => {
        console.log(info);
    })
});
