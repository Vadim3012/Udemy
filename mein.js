let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? ",'');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? ",'');
  }
}

start();

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms() {
  for(let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
          b = prompt('На сколько оцените его?');
  
          if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDb.movies [a] = b;
          } else { i-- ;}
    }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDb.count >= 1 && personalMovieDb.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDb.count >= 30) {
    alert('Вы киноман!');
  } else {alert('Произошла ошибка');}
}

detectPersonalLevel();

function showMyDB() {
  if(personalMovieDb.privat == false) {
    console.log(personalMovieDb);
  }
}

showMyDB();


function writeYourGenres () {
  for(let i = 1;i <= 3;i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDb.genres[i - 1] = genre;


  }

}
writeYourGenres();






