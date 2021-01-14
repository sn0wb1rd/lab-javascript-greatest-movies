// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(coffee){

    let directorsArray = coffee.map((milk) => {
        return milk.director
    })
    return directorsArray 
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// someday..

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (coffee){

    let filterCoffee = coffee.filter((elem) => {
        if (
            elem.director === "Steven Spielberg" && 
            elem.genre && 
            elem.genre.indexOf("Drama") !== -1 ){
                return true
        };
        
        return false
    })

    return filterCoffee.length
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (coffee) {
  
    if (coffee.length === 0){
      return 0    
    };   
     
    let totalCoffees = coffee.reduce((acc, elem) => {
      
      if (elem.rate){
        return acc + elem.rate
      } 
      else {
        return acc
      };
      
    }, 0)
    
    let averageRate = totalCoffees/coffee.length
    return Number(averageRate.toFixed(2));
    
};

// Iteration 4: Drama movies - Get the average of Drama Movies
// TODO: MAKE CODE MORE EFFICIENT..

function dramaMoviesRate (coffee) {
  
    if (coffee.length === 0){
      return 0    
    };

    let totalMovies = coffee.reduce((acc, elem) => {    
        if (elem.rate && elem.genre.indexOf("Drama") !== -1 ){ 
          return acc = acc + 1
        } 
        else {
          // nothing to add here. Empty cofffecup
          return acc
        };   
      }, 0)  
  
    let totalCoffees = coffee.reduce((acc, elem) => {   
      if (elem.rate && elem.genre.indexOf("Drama") !== -1 ){ 
        return acc + Number(elem.rate)
      } 
      else {
        // nothing to add here. Empty cofffecup
        return acc
      };
      
    }, 0)
    
    if (totalMovies === 0) {
        return 0
    }
    else {
        let averageRate = totalCoffees/totalMovies
        return Number(averageRate.toFixed(2));
    };    
};
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
