$(document).ready(function(){
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bac38731e4msh1b21d39bc429049p1065a2jsn7a6528c9f67d',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

})



