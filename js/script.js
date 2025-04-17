document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURAZIONE DATI ---
    console.log("Inizio script.");

    // !!! DATI CON ESTENSIONI IMMAGINE AGGIORNATE A .webp !!!
    const foldersData = [
        {
            name: "Arte che prende forma: La pasta di sale",
            id: "cartella1",
            photos: [
                // Estensioni cambiate in .webp
                { image: "images/cartella1/1.webp" }, { image: "images/cartella1/2.webp" },
                { image: "images/cartella1/3.webp" }, { image: "images/cartella1/4.webp" },
                { image: "images/cartella1/5.webp" }, { image: "images/cartella1/6.webp" },
                { image: "images/cartella1/6b.webp" }, { image: "images/cartella1/7.webp" },
                { image: "images/cartella1/8.webp" }, { image: "images/cartella1/9.webp" },
                { image: "images/cartella1/10.webp" }, { image: "images/cartella1/11.webp" },
                { image: "images/cartella1/12.webp" }, { image: "images/cartella1/13.webp" },
                { image: "images/cartella1/14.webp" }, { image: "images/cartella1/15.webp" },
                { image: "images/cartella1/16.webp" }, { image: "images/cartella1/17.webp" },
                { image: "images/cartella1/18.webp" }, { image: "images/cartella1/19.webp" },
                { image: "images/cartella1/20.webp" }, { image: "images/cartella1/21.webp" },
            ]
        },
        {
            name: "Arte che brilla: Creazioni sulla lavagna luminosa",
            id: "cartella2",
            photos: [
                 // Estensioni cambiate in .webp, audio rimane .mp3
                { image: "images/cartella2/01.webp",  audio: "audio/cartella2/01.mp3" },
                { image: "images/cartella2/02.webp",  audio: "audio/cartella2/02.mp3" },
                { image: "images/cartella2/03.webp",  audio: "audio/cartella2/03.mp3" },
                { image: "images/cartella2/04.webp",  audio: "audio/cartella2/04.mp3" },
                { image: "images/cartella2/05.webp",  audio: "audio/cartella2/05.mp3" },
                { image: "images/cartella2/06.webp",  audio: "audio/cartella2/06.mp3" },
                { image: "images/cartella2/07.webp",  audio: "audio/cartella2/07.mp3" },
                { image: "images/cartella2/08.webp",  audio: "audio/cartella2/08.mp3" },
                { image: "images/cartella2/09.webp",  audio: "audio/cartella2/09.mp3" },
                { image: "images/cartella2/10.webp",  audio: "audio/cartella2/10.mp3" },
                { image: "images/cartella2/11.webp",  audio: "audio/cartella2/11.mp3" },
                { image: "images/cartella2/12.webp",  audio: "audio/cartella2/12.mp3" },
                { image: "images/cartella2/13.webp",  audio: "audio/cartella2/13.mp3" },
                { image: "images/cartella2/14.webp",  audio: "audio/cartella2/14.mp3" },
                { image: "images/cartella2/15.webp",  audio: "audio/cartella2/15.mp3" },
                { image: "images/cartella2/16.webp",  audio: "audio/cartella2/16.mp3" },
            ]
        },
        {
            name: "Arte da toccare: Colori tra le dita",
            id: "cartella3",
            photos: [
                 // Estensioni cambiate in .webp, audio rimane .mp3
                { image: "images/cartella3/01.webp",     audio: "audio/cartella3/01.mp3" },
                { image: "images/cartella3/02.webp",     audio: "audio/cartella3/02.mp3" },
                { image: "images/cartella3/03.webp",     audio: "audio/cartella3/03.mp3" },
                { image: "images/cartella3/04.webp",     audio: "audio/cartella3/04.mp3" },
                { image: "images/cartella3/05.webp",     audio: "audio/cartella3/05.mp3" },
                { image: "images/cartella3/06.webp",     audio: "audio/cartella3/06.mp3" },
                { image: "images/cartella3/07.webp",     audio: "audio/cartella3/07.mp3" },
                { image: "images/cartella3/08.webp",     audio: "audio/cartella3/08.mp3" },
                { image: "images/cartella3/09.webp",     audio: "audio/cartella3/09.mp3" },
                { image: "images/cartella3/10.webp",     audio: "audio/cartella3/10.mp3" },
                { image: "images/cartella3/11.webp",     audio: "audio/cartella3/11.mp3" },
                { image: "images/cartella3/12.webp",     audio: "audio/cartella3/12.mp3" },
                { image: "images/cartella3/13.webp",     audio: "audio/cartella3/13.mp3" },
                { image: "images/cartella3/14.webp",     audio: "audio/cartella3/14.mp3" },
                { image: "images/cartella3/15.webp",     audio: "audio/cartella3/15.mp3" },
                { image: "images/cartella3/16.webp",     audio: "audio/cartella3/16.mp3" },
            ]
        },
         {
            name: "Arte in controluce: Costruiamo e raccontiamo con le ombre",
            id: "cartella4",
            photos: [
                 // Estensioni cambiate in .webp
                { image: "images/cartella4/1.webp"}, { image: "images/cartella4/2.webp"},
                { image: "images/cartella4/3.webp"}, { image: "images/cartella4/4.webp"},
                { image: "images/cartella4/5.webp"}, { image: "images/cartella4/6.webp"},
                { image: "images/cartella4/7.webp"}, { image: "images/cartella4/8.webp"},
                { image: "images/cartella4/9.webp"}, { image: "images/cartella4/10.webp"},
                { image: "images/cartella4/11.webp"}, { image: "images/cartella4/12.webp"},
                { image: "images/cartella4/13.webp"}, { image: "images/cartella4/14.webp"},
                { image: "images/cartella4/15.webp"}, { image: "images/cartella4/16.webp"},
                { image: "images/cartella4/17.webp"}, { image: "images/cartella4/18.webp"},
            ]
        },
         {
            name: "Arte dell' incontro: Colori in dialogo",
            id: "cartella5",
            photos: [
                  // Estensioni cambiate in .webp
                 { image: "images/cartella5/1.webp"}, { image: "images/cartella5/2.webp"},
                 { image: "images/cartella5/3.webp"}, { image: "images/cartella5/4.webp"},
                 { image: "images/cartella5/5.webp"}, { image: "images/cartella5/6.webp"},
                 { image: "images/cartella5/7.webp"},
            ]
        },
    ];
    // --- FINE DATI AGGIORNATI ---

    console.log("Dati 'foldersData' aggiornati a .webp.");

    // --- Selezione Elementi DOM ---
    console.log("Selezione elementi DOM...");
    const folderView = document.getElementById('folder-view');
    const galleryView = document.getElementById('gallery-view');
    const folderGrid = folderView?.querySelector('.folder-grid'); // Seleziona il contenitore delle cartelle
    const photoGrid = galleryView?.querySelector('.photo-grid');
    const galleryTitle = document.getElementById('gallery-title');
    const backButton = document.getElementById('back-button');
    const mainElement = document.querySelector('.content-area');
    const currentYearSpan = document.getElementById('current-year');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox?.querySelector('.lightbox-content');
    const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
    const lightboxAudio = lightbox?.querySelector('#lightbox-audio');
    const lightboxClose = lightbox?.querySelector('.lightbox-close');
    const lightboxPrev = lightbox?.querySelector('.lightbox-prev');
    const lightboxNext = lightbox?.querySelector('.lightbox-next');
    const lightboxContainer = lightbox?.querySelector('.lightbox-container');
    console.log("Selezione elementi completata.");

    // --- Variabili di Stato ---
    let activeView = folderView;
    let currentFolderIndex = -1;
    let currentPhotoIndex = -1;
    let currentPhotos = [];
    let folderItems = []; // Array per memorizzare gli elementi DOM delle cartelle

    // --- Verifica Elementi Essenziali ---
    console.log("Verifica elementi essenziali...");
    const essentialElements = { folderView, galleryView, folderGrid, photoGrid, galleryTitle, backButton, mainElement, currentYearSpan, lightbox, lightboxImg, lightboxCaption, lightboxAudio, lightboxClose, lightboxPrev, lightboxNext, lightboxContainer };
    for (const key in essentialElements) {
        if (!essentialElements[key]) {
            console.error(`Errore critico: Elemento HTML mancante: '${key}'.`);
            document.body.innerHTML = `<p style="color:red; padding:20px;">Errore: Elemento ${key} mancante.</p>`;
            return;
        }
    }
    console.log("Verifica elementi OK.");

    // --- Funzioni Principali ---

    function updateFooterYear() {
        try {
            currentYearSpan.textContent = new Date().getFullYear();
        } catch (e) {
            console.error("Errore in updateFooterYear:", e);
        }
    }

    function switchView(viewToShow) {
        if (!viewToShow || viewToShow === activeView) return;
        const oldView = activeView;
        activeView = viewToShow;
        if (oldView) oldView.classList.remove('active');
        viewToShow.classList.add('active');
    }

    function displayFolders() {
        console.log("Esecuzione displayFolders...");
        if (!folderGrid) {
            console.error("displayFolders: 'folderGrid' non trovato!");
            return;
        }
        try {
            folderGrid.innerHTML = ''; // Pulisce la griglia
            folderItems = []; // Resetta l'array degli elementi cartella
            console.log("Folder grid pulita.");

            if (!foldersData || foldersData.length === 0) {
                console.log("Nessun dato foldersData.");
                folderGrid.innerHTML = '<p class="loading-message">Nessun progetto.</p>';
                return;
            }

            console.log(`Creazione ${foldersData.length} cartelle...`);
            foldersData.forEach((folder, index) => {
                const div = document.createElement('div');
                div.className = 'folder-item';
                div.setAttribute('data-folder-index', index);
                div.setAttribute('role', 'button');
                div.tabIndex = 0; // Rende l'elemento focalizzabile

                const h3 = document.createElement('h3');
                h3.textContent = folder.name || `Cartella ${index + 1}`;
                div.appendChild(h3);

                // Gestore per click e tasto Invio/Spazio
                const handler = () => showGallery(index);
                div.addEventListener('click', handler);
                div.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault(); // Previene lo scroll della pagina con Spazio
                        handler();
                    }
                });

                folderGrid.appendChild(div);
                folderItems.push(div); // Aggiunge l'elemento all'array
            });
            console.log("Cartelle create.");

            // --- NUOVA LOGICA: Inizializza l'interazione Tilt ---
            initFolderTiltInteraction();

        } catch (error) {
            console.error("Errore displayFolders:", error);
            folderGrid.innerHTML = '<p class="loading-message" style="color:red;">Errore.</p>';
        }
    }

    function showGallery(folderIndex) {
        console.log(`Tentativo di mostrare galleria idx: ${folderIndex}`);
        try {
            const folder = foldersData[folderIndex];
            if (!folder) {
                console.error(`Dati cartella mancanti ${folderIndex}`);
                return;
            }
            currentFolderIndex = folderIndex;
            galleryTitle.textContent = folder.name || `Galleria ${folderIndex + 1}`;
            photoGrid.innerHTML = ''; // Pulisce la griglia foto
            currentPhotos = folder.photos || []; // Ottiene le foto della cartella selezionata

            console.log("Contenuto folder.photos:", folder.photos);
            console.log(`Numero foto trovate: ${currentPhotos.length}`);

            if (currentPhotos.length > 0) {
                console.log("Ciclo miniature...");
                currentPhotos.forEach((photoData, photoIndex) => {
                    if (!photoData || !photoData.image) {
                        console.warn(`Dati img mancanti ${photoIndex}/${folderIndex}`);
                        return; // Salta questa foto se mancano dati essenziali
                    }
                    // Crea contenitore per l'immagine
                    const cont = document.createElement('div');
                    cont.className = 'photo-item-container';
                    cont.setAttribute('role', 'button');
                    cont.tabIndex = 0; // Rende l'elemento focalizzabile

                    // Crea elemento immagine
                    const img = document.createElement('img');
                    img.className = 'photo-item';
                    img.src = photoData.image;
                    img.alt = photoData.caption || `Immagine ${photoIndex + 1} da ${folder.name || ''}`;
                    img.loading = 'lazy'; // Caricamento differito
                    // Gestione errore caricamento immagine
                    img.onerror = () => {
                        img.alt = `Errore caricamento: ${photoData.image}`;
                        cont.style.border = '2px dashed #ff6b6b'; // Segnala visivamente l'errore
                    };

                    // Gestore per aprire lightbox
                    const handler = () => openLightbox(photoIndex);
                    cont.addEventListener('click', handler);
                    cont.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handler();
                        }
                    });

                    cont.appendChild(img);
                    photoGrid.appendChild(cont);
                });
                console.log("Fine ciclo miniature.");
            } else {
                console.log("Nessuna foto, mostro messaggio.");
                photoGrid.innerHTML = '<p class="loading-message">Nessuna immagine in questa sezione.</p>';
            }

            switchView(galleryView); // Mostra la vista galleria
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolla all'inizio della pagina

        } catch (error) {
            console.error("Errore showGallery:", error);
            photoGrid.innerHTML = '<p class="loading-message" style="color:red;">Errore galleria.</p>';
        }
    }

    function updateLightboxContent(photoIndex) {
        if (photoIndex < 0 || photoIndex >= currentPhotos.length) return; // Indice non valido

        currentPhotoIndex = photoIndex;
        const photoData = currentPhotos[currentPhotoIndex];

        console.log("Applicando Lbox idx:", currentPhotoIndex, "Src img:", photoData.image);

        if (!lightboxImg) {
            console.error("updateLightboxContent: 'lightboxImg' non trovato!");
            return;
        }

        // Resetta stile animazione (se presente)
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'none';
        // Potresti aggiungere qui classi per animazioni slide se le implementi

        lightboxImg.src = photoData.image;
        lightboxImg.alt = photoData.caption || `Immagine ${currentPhotoIndex + 1}`;

        if (lightboxCaption) lightboxCaption.textContent = photoData.caption || '';

        // Gestione Audio
        if (lightboxAudio) {
            lightboxAudio.pause();
            lightboxAudio.currentTime = 0;
            if (photoData.audio) {
                console.log('Carico audio:', photoData.audio);
                lightboxAudio.src = photoData.audio;
                lightboxAudio.style.display = 'block'; // Mostra i controlli audio
                // Tenta l'autoplay (potrebbe essere bloccato dal browser)
                setTimeout(() => {
                    const playPromise = lightboxAudio.play();
                    if (playPromise !== undefined) {
                        playPromise.then(_ => console.log("Autoplay audio OK"))
                                   .catch(error => console.warn("Autoplay audio bloccato", error));
                    }
                }, 50); // Piccolo ritardo per assicurarsi che l'elemento sia pronto
            } else {
                lightboxAudio.src = ''; // Rimuove la sorgente audio
                lightboxAudio.style.display = 'none'; // Nasconde i controlli audio
                console.log('Nessun audio per questa immagine.');
            }
        }

        // Aggiorna stato pulsanti navigazione
        if (lightboxPrev) lightboxPrev.classList.toggle('disabled', currentPhotoIndex === 0);
        if (lightboxNext) lightboxNext.classList.toggle('disabled', currentPhotoIndex === currentPhotos.length - 1);
    }

    function showPrevImage() {
        if (currentPhotoIndex > 0) {
            updateLightboxContent(currentPhotoIndex - 1);
        }
    }

    function showNextImage() {
        if (currentPhotoIndex < currentPhotos.length - 1) {
            updateLightboxContent(currentPhotoIndex + 1);
        }
    }

    function openLightbox(photoIndex) {
        if (!lightbox.classList.contains('hidden') || !currentPhotos || currentPhotos.length === 0) return; // Già aperto o nessuna foto
        console.log(`Opening lightbox idx: ${photoIndex}`);
        updateLightboxContent(photoIndex);
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Blocca scroll pagina
        if (lightboxClose) lightboxClose.focus(); // Focus sul pulsante chiudi per accessibilità
    }

    function closeLightbox() {
        if (lightbox.classList.contains('hidden')) return; // Già chiuso
        console.log("Closing lightbox...");
        if (lightboxAudio) {
            lightboxAudio.pause();
            lightboxAudio.src = ''; // Rimuove audio
        }
        lightbox.classList.add('hidden');
        document.body.style.overflow = ''; // Sblocca scroll pagina

        // Tenta di ridare il focus all'elemento che ha aperto la lightbox
        try {
            const triggerElement = photoGrid?.querySelector(`.photo-item-container:nth-child(${currentPhotoIndex + 1})`);
            if (triggerElement) triggerElement.focus();
        } catch (e) {
            console.warn("Impossibile fare focus sul trigger della lightbox", e);
        }
    }

    // --- NUOVA FUNZIONE: Inizializza Interazione Tilt Cartelle ---
    function initFolderTiltInteraction() {
        if (!folderGrid || folderItems.length === 0) {
            console.warn("Impossibile inizializzare tilt: folderGrid o folderItems mancanti.");
            return;
        }

        const isTouchEventSupported = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isDeviceOrientationSupported = 'DeviceOrientationEvent' in window;

        if (isDeviceOrientationSupported && isTouchEventSupported) {
            // Usa giroscopio su dispositivi touch che lo supportano
            console.log("Inizializzazione tilt con DeviceOrientation");
            window.addEventListener('deviceorientation', handleDeviceOrientation);
        } else {
            // Usa mouse su desktop o dispositivi senza giroscopio/touch
            console.log("Inizializzazione tilt con MouseMove");
            folderGrid.addEventListener('mousemove', handleMouseMove);
            folderGrid.addEventListener('mouseleave', handleMouseLeave);
        }
    }

    // --- NUOVA FUNZIONE: Gestisce MouseMove per Tilt ---
    function handleMouseMove(e) {
        const gridRect = folderGrid.getBoundingClientRect();
        // Calcola la posizione del mouse relativa al centro della griglia
        const mouseX = e.clientX - gridRect.left - gridRect.width / 2;
        const mouseY = e.clientY - gridRect.top - gridRect.height / 2;

        // Fattore di intensità dell'inclinazione (puoi regolarlo)
        const tiltFactor = 0.04;

        folderItems.forEach(item => {
            // Calcola rotazione basata sulla posizione del mouse
            // Inverti Y per rotazione X corretta (su = inclina indietro)
            const rotateX = -mouseY * tiltFactor;
            const rotateY = mouseX * tiltFactor;

            // Applica la trasformazione
            item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    }

    // --- NUOVA FUNZIONE: Resetta Tilt quando Mouse esce dalla Griglia ---
    function handleMouseLeave() {
        folderItems.forEach(item => {
            // Rimuove la trasformazione inline, tornando allo stato CSS base (con transizione)
            item.style.transform = '';
        });
    }

    // --- NUOVA FUNZIONE: Gestisce DeviceOrientation per Tilt ---
    function handleDeviceOrientation(event) {
        // event.beta: Inclinazione fronte-retro (-180 to 180)
        // event.gamma: Inclinazione sinistra-destra (-90 to 90)

        // Limita gli angoli per evitare rotazioni estreme
        let beta = event.beta;  // Rotazione attorno all'asse X
        let gamma = event.gamma; // Rotazione attorno all'asse Y

        // Normalizza/Limita i valori (puoi sperimentare con questi limiti)
        const maxTilt = 15; // Gradi massimi di inclinazione
        beta = Math.max(-maxTilt, Math.min(maxTilt, beta));
        gamma = Math.max(-maxTilt, Math.min(maxTilt, gamma));

        folderItems.forEach(item => {
            // Applica la trasformazione (beta -> rotateX, gamma -> rotateY)
            // Potrebbe essere necessario aggiustare i segni a seconda dell'effetto desiderato
            item.style.transform = `rotateX(${beta}deg) rotateY(${gamma}deg)`;
        });
    }


    // --- Impostazione Event Listener (Esistenti) ---
    console.log("Impostazione event listeners esistenti...");
    try {
        backButton.addEventListener('click', () => {
            closeLightbox(); // Chiudi lightbox se aperta
            switchView(folderView); // Torna alla vista cartelle
        });

        lightboxClose.addEventListener('click', closeLightbox);

        // Chiudi lightbox cliccando sullo sfondo (overlay)
        lightbox.addEventListener('click', (e) => {
            // Verifica se il click è direttamente sull'overlay e non su un suo figlio
            const clickedOnControl = e.target.closest('.lightbox-container, .lightbox-nav, .lightbox-close');
            if (!clickedOnControl && e.target === lightbox) {
                 closeLightbox();
            }
        });

        lightboxPrev.addEventListener('click', showPrevImage);
        lightboxNext.addEventListener('click', showNextImage);

        // Gestione tastiera per lightbox
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('hidden')) { // Se la lightbox è visibile
                if (e.key === 'Escape') closeLightbox();
                else if (e.key === 'ArrowLeft') showPrevImage();
                else if (e.key === 'ArrowRight') showNextImage();
            }
        });

        // Gestione errori e stati audio
        if (lightboxAudio) {
            lightboxAudio.onerror = (e) => {
                console.error('--- ERRORE AUDIO ---', lightboxAudio.src, e);
                lightboxAudio.style.display = 'none'; // Nasconde se c'è errore
            };
            lightboxAudio.onplay = () => console.log("Audio PLAY:", lightboxAudio.src);
            lightboxAudio.onpause = () => {
                // Logga pausa solo se non è alla fine e non è all'inizio (evita log a fine traccia)
                if (!lightboxAudio.ended && lightboxAudio.currentTime > 0) {
                    console.log("Audio PAUSE:", lightboxAudio.src);
                }
            };
            lightboxAudio.onended = () => console.log("Audio END:", lightboxAudio.src);
        }

        // Gestione errore immagine lightbox
        if (lightboxImg) {
            lightboxImg.onerror = () => {
                console.error("--- ERRORE IMG LIGHTBOX ---", lightboxImg.src);
                if (lightboxCaption) lightboxCaption.textContent = "Errore caricamento immagine.";
                lightboxImg.alt = "Errore caricamento immagine";
                // Potresti mostrare un'immagine placeholder qui
            };
        }
        console.log("Event listeners esistenti impostati.");
    } catch (error) {
        console.error("Errore impostazione listeners:", error);
    }

    // --- Inizializzazione Pagina ---
    console.log("Inizializzazione pagina...");
    try {
        updateFooterYear();
        displayFolders(); // Questa funzione ora chiama anche initFolderTiltInteraction
        console.log("Inizializzazione completata.");
    } catch (error) {
        console.error("Errore durante l'inizializzazione:", error);
    }

}); // Fine wrapper DOMContentLoaded

