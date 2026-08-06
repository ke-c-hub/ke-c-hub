// =====================================================================
// Nova Youth — app.js
// Version locale et fonctionnelle sans backend externe.
// Les actions de navigation, connexion, inscription et candidature
// fonctionnent directement dans le navigateur.
// =====================================================================

const STORAGE_KEY = "nova-youth-state-v1";

const SEED = {
  formations: [
    { titre: "Initiation au graphisme avec Canva", categorie: "Design", duree: "3 semaines", niveau: "Débutant", acces: "Gratuit", partenaire: "Nunya Lab" },
    { titre: "Développement web — HTML/CSS/JS", categorie: "Développement web", duree: "6 semaines", niveau: "Débutant", acces: "Gratuit", partenaire: "ENI Lomé" },
    { titre: "Gestion des réseaux sociaux pour entreprises", categorie: "Communication digitale", duree: "4 semaines", niveau: "Débutant", acces: "Gratuit", partenaire: "Nova Youth" },
    { titre: "Montage vidéo avec CapCut/Premiere", categorie: "Vidéo", duree: "3 semaines", niveau: "Débutant", acces: "Gratuit", partenaire: "Studio Créa Lomé" },
    { titre: "Excel & gestion administrative", categorie: "Gestion", duree: "2 semaines", niveau: "Débutant", acces: "Gratuit", partenaire: "ANPE Togo" },
    { titre: "Introduction à React.js", categorie: "Développement web", duree: "5 semaines", niveau: "Intermédiaire", acces: "Payant", partenaire: "ENI Lomé", prix: 20000 },
    { titre: "Photographie de produit pour e-commerce", categorie: "Design", duree: "2 semaines", niveau: "Débutant", acces: "Gratuit", partenaire: "Studio Créa Lomé" },
    { titre: "Rédaction de CV et lettre de motivation", categorie: "Gestion", duree: "1 semaine", niveau: "Débutant", acces: "Gratuit", partenaire: "ANPE Togo" },
    { titre: "Community management avancé", categorie: "Communication digitale", duree: "4 semaines", niveau: "Intermédiaire", acces: "Payant", partenaire: "Nova Youth", prix: 18000 },
    { titre: "Bases de la comptabilité pour freelances", categorie: "Gestion", duree: "3 semaines", niveau: "Débutant", acces: "Gratuit", partenaire: "Chambre de Commerce Togo" }
  ],
  offres: [
    { titre: "Stagiaire développeur web", type: "Stage", entreprise: "TogoTech Solutions", localisation: "Lomé", description: "Rejoins une équipe technique pour développer des interfaces web modernes.", dateLimite: "30/09/2026" },
    { titre: "Concours national d'innovation jeunesse", type: "Concours", entreprise: "ANPE Togo", localisation: "National", description: "Présente un projet innovant devant un jury national d'experts.", dateLimite: "15/10/2026" },
    { titre: "Assistant marketing digital", type: "Emploi", entreprise: "Genius Technologie", localisation: "Lomé", description: "Participe à la gestion des campagnes digitales de nos clients.", dateLimite: "20/09/2026" },
    { titre: "Programme d'incubation entrepreneuriale", type: "Entrepreneuriat", entreprise: "Nunya Lab", localisation: "Lomé", description: "Un accompagnement de 3 mois pour lancer ton activité.", dateLimite: "01/10/2026" },
    { titre: "Graphiste freelance recherché", type: "Emploi", entreprise: "Studio Créa Lomé", localisation: "Lomé", description: "Mission ponctuelle de création d'identité visuelle.", dateLimite: "12/09/2026" },
    { titre: "Formation certifiante en gestion de projet", type: "Formation", entreprise: "Chambre de Commerce Togo", localisation: "Lomé", description: "Obtiens une certification reconnue en gestion de projet.", dateLimite: "25/09/2026" },
    { titre: "Community manager junior", type: "Emploi", entreprise: "Boutique Adjoa Mode", localisation: "Lomé", description: "Anime les réseaux sociaux d'une boutique de mode en croissance.", dateLimite: "18/09/2026" },
    { titre: "Stage en comptabilité", type: "Stage", entreprise: "Fiducia Conseil", localisation: "Lomé", description: "Découvre le métier de comptable au sein d'un cabinet de conseil.", dateLimite: "05/10/2026" },
    { titre: "Concours du meilleur pitch startup", type: "Concours", entreprise: "Nunya Lab", localisation: "National", description: "Présente ton pitch en 5 minutes devant des investisseurs.", dateLimite: "30/10/2026" },
    { titre: "Développeur mobile freelance", type: "Entrepreneuriat", entreprise: "AgriConnect Togo", localisation: "Kara", description: "Participe à la construction d'une application agritech.", dateLimite: "22/09/2026" }
  ],
  missions: [
    { titre: "Création d'une affiche publicitaire", competence: "Graphisme", localisation: "Lomé", remuneration: "15 000 FCFA", entreprise: "Boutique Adjoa Mode" },
    { titre: "Montage d'une vidéo promotionnelle (2 min)", competence: "Montage vidéo", localisation: "Lomé", remuneration: "25 000 FCFA", entreprise: "Studio Créa Lomé" },
    { titre: "Gestion de la page Instagram pendant 1 mois", competence: "Communication digitale", localisation: "À distance", remuneration: "40 000 FCFA", entreprise: "Café Nunya" },
    { titre: "Développement d'une landing page simple", competence: "Développement web", localisation: "À distance", remuneration: "50 000 FCFA", entreprise: "AgriConnect Togo" },
    { titre: "Rédaction de 5 articles de blog", competence: "Rédaction", localisation: "À distance", remuneration: "20 000 FCFA", entreprise: "Genius Technologie" },
    { titre: "Création d'un logo de marque", competence: "Graphisme", localisation: "Lomé", remuneration: "18 000 FCFA", entreprise: "Fiducia Conseil" },
    { titre: "Prise de photos produits (20 articles)", competence: "Photographie", localisation: "Lomé", remuneration: "15 000 FCFA", entreprise: "Boutique Adjoa Mode" },
    { titre: "Saisie et mise à jour d'une base de données clients", competence: "Gestion / Bureautique", localisation: "À distance", remuneration: "12 000 FCFA", entreprise: "Chambre de Commerce Togo" },
    { titre: "Traduction français-anglais d'un document (5 pages)", competence: "Traduction", localisation: "À distance", remuneration: "10 000 FCFA", entreprise: "TogoTech Solutions" },
    { titre: "Animation d'un atelier de formation (demi-journée)", competence: "Formation / Pédagogie", localisation: "Kara", remuneration: "30 000 FCFA", entreprise: "ANPE Togo" }
  ],
  entreprises: [
    { nom: "TogoTech Solutions", secteur: "Développement logiciel", localisation: "Lomé", description: "Agence spécialisée en solutions web et mobiles." },
    { nom: "Genius Technologie", secteur: "Marketing digital", localisation: "Lomé", description: "Agence de communication et paiements en ligne." },
    { nom: "Studio Créa Lomé", secteur: "Design & vidéo", localisation: "Lomé", description: "Studio créatif au service des PME locales." },
    { nom: "Boutique Adjoa Mode", secteur: "Commerce / mode", localisation: "Lomé", description: "Boutique de vêtements avec présence e-commerce." },
    { nom: "Café Nunya", secteur: "Restauration", localisation: "Lomé", description: "Café-restaurant qui renforce sa présence en ligne." },
    { nom: "AgriConnect Togo", secteur: "AgriTech", localisation: "Kara", description: "Startup qui connecte agriculteurs et acheteurs." },
    { nom: "Fiducia Conseil", secteur: "Comptabilité / conseil", localisation: "Lomé", description: "Cabinet de conseil pour petites entreprises." },
    { nom: "Nunya Lab", secteur: "Incubateur", localisation: "Lomé", description: "Incubateur qui soutient les jeunes entrepreneurs togolais." },
    { nom: "Chambre de Commerce Togo", secteur: "Institution", localisation: "Lomé", description: "Organisme d'appui aux entreprises et formations." },
    { nom: "ENI Lomé", secteur: "Formation / EdTech", localisation: "Lomé", description: "École du numérique proposant des formations techniques." }
  ],
  temoignages: [
    { nom: "Kossi A.", role: "Jeune graphiste", citation: "Nova Youth m'a permis de trouver ma première mission rémunérée en 2 semaines." },
    { nom: "Boutique Adjoa Mode", role: "Entreprise partenaire", citation: "Nous avons trouvé une community manager fiable rapidement." },
    { nom: "Ama D.", role: "Jeune développeuse", citation: "Les formations recommandées correspondaient exactement à mon niveau." },
    { nom: "Nunya Lab", role: "Partenaire incubateur", citation: "Une plateforme qui complète bien notre accompagnement des jeunes entrepreneurs." },
    { nom: "Yao K.", role: "Jeune monteur vidéo", citation: "J'ai construit tout mon portfolio directement sur la plateforme." },
    { nom: "Fiducia Conseil", role: "Entreprise partenaire", citation: "Le profil du stagiaire correspondait parfaitement à notre besoin." },
    { nom: "Afi S.", role: "Jeune en communication", citation: "Grâce à Nova Youth, j'ai enchaîné plusieurs missions avec des commerces locaux." },
    { nom: "AgriConnect Togo", role: "Entreprise partenaire", citation: "Recruter un freelance pour notre site a pris moins d'une semaine." },
    { nom: "Sena B.", role: "Jeune photographe", citation: "Mon portfolio en ligne m'a permis d'être prise au sérieux par des clients." },
    { nom: "ANPE Togo", role: "Partenaire institutionnel", citation: "Une initiative complémentaire utile à notre mission d'insertion." }
  ],
  partenaires: [
    { nom: "ANPE Togo", categorie: "Emploi et insertion" },
    { nom: "INSEED Togo", categorie: "Statistiques" },
    { nom: "Ministère de la Fonction publique du Togo", categorie: "Secteur public" },
    { nom: "Nunya Lab", categorie: "Incubateur" },
    { nom: "ENI Lomé", categorie: "Formation" },
    { nom: "Chambre de Commerce Togo", categorie: "Institution" },
    { nom: "Genius Technologie", categorie: "Technologie" },
    { nom: "Studio Créa Lomé", categorie: "Création de contenu" },
    { nom: "Fiducia Conseil", categorie: "Finance / conseil" },
    { nom: "AgriConnect Togo", categorie: "Entreprise technologique" }
  ]
};

