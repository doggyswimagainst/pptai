// Cazadores de Ciberamenazas - Core Logic & Data
const casesData = [
    {
        id: 1,
        tag: "Módulo 1: Engaños Masivos",
        name: "Courier Fantasma",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
        situation: "Recibes un correo electrónico o SMS notificando que un paquete no pudo ser entregado y debes acceder a un enlace para agendar la entrega.",
        alert: "Enlaces que dirigen a dominios extraños o no oficiales del courier (ej. <strong>envios-correos-chile.xyz</strong> en lugar de <strong>correos.cl</strong>).",
        action: "Nunca accedas a enlaces de correos o mensajes no esperados. Si tienes dudas, ingresa al sitio oficial de la empresa de transporte de forma manual para revisar el estado del envío."
    },
    {
        id: 2,
        tag: "Módulo 1: Engaños Masivos",
        name: "SMS Banco Bloqueado (Smishing)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M12 7v4"></path><path d="M12 15h.01"></path></svg>`,
        situation: "Te llega un mensaje de texto SMS alertando que tus claves bancarias o cuentas han sido bloqueadas temporalmente y debes reactivarlas ingresando a un enlace.",
        alert: "Las instituciones bancarias <strong>nunca</strong> envían enlaces directos de inicio de sesión (login) a través de mensajes de texto (SMS).",
        action: "Ignora el mensaje, bloquea el remitente y entra a tu cuenta directamente desde la aplicación oficial del banco instalada en tu teléfono."
    },
    {
        id: 3,
        tag: "Módulo 1: Engaños Masivos",
        name: "WhatsApp \"Hola Papá/Mamá\"",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
        situation: "Recibes un mensaje de un número desconocido haciéndose pasar por tu hijo/a, alegando que cambió de número y que necesita una transferencia urgente por un problema grave.",
        alert: "El estafador explota la urgencia emocional y el afecto para evitar que pienses racionalmente antes de enviar dinero.",
        action: "Corta la comunicación de inmediato. Llama directamente por voz al número de contacto habitual de tu hijo/a para corroborar la información. Establezcan una 'palabra clave familiar' para emergencias."
    },
    {
        id: 4,
        tag: "Módulo 1: Engaños Masivos",
        name: "Llamada \"Ejecutivo de Fraude\"",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
        situation: "Te llama un supuesto ejecutivo del banco alertando sobre un 'fraude en curso' en tu cuenta y te dice que para revertir los cobros debes dictarle un código que te llegará al celular.",
        alert: "La solicitud telefónica de claves de acceso o códigos OTP (contraseñas temporales que te llegan por SMS).",
        action: "Corta la llamada inmediatamente. Las instituciones financieras <strong>nunca</strong> te pedirán tus contraseñas ni códigos OTP por teléfono para cancelar transacciones."
    },
    {
        id: 5,
        tag: "Módulo 1: Engaños Masivos",
        name: "Falsa Multa (TAG/Juzgado)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
        situation: "Recibes un correo con el membrete de una autopista o del Poder Judicial informando sobre una multa impaga inminente y solicitando descargar un archivo para ver los detalles.",
        alert: "Las notificaciones formales de multas <strong>nunca</strong> llegan por correo electrónico con archivos adjuntos ejecutables o comprimidos (como <strong>.zip</strong> o <strong>.exe</strong>).",
        action: "Elimina el correo de inmediato. No abras ningún adjunto ni hagas clic en sus enlaces. Consulta directamente en el portal oficial de la autopista o del Poder Judicial."
    },
    {
        id: 6,
        tag: "Módulo 2: Riesgos Profesionales",
        name: "CEO Fraud (BEC)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
        situation: "Recibes un correo supuestamente redactado por el Director o Gerente de la institución solicitando de manera urgente y confidencial una transferencia de fondos inusual.",
        alert: "Presión de tiempo extrema, solicitud de eludir los controles internos o un cambio sutil en la dirección de correo electrónico del remitente.",
        action: "Establece y sigue estrictamente un canal de doble verificación para transferencias financieras inusuales. Llama al emisor por una vía telefónica de confianza antes de procesar el pago."
    },
    {
        id: 7,
        tag: "Módulo 2: Riesgos Profesionales",
        name: "CV Malicioso",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
        situation: "El área de Reclutamiento o Administración recibe una postulación de trabajo con un archivo adjunto que simula ser un currículum pero requiere habilitar permisos especiales para leerlo.",
        alert: "Cualquier archivo de postulación que no esté en formato PDF estándar o que solicite <strong>'Habilitar macros'</strong> o <strong>'Habilitar edición'</strong> al abrirlo.",
        action: "Rechaza la postulación. El Hospital solo procesa currículums en formato PDF. Nunca habilites macros en documentos recibidos por correo de remitentes desconocidos."
    },
    {
        id: 8,
        tag: "Módulo 2: Riesgos Profesionales",
        name: "Phishing de Credenciales (Nube)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
        situation: "Haces clic en un enlace de colaboración documental en la nube y se te presenta una pantalla idéntica a Microsoft 365 o Google Workspace pidiendo tus claves corporativas.",
        alert: "URLs sospechosas que no corresponden al dominio oficial del portal de autenticación corporativo.",
        action: "No introduzcas tus contraseñas. Valida siempre la dirección URL en la barra del navegador. Asegúrate de tener habilitada la autenticación de doble factor (MFA/2FA) para tu cuenta institucional."
    },
    {
        id: 9,
        tag: "Módulo 2: Riesgos Profesionales",
        name: "Man-in-the-Middle (Wi-Fi Público)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`,
        situation: "Te conectas a la red Wi-Fi libre de una cafetería u hospital para revisar y responder correos corporativos y reportes legales confidenciales.",
        alert: "Redes Wi-Fi públicas y abiertas que no requieren contraseña, las cuales son propensas a que delincuentes intercepten el tráfico de datos.",
        action: "Utiliza siempre la VPN corporativa al conectarte desde redes externas al Hospital, o comparte internet de forma segura desde los datos móviles de tu teléfono celular."
    },
    {
        id: 10,
        tag: "Módulo 2: Riesgos Profesionales",
        name: "USB \"Regalado\"",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><path d="M6 12h12"></path></svg>`,
        situation: "Encuentras un pendrive USB de aspecto moderno y elegante botado en el pasillo, en la sala de espera del Hospital, o recibes uno de regalo promocional sin procedencia clara.",
        alert: "Introducir hardware desconocido en tu equipo laboral sin verificar su procedencia física.",
        action: "No conectes el dispositivo bajo ninguna circunstancia. Podría contener scripts autoejecutables maliciosos que infecten la red corporativa. Entrégalo de inmediato al equipo de soporte de TI."
    },
    {
        id: 11,
        tag: "Módulo 3: Salud y Cobranzas",
        name: "Falso Recordatorio Médico",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`,
        situation: "Un paciente o funcionario recibe un aviso de cita médica pendiente con un enlace que descarga una aplicación directa en formato .APK en lugar de redirigir a las tiendas de apps.",
        alert: "Enlaces directos de descarga para instalar archivos de aplicación (como <strong>.APK</strong>) fuera de los portales autorizados.",
        action: "Descarga e instala aplicaciones del Hospital Metropolitano única y exclusivamente desde las tiendas oficiales (Google Play Store o Apple App Store). Ignora links externos de descarga."
    },
    {
        id: 12,
        tag: "Módulo 3: Salud y Cobranzas",
        name: "Falsa Actualización de Datos",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        situation: "Te contactan supuestamente de la administración de la salud para actualizar tus registros, exigiendo datos personales y clínicos sensibles bajo la amenaza de bloquear tu atención.",
        alert: "Solicitud directa de antecedentes de salud personales, recetas, o números de contacto a través de canales no regulados.",
        action: "La institución de salud <strong>nunca</strong> te pedirá contraseñas, tokens ni datos clínicos críticos a través de llamadas salientes. Acude siempre a las sucursales físicas o utiliza el portal del paciente oficial."
    },
    {
        id: 13,
        tag: "Módulo 3: Salud y Cobranzas",
        name: "Cobrador Extorsivo",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
        situation: "Recibes correos o mensajes amenazantes de cobro judicial por supuestas deudas hospitalarias acumuladas, ofreciendo descuentos agresivos si pagas mediante un enlace provisto.",
        alert: "Correos que generan pánico inmediato por acciones judiciales inminentes y que proveen enlaces de pago informales.",
        action: "Cierra el mensaje de alerta. Ingresa directamente al portal oficial de finanzas o cobranza del Hospital Metropolitano o consulta con su área de atención comercial para verificar si existe alguna deuda real."
    },
    {
        id: 14,
        tag: "Módulo 3: Salud y Cobranzas",
        name: "Falso Soporte Técnico",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
        situation: "Recibes una llamada o mensaje de un supuesto soporte informático interno, indicando que hay problemas en tu PC de trabajo y solicitando que instales un software de control remoto (como AnyDesk).",
        alert: "Solicitud de acceso remoto o credenciales de red que no fue iniciada por ti mediante un ticket de soporte oficial.",
        action: "Rechaza la solicitud de acceso remoto. Llama directamente a la mesa de ayuda oficial de TI del Hospital para corroborar si la solicitud es legítima."
    },
    {
        id: 15,
        tag: "Módulo 3: Salud y Cobranzas",
        name: "Bonos Pendientes",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
        situation: "Te contactan por canales informales anunciando que tienes un bono de dinero estatal de salud o previsión retenido y te piden tus claves bancarias para realizar la transferencia.",
        alert: "Ofrecimientos financieros inesperados que requieren la entrega inmediata de información de cuentas o accesos bancarios.",
        action: "Los beneficios y bonos estatales se procesan única y exclusivamente a través de los sitios web con terminación oficial <strong>.gob.cl</strong> mediante tu ClaveÚnica. Nadie te contactará por chat privado para 'regalarte' fondos."
    }
];

