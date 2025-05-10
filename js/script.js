document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURAZIONE DATI ---
    console.log("Inizio script.");
    const foldersData = [
        { name: "Arte che prende forma: La pasta di sale", id: "cartella1", photos: [ { image: "images/cartella1/1.webp" }, { image: "images/cartella1/2.webp" }, { image: "images/cartella1/3.webp" }, { image: "images/cartella1/4.webp" }, { image: "images/cartella1/5.webp" }, { image: "images/cartella1/6.webp" }, { image: "images/cartella1/6b.webp" }, { image: "images/cartella1/7.webp" }, { image: "images/cartella1/8.webp" }, { image: "images/cartella1/9.webp" }, { image: "images/cartella1/10.webp" }, { image: "images/cartella1/11.webp" }, { image: "images/cartella1/12.webp" }, { image: "images/cartella1/13.webp" }, { image: "images/cartella1/14.webp" }, { image: "images/cartella1/15.webp" }, { image: "images/cartella1/16.webp" }, { image: "images/cartella1/17.webp" }, { image: "images/cartella1/18.webp" }, { image: "images/cartella1/19.webp" }, { image: "images/cartella1/20.webp" }, { image: "images/cartella1/21.webp" }, ] },
        { name: "Arte che brilla: Creazioni sulla lavagna luminosa", id: "cartella2", photos: [ { image: "images/cartella2/01.webp",  audio: "audio/cartella2/01.mp3" }, { image: "images/cartella2/02.webp",  audio: "audio/cartella2/02.mp3" }, { image: "images/cartella2/03.webp",  audio: "audio/cartella2/03.mp3" }, { image: "images/cartella2/04.webp",  audio: "audio/cartella2/04.mp3" }, { image: "images/cartella2/05.webp",  audio: "audio/cartella2/05.mp3" }, { image: "images/cartella2/06.webp",  audio: "audio/cartella2/06.mp3" }, { image: "images/cartella2/07.webp",  audio: "audio/cartella2/07.mp3" }, { image: "images/cartella2/08.webp",  audio: "audio/cartella2/08.mp3" }, { image: "images/cartella2/09.webp",  audio: "audio/cartella2/09.mp3" }, { image: "images/cartella2/10.webp",  audio: "audio/cartella2/10.mp3" }, { image: "images/cartella2/11.webp",  audio: "audio/cartella2/11.mp3" }, { image: "images/cartella2/12.webp",  audio: "audio/cartella2/12.mp3" }, { image: "images/cartella2/13.webp",  audio: "audio/cartella2/13.mp3" }, { image: "images/cartella2/14.webp",  audio: "audio/cartella2/14.mp3" }, { image: "images/cartella2/15.webp",  audio: "audio/cartella2/15.mp3" }, { image: "images/cartella2/16.webp",  audio: "audio/cartella2/16.mp3" }, ] },
        { name: "Arte da toccare: Colori tra le dita", id: "cartella3", photos: [ { image: "images/cartella3/01.webp",     audio: "audio/cartella3/01.mp3" }, { image: "images/cartella3/02.webp",     audio: "audio/cartella3/02.mp3" }, { image: "images/cartella3/03.webp",     audio: "audio/cartella3/03.mp3" }, { image: "images/cartella3/04.webp",     audio: "audio/cartella3/04.mp3" }, { image: "images/cartella3/05.webp",     audio: "audio/cartella3/05.mp3" }, { image: "images/cartella3/06.webp",     audio: "audio/cartella3/06.mp3" }, { image: "images/cartella3/07.webp",     audio: "audio/cartella3/07.mp3" }, { image: "images/cartella3/08.webp",     audio: "audio/cartella3/08.mp3" }, { image: "images/cartella3/09.webp",     audio: "audio/cartella3/09.mp3" }, { image: "images/cartella3/10.webp",     audio: "audio/cartella3/10.mp3" }, { image: "images/cartella3/11.webp",     audio: "audio/cartella3/11.mp3" }, { image: "images/cartella3/12.webp",     audio: "audio/cartella3/12.mp3" }, { image: "images/cartella3/13.webp",     audio: "audio/cartella3/13.mp3" }, { image: "images/cartella3/14.webp",     audio: "audio/cartella3/14.mp3" }, { image: "images/cartella3/15.webp",     audio: "audio/cartella3/15.mp3" }, { image: "images/cartella3/16.webp",     audio: "audio/cartella3/16.mp3" }, ] },
        { name: "Arte in controluce: Costruiamo e raccontiamo con le ombre", id: "cartella4", photos: [ { image: "images/cartella4/1.webp"}, { image: "images/cartella4/2.webp"}, { image: "images/cartella4/3.webp"}, { image: "images/cartella4/4.webp"}, { image: "images/cartella4/5.webp"}, { image: "images/cartella4/6.webp"}, { image: "images/cartella4/7.webp"}, { image: "images/cartella4/8.webp"}, { image: "images/cartella4/9.webp"}, { image: "images/cartella4/10.webp"}, { image: "images/cartella4/11.webp"}, { image: "images/cartella4/12.webp"}, { image: "images/cartella4/13.webp"}, { image: "images/cartella4/14.webp"}, { image: "images/cartella4/15.webp"}, { image: "images/cartella4/16.webp"}, { image: "images/cartella4/17.webp"}, { image: "images/cartella4/18.webp"}, ] },
        { name: "Arte dell' incontro: Colori in dialogo", id: "cartella5", photos: [ { image: "images/cartella5/1.webp"}, { image: "images/cartella5/2.webp"}, { image: "images/cartella5/3.webp"}, { image: "images/cartella5/4.webp"}, { image: "images/cartella5/5.webp"}, { image: "images/cartella5/6.webp"}, { image: "images/cartella5/7.webp"}, ] },
    ];
    console.log("Dati 'foldersData' (iniziali) caricati.");

    // --- DATI VIDEO ---
    // IMPORTANTE: DEVI compilare questo array manualmente con i tuoi file video e le anteprime.
    const videosData = [
        // ESEMPI - SOSTITUISCI CON I TUOI FILE VIDEO REALI E LE LORO ANTEPRIME:
        { name: "Alessandro", videoFile: "video/Alessandro.mp4", previewImage: "video/preview/Alessandro.jpg" },
        { name: "Camilla", videoFile: "video/Camilla.mp4", previewImage: "video/preview/Camilla.jpg" },
        { name: "Cecilia", videoFile: "video/Cecilia.mp4", previewImage: "video/preview/Cecilia.jpg" },
        { name: "Dylan", videoFile: "video/Dylan.mp4", previewImage: "video/preview/Dylan.jpg" },
        { name: "Genesa", videoFile: "video/Genesa.mp4", previewImage: "video/preview/Genesa.jpg" },
        { name: "Loris", videoFile: "video/Loris.mp4", previewImage: "video/preview/Loris.jpg" },
        { name: "Malik", videoFile: "video/Malik.mp4", previewImage: "video/preview/Malik.jpg" },
        { name: "Matilde", videoFile: "video/Matilde.mp4", previewImage: "video/preview/Matilde.jpg" },
        { name: "Moustapha", videoFile: "video/Moustapha.mp4", previewImage: "video/preview/Moustapha.jpg" },
        { name: "Paolo", videoFile: "video/Paolo.mp4", previewImage: "video/preview/Paolo.jpg" },
        { name: "Seba", videoFile: "video/Seba.mp4", previewImage: "video/preview/Seba.jpg" },
        { name: "Tommaso", videoFile: "video/Tommaso.mp4", previewImage: "video/preview/Tommaso.jpg" },
        { name: "Zara", videoFile: "video/Zara.mp4", previewImage: "video/preview/Zara.jpg" },
        // Aggiungi qui altri oggetti video come:
        // { name: "Nome Video", videoFile: "percorso/al/video.mp4", previewImage: "percorso/alla/preview.jpg" },
    ];
    console.log("Dati 'videosData' (da compilare manualmente) caricati.");


    // --- Selezione Elementi DOM ---
    console.log("Selezione elementi DOM...");
    const folderView = document.getElementById('folder-view');
    const galleryView = document.getElementById('gallery-view');
    const alunniVideoView = document.getElementById('alunni-video-view');
    const folderGrid = folderView?.querySelector('.folder-grid');
    const photoGrid = galleryView?.querySelector('.photo-grid');
    const videoGrid = alunniVideoView?.querySelector('.video-grid'); // Questo rimane, è la griglia dei video item
    const galleryTitle = document.getElementById('gallery-title');
    const alunniVideoTitle = document.getElementById('alunni-video-title-heading');
    const galleryHeaderContainer = galleryView?.querySelector('.gallery-header');
    const mainHeaderContent = document.querySelector('.main-header .header-content');
    const mainTitle = document.getElementById('main-title');
    const mainElement = document.querySelector('.content-area');
    const currentYearSpan = document.getElementById('current-year');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox?.querySelector('.lightbox-content');
    const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
    const lightboxAudio = lightbox?.querySelector('#lightbox-audio');
    const lightboxPrev = lightbox?.querySelector('.lightbox-prev');
    const lightboxNext = lightbox?.querySelector('.lightbox-next');

    const videoLightbox = document.getElementById('video-lightbox');
    const videoLightboxVideo = videoLightbox?.querySelector('.lightbox-video-content'); // Il player video nel lightbox
    const videoLightboxCaption = videoLightbox?.querySelector('#video-lightbox-caption-text');
    console.log("Selezione elementi DOM completata.");


    // --- Variabili di Stato ---
    let activeView = null;
    let currentFolderIndex = -1;
    let currentPhotoIndex = -1;
    let currentPhotos = [];
    let currentVideos = videosData; // Ora contiene anche previewImage
    let currentPlayingVideoIndex = -1;
    let folderItems = [];
    let tiltRAF = null;
    let isTiltActive = false;
    let throttledMouseMoveHandler = null;
    let galleryBackButton = null;
    let currentViewHistory = [];


    // --- Verifica Elementi Essenziali ---
    console.log("Verifica elementi essenziali...");
    const essentialElements = { folderView, galleryView, alunniVideoView, folderGrid, photoGrid, videoGrid, galleryTitle, alunniVideoTitle, galleryHeaderContainer, mainHeaderContent, mainTitle, mainElement, currentYearSpan, lightbox, lightboxImg, lightboxCaption, lightboxAudio, lightboxPrev, lightboxNext, videoLightbox, videoLightboxVideo, videoLightboxCaption };
    for (const key in essentialElements) {
        if (!essentialElements[key]) {
            console.error(`Errore critico: Elemento HTML mancante: '${key}'.`);
        }
    }
    console.log("Verifica elementi essenziali OK (o con avvisi).");


    // --- Funzioni Utilità ---
    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function(...args) {
            const context = this;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function() {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }

    function getFileNameWithoutExtension(filePath) {
        if (!filePath) return '';
        const fileNameWithExt = filePath.split('/').pop();
        return fileNameWithExt.split('.').slice(0, -1).join('.') || fileNameWithExt;
    }


    // --- Funzione per creare/aggiornare il pulsante Indietro ---
    function manageBackButton(show) {
        if (show) {
            if (!galleryBackButton) {
                galleryBackButton = document.createElement('button');
                galleryBackButton.id = 'gallery-back-button';
                galleryBackButton.className = 'button-styled';
                galleryBackButton.setAttribute('aria-label', 'Torna indietro');
                galleryBackButton.innerHTML = '&larr; Indietro';
                galleryBackButton.addEventListener('click', () => {
                    closeLightbox();
                    closeVideoLightbox();

                    if (currentViewHistory.length > 1) {
                        currentViewHistory.pop();
                        const previousView = currentViewHistory[currentViewHistory.length - 1];
                        switchView(previousView, false);
                    } else {
                        switchView(folderView, false);
                    }
                });
            }
            if (mainHeaderContent && !mainHeaderContent.contains(galleryBackButton)) {
                mainHeaderContent.insertBefore(galleryBackButton, mainHeaderContent.firstChild);
            }
        } else {
            if (galleryBackButton && mainHeaderContent && mainHeaderContent.contains(galleryBackButton)) {
                mainHeaderContent.removeChild(galleryBackButton);
                galleryBackButton = null;
            }
        }
    }


    // --- Funzioni Principali ---
    function updateFooterYear() {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }

    function switchView(viewToShow, addToHistory = true) {
        if (!viewToShow || viewToShow === activeView) {
            return;
        }

        const oldView = activeView;
        activeView = viewToShow;

        if (addToHistory) {
            if (currentViewHistory.length === 0 || currentViewHistory[currentViewHistory.length - 1] !== activeView) {
                currentViewHistory.push(activeView);
            }
        }
        console.log("Cambiando vista a:", activeView.id, "Storico:", currentViewHistory.map(v => v.id));


        if (activeView === galleryView || activeView === alunniVideoView) {
            removeFolderTiltInteraction();
            if (mainTitle) mainTitle.style.display = 'none';
            manageBackButton(true);

            if (activeView === galleryView && galleryTitle && mainHeaderContent && !mainHeaderContent.contains(galleryTitle)) {
                galleryHeaderContainer.appendChild(galleryTitle); // Sposta il titolo galleria locale nel contenitore locale
                mainHeaderContent.appendChild(galleryTitle);    // Poi sposta il titolo locale nell'header principale
            } else if (galleryTitle && galleryHeaderContainer && mainHeaderContent.contains(galleryTitle)) { // Se il titolo è già nell'header
                if (activeView !== galleryView) { // E stiamo uscendo dalla vista galleria
                     galleryHeaderContainer.appendChild(galleryTitle); // Rimettilo nel suo contenitore locale
                }
            }

        } else { // Siamo in folderView
            initFolderTiltInteraction();
            if (mainTitle) mainTitle.style.display = '';
            manageBackButton(false);
            // Se il titolo della galleria è ancora nell'header principale, rimettilo nel suo contenitore originale
            if (galleryTitle && galleryHeaderContainer && !galleryHeaderContainer.contains(galleryTitle) && mainHeaderContent.contains(galleryTitle)) {
                galleryHeaderContainer.appendChild(galleryTitle);
            }
        }

        if (oldView) {
            oldView.classList.remove('active');
            setTimeout(() => {
                if (oldView && !oldView.classList.contains('active')) { // Ricontrolla per evitare race conditions
                    oldView.style.display = 'none';
                }
            }, 500); // Durata transizione CSS
        }

        viewToShow.style.display = 'block';
        requestAnimationFrame(() => { // Assicura che display:block sia applicato prima di aggiungere la classe active
            viewToShow.classList.add('active');
            updateContentAreaHeight();
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateContentAreaHeight() {
        if (!mainElement || !activeView) return;
        const activeViewContent = activeView.querySelector('.view-content');
        const contentHeight = activeViewContent ? activeViewContent.scrollHeight : activeView.scrollHeight;

        const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0;
        const footerHeight = document.querySelector('.main-footer')?.offsetHeight || 0;
        const viewportContentHeight = window.innerHeight - headerHeight - footerHeight; // Altezza disponibile per il contenuto
        const visibleContentHeight = activeViewContent ? activeViewContent.offsetHeight : activeView.offsetHeight; // Altezza visibile attuale
        let effectiveContentHeight = Math.max(contentHeight, visibleContentHeight);
        const targetHeight = Math.max(effectiveContentHeight + 60, viewportContentHeight); // Aggiunge un po' di padding, o usa l'altezza della viewport

        if (mainElement) mainElement.style.minHeight = `${targetHeight}px`;
    }

    function displayFolders() {
        if (!folderGrid) {
            console.error("Elemento folderGrid non trovato.");
            return;
        }
        try {
            folderGrid.innerHTML = '';
            folderItems = []; // Resetta per l'interazione tilt
            if (!foldersData || foldersData.length === 0) {
                folderGrid.innerHTML = '<p class="loading-message">Nessun progetto disponibile.</p>';
                updateContentAreaHeight();
                return;
            }
            foldersData.forEach((folder, index) => {
                const div = document.createElement('div');
                div.className = 'folder-item';
                div.setAttribute('data-folder-index', index);
                div.setAttribute('role', 'button');
                div.tabIndex = 0;

                const h3 = document.createElement('h3');
                h3.textContent = folder.name || `Cartella ${index + 1}`;
                div.appendChild(h3);

                const handler = () => {
                    if (folder.id === 'alunni-video-folder') {
                        switchView(alunniVideoView);
                    } else {
                        showGallery(index);
                    }
                };

                div.addEventListener('click', handler);
                div.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handler();
                    }
                });
                folderGrid.appendChild(div);
                folderItems.push(div); // Aggiungi all'array per il tilt
            });
            updateContentAreaHeight();
        } catch (error) {
            console.error("Errore in displayFolders:", error);
            folderGrid.innerHTML = '<p class="loading-message" style="color:red;">Errore caricamento progetti.</p>';
        }
    }

    function showGallery(folderIndex) {
        if (!photoGrid || !galleryTitle) {
            console.error("Elementi photoGrid o galleryTitle mancanti.");
            return;
        }
        try {
            const folder = foldersData[folderIndex];
            if (!folder) {
                console.warn("Cartella non trovata per indice:", folderIndex);
                return;
            }
            currentFolderIndex = folderIndex;
            galleryTitle.textContent = folder.name || `Galleria ${folderIndex + 1}`;
            photoGrid.innerHTML = '';
            currentPhotos = folder.photos || [];

            if (currentPhotos.length > 0) {
                currentPhotos.forEach((photoData, photoIndex) => {
                    if (!photoData || !photoData.image) {
                        console.warn("Dati immagine mancanti per:", photoData);
                        return; // Salta questa foto se i dati sono incompleti
                    }
                    const cont = document.createElement('div');
                    cont.className = 'photo-item-container';
                    cont.setAttribute('role', 'button');
                    cont.tabIndex = 0;

                    const img = document.createElement('img');
                    img.className = 'photo-item';
                    img.src = photoData.image;
                    img.alt = photoData.caption || `Immagine ${photoIndex + 1} da ${folder.name || ''}`;
                    img.loading = 'lazy'; // Lazy loading
                    img.onerror = () => {
                        img.alt = `Errore caricamento: ${photoData.image}`;
                        cont.style.border = '2px dashed #ff6b6b'; // Segnala errore
                    };

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
            } else {
                photoGrid.innerHTML = '<p class="loading-message">Nessuna immagine in questa galleria.</p>';
            }
            switchView(galleryView);
        } catch (error) {
            console.error("Errore in showGallery:", error);
            if (photoGrid) photoGrid.innerHTML = '<p class="loading-message" style="color:red;">Errore caricamento galleria.</p>';
        }
    }


    // --- Funzioni Lightbox Immagini ---
    function updateLightboxContent(photoIndex) {
        if (photoIndex < 0 || photoIndex >= currentPhotos.length || !lightboxImg || !lightboxCaption || !lightboxAudio || !lightboxPrev || !lightboxNext) {
            return;
        }
        currentPhotoIndex = photoIndex;
        const photoData = currentPhotos[currentPhotoIndex];

        lightboxImg.style.opacity = '1'; // Gestito da CSS con :not(.hidden) .lightbox-container
        lightboxImg.style.transform = 'none'; // Gestito da CSS
        lightboxImg.src = photoData.image;
        lightboxImg.alt = photoData.caption || `Immagine ${currentPhotoIndex + 1}`;
        lightboxCaption.textContent = photoData.caption || '';

        lightboxAudio.pause(); // Interrompi audio precedente
        lightboxAudio.currentTime = 0;
        if (photoData.audio) {
            lightboxAudio.src = photoData.audio;
            lightboxAudio.style.display = 'block'; // Mostra i controlli audio
            setTimeout(() => { // Leggero ritardo per assicurare che src sia impostato
                const playPromise = lightboxAudio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(e => console.warn("Autoplay audio bloccato:", e));
                }
            }, 50);
        } else {
            lightboxAudio.src = ''; // Rimuovi src se non c'è audio
            lightboxAudio.style.display = 'none'; // Nascondi i controlli
        }

        lightboxPrev.classList.toggle('disabled', currentPhotoIndex === 0);
        lightboxNext.classList.toggle('disabled', currentPhotoIndex === currentPhotos.length - 1);
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
        if (!lightbox || !lightbox.classList.contains('hidden') || !currentPhotos || currentPhotos.length === 0) {
            // Se lightbox non esiste, o è già aperto, o non ci sono foto, non fare nulla
            return;
        }
        updateLightboxContent(photoIndex);
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Blocca lo scroll del body
    }

    function closeLightbox() {
        if (!lightbox || lightbox.classList.contains('hidden')) {
            return; // Se lightbox non esiste o è già chiuso, non fare nulla
        }
        if (lightboxAudio) {
            lightboxAudio.pause();
            lightboxAudio.src = ''; // Rimuovi src per fermare il download/buffering
        }
        lightbox.classList.add('hidden');
        document.body.style.overflow = ''; // Ripristina lo scroll del body
        try {
            // Tenta di riportare il focus all'elemento che ha aperto il lightbox
            const triggerElement = photoGrid?.querySelector(`.photo-item-container:nth-child(${currentPhotoIndex + 1})`);
            if (triggerElement) triggerElement.focus();
        } catch (e) {} // Ignora errori se l'elemento non è trovabile
    }


    // --- MODIFICATO: NUOVE FUNZIONI PER VIDEO CON ANTEPRIME JPG ---
    function displayVideos() {
        if (!videoGrid) {
            console.error("Elemento videoGrid non trovato.");
            return;
        }
        try {
            videoGrid.innerHTML = '';
            if (!currentVideos || currentVideos.length === 0) {
                videoGrid.innerHTML = '<p class="loading-message">Nessun video. Compila `videosData` in `js/script.js` con nomi, file video e anteprime.</p>';
                updateContentAreaHeight();
                return;
            }
            currentVideos.forEach((videoData, index) => {
                if (!videoData || !videoData.videoFile || !videoData.previewImage) {
                    console.warn("Dati video non validi (manca videoFile o previewImage):", videoData);
                    return; // Salta questo video se i dati sono incompleti
                }
                const container = document.createElement('div');
                container.className = 'video-item-container';
                container.setAttribute('data-video-index', index);
                container.tabIndex = 0;
                container.setAttribute('role', 'button');

                const previewDiv = document.createElement('div');
                previewDiv.className = 'video-preview';

                const previewImg = document.createElement('img');
                previewImg.src = videoData.previewImage;
                previewImg.alt = `Anteprima per ${videoData.name || getFileNameWithoutExtension(videoData.videoFile)}`;
                previewImg.loading = 'lazy';
                previewImg.onerror = () => {
                   previewImg.alt = `Errore caricamento anteprima: ${videoData.previewImage}`;
                   // Sostituisce l'img con un messaggio di errore nel div
                   previewDiv.innerHTML = ''; // Rimuove l'img fallita
                   previewDiv.textContent = 'Errore Anteprima';
                   previewDiv.style.border = '1px dashed var(--text-secondary)';
                   previewDiv.style.color = 'var(--text-secondary)';
                   previewDiv.style.fontSize = '0.8rem';
                };
                previewDiv.appendChild(previewImg);

                const nameDiv = document.createElement('div');
                nameDiv.className = 'video-name';
                nameDiv.textContent = videoData.name || getFileNameWithoutExtension(videoData.videoFile);

                container.appendChild(previewDiv);
                container.appendChild(nameDiv);

                const handler = () => openVideoLightbox(index);
                container.addEventListener('click', handler);
                container.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handler();
                    }
                });
                videoGrid.appendChild(container);
            });
            updateContentAreaHeight();
        } catch (error) {
            console.error("Errore in displayVideos:", error);
            videoGrid.innerHTML = '<p class="loading-message" style="color:red;">Errore caricamento video.</p>';
        }
    }

    function openVideoLightbox(videoIndex) {
        if (videoIndex < 0 || videoIndex >= currentVideos.length || !videoLightbox || !videoLightboxVideo || !videoLightboxCaption) {
            console.error("Impossibile aprire lightbox video: elementi mancanti o indice non valido.");
            return;
        }
        currentPlayingVideoIndex = videoIndex;
        const videoData = currentVideos[videoIndex];

        videoLightboxVideo.src = videoData.videoFile;
        videoLightboxCaption.textContent = videoData.name || getFileNameWithoutExtension(videoData.videoFile);
        videoLightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        videoLightboxVideo.load(); // È buona pratica chiamare load() prima di play() se si cambia src
        const playPromise = videoLightboxVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => console.warn("Autoplay video bloccato:", e));
        }
    }

    function closeVideoLightbox() {
        if (!videoLightbox || !videoLightboxVideo || videoLightbox.classList.contains('hidden')) {
            return;
        }
        videoLightboxVideo.pause();
        videoLightboxVideo.src = ""; // Rimuovi src per fermare download/buffering
        videoLightbox.classList.add('hidden');
        document.body.style.overflow = '';
        try {
            const triggerElement = videoGrid?.querySelector(`.video-item-container[data-video-index="${currentPlayingVideoIndex}"]`);
            if (triggerElement) triggerElement.focus();
        } catch (e) {}
        currentPlayingVideoIndex = -1;
    }
    // --- FINE FUNZIONI VIDEO ---


    // --- Interazione Tilt per Cartelle ---
    function initFolderTiltInteraction() {
        if (isTiltActive || !folderGrid || folderItems.length === 0) return;
        const isTouchEventSupported = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (!isTouchEventSupported) {
            console.log("Attivazione interazione tilt.");
            if (!throttledMouseMoveHandler) {
                throttledMouseMoveHandler = throttle(handleMouseMove, 50); // 50ms throttle
            }
            document.addEventListener('mousemove', throttledMouseMoveHandler);
            isTiltActive = true;
        } else {
            console.log("Interazione tilt non attivata (supporto touch).");
        }
    }
    function removeFolderTiltInteraction() {
        if (!isTiltActive) return;
        console.log("Disattivazione interazione tilt.");
        if (throttledMouseMoveHandler) {
            document.removeEventListener('mousemove', throttledMouseMoveHandler);
        }
        cancelAnimationFrame(tiltRAF);
        folderItems.forEach(item => {
            item.style.transform = ''; // Resetta trasformazioni
            item.style.zIndex = '';    // Resetta z-index
        });
        isTiltActive = false;
    }
    function handleMouseMove(e) {
        if (!isTiltActive) return;
        cancelAnimationFrame(tiltRAF); // Annulla il frame precedente se c'è
        tiltRAF = requestAnimationFrame(() => {
            const maxRotation = 20;
            const maxScale = 1.2;
            const scaleStartDistance = 200;
            let closestItem = null;
            let minDistance = Infinity;

            folderItems.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                const itemCenterX = itemRect.left + itemRect.width / 2;
                const itemCenterY = itemRect.top + itemRect.height / 2;
                const mouseX = e.clientX - itemCenterX;
                const mouseY = e.clientY - itemCenterY;
                const tiltFactor = 0.04;

                let rotateX = -mouseY * tiltFactor;
                let rotateY = mouseX * tiltFactor;
                rotateX = Math.max(-maxRotation, Math.min(maxRotation, rotateX));
                rotateY = Math.max(-maxRotation, Math.min(maxRotation, rotateY));

                const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
                let scale = 1.0;
                if (distance < scaleStartDistance) {
                    const closenessFactor = 1 - (distance / scaleStartDistance);
                    scale = 1 + (maxScale - 1) * closenessFactor;
                }
                scale = Math.min(scale, maxScale); // Limita la scala massima

                item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
                item.style.zIndex = ''; // Resetta z-index per tutti

                if (distance < minDistance) {
                    minDistance = distance;
                    closestItem = item;
                }
            });
            if (closestItem) { // Porta l'elemento più vicino in primo piano
                closestItem.style.zIndex = '10';
            }
        });
    }


    // --- Impostazione Event Listener Generali ---
    console.log("Impostazione event listeners...");
    try {
        lightbox?.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox(); // Chiudi solo se si clicca sull'overlay
        });
        lightboxImg?.addEventListener('click', closeLightbox); // Chiudi anche cliccando sull'immagine
        lightboxPrev?.addEventListener('click', showPrevImage);
        lightboxNext?.addEventListener('click', showNextImage);
        document.addEventListener('keydown', (e) => {
            if (lightbox && !lightbox.classList.contains('hidden')) { // Se il lightbox immagine è aperto
                if (e.key === 'Escape') closeLightbox();
                else if (e.key === 'ArrowLeft') showPrevImage();
                else if (e.key === 'ArrowRight') showNextImage();
            }
        });
        if (lightboxAudio) {
            lightboxAudio.onerror = (e) => {
                console.error('Errore audio lightbox:', lightboxAudio.src, e);
                lightboxAudio.style.display = 'none'; // Nascondi se c'è un errore
            };
        }
        if (lightboxImg) {
            lightboxImg.onerror = () => {
                console.error("Errore caricamento immagine lightbox:", lightboxImg.src);
                if (lightboxCaption) lightboxCaption.textContent = "Errore caricamento immagine.";
                lightboxImg.alt = "Errore immagine"; // Aggiorna alt text
            };
        }

        videoLightbox?.addEventListener('click', (e) => {
            if (e.target === videoLightbox) closeVideoLightbox(); // Chiudi solo cliccando sull'overlay
        });
        document.addEventListener('keydown', (e) => {
            if (videoLightbox && !videoLightbox.classList.contains('hidden') && e.key === 'Escape') { // Se il lightbox video è aperto
                closeVideoLightbox();
            }
        });
        if (videoLightboxVideo) {
            videoLightboxVideo.onerror = (e) => {
                console.error('Errore video lightbox:', videoLightboxVideo.src, e);
                if (videoLightboxCaption) videoLightboxCaption.textContent = "Errore caricamento video.";
            };
        }
        console.log("Event listeners impostati.");
    } catch (error) {
        console.error("Errore impostazione event listeners:", error);
    }


    // --- Inizializzazione Pagina ---
    console.log("Inizializzazione pagina...");
    try {
        updateFooterYear();

        if (foldersData.findIndex(f => f.id === 'alunni-video-folder') === -1) {
            foldersData.push({ name: "Video Alunni", id: "alunni-video-folder", photos: [] }); // 'photos' qui è un placeholder, non usato per i video
        }
        console.log("Dati 'foldersData' (finali, con Video Alunni):", foldersData.map(f => f.name));


        displayFolders(); // Mostra le cartelle
        displayVideos();  // Prepara la griglia dei video (per la vista 'alunni-video-view')

        if (folderView) {
            activeView = folderView; // Imposta la vista iniziale
            currentViewHistory = [folderView]; // Inizializza lo storico delle viste
            folderView.style.display = 'block';
            requestAnimationFrame(() => { // Assicura che display:block sia applicato prima di aggiungere la classe active
                folderView.classList.add('active');
                updateContentAreaHeight(); // Calcola l'altezza iniziale
                initFolderTiltInteraction(); // Attiva il tilt per le cartelle
            });
        } else {
            console.error("Vista iniziale 'folderView' non trovata!");
        }

        console.log("Inizializzazione completata. Vista attiva:", activeView?.id);
    } catch (error) {
        console.error("Errore durante l'inizializzazione:", error);
    }

    // Aggiorna l'altezza del contenuto al ridimensionamento della finestra
    window.addEventListener('resize', throttle(updateContentAreaHeight, 200));

}); // Fine wrapper DOMContentLoaded