const cache = { formations: [], offres: [], missions: [], entreprises: [], temoignages: [], partenaires: [] };
const state = loadState();

function getAdminRequests() {
  return (state.candidatures || []).map((candidature) => {
    const user = state.users.find(user => user.id === candidature.userId) || { name: "Utilisateur", email: "—" };
    const item = cache[candidature.collection]?.find(entry => entry.id === candidature.itemId) || null;
    const title = item?.titre || item?.nom || item?.type || candidature.collection;
    const typeLabel = candidature.collection === "formations" ? "Formation" : candidature.collection === "offres" ? "Offre" : "Mission";
    const status = candidature.status || "nouveau";
    return {
      ...candidature,
      user,
      item,
      title,
      typeLabel,
      status
    };
  });
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        users: [{ id: "demo-admin", name: "Équipe Nova Youth", email: "admin@novayouth.com", password: "123456", role: "entreprise", objectif: "Trouver des talents" }],
        currentUserId: null,
        candidatures: []
      };
    }
    const parsed = JSON.parse(raw);
    return {
      users: parsed.users || [],
      currentUserId: parsed.currentUserId || null,
      candidatures: parsed.candidatures || []
    };
  } catch {
    return {
      users: [{ id: "demo-admin", name: "Équipe Nova Youth", email: "admin@novayouth.com", password: "123456", role: "entreprise", objectif: "Trouver des talents" }],
      currentUserId: null,
      candidatures: []
    };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    users: state.users,
    currentUserId: state.currentUserId,
    candidatures: state.candidatures
  }));
}

