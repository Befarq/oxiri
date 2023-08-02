const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
const imdbID = urlParams.get("imdbID");
const kinoNomi = document.querySelector("header h1");
const janr = document.createElement("h3");
const hikoya = document.getElementById("opisanie");
let header = document.querySelector("header");
let rasm = document.getElementById("rasmi");
console.log(imdbID);
window.addEventListener("load", async () => {
  const surov = await fetch(
    `https://www.omdbapi.com/?i=${imdbID}&apikey=b6ef71ed`
  );
  const data = await surov.json();
  console.log(data);
  kinoNomi.textContent = data.Title;
  janr.textContent = data.Genre;
  header.append(janr);
  let rasmi = document.createElement("img");
  rasmi.setAttribute("src", `${data.Poster}`);
  rasm.append(rasmi);
  hikoya.append(
    (document.createElement("p").textContent = "Tavsifi: " + `${data.Plot}`)
  );
  let yil = document.getElementById("yili");
  yili.textContent = `Yili: ${data.Year}`;
  let mamlakat = document.getElementById("mamlakat");
  mamlakat.textContent = `Mamlakat: ${data.Country}`;
  let aktyorlar = document.getElementById("rollarda");
  aktyorlar.textContent = `Rolarda: ${data.Actors}`;
  let rej = document.getElementById("rejissyor");
  rej.textContent = `Rejissyor: ${data.Director}`;
});
