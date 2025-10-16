function cambiarVideo(url) {
  //guarda en la variable el contenido de la url que se encuentre despues de "v=" en la posicion 1, osea lo que sigue despues del " = "
  let videoId = url.split("v=")[1];

    //codigo el cual copia el contenido de videoID y lo pega a la url embed
  let embedUrl = "https://www.youtube.com/embed/" + videoId;

   //se pone el video con la URL buena en el video 1
  document.getElementById("videoFrame").src = embedUrl;
  
}

function cambiarVideo2(url) {
  //guarda en la variable el contenido de la url que se encuentre despues de "v=" en la posicion 1, osea lo que sigue despues del " = "
  let videoId = url.split("v=")[1];

    //codigo el cual copia el contenido de videoID y lo pega a la url embed
  let embedUrl = "https://www.youtube.com/embed/" + videoId;

    //se pone el video con la URL buena en el video 2
  document.getElementById("videoFrame2").src = embedUrl;

}

//cada cancion tiene su propio metodo, este metodo manda a llamar al metodo anterior para entregarle la ultima
// parte del URL de youtube y el nombre de la cancion para que le agregue automaticamente el "embed"
function album_1_video_1() {
  cambiarVideo("https://www.youtube.com/watch?v=oxwAB3SECtc");
}

function album_1_video_2() {
  cambiarVideo("https://www.youtube.com/watch?v=5tc0gLSSU1M");
}

function album_1_video_3() {
  cambiarVideo("https://www.youtube.com/watch?v=czw8eqepir8");
}

function album_1_video_4() {
  cambiarVideo("https://www.youtube.com/watch?v=b3zNKWyLfus");
}

function album_1_video_5() {
  cambiarVideo("https://www.youtube.com/watch?v=rJOhavaeJYk");
}

function album_1_video_6() {
  cambiarVideo("https://www.youtube.com/watch?v=uRQ7ecvU56k");
}

//album 2

function album_2_video_1() {
  cambiarVideo2("https://www.youtube.com/watch?v=oxwAB3SECtc");
}

function album_2_video_2() {
  cambiarVideo2("https://www.youtube.com/watch?v=5tc0gLSSU1M");
}

function album_2_video_3() {
  cambiarVideo2("https://www.youtube.com/watch?v=czw8eqepir8");
}

function album_2_video_4() {
  cambiarVideo2("https://www.youtube.com/watch?v=b3zNKWyLfus");
}

function album_2_video_5() {
  cambiarVideo2("https://www.youtube.com/watch?v=rJOhavaeJYk");
}

function album_2_video_6() {
  cambiarVideo2("https://www.youtube.com/watch?v=uRQ7ecvU56k");
}