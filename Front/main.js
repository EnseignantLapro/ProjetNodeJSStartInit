alert("Hello World !");

fetch("/api/test")
  .then(res => res.json())
  .then(data => {
    console.log("Réponse API :", data);
  })
  .catch(err => console.error("Erreur API :", err));