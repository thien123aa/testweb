loadgiohang = async() => {
    let giohang = JSON.parse(localStorage.getItem('giohangcuatoi'));
    try {
        $("#giohang").empty();
        giohang.forEach(async(movie, i) => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=a7b3c9975791294647265c71224a88ad`);
            $("#giohang").append(
                `<div id=ctgiohang>
                    <div id="ttsp" >
                    <div> <img src="https://image.tmdb.org/t/p/original/${res.data.poster_path}" id="anhsp"></div>
                    <div id="tensp">${movie.ten}</div>
                    </div>
                    <div id="dgsp" >
                    <span > ${movie.Giatien} </span> 
                    </div>
                    <div id= "slsp" >
                    <input type = "number" value=${movie.soluong} onchange="onchang('${movie.ten}',this.value)">  
                    <button onclick=remove(${i})>xoa</button> 
                    </div>
                </div>
               `)
        })
        localStorage.setItem('giohangcuatoi', JSON.stringify(giohang));
        console.log('gio hang hien tai', giohang);
    } catch (error) {
        console.log(error);
        console.log("fail 404");
    }
}

remove = async(vitricanxoa) => {
    let giohang = JSON.parse(localStorage.getItem("giohangcuatoi"))
    giohang.splice(vitricanxoa, 1);
    $("#giohang").empty();
    giohang.forEach(async(movie, i) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=a7b3c9975791294647265c71224a88ad`);
        $("#giohang").append(
            `<div id=ctgiohang>
                <div id="ttsp" >
                <div> <img src="https://image.tmdb.org/t/p/original/${res.data.poster_path}" id="anhsp"></div>
                <div id="tensp">${movie.ten}</div>
                </div>
                <div id="dgsp" >
                <span > ${movie.Giatien} </span> 
                </div>
                <div id= "slsp" >
                <input type = "number" value=${movie.soluong} onchange="onchang('${movie.ten}',this.value)">  
                </div>

            </div>
           `)
    })
    localStorage.setItem('giohangcuatoi', JSON.stringify(giohang));
}

function onchang(ten, soluong) {
    let giohang = JSON.parse(localStorage.getItem("giohangcuatoi"))
    giohang.forEach((movie) => {
        if (movie.ten == ten) {
            movie.soluong = soluong;
        }
    })
    localStorage.setItem('giohangcuatoi', JSON.stringify(giohang));
}

function tongtien() {
    let tong = 0;
    let giohang = JSON.parse(localStorage.getItem("giohangcuatoi"))
    giohang.forEach((movie) => {
        tong += (movie.Giatien * 1 * movie.soluong * 1);
    })
    localStorage.setItem('giohangcuatoi', JSON.stringify(giohang));
    document.querySelector('input[id="tongtien"]').value = tong;
}