
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initLanguageSwitcher();
    initScrollAnimations();
    initReviewsSlider();
    initForm();
    initChatWidget();
    initVideoModal();
});


function initThemeToggle() {
    const themeBtn = document.querySelector('.theme-toggle');
    if (!themeBtn) return;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Spin animation
        const icon = themeBtn.querySelector('i:not([style*="display: none"])');
        if (icon) {
            icon.style.transition = 'transform 0.4s ease';
            icon.style.transform = 'rotate(180deg)';
            setTimeout(() => { icon.style.transform = ''; }, 400);
        }
    });
}

const translations = {
    de: {
        subtitle: "Dr. med. dent. · Zürich · Seit 1990",
        headline: "Prävention heute,<br>Selbstvertrauen fürs Leben.",
        description: "Seit 1990 gehen wir bei dentist.ch neue Wege: mit modernsten Technologien, ganzheitlicher Zahnmedizin und einem klaren Fokus auf Vorbeugung statt Reparatur.",
        follow: "Folgen",
        book: "Termin buchen",
        vsl_title: "WILLKOMMEN",
        srv_cerec: "Restaurationen am gleichen Tag",
        srv_xray_title: "3D-Röntgen & Laser",
        srv_xray_desc: "Präzisionsdiagnostik",
        srv_aligner: "Unsichtbare Zahnspange",
        srv_implants_title: "Implantate",
        srv_implants_desc: "Dauerhafte Lösungen",
        srv_airflow_title: "Air-Flow & Prophylaxe",
        srv_airflow_desc: "Sanfte Reinigung & Vorsorge",
        srv_veneers: "Ästhetische Verblendschalen",
        aw_exp: "30+ Jahre Erfahrung",
        aw_sso: "SSO Mitglied",
        aw_tech: "Modernste Technik",
        aw_focus: "Patientenfokus",
        reviews_title: "BEWERTUNGEN",
        based_on: "Basierend auf 33 Bewertungen",
        contact_title: "KONTAKT",
        form_name: "Ihr Name",
        form_email: "E-Mail-Adresse",
        form_phone: "Telefonnummer",
        map_title: "SO FINDEN SIE UNS",
        open_in_maps: "In Maps öffnen",
        hours_title: "Öffnungszeiten",
        footer_slogan: "Prävention heute, Selbstvertrauen fürs Leben.",
        copyright: "© 2026 dentist.ch - Alle Rechte vorbehalten",
        chat_title: "SmileYourself KI",
        chat_status: "Online",
        chat_placeholder: "Stellen Sie eine Frage...",
        chat_greeting: "Hallo! 👋 Ich bin der SmileYourself-Assistent von dentist.ch. Wie kann ich Ihnen heute helfen?",
        chat_response: "Danke für Ihre Nachricht! Unser Team wird sich in Kürze bei Ihnen melden. In der Zwischenzeit können Sie gerne online einen Termin buchen."
    },
    en: {
        subtitle: "Dr. med. dent. · Zurich · Since 1990",
        headline: "Prevention today,<br>Confidence for life.",
        description: "Since 1990, dentist.ch has been taking new paths: with cutting-edge technologies, holistic dentistry, and a clear focus on prevention instead of repair.",
        follow: "Follow",
        book: "Book Appointment",
        vsl_title: "WELCOME",
        srv_cerec: "Same-Day Restorations",
        srv_xray_title: "3D X-Ray & Laser",
        srv_xray_desc: "Precision Diagnostics",
        srv_aligner: "Invisible Braces",
        srv_implants_title: "Implants",
        srv_implants_desc: "Permanent Solutions",
        srv_airflow_title: "Air-Flow & Prophylaxis",
        srv_airflow_desc: "Gentle Cleaning & Care",
        srv_veneers: "Aesthetic Veneers",
        aw_exp: "30+ Years Experience",
        aw_sso: "SSO Member",
        aw_tech: "State-of-the-Art Tech",
        aw_focus: "Patient Focus",
        reviews_title: "REVIEWS",
        based_on: "Based on 33 Reviews",
        contact_title: "CONTACT",
        form_name: "Your Name",
        form_email: "Email Address",
        form_phone: "Phone Number",
        map_title: "HOW TO FIND US",
        open_in_maps: "Open in Maps",
        hours_title: "Opening Hours",
        footer_slogan: "Prevention today, Confidence for life.",
        copyright: "© 2026 dentist.ch - All rights reserved",
        chat_title: "SmileYourself AI",
        chat_status: "Online",
        chat_placeholder: "Ask a question...",
        chat_greeting: "Hello! 👋 I am the SmileYourself assistant from dentist.ch. How can I help you today?",
        chat_response: "Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to book an appointment online."
    },
    it: {
        subtitle: "Dr. med. dent. · Zurigo · Dal 1990",
        headline: "Prevenzione oggi,<br>Fiducia per la vita.",
        description: "Dal 1990 dentist.ch percorre nuove strade: con tecnologie all'avanguardia, odontoiatria olistica e un chiaro focus sulla prevenzione.",
        follow: "Segui",
        book: "Prenota Appuntamento",
        vsl_title: "BENVENUTI",
        srv_cerec: "Restauri in Giorno Stesso",
        srv_xray_title: "Raggi X 3D e Laser",
        srv_xray_desc: "Diagnostica di Precisione",
        srv_aligner: "Apparecchi Invisibili",
        srv_implants_title: "Impianti",
        srv_implants_desc: "Soluzioni Permanenti",
        srv_airflow_title: "Air-Flow e Profilassi",
        srv_airflow_desc: "Pulizia Delicata e Cura",
        srv_veneers: "Faccette Estetiche",
        aw_exp: "30+ Anni Esperienza",
        aw_sso: "Membro SSO",
        aw_tech: "Tecnologia Avanzata",
        aw_focus: "Focus sul Paziente",
        reviews_title: "RECENSIONI",
        based_on: "Basato su 33 Recensioni",
        contact_title: "CONTATTO",
        form_name: "Il Tuo Nome",
        form_email: "Indirizzo Email",
        form_phone: "Numero di Telefono",
        map_title: "COME TROVARCI",
        open_in_maps: "Apri in Maps",
        hours_title: "Orari di Apertura",
        footer_slogan: "Prevenzione oggi, Fiducia per la vita.",
        copyright: "© 2026 dentist.ch - Tutti i diritti riservati",
        chat_title: "SmileYourself IA",
        chat_status: "In Linea",
        chat_placeholder: "Fai una domanda...",
        chat_greeting: "Ciao! 👋 Sono l'assistente SmileYourself di dentist.ch. Come posso aiutarti oggi?",
        chat_response: "Grazie per il tuo messaggio! Il nostro team ti contatterà a breve. Nel frattempo, sentiti libero di prenotare un appuntamento online."
    },
    fr: {
        subtitle: "Dr. med. dent. · Zurich · Depuis 1990",
        headline: "Prévention aujourd'hui,<br>Confiance pour la vie.",
        description: "Depuis 1990, dentist.ch innove : avec des technologies de pointe, une dentisterie holistique et l'accent sur la prévention.",
        follow: "Suivre",
        book: "Prendre RDV",
        vsl_title: "BIENVENUE",
        srv_cerec: "Restaurations le jour même",
        srv_xray_title: "Radio 3D et Laser",
        srv_xray_desc: "Diagnostic de précision",
        srv_aligner: "Appareils Invisibles",
        srv_implants_title: "Implants",
        srv_implants_desc: "Solutions Permanentes",
        srv_airflow_title: "Air-Flow et Prophylaxie",
        srv_airflow_desc: "Nettoyage en douceur",
        srv_veneers: "Facettes Esthétiques",
        aw_exp: "30+ Ans d'Expérience",
        aw_sso: "Membre SSO",
        aw_tech: "Technologie de pointe",
        aw_focus: "Axé sur le Patient",
        reviews_title: "AVIS",
        based_on: "Basé sur 33 Avis",
        contact_title: "CONTACT",
        form_name: "Votre Nom",
        form_email: "Adresse E-mail",
        form_phone: "Numéro de Téléphone",
        map_title: "COMMENT NOUS TROUVER",
        open_in_maps: "Ouvrir dans Maps",
        hours_title: "Heures d'Ouverture",
        footer_slogan: "Prévention aujourd'hui, Confiance pour la vie.",
        copyright: "© 2026 dentist.ch - Tous droits réservés",
        chat_title: "SmileYourself IA",
        chat_status: "En Ligne",
        chat_placeholder: "Poser une question...",
        chat_greeting: "Bonjour! 👋 Je suis l'assistant SmileYourself de dentist.ch. Comment puis-je vous aider aujourd'hui?",
        chat_response: "Merci pour votre message ! Notre équipe vous contactera sous peu. En attendant, n'hésitez pas à prendre rendez-vous en ligne."
    }
};

