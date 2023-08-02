let searchWord = document.getElementById("requesting");
let searchbutton = document.getElementById("search");
let natija = document.getElementById("resultArea");
searchbutton.addEventListener("click", async () => {
  if (searchWord.value != "") {
    let link = `https://www.omdbapi.com/?s=${searchWord.value}&page=1&apikey=b6ef71ed`;
    const requ = await fetch(`${link}`);
    const data = await requ.json();
    let list = data.Search;
    console.log(data);
    let docFrag = document.createDocumentFragment();
    list.forEach((kino) => {
      let ramka = document.createElement("div");
      ramka.classList.add("ramochka");
      let Posterdiv = document.createElement("div");
      Posterdiv.classList.add("poster");
      let PosterRasm = document.createElement("img");
      PosterRasm.setAttribute("src", `${kino.Poster}`);
      let title = (document.createElement(
        "h1"
      ).textContent = `Title:${kino.Title}`);
      let yili = (document.createElement(
        "h4"
      ).textContent = `Year:${kino.Year}`);
      let imdb = document.createElement;
      Posterdiv.append(PosterRasm);
      ramka.append(Posterdiv);
      ramka.append(title);
      ramka.append(document.createElement("br"));
      ramka.append(yili);
      let batafsil = document.createElement("a");
      batafsil.textContent = "read more";
      batafsil.setAttribute(
        "href",
        `${`../movie.html` + `?&imdbID=${kino.imdbID}`}`
      );
      ramka.append(document.createElement("br"));
      ramka.append(batafsil);
      docFrag.appendChild(ramka);
    });
    natija.appendChild(docFrag);
  } else {
    alert("Yozmapsiz!!!");
  }
});