// App Navigation & Interaction State
let currentSlideIndex = 0; // 0: Cover, 1..15: Cases, 16: Social Recovery, 17: Checklist, 18: Closing
const scannedSlides = new Set();
const checkedRules = new Set();

// DOM Elements
const sidebar = document.getElementById("sidebar");
const navMenu = document.getElementById("nav-menu");
const mainViewport = document.getElementById("main-viewport");
const slideDeck = document.getElementById("slide-deck");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const progressInfo = document.getElementById("progress-info");
const menuToggle = document.getElementById("menu-toggle");

// Initialize application
function init() {
    renderSidebarMenu();
    renderSlides();
    updateNavigation();
    setupEventListeners();
}

// Generate the sidebar items dynamically
function renderSidebarMenu() {
    navMenu.innerHTML = "";

    // Add Cover item
    const coverItem = document.createElement("div");
    coverItem.className = `nav-item ${currentSlideIndex === 0 ? 'active' : ''}`;
    coverItem.innerHTML = `<span class="nav-num">00</span> <span>Portada Principal</span>`;
    coverItem.addEventListener("click", () => navigateTo(0));
    navMenu.appendChild(coverItem);

    // Group cases by module tags
    let currentTag = "";
    casesData.forEach((c, idx) => {
        if (c.tag !== currentTag) {
            currentTag = c.tag;
            const tagLabel = document.createElement("div");
            tagLabel.className = "nav-module-title";
            tagLabel.textContent = currentTag;
            navMenu.appendChild(tagLabel);
        }

        const caseItem = document.createElement("div");
        caseItem.className = `nav-item ${currentSlideIndex === idx + 1 ? 'active' : ''}`;
        const slideNum = String(idx + 1).padStart(2, '0');
        caseItem.innerHTML = `<span class="nav-num">${slideNum}</span> <span>${c.name}</span>`;
        caseItem.addEventListener("click", () => navigateTo(idx + 1));
        navMenu.appendChild(caseItem);
    });

    // Add Social Recovery Assistant (Slide 16)
    const recoveryItem = document.createElement("div");
    recoveryItem.className = `nav-item ${currentSlideIndex === 16 ? 'active' : ''}`;
    recoveryItem.innerHTML = `<span class="nav-num">16</span> <span>Asistente de Recuperación (CSIRT)</span>`;
    recoveryItem.addEventListener("click", () => navigateTo(16));
    navMenu.appendChild(recoveryItem);

    // Add Checklist item (Slide 17)
    const checklistItem = document.createElement("div");
    checklistItem.className = `nav-item ${currentSlideIndex === 17 ? 'active' : ''}`;
    checklistItem.innerHTML = `<span class="nav-num">17</span> <span>Checklist de Supervivencia</span>`;
    checklistItem.addEventListener("click", () => navigateTo(17));
    navMenu.appendChild(checklistItem);

    // Add Closing item (Slide 18)
    const closingItem = document.createElement("div");
    closingItem.className = `nav-item ${currentSlideIndex === 18 ? 'active' : ''}`;
    closingItem.innerHTML = `<span class="nav-num">18</span> <span>Cierre y Certificado</span>`;
    closingItem.addEventListener("click", () => {
        if (checkedRules.size >= 3) {
            navigateTo(18);
        }
    });
    navMenu.appendChild(closingItem);
}

