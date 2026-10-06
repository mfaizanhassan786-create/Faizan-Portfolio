/* =====================================================
   CONFIGURATION — edit ONLY this object for your links
   ===================================================== */
const portfolioConfig = {
    name: "M. Faizan Hassan",
    title: "AI Developer",
    github: "https://github.com/mfaizanhassan786-create",
    linkedin: "https://www.linkedin.com/in/m-faizan-hassan-579aa43a7/",
    email: "mfaizanhassan786@gmail.com",
    whatsappNumber: "03216719723", // local (0321...) or international (92321...) both work
    whatsappMessage: "Hello Faizan, I visited your portfolio and would like to discuss an opportunity.",
    projectGithub: "https://github.com/mfaizanhassan786-create/Hackathon_code",
    liveDemo: "" // leave empty to hide the Live Demo button
};

/* Certificates — verified credentials from images folder */
const certificates = [
    {
        image: "images/modern-ai.jpeg",
        title: "Introduction to Modern AI",
        organization: "Saylani · Cisco Networking Academy",
        date: "08 Mar 2026"
    },
    {
        image: "images/python.jpeg",
        title: "Python Essentials 1",
        organization: "Cisco Networking Academy & Python Institute",
        date: "22 Feb 2026"
    },
    {
        image: "images/critical-thinking.jpeg",
        title: "Critical Thinking in the AI Era",
        organization: "HP LIFE · HP Foundation",
        date: "28 Feb 2026"
    },
    {
        image: "images/cybersecurity.jpeg",
        title: "Cybersecurity Essentials",
        organization: "Saylani · Cisco Networking Academy",
        date: "11 Apr 2026"
    },
    {
        image: "images/cybersecurity-smit.jpeg",
        title: "Cybersecurity Essentials (Batch-1)",
        organization: "Saylani Mass Training (SMIT)",
        date: "Dec 2025 – Apr 2026"
    },
    {
        image: "images/youth-workshop.jpeg",
        title: "Youth Survival Workshop",
        organization: "Al Hadid & Al Bakah Institute (CPD UK)",
        date: "09 Feb 2026"
    }
];

const skills = [["Python","Py"],["Artificial Intelligence","AI"],["Machine Learning","ML"],["FastAPI","API"],["REST APIs","{ }"],["SQL","SQL"],["PostgreSQL","Pg"],["MongoDB","Mdb"],["Git & GitHub","Git"],["n8n","n8n"],["Data Science","DS"],["Problem Solving","PS"]];

/* ---------- helpers ---------- */
const $ = (s) => document.querySelector(s);
const icons = {
    github: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.300-1.500 3.300-1.200 3.300-1.200.7 1.700.2 2.900.1 3.200.8.800 1.200 1.900 1.200 3.200 0 4.600-2.800 5.600-5.500 5.900.4.400.8 1.100.8 2.200v3.300c0 .3.2.7.8.6A12 12 0 0 0 12 .3",
    linkedin: "M20.4 20.5h-3.6v-5.6c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.700H9.400V9h3.400v1.600c.5-.9 1.600-1.800 3.400-1.800 3.600 0 4.300 2.400 4.300 5.500v6.200zM5.300 7.400a2.100 2.100 0 1 1 0-4.100 2.100 2.100 0 0 1 0 4.100zM7.100 20.500H3.600V9h3.600v11.500zM22.200 0H1.800C.8 0 0 .8 0 1.700v20.600c0 .9.8 1.700 1.800 1.700h20.400c1 0 1.800-.8 1.800-1.700V1.700C24 .8 23.200 0 22.200 0z",
    whatsapp: "M12 2a10 10 0 0 0-8.600 15L2 22l5.200-1.400A10 10 0 1 0 12 2zm0 18.200a8.200 8.200 0 0 1-4.200-1.200l-.3-.2-3 .8.8-2.900-.2-.3A8.200 8.200 0 1 1 12 20.200zm4.500-6.100c-.2-.1-1.500-.7-1.700-.8-.2-.1-.4-.1-.6.100l-.8 1c-.1.200-.3.200-.5.100a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.200-.4.700-1.300.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.100-.7.300-.2.300-.9.900-.9 2.200s.9 2.500 1.100 2.700c.1.200 1.800 2.800 4.400 3.900 1.600.7 2.300.7 3.100.6.500-.1 1.500-.6 1.700-1.200.2-.6.2-1.100.2-1.200-.1-.1-.3-.2-.5-.3z",
    mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 3.200V17h16V8.200l-8 5.300-8-5.300zM5.500 7l6.500 4.300L18.500 7z"
};
const svg = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${icons[k]}"/></svg>`;

