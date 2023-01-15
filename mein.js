let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели? ",'');

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDb.count >= 1 && personalMovieDb.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
  alert('Вы классический зритель');
} else if (personalMovieDb.count >= 30) {
  alert('Вы киноман!');
} else {alert('Произошла ошибка');}



for(let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');

        if(a != null && b != null && a != '' && b != '' && a.length < 50) {
          personalMovieDb.movies [a] = b;
        } else { i-- ;}
        
}


console.log(personalMovieDb);