// Generate slides HTML dynamically
function renderSlides() {
    slideDeck.innerHTML = ""; // Clear container

    // 1. Portada (Slide 0)
    const coverSlide = document.createElement("div");
    coverSlide.id = "slide-0";
    coverSlide.className = `slide ${currentSlideIndex === 0 ? 'active' : ''} cover-slide`;
    coverSlide.innerHTML = `
        <div class="cover-badge">Ciberseguridad 2026</div>
        <h1 class="cover-title">Cazadores de Ciberamenazas:<br>15 Casos Reales en Chile</h1>
        <p class="cover-subtitle">Guía de supervivencia e inducción interactiva para profesionales de la salud y áreas legales.</p>
        <div class="cover-logo-container">
            <span class="cover-logo-label"></span>
            <img src="images/logo.png" alt="Hospital Metropolitano Logo" class="cover-logo" onerror="this.src='https://placehold.co/200x60/ffffff/0b2545?text=Hospital+Metropolitano'">
        </div>
    `;
    slideDeck.appendChild(coverSlide);

    // 2. Cases Slides (Slides 1 to 15)
    casesData.forEach((c, idx) => {
        const slideIdx = idx + 1;
        const caseSlide = document.createElement("div");
        caseSlide.id = `slide-${slideIdx}`;
        caseSlide.className = `slide ${currentSlideIndex === slideIdx ? 'active' : ''}`;
        caseSlide.innerHTML = `
            <div class="case-header">
                <div class="case-info">
                    <span class="case-tag">${c.tag} • CASO ${slideIdx}</span>
                    <h2 class="case-title">${c.name}</h2>
                </div>
                <div class="case-icon-wrapper">
                    ${c.icon}
                </div>
            </div>
            
            <div class="case-situation-card">
                <div class="situation-label">La Situación</div>
                <div class="situation-text">${c.situation}</div>
            </div>
            
            <div class="interactive-panel">
                <div class="scan-box" id="scan-box-${slideIdx}">
                    <div class="radar-container">
                        <div class="radar-sweep"></div>
                        <div class="radar-icon">
                            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
                        </div>
                    </div>
                    <button class="scan-btn" id="scan-btn-${slideIdx}">Escanear Amenaza</button>
                    <span class="scan-instruction">Haz clic para activar el radar de detección</span>
                </div>
                
                <div class="result-box" id="result-box-${slideIdx}">
                    <div class="alert-card">
                        <div class="alert-card-title">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            La Señal de Alerta
                        </div>
                        <div class="alert-card-text">${c.alert}</div>
                    </div>
                    
                    <div class="countermeasure-card">
                        <div class="countermeasure-title">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Acción Inmediata
                        </div>
                        <div class="countermeasure-text">${c.action}</div>
                    </div>
                </div>
            </div>
        `;
        slideDeck.appendChild(caseSlide);

        // Scan button handler
        const scanBox = caseSlide.querySelector(`#scan-box-${slideIdx}`);
        const scanBtn = caseSlide.querySelector(`#scan-btn-${slideIdx}`);
        const resultBox = caseSlide.querySelector(`#result-box-${slideIdx}`);

        // If it was already scanned in this session, keep it open
        if (scannedSlides.has(slideIdx)) {
            scanBtn.textContent = "Amenaza Detectada";
            scanBtn.disabled = true;
            resultBox.classList.add("active");
        }

        const triggerScan = () => {
            if (scannedSlides.has(slideIdx)) return;
            scanBox.classList.add("scanning");
            scanBtn.textContent = "Escaneando...";
            scanBtn.disabled = true;

            setTimeout(() => {
                scanBox.classList.remove("scanning");
                scanBtn.textContent = "Amenaza Detectada";
                resultBox.classList.add("active");
                scannedSlides.add(slideIdx);
            }, 1500);
        };

        scanBox.addEventListener("click", triggerScan);
        scanBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            triggerScan();
        });
    });

    // 3. Social Recovery Assistant (Slide 16)
    const socialSlide = document.createElement("div");
    socialSlide.id = "slide-16";
    socialSlide.className = `slide ${currentSlideIndex === 16 ? 'active' : ''}`;
    socialSlide.innerHTML = `
        <div class="case-header">
            <div class="case-info">
                <span class="case-tag">Herramienta Interactiva</span>
                <h2 class="case-title">Asistente de Recuperación de Cuentas</h2>
            </div>
            <div class="case-icon-wrapper" style="color: var(--primary);">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
        </div>
        
        <p class="cover-subtitle" style="text-align: left; max-width: 1000px; font-size: 0.95rem; margin-bottom: 8px;">
            Si has perdido el acceso a tus redes sociales, selecciona una plataforma para simular los pasos de recuperación recomendados por el CSIRT:
        </p>

        <div class="social-recovery-widget">
            <div class="social-tabs">
                <button class="social-tab tab-facebook active" data-network="facebook">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="margin-right:4px;"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                </button>
                <button class="social-tab tab-twitter" data-network="twitter">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="margin-right:4px;"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    Twitter (X)
                </button>
                <button class="social-tab tab-linkedin" data-network="linkedin">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="margin-right:4px;"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                </button>
             </div>
             
             <div class="recovery-content-panel" id="recovery-content-panel">
                 <!-- Creado dinámicamente -->
             </div>
         </div>
     `;
    slideDeck.appendChild(socialSlide);

    // Setup tab events
    const tabs = socialSlide.querySelectorAll(".social-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            updateSocialRecoveryWidget();
        });
    });
    // First load
    setTimeout(updateSocialRecoveryWidget, 50);

    // 4. Checklist Slide (Slide 17)
    const checklistSlide = document.createElement("div");
    checklistSlide.id = "slide-17";
    checklistSlide.className = `slide ${currentSlideIndex === 17 ? 'active' : ''}`;
    checklistSlide.innerHTML = `
        <div class="case-header">
            <div class="case-info">
                <span class="case-tag">Conclusión de la Inducción</span>
                <h2 class="case-title">Checklist de Supervivencia Digital</h2>
            </div>
            <div class="case-icon-wrapper" style="color: var(--tertiary);">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
        </div>
        
        <p class="cover-subtitle" style="text-align: left; max-width: 1000px;">
            Para obtener tu certificado de supervivencia digital, debes comprometerte con las 3 reglas de oro de seguridad del Hospital Metropolitano:
        </p>

        <div class="checklist-container">
            <div class="checklist-item" data-rule="1">
                <div class="checklist-checkbox">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div class="checklist-content">
                    <div class="checklist-rule-num">Regla de Oro #1</div>
                    <div class="checklist-rule-text">No hacer clic en enlaces sospechosos o de remitentes desconocidos.</div>
                </div>
            </div>
            
            <div class="checklist-item" data-rule="2">
                <div class="checklist-checkbox">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div class="checklist-content">
                    <div class="checklist-rule-num">Regla de Oro #2</div>
                    <div class="checklist-rule-text">Verificar cualquier solicitud inusual directamente por el canal oficial.</div>
                </div>
            </div>
            
            <div class="checklist-item" data-rule="3">
                <div class="checklist-checkbox">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div class="checklist-content">
                    <div class="checklist-rule-num">Regla de Oro #3</div>
                    <div class="checklist-rule-text">Nunca entregar códigos OTP ni contraseñas por teléfono.</div>
                </div>
            </div>
        </div>
    `;
    slideDeck.appendChild(checklistSlide);

    // Setup checklist triggers
    const checkItems = checklistSlide.querySelectorAll(".checklist-item");
    checkItems.forEach(item => {
        const ruleId = item.getAttribute("data-rule");
        if (checkedRules.has(ruleId)) {
            item.classList.add("checked");
        }
        item.addEventListener("click", () => {
            if (checkedRules.has(ruleId)) {
                checkedRules.delete(ruleId);
                item.classList.remove("checked");
            } else {
                checkedRules.add(ruleId);
                item.classList.add("checked");
            }
            updateNavigation();
        });
    });

    // 5. Closing & Certificate (Slide 18)
    const closingSlide = document.createElement("div");
    closingSlide.id = "slide-18";
    closingSlide.className = `slide ${currentSlideIndex === 18 ? 'active' : ''} closing-slide`;
    closingSlide.innerHTML = `
        <div class="certificate-card">
            <img src="images/logo.png" alt="Hospital Metropolitano" class="cert-logo" onerror="this.src='https://placehold.co/200x96/ffffff/0b2545?text=Hospital+Metropolitano'">
            <div style="font-size: 0.85rem; color: var(--primary); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; font-weight: 700;">Hospital Metropolitano<br><span style="color: var(--text-muted); font-size: 0.75rem; text-transform: none; font-weight: 400; letter-spacing: normal;">Seguridad de la Información y Ciberseguridad</span></div>
            <div class="cert-title">Certificado de Supervivencia Digital</div>
            <p class="cert-desc">Se otorga el presente reconocimiento por haber completado con éxito la capacitación interactiva y comprender las ciberamenazas más recurrentes de acuerdo con las directrices de seguridad.</p>
            <div class="cert-recipient" id="cert-recipient-name">Profesional del Hospital</div>
            <div class="cert-footer">
                <div>Fecha: 2026</div>
                <div class="cert-sign">Mesa de Ayuda Informática</div>
            </div>
        </div>
        
        <p class="cover-subtitle" style="font-weight: 600; color: var(--tertiary);">
            ¡Felicidades! La seguridad de la información es tarea de todos nosotros.
        </p>
        <button class="btn-restart" id="btn-restart-app">Reiniciar Capacitación</button>
    `;
    slideDeck.appendChild(closingSlide);

    document.getElementById("btn-restart-app").addEventListener("click", () => {
        scannedSlides.clear();
        checkedRules.clear();

        // Reset threat scan UI states
        document.querySelectorAll(".result-box").forEach(box => box.classList.remove("active"));
        document.querySelectorAll(".scan-btn").forEach(btn => {
            btn.textContent = "Escanear Amenaza";
            btn.disabled = false;
        });
        document.querySelectorAll(".checklist-item").forEach(item => item.classList.remove("checked"));

        navigateTo(0);
    });
}