function initLanguageSwitcher() {
    const btns = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('lang') || 'en'; // Changed default to English

    updateLangUI(savedLang);
    applyTranslations(savedLang);

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            updateLangUI(lang);
            applyTranslations(lang);
            localStorage.setItem('lang', lang);
        });
    });

    function updateLangUI(activeLang) {
        btns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === activeLang);
        });
    }

    function applyTranslations(lang) {
        const dict = translations[lang] || translations['en']; 
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (dict[key]) {
                el.placeholder = dict[key];
            }
        });

        const chatGreetingEl = document.querySelector('.chat-msg.bot.greeting');
        if (chatGreetingEl && dict['chat_greeting']) {
            chatGreetingEl.innerHTML = dict['chat_greeting'];
        }
    }
}


function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-up');

    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
}

const googleReviews = [
    {
        name: "Pablo Alvarez",
        text: "Dr Devigus is a dentist who works moved by passion. His works are always master pieces. He thinks first about the long term solution, as well optimizing price quality.",
        rating: 5
    },
    {
        name: "Alexander Jaehne",
        text: "Our entire family has had only the best experiences with Dr. Devigus and his team over the years. They're extremely competent, always up-to-date with the latest technology.",
        rating: 5
    },
    {
        name: "Robert Kovacs",
        text: "I never imagined that a dentist's office could be a pleasant place. This practice has taught me otherwise. Humane, empathetic, and understanding.",
        rating: 5
    },
    {
        name: "C. F.",
        text: "Dr. Devigus is the best. I'm missing part of my front tooth from a childhood accident. My tooth was perfectly filled and looks even better than before.",
        rating: 5
    },
    {
        name: "Sarah Joel",
        text: "Friendly, competent, and professional. Over the years, I've been a customer of several different dental hygienists and I can say she is extremely professional.",
        rating: 5
    }
];

