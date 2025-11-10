import { useState } from "react";

function App() {
  const [articoli, setArticoli] = useState([
    {
      id: 1,
      titolo: "La transizione ai veicoli elettrici",
      autore: "Mario Rossi",
      data: "10 Novembre 2025",
      immagine:
        "https://www.motorionline.com/wp-content/uploads/2024/03/classifica-auto-inquinanti-2024-1024x682.jpg",
      contenuto:
        "La transizione verso i veicoli elettrici sta cambiando radicalmente il settore dei trasporti. Tuttavia, rimangono sfide significative legate alla produzione e allo smaltimento delle batterie."
    },
    {
      id: 2,
      titolo: "Energia rinnovabile: il futuro dell'Europa",
      autore: "Giulia Bianchi",
      data: "9 Novembre 2025",
      immagine:
        "https://generplus.it/wp-content/uploads/2021/06/energie-rinnovabili-europa.jpg",
      contenuto:
        "Le politiche europee stanno accelerando l’adozione di fonti rinnovabili. L’obiettivo è ridurre la dipendenza dai combustibili fossili e abbattere le emissioni di CO₂ entro il 2040."
    }
  ]);


  const [titolo, setTitolo] = useState("");
  const [autore, setAutore] = useState("");
  const [data, setData] = useState("");
  const [immagine, setImmagine] = useState("");
  const [contenuto, setContenuto] = useState("");


  const aggiungiArticolo = (e) => {
    e.preventDefault();


    if (!titolo || !autore || !data || !immagine || !contenuto) {
      alert("Compila tutti i campi prima di aggiungere un articolo!");
      return;
    }

    const nuovoArticolo = {
      id: articoli.length + 1,
      titolo,
      autore,
      data,
      immagine,
      contenuto
    };

    setArticoli([nuovoArticolo, ...articoli]);
    setTitolo("");
    setAutore("");
    setData("");
    setImmagine("");
    setContenuto("");
  };

  return (
    <div className="app-container">
      <h1>Articoli</h1>

      <form className="form-articolo" onSubmit={aggiungiArticolo}>
        <input
          type="text"
          placeholder="Titolo dell'articolo"
          value={titolo}
          onChange={(e) => setTitolo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nome e cognome autore"
          value={autore}
          onChange={(e) => setAutore(e.target.value)}
        />
        <input
          type="text"
          placeholder="Data (es. 10 Novembre 2025)"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link immagine"
          value={immagine}
          onChange={(e) => setImmagine(e.target.value)}
        />
        <textarea
          placeholder="Descrizione dell'articolo..."
          value={contenuto}
          onChange={(e) => setContenuto(e.target.value)}
        ></textarea>
        <button type="submit">Aggiungi articolo</button>
      </form>

      <div className="articoli-container">
        {articoli.map((articolo) => (
          <article key={articolo.id} className="articolo">
            <img
              src={articolo.immagine}
              alt={articolo.titolo}
              className="articolo-img"
            />
            <div className="articolo-contenuto">
              <h2>{articolo.titolo}</h2>
              <p className="articolo-meta">
                <strong>{articolo.autore}</strong> – <em>{articolo.data}</em>
              </p>
              <p className="articolo-testo">{articolo.contenuto}</p>
              <button className="btn-leggi">Leggi di più</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
