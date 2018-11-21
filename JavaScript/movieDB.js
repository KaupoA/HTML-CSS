var movies = [
    {
        title: "In Bruges", 
        rating: 3,
        hasWatched: false
    },

    {
        title: "Replicas", 
        rating: 3.5,
        hasWatched: true
    },

    {
        title: "Frozen", 
        rating: 0.5,
        hasWatched: false
    },

    {
        title: "Max Max: Fury Road", 
        rating: 5,
        hasWatched: true
    }
];

function movieDB() {
    for (var i = 0; i <= movies.length - 1; i++) {
        if (movies[i].hasWatched) {
            console.log("You have watched " + "\"" + movies[i].title + "\" - " + movies[i].rating + " stars");
        }else {
            console.log("You have not seen " + "\"" + movies[i].title + "\" - " + movies[i].rating + " stars");
        }
    }
}