function compatScore(seedString) {
  let h = 0;
  for (let i = 0; i < seedString.length; i++) h = (h * 31 + seedString.charCodeAt(i)) >>> 0;
  return 68 + (h % 30);
}

function ringSVG(pct) {
  const r = 18, c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return `
    <svg viewBox="0 0 44 44">
      <circle cx="22" cy="22" r="${r}" fill="none" stroke="#E2E8F0" stroke-width="4"></circle>
      <circle cx="22" cy="22" r="${r}" fill="none" stroke="${pct >= 85 ? '#10B981' : '#2563EB'}" stroke-width="4"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"
        transform="rotate(-90 22 22)"></circle>
      <text x="22" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#0F1F4D" font-family="Inter, sans-serif">${pct}</text>
    </svg>`;
}

function offreCard(o) {
  const pct = compatScore(o.titre);
  return `
    <div class="card">
      <div class="card-top">
        <span class="card-type">${o.type}</span>
        <div class="compat-ring">${ringSVG(pct)}<span class="compat-label">Match<br><strong>${pct}%</strong></span></div>
      </div>
      <h3>${o.titre}</h3>
      <div class="card-meta"><span>🏢 ${o.entreprise}</span><span>📍 ${o.localisation}</span><span>🗓️ Avant le ${o.dateLimite}</span></div>
      <p class="card-desc">${o.description}</p>
      <div class="card-foot">
        <button class="btn btn-primary" data-apply="offres:${o.id}">Postuler</button>
      </div>
    </div>`;
}

