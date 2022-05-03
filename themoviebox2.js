  loadMovie = async(id_movie) => {
      var tenPhim = document.getElementById("tenPhim");
      var poster = document.getElementById("poster");
      var tenreview = document.getElementById("tenreview");
      var reviewphim = document.getElementById("reviewphim");
      try {
          const res = await axios.get(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=a7b3c9975791294647265c71224a88ad`)

          console.log(res.data.original_title)
          tenPhim.innerText = res.data.original_title;
          console.log(tenPhim)
          poster.src = `https://image.tmdb.org/t/p/original/${res.data.poster_path}`;
          tenreview.innerText = res.data.original_title;
          reviewphim.innerText = res.data.overview;
      } catch (error) {
          console.log(error)
      }


  }

  function add() {

      let soluong = 1;
      let Giatien = document.getElementById("giatien").innerHTML;
      console.log(Giatien)
      tongsl = 0


      axios.get(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=a7b3c9975791294647265c71224a88ad`).then(
          (res) => {
              var ten = res.data.original_title;
              var id = id_movie
              Giatien = Giatien.slice(1);
              console.log(Giatien)

              let giohang = JSON.parse(localStorage.getItem('giohangcuatoi'));

              if (!giohang) {
                  giohang = [];
              }
              let vitri = giohang.findIndex((sp) => { return sp.ten == ten; });
              if (vitri == -1) {
                  giohang.push({ ten: ten, soluong, Giatien, id })
              } else {
                  giohang[vitri].soluong += soluong * 1;
                  giohang[vitri].Giatien = giohang[vitri].Giatien * 1 + Giatien * 1;
              }
              localStorage.setItem('giohangcuatoi', JSON.stringify(giohang));
              console.log('gio hang hien tai', giohang);
              let tong = 0;
              $("#sl").empty();
              giohang.forEach(movie => {
                  tong = tong * 1 + movie.soluong * 1
                  console.log(tong);
              });
              $("#sl").append(`${tong}`)
          },
          (erro) => { console.log(erro) }
      )
  }