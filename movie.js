api_key = 'a7b3c9975791294647265c71224a88ad';

function load(loaiphim) {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a7b3c9975791294647265c71224a88ad`).then(
        (res) => {
            res.data.results.forEach((movie) => {
                $("#dsphim").append(`
        <div class="col-sm-12 col-md-6 col-lg-3 "id="dsphim">
            <a href="themoviebox2.html?id=${movie.id} " class="khungphim">
                <div class="layer1">
                <div class="khoianh">
                    <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}">
                </div>
              
                <div class="tdphim">
                    <div class="tdnho">
                    <div class="tenphim">${movie.title}</div>
                    <p>${movie.overview}</p>
                    </div>
                    <div class="hopnho">${movie.vote_average}</div>
                </div>
                </div>
            </a>
            </div>`)
            });
        },
        (error) => { console.error; }
    )
    if (loaiphim == "action") {
        top_rated()
    } else if (loaiphim == "Another") {
        upcoming()
    } else if (loaiphim == "Something") {
        upcoming()
    }
}

function popular() {

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`).then(
        (res) => {
            $('#dsphim').empty();
            res.data.results.forEach((movie) => {
                $("#dsphim").append(`
            <div class="col-sm-12 col-md-6 col-lg-3 "id="dsphim">
                <a href="themoviebox2.html?id=${movie.id}  " class="khungphim">
                    <div class="layer1">
                    <div class="khoianh">
                        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}">
                    </div>
                    <div class="tdphim">
                        <div class="tdnho">
                        <div class="tenphim">${movie.title}</div>
                        <p>${movie.overview}</p>
                        </div>
                        <div class="hopnho">${movie.vote_average}</div>
                    </div>
                    </div>
                </a>
                </div>`)
            });
        },
        (error) => { console.error; }
    )
}

function top_rated() {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`).then(
        (res) => {
            $('#dsphim').empty();
            res.data.results.forEach((movie) => {
                $("#dsphim").append(`
            <div class="col-sm-12 col-md-6 col-lg-3 "id="dsphim">
                <a href="themoviebox2.html?id=${movie.id}  " class="khungphim">
                    <div class="layer1">
                    <div class="khoianh">
                        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}">
                    </div>
                    <div class="tdphim">
                        <div class="tdnho">
                        <div class="tenphim">${movie.title}</div>
                        <p>${movie.overview}</p>
                        </div>
                        <div class="hopnho">${movie.vote_average}</div>
                    </div>
                    </div>
                </a>
                </div>`)
            });
        },
        (error) => { console.error; }
    )
}

function upcoming() {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=a7b3c9975791294647265c71224a88ad`).then(
        (res) => {
            $('#dsphim').empty();
            res.data.results.forEach((movie) => {
                $("#dsphim").append(`
          <div class="col-sm-12 col-md-6 col-lg-3 "id="dsphim">
              <a href="themoviebox2.html?id=${movie.id}  " class="khungphim">
                  <div class="layer1">
                  <div class="khoianh">
                      <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}">
                  </div>
                  <div class="tdphim">
                      <div class="tdnho">
                      <div class="tenphim">${movie.title}</div>
                      <p>${movie.overview}</p>
                      </div>
                      <div class="hopnho">${movie.vote_average}</div>
                  </div>
                  </div>
              </a>
              </div>`)
            });
        },
        (error) => { console.error }
    )
}

//button xem them 
let page = 1

function loadmore() {
    page += 1;
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a7b3c9975791294647265c71224a88ad" + "&page=" + page).then(
        (res) => {
            res.data.results.forEach((movie) => {
                $("#dsphim").append(`
        <div class="col-sm-12 col-md-6 col-lg-3 "id="dsphim">
            <a href="themoviebox2.html" class="khungphim">
                <div class="layer1">
                <div class="khoianh">
                    <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}">
                </div>
                <div class="tdphim">
                    <div class="tdnho">
                    <div class="tenphim">${movie.title}</div>
                    <p>${movie.overview}</p>
                    </div>
                    <div class="hopnho">${movie.vote_average}</div>
                </div>
                </div>
            </a>
            </div>`)
            });
        },
        (error) => { console.error }
    )

}

// function load(){
//     const xhttp = new XMLHttpRequest();
//       document.getElementById("demo").innerHTML =
//       this.responseText;
//     xhttp.onload = function() {
//     let data=JSON.parse(this.responseText);
//     console.log(data);
//     data.results.forEach((movie)=> {
//         $("#dsphim").append(`
//         <div class="col-sm-12 col-md-6 col-lg-3 "id="dsphim">
//           <a href="themoviebox2.html" class="khungphim">
//             <div class="layer1">
//               <div khoianh>
//                 <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}">
//               </div>
//               <div class="tdphim">
//                 <div class="tdnho">
//                   <div class="tenphim">${movie.title}</div>
//                   <p>${movie.overview}</p>
//                 </div>
//                 <div class="hopnho">${movie.vote_average}</div>
//               </div>
//             </div>
//           </a>
//         </div>`)

//     });
//     }

//     xhttp.open("GET", "https://api.themoviedb.org/3/movie/popular?api_key=a7b3c9975791294647265c71224a88ad");
//     xhttp.send();
//   }