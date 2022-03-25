var express = require('express');
var router = express.Router();

const articles = [
    {
        id: 1,
        image: 'https://picsum.photos/id/12/200',
        title: "Článek",
        date: new Date("2019-02-12"),
        text: `Praesent dapibus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit.
          In convallis. Aenean vel massa quis mauris vehicula lacinia. Etiam commodo dui eget wisi.
          Integer imperdiet lectus quis justo. Aenean id metus id velit ullamcorper pulvinar.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
          non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
`
    },
    {
        id: 2,
        image: 'https://picsum.photos/id/1/200',
        title: "Něco",
        date: new Date("2020-08-01"),
        text: `Fusce nibh. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
          quaerat voluptatem. Maecenas libero. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede.
          Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor.
`
    },
    {
        id: 3,
        image: 'https://picsum.photos/id/15/200',
        title: "Název článku",
        date: new Date("2001-03-02"),
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
          Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
          Pellentesque arcu. Phasellus rhoncus.
`
    },
    {
        id: 4,
        image: 'https://picsum.photos/id/10/200',
        title: "Artikl",
        date: new Date("1999-05-04"),
        text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Mauris elementum mauris vitae tortor. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos hymenaeos. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. Maecenas lorem. Etiam egestas wisi a erat. Duis
          sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Praesent dapibus.
`
    },
    {
        id: 5,
        image: 'https://picsum.photos/id/8/200',
        title: "Xgsjiasnv",
        date: new Date("2021-10-06"),
        text: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit. Donec iaculis gravida nulla. Nulla pulvinar
          eleifend sem. Integer malesuada. Nunc auctor. Praesent dapibus. In laoreet, magna id viverra tincidunt,
          sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Curabitur vitae diam non enim vestibulum
          interdum.
`
    }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(articles);
});

router.get('/:id', function(req, res, next){
    const id = req.params.id
    if(id<=5){
        const article = articles.find((a ) => a.id === Number.parseInt(id));
        res.send(article);
    }else{
        res.send("Article not found");
    }
});

module.exports = router;