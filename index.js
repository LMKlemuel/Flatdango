
// fetch films from db and list on html 
fetch ('http://localhost:3000/films')
 .then((response) => response.json())
 .then((data) => {
    data.forEach(films => {
        const filmlist = `<li>${films.title}</li>`
        document.querySelector("title").insertAdjacentHTML("beforeend", filmlist)
    })},
// render data to html 
 function displayFilm(data){
    const films = data.films
    const filmsDiv =  document.getElementById(films);
    const filmsTitle = films.title;
    const heading = document.createElement("h3")
    heading.innerHTML = filmsTitle;
    filmsDiv.appendchild(heading);
//   image render
 const filmsimg = document.createElement('img');
    filmsimg.src = films.poster;
    filmsDiv.appendchild(filmsimg);    

// click hander     
})
.catch((error) => console.error("FETCH ERROR:", error));





  