function waLink() {
    let n = portfolioConfig.whatsappNumber.replace(/\D/g, "");   // strip +, spaces, hyphens, ()
    if (n.startsWith("00")) n = n.slice(2);
    if (n.startsWith("0")) n = "92" + n.slice(1);                // Pakistan local -> international
    return `https://wa.me/${n}?text=${encodeURIComponent(portfolioConfig.whatsappMessage)}`;
}

/* ---------- fill links from config ---------- */
const c = portfolioConfig;
document.querySelectorAll("[data-cfg=name]").forEach(e => e.textContent = c.name);
const socials = `<a href="${c.github}" target="_blank" rel="noopener" aria-label="GitHub">${svg("github")}</a><a href="${c.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${svg("linkedin")}</a>`;
$("#heroSocial").innerHTML = socials;
$("#footSocial").innerHTML = socials;
$("#contactLinks").innerHTML = [
    ["github", "GitHub", c.github], ["linkedin", "LinkedIn", c.linkedin],
    ["whatsapp", "WhatsApp", waLink()], ["mail", "Email", "mailto:" + c.email]
].map(([k, t, h]) => `<a class="card" href="${h}"${k === "mail" ? "" : ' target="_blank" rel="noopener"'}><span class="ic">${svg(k)}</span>${t}</a>`).join("");
$("#waBtn").href = waLink();
$("#projGit").href = c.projectGithub;
if (c.liveDemo) { const l = $("#projLive"); l.href = c.liveDemo; l.hidden = false; }
$("#skillGrid").innerHTML = skills.map(([n, m]) => `<div class="card"><span class="mono">${m}</span>${n}</div>`).join("");

/* ---------- images that may be missing ---------- */
function guardImg(img) {
    if (!img) return;
    const ph = img.nextElementSibling;
    const fail = () => { img.hidden = true; if (ph) ph.hidden = false; };
    img.addEventListener("error", fail);
    if (img.complete && img.naturalWidth === 0) fail();
}
guardImg($("#profileImg")); guardImg($("#projImg"));

/* ---------- certificates ---------- */
const grid = $("#certGrid");
grid.innerHTML = certificates.map((x, i) => `
    <article class="card cert" data-i="${i}">
        <div class="cimg" data-i="${i}">
            <img src="${x.image}" alt="${x.title} — ${x.organization}" loading="lazy" decoding="async">
        </div>
        <div class="cb">
            <h3>${x.title}</h3>
            <small>${x.organization} · ${x.date}</small>
            <button class="btn" data-i="${i}" type="button">View Certificate</button>
        </div>
    </article>
`).join("");

/* ---------- modal ---------- */
const modal = $("#modal"), mImg = $("#mImg"), wrap = $("#mimgWrap");
let cur = 0;
function show(i) {
    if (i < 0 || i >= certificates.length) return;
    cur = i;
    const x = certificates[i];
    mImg.src = x.image;
    mImg.alt = x.title;
    $("#mTitle").textContent = `${x.title} — ${x.organization}`;
    wrap.classList.remove("zoomed");
}
function openModal(i) {
    show(i);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
}
function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
}
function step(d) {
    if (!certificates.length) return;
    const nextIdx = (cur + d + certificates.length) % certificates.length;
    show(nextIdx);
}
grid.addEventListener("click", e => {
    const t = e.target.closest("[data-i]");
    if (t) openModal(+t.dataset.i);
});
$("#close").onclick = closeModal;
$("#prev").onclick = () => step(-1);
$("#next").onclick = () => step(1);
$("#zoom").onclick = () => wrap.classList.toggle("zoomed");
modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});
document.addEventListener("keydown", e => {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
});

