api_key = 'a7b3c9975791294647265c71224a88ad';
load = async() => {
    try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a7b3c9975791294647265c71224a88ad");
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
    } catch (error) {
        console.log("fail 404");
    }
}
popular = async() => {

    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
        console.log(res.data.results)
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
    } catch (error) {
        console.log("FAIL 404");
    }
}

top_rated = async() => {

    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`);
        console.log(res.data.results)
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


    } catch (error) {
        console.log("FAIL 404");
    }
}
upcoming = async() => {

    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=a7b3c9975791294647265c71224a88ad`);
        console.log(res.data.results)
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
    } catch (error) {
        console.log("FAIL 404");
    }
}
popular = async() => {

    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
        console.log(res.data.results)
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
    } catch (error) {
        console.log("FAIL 404");
    }
}

//button xem them 
let page = 1
loadmore = async() => {
        page += 1;
        try {
            const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a7b3c9975791294647265c71224a88ad" + "&page=" + page);
            console.log(res.data.results);
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
        } catch (error) {
            console.log("fail 404");
        }

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