function missionCard(m) {
  const pct = compatScore(m.titre);
  return `
    <div class="card">
      <div class="card-top">
        <span class="card-type">Mission</span>
        <div class="compat-ring">${ringSVG(pct)}<span class="compat-label">Match<br><strong>${pct}%</strong></span></div>
      </div>
      <h3>${m.titre}</h3>
      <div class="card-meta"><span>🎯 ${m.competence}</span><span>📍 ${m.localisation}</span><span>🏢 ${m.entreprise}</span></div>
      <p class="card-desc"><strong style="color:var(--color-navy)">${m.remuneration}</strong> à la réalisation de la mission</p>
      <div class="card-foot">
        <button class="btn btn-primary" data-apply="missions:${m.id}">Postuler</button>
        <span class="pay-badge"><span class="dot"></span>Paiement via Flooz / T-Money</span>
      </div>
    </div>`;
}

function formationCard(f) {
  return `
    <div class="card">
      <div class="card-top"><span class="card-type">${f.categorie}</span></div>
      <h3>${f.titre}</h3>
      <div class="card-meta"><span>⏱️ ${f.duree}</span><span>📶 ${f.niveau}</span><span>🎓 ${f.partenaire}</span></div>
      <div class="card-foot">
        <span class="card-type" style="background:${f.acces === 'Gratuit' ? 'var(--color-green-light)' : 'var(--color-blue-light)'}; color:${f.acces === 'Gratuit' ? 'var(--color-green)' : 'var(--color-blue)'}">${f.acces}</span>
        ${f.acces === 'Payant' && f.prix ? `<span class="price-pill">${f.prix.toLocaleString('fr-FR')} FCFA</span>` : ''}
        <button class="btn btn-outline" data-apply="formations:${f.id}">${f.acces === 'Gratuit' ? "S'inscrire" : 'Payer'}</button>
      </div>
    </div>`;
}

function entrepriseCard(e) {
  return `
    <div class="card">
      <div class="card-top"><span class="card-type">${e.secteur}</span></div>
      <h3>${e.nom}</h3>
      <div class="card-meta"><span>📍 ${e.localisation}</span></div>
      <p class="card-desc">${e.description}</p>
    </div>`;
}

function testimonialCard(t) {
  return `
    <div class="card testimonial-card">
      <p class="testimonial-quote">"${t.citation}"</p>
      <p class="testimonial-name">${t.nom}</p>
      <p class="testimonial-role">${t.role}</p>
    </div>`;
}

function partnerPill(p) { return `<span class="partner-pill">${p.nom}</span>`; }

function render() {
  const $ = (id) => document.getElementById(id);
  $("homeOffresPreview").innerHTML = cache.offres.slice(0, 3).map(offreCard).join("");
  $("homeFormationsPreview").innerHTML = cache.formations.slice(0, 3).map(formationCard).join("");
  $("testimonialsGrid").innerHTML = cache.temoignages.slice(0, 6).map(testimonialCard).join("");
  $("partnersRow").innerHTML = cache.partenaires.map(partnerPill).join("");
  $("dashOffresPreview").innerHTML = cache.offres.slice(0, 3).map(offreCard).join("");
  $("dashMissionsPreview").innerHTML = cache.missions.slice(0, 3).map(missionCard).join("");
  renderOffresGrid("all");
  $("missionsGrid").innerHTML = cache.missions.map(missionCard).join("");
  renderFormationsGrid("all");
  $("entreprisesGrid").innerHTML = cache.entreprises.map(entrepriseCard).join("");
  renderAdminPanel();
}

function renderOffresGrid(filter) {
  const list = filter === "all" ? cache.offres : cache.offres.filter(o => o.type === filter);
  document.getElementById("offresGrid").innerHTML = list.map(offreCard).join("") || `<p>Aucune offre dans cette catégorie pour l'instant.</p>`;
}

