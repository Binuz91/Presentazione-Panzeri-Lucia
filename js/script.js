document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURAZIONE DATI ---
    console.log("Inizio script.");
    const foldersData = [
        // !!! DATI RIPRISTINATI DALLA TUA VERSIONE ORIGINALE !!!
        // Verifica attentamente questi percorsi!
        {
            name: "Arte che prende forma: La pasta di sale", id: "cartella1", photos: [ { image: "images/cartella1/1.jpg" }, { image: "images/cartella1/2.jpg" }, { image: "images/cartella1/3.jpg" }, { image: "images/cartella1/4.jpg" }, { image: "images/cartella1/5.jpg" }, { image: "images/cartella1/6.jpg" }, { image: "images/cartella1/6b.jpg" }, { image: "images/cartella1/7.jpg" }, { image: "images/cartella1/8.jpg" }, { image: "images/cartella1/9.jpg" }, { image: "images/cartella1/10.jpg" }, { image: "images/cartella1/11.jpg" }, { image: "images/cartella1/12.jpg" }, { image: "images/cartella1/13.jpg" }, { image: "images/cartella1/14.jpg" }, { image: "images/cartella1/15.jpg" }, { image: "images/cartella1/16.jpg" }, { image: "images/cartella1/17.jpg" }, { image: "images/cartella1/18.jpg" }, { image: "images/cartella1/19.jpg" }, { image: "images/cartella1/20.jpg" }, { image: "images/cartella1/21.jpg" }, ]
        },
        {
            name: "Arte che brilla: Creazioni sulla lavagna luminosa", id: "cartella2", photos: [ { image: "images/cartella2/01.jpg",  audio: "audio/cartella2/01.mp3" }, { image: "images/cartella2/02.jpg",  audio: "audio/cartella2/02.mp3" }, { image: "images/cartella2/03.jpg",  audio: "audio/cartella2/03.mp3" }, { image: "images/cartella2/04.jpg",  audio: "audio/cartella2/04.mp3" }, { image: "images/cartella2/05.jpg",  audio: "audio/cartella2/05.mp3" }, { image: "images/cartella2/06.jpg",  audio: "audio/cartella2/06.mp3" }, { image: "images/cartella2/07.jpg",  audio: "audio/cartella2/07.mp3" }, { image: "images/cartella2/08.jpg",  audio: "audio/cartella2/08.mp3" }, { image: "images/cartella2/09.jpg",  audio: "audio/cartella2/09.mp3" }, { image: "images/cartella2/10.jpg",  audio: "audio/cartella2/10.mp3" }, { image: "images/cartella2/11.jpg",  audio: "audio/cartella2/11.mp3" }, { image: "images/cartella2/12.jpg",  audio: "audio/cartella2/12.mp3" }, { image: "images/cartella2/13.jpg",  audio: "audio/cartella2/13.mp3" }, { image: "images/cartella2/14.jpg",  audio: "audio/cartella2/14.mp3" }, { image: "images/cartella2/15.jpg",  audio: "audio/cartella2/15.mp3" }, { image: "images/cartella2/16.jpg",  audio: "audio/cartella2/16.mp3" }, ]
        },
        {
            name: "Arte da toccare: Colori tra le dita", id: "cartella3", photos: [ { image: "images/cartella3/01.jpg",     audio: "audio/cartella3/01.mp3" }, { image: "images/cartella3/02.jpg",     audio: "audio/cartella3/02.mp3" }, { image: "images/cartella3/03.jpg",     audio: "audio/cartella3/03.mp3" }, { image: "images/cartella3/04.jpg",     audio: "audio/cartella3/04.mp3" }, { image: "images/cartella3/05.jpg",     audio: "audio/cartella3/05.mp3" }, { image: "images/cartella3/06.jpg",     audio: "audio/cartella3/06.mp3" }, { image: "images/cartella3/07.jpg",     audio: "audio/cartella3/07.mp3" }, { image: "images/cartella3/08.jpg",     audio: "audio/cartella3/08.mp3" }, { image: "images/cartella3/09.jpg",     audio: "audio/cartella3/09.mp3" }, { image: "images/cartella3/10.jpg",     audio: "audio/cartella3/10.mp3" }, { image: "images/cartella3/11.jpg",     audio: "audio/cartella3/11.mp3" }, { image: "images/cartella3/12.jpg",     audio: "audio/cartella3/12.mp3" }, { image: "images/cartella3/13.jpg",     audio: "audio/cartella3/13.mp3" }, { image: "images/cartella3/14.jpg",     audio: "audio/cartella3/14.mp3" }, { image: "images/cartella3/15.jpg",     audio: "audio/cartella3/15.mp3" }, { image: "images/cartella3/16.jpg",     audio: "audio/cartella3/16.mp3" }, ]
        },
         {
            name: "Arte in controluce: Costruiamo e raccontiamo con le ombre", id: "cartella4", photos: [ { image: "images/cartella4/1.jpg"}, { image: "images/cartella4/2.jpg"}, { image: "images/cartella4/3.jpg"}, { image: "images/cartella4/4.jpg"}, { image: "images/cartella4/5.jpg"}, { image: "images/cartella4/6.jpg"}, { image: "images/cartella4/7.jpg"}, { image: "images/cartella4/8.jpg"}, { image: "images/cartella4/9.jpg"}, { image: "images/cartella4/10.jpg"}, { image: "images/cartella4/11.jpg"}, { image: "images/cartella4/12.jpg"}, { image: "images/cartella4/13.jpg"}, { image: "images/cartella4/14.jpg"}, { image: "images/cartella4/15.jpg"}, { image: "images/cartella4/16.jpg"}, { image: "images/cartella4/17.jpg"}, { image: "images/cartella4/18.jpg"}, ]
        },
         {
            name: "Arte dell' incontro: Colori in dialogo", id: "cartella5", photos: [ { image: "images/cartella5/1.jpg"}, { image: "images/cartella5/2.jpg"}, { image: "images/cartella5/3.jpg"}, { image: "images/cartella5/4.jpg"}, { image: "images/cartella5/5.jpg"}, { image: "images/cartella5/6.jpg"}, { image: "images/cartella5/7.jpg"}, ]
        },
    ];
    console.log("Dati 'foldersData' definiti.");

    // --- Selezione Elementi DOM --- (Invariato)
    console.log("Selezione elementi DOM...");
    const folderView = document.getElementById('folder-view'); const galleryView = document.getElementById('gallery-view'); const folderGrid = folderView?.querySelector('.folder-grid'); const photoGrid = galleryView?.querySelector('.photo-grid'); const galleryTitle = document.getElementById('gallery-title'); const backButton = document.getElementById('back-button'); const mainElement = document.querySelector('.content-area'); const currentYearSpan = document.getElementById('current-year'); const lightbox = document.getElementById('lightbox'); const lightboxImg = lightbox?.querySelector('.lightbox-content'); const lightboxCaption = lightbox?.querySelector('.lightbox-caption'); const lightboxAudio = lightbox?.querySelector('#lightbox-audio'); const lightboxClose = lightbox?.querySelector('.lightbox-close'); const lightboxPrev = lightbox?.querySelector('.lightbox-prev'); const lightboxNext = lightbox?.querySelector('.lightbox-next'); const lightboxContainer = lightbox?.querySelector('.lightbox-container');
    console.log("Selezione elementi completata.");

    // --- Variabili di Stato --- (Semplificate: isAnimating rimosso)
    let activeView = folderView;
    let currentFolderIndex = -1;
    let currentPhotoIndex = -1;
    let currentPhotos = [];

    // --- Verifica Elementi Essenziali --- (Invariato)
    console.log("Verifica elementi essenziali...");
    const essentialElements = { folderView, galleryView, folderGrid, photoGrid, galleryTitle, backButton, mainElement, currentYearSpan, lightbox, lightboxImg, lightboxCaption, lightboxAudio, lightboxClose, lightboxPrev, lightboxNext, lightboxContainer };
    for (const key in essentialElements) { if (!essentialElements[key]) { console.error(`Errore critico: Elemento HTML mancante: '${key}'.`); document.body.innerHTML = `<p style="color:red; padding:20px;">Errore: Elemento ${key} mancante.</p>`; return; } }
    console.log("Verifica elementi OK.");

    // --- Funzioni Principali ---

    function updateFooterYear() { try { currentYearSpan.textContent = new Date().getFullYear(); } catch (e) { console.error("Errore in updateFooterYear:", e); } }

    /** Cambia la vista attiva (transizione CSS semplice). */
    function switchView(viewToShow) {
        if (!viewToShow || viewToShow === activeView) return;
        const oldView = activeView; activeView = viewToShow;
        if (oldView) oldView.classList.remove('active');
        viewToShow.classList.add('active');
        const viewContent = viewToShow.querySelector('.view-content');
        if (viewContent) { setTimeout(() => { const pad = parseFloat(window.getComputedStyle(mainElement).paddingTop) || 0; mainElement.style.minHeight = `${viewContent.scrollHeight + pad + 60}px`; }, 50); } else { mainElement.style.minHeight = 'auto'; }
    }

    /** Popola la griglia delle cartelle */
    function displayFolders() {
        console.log("Esecuzione displayFolders..."); if (!folderGrid) { console.error("displayFolders: 'folderGrid' non trovato!"); return; } try { folderGrid.innerHTML = ''; console.log("Folder grid pulita."); if (!foldersData || foldersData.length === 0) { console.log("Nessun dato foldersData."); folderGrid.innerHTML = '<p class="loading-message">Nessun progetto.</p>'; return; } console.log(`Creazione ${foldersData.length} cartelle...`); foldersData.forEach((folder, index) => { const div = document.createElement('div'); div.className = 'folder-item'; div.setAttribute('data-folder-index', index); div.setAttribute('role', 'button'); div.tabIndex = 0; const h3 = document.createElement('h3'); h3.textContent = folder.name || `Cartella ${index + 1}`; div.appendChild(h3); const handler = () => showGallery(index); div.addEventListener('click', handler); div.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }}); folderGrid.appendChild(div); }); console.log("Cartelle create."); } catch (error) { console.error("Errore displayFolders:", error); folderGrid.innerHTML = '<p class="loading-message" style="color:red;">Errore.</p>'; }
    }

    /** Mostra la galleria per una cartella specifica. */
    function showGallery(folderIndex) {
         try {
             const folder = foldersData[folderIndex]; if (!folder) { console.error(`Dati cartella mancanti ${folderIndex}`); return; }
             currentFolderIndex = folderIndex; galleryTitle.textContent = folder.name || `Galleria ${folderIndex + 1}`;
             photoGrid.innerHTML = ''; currentPhotos = folder.photos || [];
             if (currentPhotos.length > 0) { currentPhotos.forEach((photoData, photoIndex) => { /* ... crea miniature ... */
                  if(!photoData||!photoData.image){console.warn(`Dati img mancanti ${photoIndex}/${folderIndex}`); return;} const cont=document.createElement('div'); cont.className='photo-item-container'; cont.setAttribute('role','button'); cont.tabIndex=0; const img=document.createElement('img'); img.className='photo-item'; img.src=photoData.image; img.alt=photoData.caption||`Immagine ${photoIndex+1} da ${folder.name||''}`; img.loading='lazy'; img.onerror=()=>{img.alt=`Errore: ${photoData.image}`;cont.style.border='2px dashed #ff6b6b';}; const handler=()=>openLightbox(photoIndex); cont.addEventListener('click',handler); cont.addEventListener('keydown',(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();handler();}}); cont.appendChild(img); photoGrid.appendChild(cont);
              }); } else { photoGrid.innerHTML = '<p class="loading-message">Nessuna immagine.</p>'; }
             switchView(galleryView); window.scrollTo({ top: 0, behavior: 'smooth' });
         } catch (error) { console.error("Errore showGallery:", error); }
    }

    /** Aggiorna contenuto lightbox (senza animazione slide). */
    function updateLightboxContent(photoIndex) {
        if (photoIndex < 0 || photoIndex >= currentPhotos.length) return;
        currentPhotoIndex = photoIndex;
        const photoData = currentPhotos[currentPhotoIndex];

        console.log("Applicando nuovo contenuto per indice:", currentPhotoIndex);
        console.log("Tentativo src img:", photoData.image);
        if (!lightboxImg) { console.error("updateLightboxContent: 'lightboxImg' non trovato!"); return; }
        lightboxImg.style.opacity = '1'; lightboxImg.style.transform = 'none';
        lightboxImg.classList.remove('slide-next-animation', 'slide-prev-animation'); // Sicurezza extra
        lightboxImg.src = photoData.image;
        lightboxImg.alt = photoData.caption || `Immagine ${currentPhotoIndex + 1}`;
        if(lightboxCaption) lightboxCaption.textContent = photoData.caption || '';
        if(lightboxAudio){ /* ... gestione audio + autoplay ... */
             lightboxAudio.pause(); lightboxAudio.currentTime=0; if(photoData.audio){ console.log('Carico audio:', photoData.audio); lightboxAudio.src=photoData.audio; lightboxAudio.style.display='block'; setTimeout(()=>{const p=lightboxAudio.play();if(p){p.then(()=>console.log("Autoplay OK")).catch(e=>console.warn("Autoplay bloccato",e));}},50);} else { lightboxAudio.src=''; lightboxAudio.style.display='none'; console.log('No audio.'); }
         }
        if(lightboxPrev) lightboxPrev.classList.toggle('disabled', currentPhotoIndex === 0);
        if(lightboxNext) lightboxNext.classList.toggle('disabled', currentPhotoIndex === currentPhotos.length - 1);
    }

    /** Mostra immagine precedente */
    function showPrevImage() { if (currentPhotoIndex > 0) updateLightboxContent(currentPhotoIndex - 1); }
    /** Mostra immagine successiva */
    function showNextImage() { if (currentPhotoIndex < currentPhotos.length - 1) updateLightboxContent(currentPhotoIndex + 1); }

    /** Apre la lightbox */
    function openLightbox(photoIndex) {
        if (!lightbox.classList.contains('hidden') || !currentPhotos || currentPhotos.length === 0) return;
        console.log(`Opening lightbox for index: ${photoIndex}`);
        updateLightboxContent(photoIndex); // Imposta contenuto
        lightbox.classList.remove('hidden'); // Rende visibile
        document.body.style.overflow = 'hidden'; // Blocca scroll
        if(lightboxClose) lightboxClose.focus();
    }

    /** Chiude la lightbox */
    function closeLightbox() {
        if (lightbox.classList.contains('hidden')) return;
        console.log("Closing lightbox...");
        if (lightboxAudio) { lightboxAudio.pause(); lightboxAudio.src = ''; }
        lightbox.classList.add('hidden'); // Nasconde
        document.body.style.overflow = ''; // Riabilita scroll
        try { const trigger = photoGrid?.querySelector(`.photo-item-container:nth-child(${currentPhotoIndex + 1})`); if(trigger) trigger.focus(); } catch (e) {}
    }

    // --- Impostazione Event Listener ---
    console.log("Impostazione event listeners...");
    try {
        // Bottone Indietro
        backButton.addEventListener('click', () => {
            closeLightbox(); // Chiude lightbox se aperta
            switchView(folderView); // Cambia vista
        });
        // Chiusura Lightbox: Bottone 'X'
        lightboxClose.addEventListener('click', closeLightbox);

        // --- MODIFICA LISTENER CLICK LIGHTBOX ---
        // Chiude la lightbox se il click NON avviene su un controllo specifico
        lightbox.addEventListener('click', (e) => {
            // Identifica gli elementi che NON devono chiudere la lightbox se cliccati
            const clickedOnControl = e.target.closest('.lightbox-nav, .lightbox-audio-controls, .lightbox-close');

            // Se l'elemento cliccato (o un suo contenitore tra quelli specificati) NON è un controllo,
            // allora chiudi la lightbox. Questo permette di cliccare sullo sfondo O sull'immagine/caption.
            if (!clickedOnControl) {
                closeLightbox();
            }
            // Se invece è stato cliccato un controllo, non fare nulla qui (il controllo gestirà il suo evento).
        });
        // --- FINE MODIFICA ---

        // Navigazione Lightbox: Bottoni Prev/Next
        lightboxPrev.addEventListener('click', showPrevImage);
        lightboxNext.addEventListener('click', showNextImage);
        // Gestione Tastiera
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('hidden')) {
                 if (e.key === 'Escape') closeLightbox();
                 else if (e.key === 'ArrowLeft') showPrevImage();
                 else if (e.key === 'ArrowRight') showNextImage();
            }
        });
        // Gestore errori e log per l'elemento audio
        if (lightboxAudio) {
             lightboxAudio.onerror = (e) => { console.error('--- ERRORE AUDIO ---', lightboxAudio.src, e); lightboxAudio.style.display = 'none'; };
             lightboxAudio.onplay = () => console.log("Audio PLAY:", lightboxAudio.src);
             lightboxAudio.onpause = () => { if (!lightboxAudio.ended && lightboxAudio.currentTime > 0) console.log("Audio PAUSE:", lightboxAudio.src); };
             lightboxAudio.onended = () => console.log("Audio END:", lightboxAudio.src);
        }
        // Gestore errore sull'immagine lightbox stessa
        if(lightboxImg) {
            lightboxImg.onerror = () => {
                console.error("--- ERRORE CARICAMENTO IMMAGINE LIGHTBOX ---");
                console.error("Impossibile caricare:", lightboxImg.src);
                if(lightboxCaption) lightboxCaption.textContent = "Errore nel caricamento dell'immagine.";
                 lightboxImg.alt = "Errore caricamento immagine";
                 // Potresti impostare un src a un'immagine placeholder visibile
                 // lightboxImg.src = 'images/placeholder-error.png';
            };
        }

        console.log("Event listeners impostati.");
    } catch (error) { console.error("Errore durante impostazione event listeners:", error); }

    // --- Inizializzazione Pagina ---
    console.log("Inizializzazione pagina...");
    try {
        updateFooterYear();
        displayFolders(); // Popola cartelle
        console.log("Inizializzazione completata.");
    } catch (error) { console.error("Errore durante l'inizializzazione:", error); }

}); // Fine wrapper DOMContentLoaded