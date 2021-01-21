const hbs = require('hbs');

hbs.registerHelper('getYear', () => new Date().getFullYear());

hbs.registerHelper('upper', (text) => {
    let words = text.split(' ');
    words.forEach((word, idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return words.join(' ');
});