function renderFormationsGrid(filter) {
  const list = filter === "all" ? cache.formations : cache.formations.filter(f => f.categorie === filter);
  document.getElementById("formationsGrid").innerHTML = list.map(formationCard).join("") || `<p>Aucune formation dans cette catégorie pour l'instant.</p>`;
}

function showView(name) {
  document.querySelectorAll("[data-view-section]").forEach(v => v.classList.remove("active"));
  const target = document.getElementById(`view-${name}`);
  if (target) target.classList.add("active");
  document.querySelectorAll(".nav-link").forEach(n => n.classList.toggle("active", n.dataset.view === name));
  document.getElementById("adminNavLink")?.classList.toggle("hidden", !(getCurrentUser() && getCurrentUser().email === "admin@novayouth.com"));
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelector(".site-header")?.classList.remove("nav-open");
}

function bindButtonDefaults() {
  document.querySelectorAll('button[data-view], button[data-switch], button[data-pay], button[data-apply], button#navToggle').forEach(btn => {
    if (!btn.hasAttribute('type')) btn.type = 'button';
  });
}

function getCurrentUser() {
  return state.users.find(user => user.id === state.currentUserId) || null;
}

function syncAuthUI() {
  const currentUser = getCurrentUser();
  const guest = document.getElementById("headerActionsGuest");
  const userBox = document.getElementById("headerActionsUser");

  if (currentUser) {
    guest.classList.add("hidden");
    userBox.classList.remove("hidden");
    document.getElementById("userChip").textContent = currentUser.name || currentUser.email;
    document.getElementById("dashName").textContent = (currentUser.name || "toi").split(" ")[0];
    document.getElementById("dashObjectif").textContent = currentUser.objectif || "Non renseigné";
    document.getElementById("dashCandidatures").textContent = state.candidatures.filter(c => c.userId === currentUser.id).length;
  } else {
    guest.classList.remove("hidden");
    userBox.classList.add("hidden");
  }
  document.getElementById("adminNavLink")?.classList.toggle("hidden", !(currentUser && currentUser.email === "admin@novayouth.com"));
}

function setAuthTab(mode) {
  document.getElementById("signupForm").classList.toggle("hidden", mode !== "signup");
  document.getElementById("loginForm").classList.toggle("hidden", mode !== "login");
}

document.querySelectorAll("[data-view]").forEach(el => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const view = el.dataset.view;
    if (view === "dashboard" && !getCurrentUser()) { showView("auth"); return; }
    showView(view);
    if (view === "auth" && el.dataset.mode) setAuthTab(el.dataset.mode);
  });
});

document.getElementById("navToggle").addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  document.querySelector(".site-header").classList.toggle("nav-open");
});

document.querySelectorAll("[data-switch]").forEach(b => b.addEventListener("click", () => setAuthTab(b.dataset.switch)));
document.querySelectorAll('input[name="role"]').forEach(r => r.addEventListener("change", (e) => {
  document.getElementById("objectifWrap").style.display = e.target.value === "jeune" ? "block" : "none";
}));

document.getElementById("adminFilters")?.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  document.querySelectorAll("#adminFilters .chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  renderAdminPanel(chip.dataset.adminFilter);
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = document.getElementById("signupMsg");
  msg.textContent = ""; msg.className = "form-msg";

  const name = document.getElementById("suName").value.trim();
  const email = document.getElementById("suEmail").value.trim();
  const pass = document.getElementById("suPassword").value;
  const pass2 = document.getElementById("suPassword2").value;
  const role = document.querySelector('input[name="role"]:checked').value;
  const objectif = document.getElementById("suObjectif").value;

  if (pass !== pass2) { msg.textContent = "Les mots de passe ne correspondent pas."; msg.classList.add("error"); return; }
  if (pass.length < 6) { msg.textContent = "Le mot de passe doit contenir au moins 6 caractères."; msg.classList.add("error"); return; }
  if (state.users.some(user => user.email.toLowerCase() === email.toLowerCase())) {
    msg.textContent = "Cet email est déjà utilisé."; msg.classList.add("error"); return;
  }

  const user = { id: `user-${Date.now()}`, name, email, password: pass, role, objectif: role === "jeune" ? objectif : null };
  state.users.push(user);
  state.currentUserId = user.id;
  saveState();
  syncAuthUI();
  msg.textContent = "Compte créé avec succès. Bienvenue sur Nova Youth !"; msg.classList.add("success");
  showView("dashboard");
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = document.getElementById("loginMsg");
  msg.textContent = ""; msg.className = "form-msg";
  const email = document.getElementById("liEmail").value.trim();
  const pass = document.getElementById("liPassword").value;

  const user = state.users.find(item => item.email.toLowerCase() === email.toLowerCase() && item.password === pass);
  if (!user) {
    msg.textContent = "Email ou mot de passe incorrect."; msg.classList.add("error");
    return;
  }

  state.currentUserId = user.id;
  saveState();
  syncAuthUI();
  showView("dashboard");
});