// Function to render active social network recovery tab contents
function updateSocialRecoveryWidget() {
    const panel = document.getElementById("recovery-content-panel");
    if (!panel) return;

    const activeTab = document.querySelector(".social-tab.active");
    const network = activeTab ? activeTab.getAttribute("data-network") : "facebook";

    if (network === "facebook") {
        panel.innerHTML = `
            <div class="recovery-instruction-card">
                <strong>Recomendación CSIRT para Facebook:</strong> Accede al "Servicio de Ayuda" en el banner superior (símbolo de interrogación). Navega a <strong>Privacidad y seguridad</strong> y selecciona <strong>Cuentas falsas y robadas</strong>, luego selecciona "Creo que alguien hackeó mi cuenta".
            </div>
            <div class="recovery-interactive-area">
                <label style="font-size: 0.85rem; font-weight: 700; color: var(--primary); display:block; margin-bottom:6px;">Simular reporte de cuenta comprometida:</label>
                <input type="text" class="recovery-input" id="fb-profile-url" placeholder="Enlace a tu perfil de Facebook (ej: facebook.com/usuario)" style="margin-bottom:8px;">
                <textarea class="recovery-input" id="fb-details" placeholder="Describe los detalles de la suplantación o hackeo..." rows="2" style="margin-bottom:8px;"></textarea>
                <button class="recovery-button" id="fb-submit-btn" style="background-color: #1877F2;">Enviar Reporte Simulador</button>
            </div>
            <div class="recovery-step-indicator">
                <span>Estado: Listo para reportar</span>
                <span>Paso 1 de 2</span>
            </div>
        `;

        document.getElementById("fb-submit-btn").addEventListener("click", () => {
            const url = document.getElementById("fb-profile-url").value;
            if (!url) {
                alert("Por favor ingresa la URL de tu perfil.");
                return;
            }
            panel.querySelector(".recovery-interactive-area").innerHTML = `
                <div style="color: var(--tertiary); font-weight: 600; text-align: center; padding: 20px;">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 12px; display:inline-block;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <p>¡Formulario enviado con éxito a Facebook!</p>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;">El equipo de asistencia de Facebook revisará el reporte y se pondrá en contacto para verificar su identidad y restaurar el acceso.</p>
                </div>
            `;
            panel.querySelector(".recovery-step-indicator").innerHTML = `
                <span style="color: var(--tertiary); font-weight:700;">Reportado</span>
                <span>Paso 2 de 2</span>
            `;
        });
    }
    else if (network === "twitter") {
        panel.innerHTML = `
            <div class="recovery-instruction-card">
                <strong>Recomendación CSIRT para Twitter (X):</strong> 1. Solicita el restablecimiento de contraseña ingresando tu usuario/correo. 2. Si no funciona, solicita soporte directo en la sección "Cuenta Hackeada" del Centro de Ayuda.
            </div>
            <div class="recovery-interactive-area">
                <label style="font-size: 0.85rem; font-weight: 700; color: var(--primary); display:block; margin-bottom:6px;">Selecciona una opción de recuperación:</label>
                <select class="recovery-select" id="twitter-action-select" style="margin-bottom:8px;">
                    <option value="reset">Opción 1: Reestablecer contraseña por cuenta</option>
                    <option value="support">Opción 2: Contactar Soporte (Cuenta Hackeada)</option>
                </select>
                <div id="twitter-dynamic-form" style="margin-top: 6px; margin-bottom:8px;">
                    <input type="text" class="recovery-input" id="tw-identifier" placeholder="Ingresa tu correo, teléfono o usuario de Twitter">
                </div>
                <button class="recovery-button" id="tw-submit-btn" style="background-color: #1DA1F2;">Procesar</button>
            </div>
            <div class="recovery-step-indicator">
                <span>Estado: Selección de método</span>
                <span>Paso 1 de 2</span>
            </div>
        `;

        const select = document.getElementById("twitter-action-select");
        const dynamicForm = document.getElementById("twitter-dynamic-form");

        select.addEventListener("change", () => {
            if (select.value === "reset") {
                dynamicForm.innerHTML = `<input type="text" class="recovery-input" id="tw-identifier" placeholder="Ingresa tu correo, teléfono o usuario de Twitter">`;
            } else {
                dynamicForm.innerHTML = `
                    <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 8px;">Serás derivado a la sección de soporte de Twitter para Cuentas Hackeadas.</p>
                    <input type="text" class="recovery-input" id="tw-username" placeholder="Tu nombre de usuario (@usuario)" style="margin-bottom:6px;">
                    <input type="email" class="recovery-input" id="tw-email" placeholder="Correo electrónico de contacto">
                `;
            }
        });

        document.getElementById("tw-submit-btn").addEventListener("click", () => {
            const isReset = select.value === "reset";
            if (isReset) {
                const val = document.getElementById("tw-identifier").value;
                if (!val) { alert("Por favor ingresa tu identificador."); return; }
            } else {
                const username = document.getElementById("tw-username").value;
                const email = document.getElementById("tw-email").value;
                if (!username || !email) { alert("Por favor completa los campos."); return; }
            }

            panel.querySelector(".recovery-interactive-area").innerHTML = `
                <div style="color: var(--tertiary); font-weight: 600; text-align: center; padding: 20px;">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 12px; display:inline-block;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <p>¡Solicitud de recuperación procesada!</p>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;">${isReset ? 'Revisa tu correo electrónico para ingresar la clave de restablecimiento temporal.' : 'El equipo de seguridad de Twitter/X te enviará un correo de verificación.'}</p>
                </div>
            `;
            panel.querySelector(".recovery-step-indicator").innerHTML = `
                <span style="color: var(--tertiary); font-weight:700;">Solicitud Enviada</span>
                <span>Paso 2 de 2</span>
            `;
        });
    }
    else if (network === "linkedin") {
        panel.innerHTML = `
            <div class="recovery-instruction-card">
                <strong>Recomendación CSIRT para LinkedIn:</strong> Busca "Denunciar una cuenta pirateada" en el Centro de Ayuda o accede directamente a su formulario oficial de verificación de identidad.
            </div>
            <div class="recovery-interactive-area" id="linkedin-recovery-step">
                <label style="font-size: 0.85rem; font-weight: 700; color: var(--primary); display:block; margin-bottom:6px;">Simular búsqueda en Centro de Ayuda:</label>
                <div style="display: flex; gap: 8px; margin-bottom:8px;">
                    <input type="text" class="recovery-input" id="lk-search" placeholder="Escribe 'Denunciar una cuenta pirateada'...">
                    <button class="recovery-button" id="lk-search-btn" style="background-color: #0A66C2; flex-shrink:0;">Buscar</button>
                </div>
                <div id="lk-search-results" style="margin-top: 10px; display:none;">
                    <p style="font-size: 0.85rem; font-weight: 700; color: var(--primary); margin-bottom: 6px;">Resultado encontrado: "Denunciar cuenta pirateada en LinkedIn"</p>
                    <button class="recovery-button" id="lk-open-form-btn" style="background-color: #0A66C2;">Abrir Formulario de Denuncia</button>
                </div>
            </div>
            <div class="recovery-step-indicator">
                <span>Estado: Buscando ayuda</span>
                <span>Paso 1 de 3</span>
            </div>
        `;

        const searchBtn = document.getElementById("lk-search-btn");
        const searchInput = document.getElementById("lk-search");
        const resultsDiv = document.getElementById("lk-search-results");

        searchBtn.addEventListener("click", () => {
            const text = searchInput.value.toLowerCase().trim();
            if (text.includes("pirat") || text.includes("denunciar") || text.includes("hack") || text.includes("cuenta") || text !== "") {
                resultsDiv.style.display = "block";
                panel.querySelector(".recovery-step-indicator").innerHTML = `
                    <span>Estado: Resultado encontrado</span>
                    <span>Paso 2 de 3</span>
                `;
            } else {
                alert("Por favor ingresa un término de búsqueda para continuar.");
            }
        });

        panel.addEventListener("click", (e) => {
            if (e.target && e.target.id === "lk-open-form-btn") {
                panel.querySelector(".recovery-interactive-area").innerHTML = `
                    <label style="font-size: 0.85rem; font-weight: 700; color: var(--primary); display:block; margin-bottom:6px;">Formulario Oficial de Denuncia (LinkedIn):</label>
                    <input type="text" class="recovery-input" id="lk-profile-name" placeholder="Tu nombre completo en el perfil" style="margin-bottom:6px;">
                    <input type="email" class="recovery-input" id="lk-contact-email" placeholder="Correo electrónico de contacto actual" style="margin-bottom:6px;">
                    <textarea class="recovery-input" id="lk-details" placeholder="Explica detalladamente la situación y proporciona la fecha del hackeo..." rows="2" style="margin-bottom:8px;"></textarea>
                    <button class="recovery-button" id="lk-submit-btn" style="background-color: #0A66C2;">Enviar Formulario</button>
                `;

                document.getElementById("lk-submit-btn").addEventListener("click", () => {
                    const name = document.getElementById("lk-profile-name").value;
                    const email = document.getElementById("lk-contact-email").value;
                    if (!name || !email) { alert("Completa los campos del formulario."); return; }

                    panel.querySelector(".recovery-interactive-area").innerHTML = `
                        <div style="color: var(--tertiary); font-weight: 600; text-align: center; padding: 20px;">
                            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 12px; display:inline-block;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <p>¡Denuncia enviada exitosamente a LinkedIn!</p>
                            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;">LinkedIn verificará la cuenta y te asistirá para recuperar el acceso de forma segura tras validar tu identidad.</p>
                        </div>
                    `;
                    panel.querySelector(".recovery-step-indicator").innerHTML = `
                        <span style="color: var(--tertiary); font-weight:700;">Reportado</span>
                        <span>Paso 3 de 3</span>
                    `;
                });
            }
        });
    }
}

