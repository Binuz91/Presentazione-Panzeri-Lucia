// Attende che il contenuto HTML sia completamente caricato e analizzato
document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURAZIONE DATI PRINCIPALI ---
    // MODIFICA QUESTA SEZIONE CON I TUOI DATI!
    // Assicurati che i percorsi delle immagini (images/...) e degli audio (audio/...)
    // corrispondano ESATTAMENTE alla struttura delle tue cartelle e ai nomi dei file.
    // Usa 'null' per il campo 'audio' se una foto non ha un suono associato.
    // -----------------------------------------
    const foldersData = [
        {
            name: "Arte che prende forma: La pasta di sale", // Nome visualizzato per la cartella
            id: "cartella1",           // Identificativo univoco (usato per i percorsi)
            photos: [ // Array di oggetti, uno per ogni foto/elemento
                { image: "images/cartella1/1.jpg", },
                { image: "images/cartella1/2.jpg", },
                { image: "images/cartella1/3.jpg", },
                { image: "images/cartella1/4.jpg", }, 
                { image: "images/cartella1/5.jpg", },
                { image: "images/cartella1/6.jpg", },
                { image: "images/cartella1/6b.jpg", },
                { image: "images/cartella1/7.jpg", },
                { image: "images/cartella1/8.jpg", },
                { image: "images/cartella1/9.jpg", },
                { image: "images/cartella1/10.jpg", },
                { image: "images/cartella1/11.jpg", },
                { image: "images/cartella1/12.jpg", },
                { image: "images/cartella1/13.jpg", },
                { image: "images/cartella1/14.jpg", },
                { image: "images/cartella1/15.jpg", },
                { image: "images/cartella1/16.jpg", },
                { image: "images/cartella1/17.jpg", },
                { image: "images/cartella1/18.jpg", },
                { image: "images/cartella1/19.jpg", },
                { image: "images/cartella1/20.jpg", },
                { image: "images/cartella1/21.jpg", },
            ]
        },
        {
            name: "Arte che brilla: Creazioni sulla lavagna luminosa",
            id: "cartella2",
            photos: [
                { image: "images/cartella2/01.jpg",  audio: "audio/cartella2/01.m4a" },
                { image: "images/cartella2/02.jpg",  audio: "audio/cartella2/02.m4a" },
                { image: "images/cartella2/03.jpg",  audio: "audio/cartella2/03.m4a" },
                { image: "images/cartella2/04.jpg",  audio: "audio/cartella2/04.m4a" },
                { image: "images/cartella2/05.jpg",  audio: "audio/cartella2/05.m4a" },
                { image: "images/cartella2/06.jpg",  audio: "audio/cartella2/06.m4a" },
                { image: "images/cartella2/07.jpg",  audio: "audio/cartella2/07.m4a" },
                { image: "images/cartella2/08.jpg",  audio: "audio/cartella2/08.m4a" },
                { image: "images/cartella2/09.jpg",  audio: "audio/cartella2/09.m4a" },
                { image: "images/cartella2/10.jpg",  audio: "audio/cartella2/10.m4a" },
                { image: "images/cartella2/11.jpg",  audio: "audio/cartella2/11.m4a" },
                { image: "images/cartella2/12.jpg",  audio: "audio/cartella2/12.m4a" },
                { image: "images/cartella2/13.jpg",  audio: "audio/cartella2/13.m4a" },
                { image: "images/cartella2/14.jpg",  audio: "audio/cartella2/14.m4a" },
                { image: "images/cartella2/15.jpg",  audio: "audio/cartella2/15.m4a" },
                { image: "images/cartella2/16.jpg",  audio: "audio/cartella2/16.m4a" },

            ]
        },
        {
            name: "Arte da toccare: Colori tra le dita",
            id: "cartella3",
            photos: [
                { image: "images/cartella3/01.jpg",     audio: "audio/cartella3/01.mp3" },
                { image: "images/cartella3/02.jpg",     audio: "audio/cartella3/02.mp3" },
                { image: "images/cartella3/03.jpg",     audio: "audio/cartella3/03.mp3" },
                { image: "images/cartella3/04.jpg",     audio: "audio/cartella3/04.mp3" },
                { image: "images/cartella3/05.jpg",     audio: "audio/cartella3/05.mp3" },
                { image: "images/cartella3/06.jpg",     audio: "audio/cartella3/06.mp3" },
                { image: "images/cartella3/07.jpg",     audio: "audio/cartella3/07.mp3" },
                { image: "images/cartella3/08.jpg",     audio: "audio/cartella3/08.mp3" },
                { image: "images/cartella3/09.jpg",     audio: "audio/cartella3/09.mp3" },
                { image: "images/cartella3/10.jpg",     audio: "audio/cartella3/10.mp3" },
                { image: "images/cartella3/11.jpg",     audio: "audio/cartella3/11.mp3" },
                { image: "images/cartella3/12.jpg",     audio: "audio/cartella3/12.mp3" },
                { image: "images/cartella3/13.jpg",     audio: "audio/cartella3/13.mp3" },
                { image: "images/cartella3/14.jpg",     audio: "audio/cartella3/14.mp3" },
                { image: "images/cartella3/15.jpg",     audio: "audio/cartella3/15.mp3" },
                { image: "images/cartella3/16.jpg",     audio: "audio/cartella3/16.mp3" },
            ]
        },
         {
            name: "Arte in controluce: Costruiamo e raccontiamo con le ombre",
            id: "cartella4",
            photos: [
                { image: "images/cartella4/1.jpg"},
                { image: "images/cartella4/2.jpg"},
                { image: "images/cartella4/3.jpg"},
                { image: "images/cartella4/4.jpg"},
                { image: "images/cartella4/5.jpg"},
                { image: "images/cartella4/6.jpg"},
                { image: "images/cartella4/7.jpg"},
                { image: "images/cartella4/8.jpg"},
                { image: "images/cartella4/9.jpg"},
                { image: "images/cartella4/10.jpg"},
                { image: "images/cartella4/11.jpg"},
                { image: "images/cartella4/12.jpg"},
                { image: "images/cartella4/13.jpg"},
                { image: "images/cartella4/14.jpg"},
                { image: "images/cartella4/15.jpg"},
                { image: "images/cartella4/16.jpg"},
                { image: "images/cartella4/17.jpg"},
                { image: "images/cartella4/18.jpg"},
            ]
                
        },
         {
            name: "Arte dell' incontro: Colori in dialogo",
            id: "cartella5",
            photos: [
                 // Usa screenshot o icone per file non immagine, se vuoi visualizzarli
                 { image: "images/cartella5/1.jpg"},
                 { image: "images/cartella5/2.jpg"},
                 { image: "images/cartella5/3.jpg"},
                 { image: "images/cartella5/4.jpg"},
                 { image: "images/cartella5/5.jpg"},
                 { image: "images/cartella5/6.jpg"},
                 { image: "images/cartella5/7.jpg"},
                 
            ]
        },
        // Aggiungi qui altre sezioni/cartelle del tuo progetto
        // {
        //   name: "Wireframes Interattivi",
        //   id: "cartella6",
        //   photos: [
        //      { image: "images/cartella6/wireframe_login.png", audio: "audio/cartella6/audio_login.mp3" },
        //      { image: "images/cartella6/wireframe_dashboard.png", audio: "audio/cartella6/audio_dashboard.mp3" }
        //   ]
        // }
    ];
    // --- FINE CONFIGURAZIONE DATI ---


    // --- Selezione Elementi del DOM ---
    const folderView = document.getElementById('folder-view');
    const galleryView = document.getElementById('gallery-view');
    const folderGrid = folderView?.querySelector('.folder-grid'); // Usa ? per sicurezza se l'ID non esiste
    const photoGrid = galleryView?.querySelector('.photo-grid');
    const galleryTitle = document.getElementById('gallery-title');
    const backButton = document.getElementById('back-button');
    const mainElement = document.querySelector('.content-area'); // Contenitore principale per calcolo altezza

    // Elementi Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox?.querySelector('.lightbox-content');
    const lightboxClose = lightbox?.querySelector('.lightbox-close');

    // --- Variabili di Stato Globale ---
    let activeView = folderView; // Traccia la vista attualmente visibile
    let currentAudio = null;    // Traccia l'oggetto Audio attualmente in riproduzione

    // --- Verifica Elementi Essenziali ---
    // Se elementi fondamentali non sono trovati, ferma lo script per evitare errori
    if (!folderView || !galleryView || !folderGrid || !photoGrid || !galleryTitle || !backButton || !mainElement || !lightbox || !lightboxImg || !lightboxClose) {
        console.error("Errore: Uno o più elementi HTML essenziali non sono stati trovati. Controlla gli ID e le classi nel tuo file index.html.");
        return; // Interrompe l'esecuzione dello script
    }

    // --- Funzioni Principali ---

    /**
     * Cambia la vista attiva (cartelle o galleria) con animazione e aggiusta l'altezza.
     * @param {HTMLElement} viewToShow L'elemento della sezione da mostrare.
     */
    function switchView(viewToShow) {
        if (!viewToShow || viewToShow === activeView) return; // Non fare nulla se non valida o già attiva

        const oldView = activeView;
        activeView = viewToShow;

        // Nascondi la vecchia vista (se esiste)
        if (oldView) {
            oldView.classList.remove('active');
        }

        // Mostra la nuova vista
        viewToShow.classList.add('active');

        // Calcola e imposta l'altezza minima del contenitore principale
        // per accomodare il contenuto della nuova vista dopo un breve ritardo.
        const viewContent = viewToShow.querySelector('.view-content');
        if (viewContent) {
            setTimeout(() => {
                const mainPaddingTop = parseFloat(window.getComputedStyle(mainElement).paddingTop) || 0;
                mainElement.style.minHeight = `${viewContent.scrollHeight + mainPaddingTop + 40}px`; // Aggiunge spazio extra
            }, 60); // Leggero ritardo per permettere il rendering e l'inizio della transizione CSS
        }
    }

    /**
     * Popola la griglia delle cartelle basandosi sui dati in foldersData.
     */
    function displayFolders() {
        folderGrid.innerHTML = ''; // Pulisce la griglia da elementi precedenti
        foldersData.forEach((folder, index) => {
            const folderDiv = document.createElement('div');
            folderDiv.classList.add('folder-item');
            folderDiv.setAttribute('data-folder-index', index); // Salva l'indice per riferimento futuro

            const folderName = document.createElement('h3');
            folderName.textContent = folder.name;
            folderDiv.appendChild(folderName);

            // Aggiunge l'evento click per aprire la galleria corrispondente
            folderDiv.addEventListener('click', () => {
                // Piccolo ritardo per migliorare la percezione dell'interazione prima del cambio vista
                setTimeout(() => showGallery(index), 100);
            });
            folderGrid.appendChild(folderDiv);
        });

        // Imposta l'altezza iniziale del contenitore main
        const initialViewContent = folderView.querySelector('.view-content');
         if(initialViewContent) {
              setTimeout(() => {
                 const mainPaddingTop = parseFloat(window.getComputedStyle(mainElement).paddingTop) || 0;
                 mainElement.style.minHeight = `${initialViewContent.scrollHeight + mainPaddingTop + 40}px`;
             }, 50);
         }
    }

    /**
     * Mostra la galleria di immagini per una specifica cartella.
     * @param {number} folderIndex L'indice della cartella in foldersData.
     */
    function showGallery(folderIndex) {
        const folder = foldersData[folderIndex];
        if (!folder) {
            console.error(`Cartella con indice ${folderIndex} non trovata.`);
            return;
        }

        galleryTitle.textContent = folder.name; // Imposta il titolo della galleria
        photoGrid.innerHTML = ''; // Pulisce la griglia da foto precedenti

        // Controlla se ci sono foto nella cartella
        if (folder.photos && folder.photos.length > 0) {
            folder.photos.forEach(photoData => { // photoData è l'oggetto {image, audio}
                if (!photoData || !photoData.image) return; // Salta se l'oggetto o l'immagine mancano

                const imgContainer = document.createElement('div');
                imgContainer.classList.add('photo-item-container');

                const img = document.createElement('img');
                img.classList.add('photo-item');
                img.src = photoData.image;
                img.alt = `Foto: ${folder.name} - ${photoData.image.split('/').pop()}`; // Alt text descrittivo
                img.loading = 'lazy'; // Abilita lazy loading per performance

                // Gestore per immagini non caricate
                img.onerror = () => {
                    img.alt = `Immagine non caricata: ${photoData.image}`;
                    img.style.border = '2px dashed #ff6b6b';
                    img.style.backgroundColor = '#553c3c';
                    // Qui potresti anche sostituire l'src con un'immagine placeholder
                    // img.src = 'images/placeholder_error.png';
                };

                // Aggiunge l'evento click per aprire la lightbox
                img.addEventListener('click', () => {
                    openLightbox(photoData.image, photoData.audio); // Passa sia immagine che audio
                });

                imgContainer.appendChild(img);
                photoGrid.appendChild(imgContainer);
            });
        } else {
            // Messaggio se la cartella è vuota
            const emptyMsg = document.createElement('p');
            emptyMsg.textContent = "Nessuna immagine o elemento in questa sezione.";
            emptyMsg.style.gridColumn = '1 / -1'; // Occupa tutta la riga della griglia
            emptyMsg.style.textAlign = 'center';
            emptyMsg.style.padding = '3rem 0';
            emptyMsg.style.color = 'var(--text-secondary)';
            photoGrid.appendChild(emptyMsg);
        }

        switchView(galleryView); // Attiva la vista della galleria
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Porta l'utente in cima alla pagina
    }

    /**
     * Apre la lightbox mostrando l'immagine specificata e riproducendo l'audio associato (se esiste).
     * @param {string} imageSrc Percorso dell'immagine da mostrare.
     * @param {string|null} audioSrc Percorso dell'audio da riprodurre (o null).
     */
    function openLightbox(imageSrc, audioSrc) {
        // Ferma e resetta l'audio precedente prima di aprirne uno nuovo
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }

        // Se è fornito un percorso audio, crea e avvia il nuovo oggetto Audio
        if (audioSrc) {
            currentAudio = new Audio(audioSrc);
            currentAudio.play()
                .catch(error => { // Gestisce l'errore se play() viene rifiutato (es. autoplay bloccato)
                    console.error("Errore nella riproduzione audio (play() fallito):", audioSrc, error);
                    currentAudio = null; // Resetta in caso di errore
                });

            // Gestisce l'errore se il file audio stesso non può essere caricato
            currentAudio.onerror = (e) => {
                console.error("Errore nel caricamento del file audio:", audioSrc, e);
                currentAudio = null;
            };
        }

        // Imposta l'immagine nella lightbox e la rende visibile
        lightboxImg.src = imageSrc;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Impedisce lo scrolling della pagina sottostante
    }

    /**
     * Chiude la lightbox e ferma l'audio eventualmente in riproduzione.
     */
    function closeLightbox() {
        // Ferma e resetta l'audio corrente
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }

        // Nasconde la lightbox
        lightbox.classList.add('hidden');
        document.body.style.overflow = ''; // Riabilita lo scrolling della pagina
    }


    // --- Impostazione Event Listener ---

    // Bottone "Indietro" nella galleria
    backButton.addEventListener('click', () => {
        switchView(folderView); // Torna alla vista delle cartelle
    });

    // Chiusura della Lightbox: Bottone 'X'
    lightboxClose.addEventListener('click', closeLightbox);

    // Chiusura della Lightbox: Click sullo sfondo scuro (overlay)
    lightbox.addEventListener('click', (e) => {
        // Chiude solo se il click è direttamente sull'overlay e non sui suoi figli (immagine, bottone)
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Chiusura della Lightbox: Tasto 'Escape' sulla tastiera
    document.addEventListener('keydown', (e) => {
        // Controlla se il tasto premuto è Escape E se la lightbox è attualmente visibile
        if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
            closeLightbox();
        }
    });


    // --- Inizializzazione ---
    displayFolders(); // Popola le cartelle all'avvio dello script

}); // Fine wrapper DOMContentLoaded