/* ---------- navigation ---------- */
const burger = $("#burger"), menu = $("#menu"), navEl = $("#nav");
burger.onclick = () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
addEventListener("scroll", () => navEl.classList.toggle("scrolled", scrollY > 10), { passive: true });
const links = [...menu.querySelectorAll("a")];
const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => spy.observe(s));

/* ---------- scroll reveal ---------- */
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".sec .wrap").forEach(e => { e.classList.add("rv"); rv.observe(e); });

/* ---------- lightweight 2D network orb (no Three.js) ---------- */
(function orb() {
    const cv = $("#orb");
    if (!cv) return;
    const ctx = cv.getContext("2d", { alpha: true });
    if (!ctx) { if (cv.parentElement) cv.parentElement.hidden = true; return; }
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = 42, pts = [], links = [];
    for (let i = 0; i < N; i++) {
        const y = 1 - 2 * (i + .5) / N, rad = Math.sqrt(Math.max(0, 1 - y * y)), th = i * 2.399963;
        pts.push({ x: Math.cos(th) * rad, y, z: Math.sin(th) * rad });
    }
    const lim = 0.55;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, dz = pts[i].z - pts[j].z;
            if (dx * dx + dy * dy + dz * dz < lim) links.push(i, j);
        }
    }
    let w = 0, h = 0, rotY = 0, rotX = .18, mx = 0, my = 0, raf = 0, on = false;
    const pr = new Array(N);

    function size() {
        const dpr = Math.min(devicePixelRatio || 1, 1.5);
        w = Math.max(1, cv.clientWidth);
        h = Math.max(1, cv.clientHeight);
        cv.width = Math.floor(w * dpr);
        cv.height = Math.floor(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        const cy = Math.cos(rotY + mx * .5), sy = Math.sin(rotY + mx * .5), cx = Math.cos(rotX), sx = Math.sin(rotX);
        const scale = Math.min(w, h) * .32;
        for (let i = 0; i < N; i++) {
            const p = pts[i];
            const x1 = p.x * cy + p.z * sy;
            const z1 = -p.x * sy + p.z * cy;
            const y2 = p.y * cx - z1 * sx;
            const z2 = p.y * sx + z1 * cx;
            const f = 2.6 / (3.1 + z2);
            pr[i] = { x: w / 2 + x1 * f * scale, y: h / 2 + y2 * f * scale, z: z2, r: 2.1 * f };
        }
        const core = Math.min(w, h) * .26;
        const g = ctx.createRadialGradient(w / 2, h / 2, 6, w / 2, h / 2, core);
        g.addColorStop(0, "rgba(124,58,237,.16)");
        g.addColorStop(0.5, "rgba(37,99,235,.07)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, core, 0, 6.2832);
        ctx.fill();
        ctx.strokeStyle = "rgba(124,58,237,.28)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let k = 0; k < links.length; k += 2) {
            const a = pr[links[k]], b = pr[links[k + 1]];
            if (a.z + b.z < -0.35) continue;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
        }
        ctx.stroke();
        for (let i = 0; i < N; i++) {
            const p = pr[i];
            ctx.fillStyle = p.z > 0 ? "#2563EB" : "#7C3AED";
            ctx.globalAlpha = .4 + (p.z + 1) * .3;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 6.2832);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    function loop() {
        if (!on) return;
        rotY += .008;
        rotX += (my * .35 + .18 - rotX) * .05;
        draw();
        raf = requestAnimationFrame(loop);
    }
    function start() {
        if (on || reduce) return;
        on = true;
        raf = requestAnimationFrame(loop);
    }
    function stop() {
        on = false;
        cancelAnimationFrame(raf);
    }

    size();
    draw();
    requestAnimationFrame(() => { size(); draw(); });
    addEventListener("resize", () => { size(); if (!on) draw(); }, { passive: true });
    addEventListener("pointermove", e => {
        mx = e.clientX / innerWidth - .5;
        my = e.clientY / innerHeight - .5;
    }, { passive: true });

    let vis = true;
    const io = new IntersectionObserver(([e]) => {
        vis = e.isIntersecting;
        if (vis && !document.hidden) start(); else stop();
    }, { threshold: .05 });
    io.observe(cv);
    document.addEventListener("visibilitychange", () => {
        if (document.hidden || !vis) stop(); else start();
    });
})();
