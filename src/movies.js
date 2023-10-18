// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    // const newDirectors = [];
    // moviesArray.forEach(function(each)  {
    //     newDirectors.push(each.director)
    // });
    // return newDirectors 
    const directors = moviesArray.map(function(eachDirector){
        return eachDirector.director
    })
    console.log(directors)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let movie = 0;
    let dramaMovies = [];

for (let i = 0; i < moviesArray.length; i++){
    //return howManyMovies.length;
    if(moviesArray[i].director === 'Steven Spielberg' && moviesArray[i].genre.includes('Drama')){
        dramaMovies.push(moviesArray[i]);
    }

}

return dramaMovies.length
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    // console.log('all movies', moviesArray)
    // const scoreMovie = moviesArray.filter((eachMovie){
    //     return eachMovie.scoreMovie
    // })
    // const scored = moviesArray.map((eachMovie){
    //     return eachMovie.score
    // })

    // const scoreMovie = moviesArray.filter((eachMovie)=>{
    //     if(eachMovie.score){
    //         return true
    //     }
    // })
    // const movieScore = moviesArray.map((eachMovie) =>{
    //     if(eachMovie.)
    // })

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
