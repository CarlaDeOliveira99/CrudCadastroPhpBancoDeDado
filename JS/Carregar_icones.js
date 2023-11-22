window.addEventListener('load', function () {
    let imgCod = document.getElementById('imgCod')
    let imgPro = document.getElementById('imgPro')
    let imgQua = document.getElementById('imgQua')
    let imgUni = document.getElementById('imgUni')
    let imgPreIni = document.getElementById('imgPreIni')
    let imgPreFin = document.getElementById('imgPreFin')
    let img_categoria = [imgCod, imgPro, imgQua, imgUni, imgPreIni, imgPreFin]


    img_categoria.forEach(categoria => {
        categoria.src = "iconesImagensGifs/ambasAsSetas.png"
    });

    window. ordenar_home();
 
})