document.getElementById("forgotPassword").addEventListener("click", () => {
  const email = document.getElementById("liEmail").value.trim();
  const msg = document.getElementById("loginMsg");
  if (!email) { msg.textContent = "Renseigne d'abord ton email ci-dessus."; msg.className = "form-msg error"; return; }
  const existing = state.users.find(user => user.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    msg.textContent = "Réinitialisation simulée. Le mot de passe de démo est 123456."; msg.className = "form-msg success";
  } else {
    msg.textContent = "Aucun compte trouvé pour cet email."; msg.className = "form-msg error";
  }
});

document.getElementById("btnLogout").addEventListener("click", () => {
  state.currentUserId = null;
  saveState();
  syncAuthUI();
  showView("home");
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-apply]");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast("Connecte-toi pour postuler.");
    showView("auth");
    setAuthTab("login");
    return;
  }

  const [collectionName, itemId] = btn.dataset.apply.split(":");
  const item = cache[collectionName]?.find(entry => entry.id === itemId);
  const requiresPayment = collectionName === "formations" && item?.acces === "Payant";

  if (!requiresPayment) {
    state.candidatures.push({
      id: `candidature-${Date.now()}`,
      userId: currentUser.id,
      collection: collectionName,
      itemId
    });
    saveState();
    syncAuthUI();
    showToast("Candidature envoyée ✅");
    return;
  }

  openPaymentModal({
    action: btn.dataset.apply,
    amount: item?.prix || 15000,
    label: item?.titre || "Formation payante",
    recordCandidature: true
  });
});

document.getElementById("offresFilters").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip"); if (!chip) return;
  document.querySelectorAll("#offresFilters .chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  renderOffresGrid(chip.dataset.filter);
});
document.getElementById("formationsFilters").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip"); if (!chip) return;
  document.querySelectorAll("#formationsFilters .chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  renderFormationsGrid(chip.dataset.filter);
});

function renderAdminPanel(filter = "all") {
  const list = document.getElementById("adminRequestsList");
  if (!list) return;
  const requests = getAdminRequests().filter((request) => {
    if (filter === "all") return true;
    return request.collection === filter;
  });

  document.getElementById("adminTotal").textContent = requests.length;
  document.getElementById("adminNouveau").textContent = requests.filter(r => r.status === "nouveau").length;
  document.getElementById("adminRelancer").textContent = requests.filter(r => r.status === "relancer").length;
  document.getElementById("adminTraite").textContent = requests.filter(r => r.status === "traite").length;

  if (!requests.length) {
    list.innerHTML = '<div class="admin-request"><p>Aucune demande pour le moment.</p></div>';
    return;
  }

  list.innerHTML = requests.map((request) => {
    const statusLabel = request.status === "traite" ? "Traité" : request.status === "relancer" ? "À relancer" : "Nouveau";
    const statusClass = request.status === "traite" ? "neutral" : request.status === "relancer" ? "success" : "";
    const amountText = request.montant ? `<span class="badge">${request.montant.toLocaleString("fr-FR")} FCFA</span>` : "";
    return `
      <article class="admin-request status-${request.status || 'nouveau'}">
        <div class="admin-request-head">
          <div>
            <h3>${request.title}</h3>
            <p>${request.user.name} • ${request.user.email}</p>
          </div>
          <div class="admin-badges">
            <span class="badge">${request.typeLabel}</span>
            ${amountText}
            <span class="badge ${statusClass}">${statusLabel}</span>
          </div>
        </div>
        <p><strong>Demande :</strong> ${request.collection === 'formations' ? 'Inscription / paiement de formation' : request.collection === 'offres' ? 'Candidature à une offre' : 'Candidature à une mission'}</p>
        <p><strong>Note :</strong> ${request.paymentMethod ? `Paiement via ${request.paymentMethod}` : 'Aucune information de paiement'}</p>
        <div class="admin-actions">
          <button class="btn btn-outline" data-admin-action="nouveau" data-request-id="${request.id}">Marquer nouveau</button>
          <button class="btn btn-outline" data-admin-action="relancer" data-request-id="${request.id}">Relancer</button>
          <button class="btn btn-outline" data-admin-action="traite" data-request-id="${request.id}">Traiter</button>
        </div>
      </article>`;
  }).join("");
}

