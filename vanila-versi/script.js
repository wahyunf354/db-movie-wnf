$('.button-klik').on('click', function () {

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=d22ab146&s=' + $('.input-movie').val(),
        success: results => {
            const movies = results.Search;

            let cards = '';
            movies.forEach(movie => {
                cards += showCard(movie);
            });
            $('.movie-container').html(cards);
            $('.modal-detail').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=d22ab146&i=' + $(this).data('imdbid'),
                    success: m => {
                        const movieDetail = showMovieDetail(m);
                        $('.modal-body').html(movieDetail);
                    },
                    error: () => {
                        console.log(e.error + "dibagian modal");
                    }
                });
            });
        },
        error: (e) => {
            console.log(e.error);
        }

    });

});


function showCard(movie) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-subtitle mb-2 text-muted">${movie.Year}</p>
                        <a href="#" class="btn btn-primary modal-detail" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Snow Detil</a>
                    </div>
                </div>
            </div>`;
};

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                    <li class="list-group-item">
                        <h3>${m.Title} </h3>
                    </li>
                    <li class="list-group-item"><Strong>Year : </Strong> ${m.Year}</li>
                    <li class="list-group-item"><Strong>Director : </Strong> ${m.Director}</li>
                    <li class="list-group-item"><Strong>Writer : </Strong>${m.Writer}</li>
                    <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Plot : </strong> <br>
                        <p>${m.Plot}</p>
                    </li>
                    </ul>
                </div>
                </div>
            </div>`;
}