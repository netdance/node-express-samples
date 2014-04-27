

// create fortunes

var fortuneCookies = [
    'conquer your fears, before they conquer you',
    'rivers need springs',
    'you will have a pleasant surprise',
    'don\'t fear what you don\'t know',
    'brace yourself: it\'s going to be that kind of day',
    'keep it simple, smilely'
];

exports.getFortune = function getFortune() {


        var randFortune = fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)];
        return randFortune;
        
};