let toastTimer;
function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

const paymentModal = document.getElementById("paymentModal");
const paymentMethods = document.getElementById("paymentMethods");
const paymentStatusWrap = document.getElementById("paymentStatusWrap");
const paymentStatus = document.getElementById("paymentStatus");
let pendingPayment = null;

function openPaymentModal(paymentInfo) {
  pendingPayment = paymentInfo;
  paymentModal.classList.add("show");
  paymentMethods.classList.remove("hidden");
  paymentStatusWrap.classList.add("hidden");
  document.querySelector(".spinner").style.display = "block";
}

document.querySelectorAll("[data-pay]").forEach(btn => {
  btn.addEventListener("click", () => {
    const planAmount = btn.dataset.pay === "premium" ? 35000 : 15000;
    openPaymentModal({
      action: `plan:${btn.dataset.pay}`,
      amount: planAmount,
      label: btn.dataset.pay === "premium" ? "Formule Premium" : "Formule Standard",
      recordCandidature: false
    });
  });
});

paymentMethods.addEventListener("click", (e) => {
  const method = e.target.closest("[data-provider]");
  if (!method) return;
  simulatePayment(method.dataset.provider);
});

function simulatePayment(provider) {
  paymentMethods.classList.add("hidden");
  paymentStatusWrap.classList.remove("hidden");
  paymentStatus.textContent = `Connexion à ${provider}…`;
  setTimeout(() => { paymentStatus.textContent = `Confirme le paiement sur ton téléphone (${provider})…`; }, 1400);
  setTimeout(() => {
    paymentStatus.textContent = `Paiement réussi ✅ via ${provider}`;
    document.querySelector(".spinner").style.display = "none";
  }, 3000);
  setTimeout(() => {
    if (pendingPayment?.recordCandidature) {
      const currentUser = getCurrentUser();
      const [collectionName, itemId] = pendingPayment.action.split(":");
      state.candidatures.push({
        id: `candidature-${Date.now()}`,
        userId: currentUser.id,
        collection: collectionName,
        itemId,
        montant: pendingPayment.amount,
        paymentMethod: provider
      });
      saveState();
      syncAuthUI();
      showToast(`Paiement confirmé via ${provider} — ${pendingPayment.amount.toLocaleString("fr-FR")} FCFA`);
    } else {
      showToast(`Paiement simulé avec succès via ${provider}.`);
    }
    paymentModal.classList.remove("show");
    document.querySelector(".spinner").style.display = "block";
    pendingPayment = null;
  }, 4600);
}

document.getElementById("paymentModalClose").addEventListener("click", () => paymentModal.classList.remove("show"));
paymentModal.addEventListener("click", (e) => { if (e.target === paymentModal) paymentModal.classList.remove("show"); });

document.getElementById("adminRequestsList")?.addEventListener("click", (e) => {
  const actionBtn = e.target.closest("[data-admin-action]");
  if (!actionBtn) return;
  const requestId = actionBtn.dataset.requestId;
  const request = state.candidatures.find(item => item.id === requestId);
  if (!request) return;
  request.status = actionBtn.dataset.adminAction;
  saveState();
  renderAdminPanel();
  showToast(`Demande mise à jour en statut ${actionBtn.dataset.adminAction}.`);
});

function hydrateContent() {
  Object.entries(SEED).forEach(([name, items]) => {
    cache[name] = items.map((item, index) => ({ id: `${name}-${index + 1}`, ...item }));
  });
}

function init() {
  bindButtonDefaults();
  hydrateContent();
  render();
  syncAuthUI();
  setAuthTab("login");
  showView("home");
}

document.addEventListener("DOMContentLoaded", init);
