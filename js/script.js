document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURAZIONE DATI ---
    console.log("Inizio script.");
    const foldersData = [
        // ... (i tuoi dati delle cartelle rimangono invariati) ...
        {
            name: "Arte che prende forma: La pasta di sale",
            id: "cartella1",
            photos: [
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
                { image: "images/cartella2/01.webp",  audio: "audio/cartella2/01.mp3" },
                { image: "images/cartella2/02.webp",  audio: "audio/cartella2/02.mp3" },
                // ... altre foto ...
                { image: "images/cartella2/15.webp",  audio: "audio/cartella2/15.mp3" },
                { image: "images/cartella2/16.webp",  audio: "audio/cartella2/16.mp3" },
            ]
        },
        {
            name: "Arte da toccare: Colori tra le dita",
            id: "cartella3",
            photos: [
                 { image: "images/cartella3/01.webp",     audio: "audio/cartella3/01.mp3" },
                 { image: "images/cartella3/02.webp",     audio: "audio/cartella3/02.mp3" },
                 // ... altre foto ...
                 { image: "images/cartella3/15.webp",     audio: "audio/cartella3/15.mp3" },
                 { image: "images/cartella3/16.webp",     audio: "audio/cartella3/16.mp3" },
            ]
        },
         {
            name: "Arte in controluce: Costruiamo e raccontiamo con le ombre",
            id: "cartella4",
            photos: [
                { image: "images/cartella4/1.webp"}, { image: "images/cartella4/2.webp"},
                 // ... altre foto ...
                { image: "images/cartella4/17.webp"}, { image: "images/cartella4/18.webp"},
            ]
        },
         {
            name: "Arte dell' incontro: Colori in dialogo",
            id: "cartella5",
            photos: [
                 { image: "images/cartella5/1.webp"}, { image: "images/cartella5/2.webp"},
                 // ... altre foto ...
                 { image: "images/cartella5/7.webp"},
            ]
        },
    ];
    console.log("Dati 'foldersData' caricati.");

    // --- Selezione Elementi DOM ---
    console.log("Selezione elementi DOM...");
    const folderView = document.getElementById('folder-view');
    const galleryView = document.getElementById('gallery-view');
    const folderGrid = folderView?.querySelector('.folder-grid');
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
    let folderItems = [];
    let tiltRAF = null;
    let isTiltActive = false;
    let throttledMouseMoveHandler = null;

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
        }
    }

    // --- Funzioni Principali ---
    function updateFooterYear() { /* ... (invariata) ... */ try { currentYearSpan.textContent = new Date().getFullYear(); } catch (e) { console.error("Errore in updateFooterYear:", e); } }

    function switchView(viewToShow) {
        // ... (logica switch view e gestione classe 'gallery-active' invariata) ...
        if (!viewToShow || viewToShow === activeView) return;
        const oldView = activeView;
        activeView = viewToShow;
        if (mainElement) {
            if (activeView === galleryView) {
                mainElement.classList.add('gallery-active');
                removeFolderTiltInteraction(); // Disattiva tilt
            } else {
                mainElement.classList.remove('gallery-active');
                initFolderTiltInteraction(); // Attiva tilt
            }
        }
        if (oldView) {
            oldView.classList.remove('active');
             setTimeout(() => { if (!oldView.classList.contains('active')) oldView.style.display = 'none'; }, 500);
        }
        viewToShow.style.display = 'block';
        requestAnimationFrame(() => {
             viewToShow.classList.add('active');
             updateContentAreaHeight();
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateContentAreaHeight() { /* ... (logica invariata) ... */ if (!mainElement || !activeView) return; const activeViewContent = activeView.querySelector('.view-content'); const contentHeight = activeViewContent ? activeViewContent.scrollHeight : activeView.scrollHeight; const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0; const footerHeight = document.querySelector('.main-footer')?.offsetHeight || 0; const viewportContentHeight = window.innerHeight - headerHeight - footerHeight; const visibleContentHeight = activeViewContent ? activeViewContent.offsetHeight : activeView.offsetHeight; let effectiveContentHeight = Math.max(contentHeight, visibleContentHeight); const targetHeight = Math.max(effectiveContentHeight + 60, viewportContentHeight); mainElement.style.minHeight = `${targetHeight}px`; /* console.log(`Altezza .content-area aggiornata a: ${targetHeight}px`); */ }

    function displayFolders() {
        // ... (logica creazione cartelle invariata) ...
        if (!folderGrid) return;
        try {
            folderGrid.innerHTML = ''; folderItems = [];
            if (!foldersData || foldersData.length === 0) { folderGrid.innerHTML = '<p class="loading-message">Nessun progetto.</p>'; return; }
            foldersData.forEach((folder, index) => {
                const div = document.createElement('div'); div.className = 'folder-item'; div.setAttribute('data-folder-index', index); div.setAttribute('role', 'button'); div.tabIndex = 0;
                const h3 = document.createElement('h3'); h3.textContent = folder.name || `Cartella ${index + 1}`; div.appendChild(h3);
                const handler = () => showGallery(index); div.addEventListener('click', handler); div.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }});
                folderGrid.appendChild(div); folderItems.push(div);
            });
            updateContentAreaHeight();
        } catch (error) { console.error("Errore displayFolders:", error); folderGrid.innerHTML = '<p class="loading-message" style="color:red;">Errore.</p>'; }
    }

    function showGallery(folderIndex) { /* ... (logica invariata) ... */ try { const folder = foldersData[folderIndex]; if (!folder) return; currentFolderIndex = folderIndex; galleryTitle.textContent = folder.name || `Galleria ${folderIndex + 1}`; photoGrid.innerHTML = ''; currentPhotos = folder.photos || []; if (currentPhotos.length > 0) { currentPhotos.forEach((photoData, photoIndex) => { if (!photoData || !photoData.image) return; const cont = document.createElement('div'); cont.className = 'photo-item-container'; cont.setAttribute('role', 'button'); cont.tabIndex = 0; const img = document.createElement('img'); img.className = 'photo-item'; img.src = photoData.image; img.alt = photoData.caption || `Immagine ${photoIndex + 1} da ${folder.name || ''}`; img.loading = 'lazy'; img.onerror = () => { img.alt = `Errore caricamento: ${photoData.image}`; cont.style.border = '2px dashed #ff6b6b'; }; const handler = () => openLightbox(photoIndex); cont.addEventListener('click', handler); cont.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }}); cont.appendChild(img); photoGrid.appendChild(cont); }); } else { photoGrid.innerHTML = '<p class="loading-message">Nessuna immagine in questa sezione.</p>'; } switchView(galleryView); } catch (error) { console.error("Errore showGallery:", error); photoGrid.innerHTML = '<p class="loading-message" style="color:red;">Errore galleria.</p>'; } }
    function updateLightboxContent(photoIndex) { /* ... (logica invariata) ... */ if (photoIndex < 0 || photoIndex >= currentPhotos.length) return; currentPhotoIndex = photoIndex; const photoData = currentPhotos[currentPhotoIndex]; if (!lightboxImg) return; lightboxImg.style.opacity = '1'; lightboxImg.style.transform = 'none'; lightboxImg.src = photoData.image; lightboxImg.alt = photoData.caption || `Immagine ${currentPhotoIndex + 1}`; if (lightboxCaption) lightboxCaption.textContent = photoData.caption || ''; if(lightboxAudio){ lightboxAudio.pause(); lightboxAudio.currentTime = 0; if(photoData.audio){ lightboxAudio.src = photoData.audio; lightboxAudio.style.display = 'block'; setTimeout(()=>{ const p = lightboxAudio.play(); if(p){ p.catch(e=>console.warn("Autoplay bloccato",e)); } }, 50); } else { lightboxAudio.src = ''; lightboxAudio.style.display = 'none'; } } if(lightboxPrev) lightboxPrev.classList.toggle('disabled', currentPhotoIndex === 0); if(lightboxNext) lightboxNext.classList.toggle('disabled', currentPhotoIndex === currentPhotos.length - 1); }
    function showPrevImage() { /* ... (invariata) ... */ if (currentPhotoIndex > 0) updateLightboxContent(currentPhotoIndex - 1); }
    function showNextImage() { /* ... (invariata) ... */ if (currentPhotoIndex < currentPhotos.length - 1) updateLightboxContent(currentPhotoIndex + 1); }
    function openLightbox(photoIndex) { /* ... (invariata) ... */ if (!lightbox.classList.contains('hidden') || !currentPhotos || currentPhotos.length === 0) return; updateLightboxContent(photoIndex); lightbox.classList.remove('hidden'); document.body.style.overflow = 'hidden'; if(lightboxClose) lightboxClose.focus(); }
    function closeLightbox() { /* ... (invariata) ... */ if (lightbox.classList.contains('hidden')) return; if (lightboxAudio) { lightboxAudio.pause(); lightboxAudio.src = ''; } lightbox.classList.add('hidden'); document.body.style.overflow = ''; try { const trigger = photoGrid?.querySelector(`.photo-item-container:nth-child(${currentPhotoIndex + 1})`); if(trigger) trigger.focus(); } catch(e){} }

    function initFolderTiltInteraction() {
        // ... (logica attivazione invariata) ...
        if (isTiltActive || !folderGrid || folderItems.length === 0) return;
        const isTouchEventSupported = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (!isTouchEventSupported) {
            console.log("Attivazione tilt con MouseMove (document)");
            if (!throttledMouseMoveHandler) {
                 throttledMouseMoveHandler = throttle(handleMouseMove, 50);
            }
            document.addEventListener('mousemove', throttledMouseMoveHandler);
            isTiltActive = true;
        } else {
            console.log("Tilt non attivato (dispositivo touch).");
        }
    }

    function removeFolderTiltInteraction() {
        // ... (logica disattivazione invariata) ...
        if (!isTiltActive) return;
        console.log("Disattivazione tilt");
        if (throttledMouseMoveHandler) {
            document.removeEventListener('mousemove', throttledMouseMoveHandler);
        }
        cancelAnimationFrame(tiltRAF);
        folderItems.forEach(item => {
            item.style.transform = '';
            item.style.zIndex = '';
        });
        isTiltActive = false;
    }


    // --- MODIFICATA: Gestisce MouseMove per Tilt, Scala (a 70px) e Z-index ---
    function handleMouseMove(e) {
         if (!isTiltActive) return;

         cancelAnimationFrame(tiltRAF);

         tiltRAF = requestAnimationFrame(() => {
            const maxRotation = 20; // Gradi massimi rotazione
            const maxScale = 1.8; // Scala massima (150%)
            // --- MODIFICATO: Imposta la distanza di inizio scaling a 70px ---
            const scaleStartDistance = 230; // Distanza (px) a cui inizia lo scaling

            let closestItem = null;
            let minDistance = Infinity;

            folderItems.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                const itemCenterX = itemRect.left + itemRect.width / 2;
                const itemCenterY = itemRect.top + itemRect.height / 2;
                const mouseX = e.clientX - itemCenterX;
                const mouseY = e.clientY - itemCenterY;

                // --- Calcola Rotazione ---
                const tiltFactor = 0.05;
                let rotateX = -mouseY * tiltFactor;
                let rotateY = mouseX * tiltFactor;
                rotateX = Math.max(-maxRotation, Math.min(maxRotation, rotateX));
                rotateY = Math.max(-maxRotation, Math.min(maxRotation, rotateY));

                // --- Calcola Scala e Distanza ---
                const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
                let scale = 1.0; // Scala di default

                // Applica scaling solo se la distanza è minore della soglia
                if (distance < scaleStartDistance) {
                    // Calcola quanto siamo vicini rispetto alla soglia (da 0 a 1)
                    // 1 = distanza 0 (centro), 0 = distanza >= scaleStartDistance
                    const closenessFactor = 1 - (distance / scaleStartDistance);
                    // Mappa il fattore di vicinanza alla scala desiderata [1.0, maxScale]
                    scale = 1 + (maxScale - 1) * closenessFactor;
                }
                // Assicura che la scala non superi mai maxScale (sicurezza extra)
                scale = Math.min(scale, maxScale);


                // Applica la trasformazione (rotazione + scala)
                item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

                // --- Gestione Z-index ---
                item.style.zIndex = ''; // Resetta z-index
                if (distance < minDistance) {
                    minDistance = distance;
                    closestItem = item;
                }
            });

            // Imposta lo z-index più alto solo per l'elemento più vicino
            if (closestItem) {
                closestItem.style.zIndex = '10';
            }
         });
    }


    // --- Impostazione Event Listener (Esistenti) ---
    console.log("Impostazione event listeners esistenti...");
    try {
        backButton.addEventListener('click', () => { closeLightbox(); switchView(folderView); });
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => { const c = e.target.closest('.lightbox-container, .lightbox-nav, .lightbox-close'); if (!c && e.target === lightbox) closeLightbox(); });
        lightboxPrev.addEventListener('click', showPrevImage);
        lightboxNext.addEventListener('click', showNextImage);
        document.addEventListener('keydown', (e) => { if (!lightbox.classList.contains('hidden')) { if (e.key === 'Escape') closeLightbox(); else if (e.key === 'ArrowLeft') showPrevImage(); else if (e.key === 'ArrowRight') showNextImage(); } });
        if (lightboxAudio) { /* ... (gestori audio invariati) ... */ lightboxAudio.onerror = (e) => { console.error('--- ERRORE AUDIO ---', lightboxAudio.src, e); lightboxAudio.style.display = 'none'; }; lightboxAudio.onplay = () => console.log("Audio PLAY:", lightboxAudio.src); lightboxAudio.onpause = () => { if (!lightboxAudio.ended && lightboxAudio.currentTime > 0) console.log("Audio PAUSE:", lightboxAudio.src); }; lightboxAudio.onended = () => console.log("Audio END:", lightboxAudio.src); }
        if (lightboxImg) { /* ... (gestore img invariato) ... */ lightboxImg.onerror = () => { console.error("--- ERRORE IMG LIGHTBOX ---", lightboxImg.src); if (lightboxCaption) lightboxCaption.textContent = "Errore caricamento immagine."; lightboxImg.alt = "Errore caricamento immagine"; }; }
        console.log("Event listeners esistenti impostati.");
    } catch (error) {
        console.error("Errore impostazione listeners:", error);
    }

    // --- Inizializzazione Pagina ---
    console.log("Inizializzazione pagina...");
    try {
        updateFooterYear();
        folderView.style.display = 'block';
        folderView.classList.add('active');
        galleryView.style.display = 'none';
        mainElement.classList.remove('gallery-active');
        displayFolders();
        initFolderTiltInteraction(); // Attiva il tilt all'inizio se siamo su desktop
        console.log("Inizializzazione completata.");
    } catch (error) {
        console.error("Errore durante l'inizializzazione:", error);
    }

     window.addEventListener('resize', throttle(updateContentAreaHeight, 200));

}); // Fine wrapper DOMContentLoaded
