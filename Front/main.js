fetch("/api/test")
  .then(res => res.json())
  .then(data => {
    console.log("Réponse API :");
    console.log(data.message);
    console.log(data.toto);
    console.log(data.nombre);
    console.log(data.liste);
  })
  .catch(err => console.error("Erreur API :", err));