function initReviewsSlider() {
    const slider = document.getElementById('reviewsSlider');
    const pagination = document.getElementById('reviewsPagination');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (!slider || !pagination) return;

    googleReviews.forEach((review, index) => {
        const slide = document.createElement('div');
        slide.className = 'review-slide';

        let starsHtml = '';
        for (let i = 0; i < review.rating; i++) starsHtml += '<i class="fas fa-star" style="color:#fbbc05"></i>';

        slide.innerHTML = `
            <div style="margin-bottom: 12px">${starsHtml}</div>
            <p class="review-text">"${review.text}"</p>
            <p class="review-author">${review.name}</p>
        `;
        slider.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = index === 0 ? 'dot active' : 'dot';
        dot.dataset.index = index;
        dot.addEventListener('click', () => goToSlide(index));
        pagination.appendChild(dot);
    });

    let currentIndex = 0;
    let autoPlayInterval;

    function goToSlide(index) {
        if (index < 0) index = googleReviews.length - 1;
        if (index >= googleReviews.length) index = 0;

        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        document.querySelectorAll('.reviews-pagination .dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });

        resetAutoPlay();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    startAutoPlay(); 
}


function initForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        const originalText = btn.innerHTML;

        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Senden...';
        btn.style.opacity = '0.8';

        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Anfrage gesendet';
            btn.style.background = '#10b981'; 
            form.reset();

            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.opacity = '1';
            }, 3000);
        }, 1500);
    });
}


function initChatWidget() {
    const toggleBtn = document.getElementById('chatToggleBtn');
    const widget = document.getElementById('chatWidget');
    const closeBtn = document.querySelector('.chat-close');
    const form = document.getElementById('chatForm');
    const input = document.getElementById('chatInput');
    const body = document.getElementById('chatBody');
    let hasGreeted = false;

    if (!toggleBtn || !widget) return;

    function toggleChat() {
        const isActive = widget.classList.toggle('active');
        if (isActive) {
            toggleBtn.classList.add('hidden');
            if (!hasGreeted) {
                setTimeout(() => {
                    const lang = localStorage.getItem('lang') || 'en';
                    const greetingText = translations[lang]['chat_greeting'];
                    addMessage(greetingText, 'bot greeting'); 
                    hasGreeted = true;
                }, 400);
            }
            setTimeout(() => input.focus(), 300);
        } else {
            toggleBtn.classList.remove('hidden');
        }
    }

    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        input.value = '';

        setTimeout(() => {
            const lang = localStorage.getItem('lang') || 'en';
            const responseText = translations[lang]['chat_response'];
            addMessage(responseText, 'bot');
        }, 1000);
    });

    function addMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `chat-msg ${sender}`;
        msg.innerHTML = text;
        body.appendChild(msg);
        body.scrollTop = body.scrollHeight; 
    }
}


function initVideoModal() {
    const cards = document.querySelectorAll('.service-card[data-ig]');
    const modal = document.getElementById('videoModal');
    const closeBtn = document.querySelector('.video-modal-close');
    const backdrop = document.querySelector('.video-modal-backdrop');
    const modalBody = document.getElementById('videoModalBody');

    if (!modal || cards.length === 0) return;

    function openModal(url) {
        document.body.style.overflow = 'hidden';

        modalBody.innerHTML = `<iframe src="${url}" frameborder="0" scrolling="no" allowtransparency="true" allowfullscreen="true" style="border: none;"></iframe>`;

        modal.classList.add('active');
    }

    function closeModal() {
        document.body.style.overflow = '';
        modal.classList.remove('active');
        setTimeout(() => {
            modalBody.innerHTML = '';
        }, 300);
    }

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const url = card.getAttribute('data-ig');
            if (url) openModal(url);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
}
