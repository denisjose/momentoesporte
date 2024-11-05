let authorsData;

(async () => {
  const res = await fetch("/assets/dados/autores.json");
  authorsData = await res.json();
  console.log(authorsData.authors[0]["author-name"]);
})();
