

function App() {
  const [articoli, setArticoli] = useState([
    {
      id: 1,
      titolo: "La transizione ai veicoli elettrici",
      autore: "Mario Rossi",
      data: "10 Novembre 2025",
      immagine: "https://www.motorionline.com/wp-content/uploads/2024/03/classifica-auto-inquinanti-2024-1024x682.jpg",
      contenuto:
        "La transizione verso i veicoli elettrici sta cambiando radicalmente il settore dei trasporti. Tuttavia, rimangono sfide significative legate alla produzione e allo smaltimento delle batterie."
    },
    {
      id: 2,
      titolo: "Energia rinnovabile: il futuro dell'Europa",
      autore: "Giulia Bianchi",
      data: "9 Novembre 2025",
      immagine: "https://generplus.it/wp-content/uploads/2021/06/energie-rinnovabili-europa.jpg",
      contenuto:
        "Le politiche europee stanno accelerando l’adozione di fonti rinnovabili. L’obiettivo è ridurre la dipendenza dai combustibili fossili e abbattere le emissioni di CO₂ entro il 2040."
    },
    {
      id: 3,
      titolo: "Batterie al litio e impatto ambientale",
      autore: "Luca Verdi",
      data: "8 Novembre 2025",
      immagine: "https://www.large-battery.com/wp-content/uploads/2025/06/5b2a4645902e4c40a1ac485e0a8b0712.jpg",
      contenuto:
        "L’estrazione del litio è un tema cruciale per comprendere la sostenibilità della mobilità elettrica. Nuove tecnologie promettono di ridurne l’impatto ambientale."
    }
  ]);


  const [nuovoTitolo, setNuovoTitolo] = useState("");

  const aggiungiArticolo = (e) => {
    e.preventDefault();

    if (nuovoTitolo.trim() === "") return;

    const nuovoArticolo = {
      id: articoli.length + 1,
      titolo: nuovoTitolo,
      autore: "Autore sconosciuto",
      data: new Date().toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }),
    };
    return (
      <>
        <div className="app-container">

          <h1>Articoli</h1>
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
            ))};
          </div>
        </div>
      </>
    )
  }

  export default App