// Perform page changes and updates
function navigateTo(index) {
    if (index < 0 || index > 18) return;

    // Deactivate current slide
    document.getElementById(`slide-${currentSlideIndex}`).classList.remove("active");

    currentSlideIndex = index;

    // Activate target slide
    document.getElementById(`slide-${currentSlideIndex}`).classList.add("active");

    // Close sidebar on mobile after choosing slide
    sidebar.classList.remove("open");

    renderSidebarMenu();
    updateNavigation();
}

// Enable/Disable next-prev buttons and update labels
function updateNavigation() {
    btnPrev.disabled = currentSlideIndex === 0;

    // Next button logic:
    // If we are on the checklist (Slide 17), Next is only enabled if all 3 rules are checked
    if (currentSlideIndex === 17) {
        btnNext.disabled = checkedRules.size < 3;
    } else {
        btnNext.disabled = currentSlideIndex === 18;
    }

    // Update progress numbers
    if (currentSlideIndex === 0) {
        progressInfo.textContent = "Portada Principal";
    } else if (currentSlideIndex === 16) {
        progressInfo.textContent = "Asistente de Recuperación (CSIRT)";
    } else if (currentSlideIndex === 17) {
        progressInfo.textContent = "Checklist de Supervivencia";
    } else if (currentSlideIndex === 18) {
        progressInfo.textContent = "Cierre e Inducción Completada";
    } else {
        progressInfo.textContent = `Caso ${currentSlideIndex} de 15`;
    }
}

// Setup standard event handlers
function setupEventListeners() {
    btnPrev.addEventListener("click", () => {
        if (currentSlideIndex > 0) {
            navigateTo(currentSlideIndex - 1);
        }
    });

    btnNext.addEventListener("click", () => {
        if (currentSlideIndex < 18) {
            navigateTo(currentSlideIndex + 1);
        }
    });

    // Mobile Hamburger Menu Toggle
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });

    // Close mobile menu clicking outside
    mainViewport.addEventListener("click", () => {
        if (sidebar.classList.contains("open")) {
            sidebar.classList.remove("open");
        }
    });
}

// Trigger initialization on page load
window.addEventListener("DOMContentLoaded", init);

