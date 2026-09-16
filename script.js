:root {
    --green: #063f35;
    --green-dark: #022c25;
    --green-light: #0d5b4d;
    --gold: #c69a45;
    --gold-light: #e0bd70;
    --cream: #f7f3ea;
    --white: #ffffff;
    --text: #18231f;
    --muted: #6b7771;
    --border: #e5e2d9;
    --shadow: 0 20px 60px rgba(0,0,0,.08);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Cairo", sans-serif;
    color: var(--text);
    background: #fff;
    line-height: 1.8;
}

body.en {
    font-family: "Manrope", sans-serif;
    direction: ltr;
}

img {
    max-width: 100%;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

button,
input,
textarea,
select {
    font-family: inherit;
}

.container {
    width: min(1180px, 92%);
    margin: auto;
}


/* HEADER */

.header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    transition: .3s;
    background: rgba(3, 38, 31, .88);
    backdrop-filter: blur(16px);
}

.header.scrolled {
    box-shadow: 0 10px 30px rgba(0,0,0,.15);
}

.nav {
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.brand img {
    width: 170px;
    height: auto;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 27px;
}

.nav-links a {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    transition: .25s;
}

.nav-links a:hover {
    color: var(--gold-light);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.language-btn,
.menu-btn {
    border: 1px solid rgba(255,255,255,.25);
    background: transparent;
    color: #fff;
    cursor: pointer;
    border-radius: 8px;
}

.language-btn {
    padding: 7px 13px;
    font-weight: 700;
}

.menu-btn {
    display: none;
    font-size: 20px;
    padding: 5px 10px;
}


/* HERO */

.hero {
    min-height: 820px;
    position: relative;
    display: flex;
    align-items: center;
    background-image: url("https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=2200&q=90");
    background-size: cover;
    background-position: center;
    color: #fff;
    overflow: hidden;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            90deg,
            rgba(1,35,29,.95),
            rgba(3,48,40,.78),
            rgba(3,48,40,.38)
        );
}

[dir="rtl"] .hero-overlay {
    background:
        linear-gradient(
            270deg,
            rgba(1,35,29,.95),
            rgba(3,48,40,.78),
            rgba(3,48,40,.38)
        );
}

.hero-content {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.25fr .75fr;
    gap: 70px;
    align-items: center;
}

.hero-text {
    max-width: 700px;
}

.eyebrow,
.section-label {
    color: var(--gold-light);
    font-weight: 800;
    letter-spacing: 1.5px;
    font-size: 13px;
}

.hero h1 {
    font-size: clamp(44px, 6vw, 78px);
    line-height: 1.15;
    margin: 15px 0 25px;
    font-weight: 800;
}

.hero p {
    max-width: 680px;
    font-size: 19px;
    color: rgba(255,255,255,.82);
    margin-bottom: 35px;
}

.hero-buttons {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 52px;
    padding: 12px 25px;
    border-radius: 8px;
    font-weight: 700;
    transition: .25s;
    border: 1px solid transparent;
    cursor: pointer;
}

.btn-primary {
    background: var(--gold);
    color: #10261f;
}

.btn-primary:hover {
    background: var(--gold-light);
    transform: translateY(-2px);
}

.btn-outline {
    border-color: rgba(255,255,255,.4);
    color: #fff;
}

.btn-outline:hover {
    background: #fff;
    color: var(--green);
}

.btn-light {
    background: #fff;
    color: var(--green);
}

.hero-card {
    background: rgba(0, 31, 25, .58);
    border: 1px solid rgba(224,189,112,.35);
    padding: 25px;
    border-radius: 20px;
    backdrop-filter: blur(12px);
    box-shadow: 0 30px 80px rgba(0,0,0,.25);
}

.mini-logo {
    background: #fff;
    padding: 18px;
    border-radius: 14px;
}

.mini-logo img {
    width: 100%;
    max-width: 320px;
    margin: auto;
}

.hero-card-content {
    padding-top: 22px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.hero-card-content span {
    color: var(--gold-light);
    font-size: 13px;
}

.hero-card-content strong {
    font-size: 22px;
}

.hero-card-content small {
    color: rgba(255,255,255,.7);
}

.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
}

.scroll-indicator span {
    width: 2px;
    height: 45px;
    display: block;
    background: var(--gold);
}


/* STATS */

.stats {
    background: var(--green);
    color: #fff;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
}

.stat {
    padding: 35px 20px;
    text-align: center;
    border-left: 1px solid rgba(255,255,255,.1);
}

[dir="ltr"] .stat {
    border-left: none;
    border-right: 1px solid rgba(255,255,255,.1);
}

.stat:last-child {
    border: 0;
}

.stat strong {
    display: block;
    color: var(--gold-light);
    font-size: 38px;
    line-height: 1.2;
}

.stat span {
    font-size: 13px;
    color: rgba(255,255,255,.7);
}


/* GENERAL */

.section {
    padding: 110px 0;
}

.intro {
    background: var(--cream);
}

.intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.intro h2,
.content h2,
.dashboard-text h2,
.section-heading h2,
.why-title h2,
.contact-info h2 {
    font-size: clamp(30px, 4vw, 48px);
    line-height: 1.3;
    margin-top: 12px;
}

.intro p,
.content p,
.dashboard-text p,
.section-heading p,
.contact-info > p {
    color: var(--muted);
    font-size: 16px;
}


/* ABOUT */

.two-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.image-box {
    position: relative;
}

.image-box img {
    width: 100%;
    height: 550px;
    object-fit: cover;
    border-radius: 18px;
}

.image-badge {
    position: absolute;
    bottom: 25px;
    right: 25px;
    background: var(--green);
    color: #fff;
    padding: 20px 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}

.image-badge strong {
    color: var(--gold-light);
    font-size: 28px;
}

.features {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 12px;
    margin-top: 30px;
}

.feature {
    border-top: 1px solid var(--border);
    padding-top: 16px;
}

.feature > span {
    color: var(--gold);
    font-size: 22px;
}

.feature strong,
.feature small {
    display: block;
}

.feature strong {
    font-size: 13px;
}

.feature small {
    color: var(--muted);
    font-size: 11px;
}


/* SERVICES */

.services-section {
    background: #f8f8f6;
}

.section-heading {
    max-width: 760px;
    margin-bottom: 55px;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 18px;
}

.service-card {
    background: #fff;
    padding: 30px;
    min-height: 285px;
    border: 1px solid var(--border);
    position: relative;
    transition: .3s;
}

.service-card:hover {
    transform: translateY(-7px);
    box-shadow: var(--shadow);
    border-color: var(--gold);
}

.service-number {
    position: absolute;
    top: 22px;
    left: 25px;
    color: #bbb;
    font-size: 12px;
}

[dir="rtl"] .service-number {
    left: auto;
    right: 25px;
}

.service-icon {
    color: var(--gold);
    font-size: 36px;
    margin-bottom: 20px;
}

.service-card h3 {
    font-size: 21px;
    margin-bottom: 10px;
}

.service-card p {
    color: var(--muted);
    font-size: 14px;
}


/* SECTORS */

.sectors {
    background: var(--green-dark);
    color: #fff;
}

.section-heading.light p,
.light h2 {
    color: #fff;
}

.sector-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    border-top: 1px solid rgba(255,255,255,.15);
    border-left: 1px solid rgba(255,255,255,.15);
}

.sector {
    min-height: 190px;
    padding: 30px;
    border-right: 1px solid rgba(255,255,255,.15);
    border-bottom: 1px solid rgba(255,255,255,.15);
    transition: .3s;
}

.sector:hover {
    background: rgba(198,154,69,.1);
}

.sector span {
    color: var(--gold-light);
    font-size: 12px;
}

.sector h3 {
    margin-top: 50px;
    font-size: 20px;
}


/* DASHBOARD */

.dashboard {
    background: var(--cream);
}

.dashboard-grid {
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 70px;
    align-items: center;
}

.dashboard-card {
    background: #fff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: var(--shadow);
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border);
    font-size: 13px;
    font-weight: 700;
}

.live-dot {
    color: #4d9c77;
}

.chart {
    padding: 30px 0 15px;
}

.bar-item {
    display: grid;
    grid-template-columns: 90px 1fr 50px;
    gap: 15px;
    align-items: center;
    margin: 20px 0;
    font-size: 12px;
}

.bar {
    height: 10px;
    background: #e8ebe8;
    border-radius: 20px;
    overflow: hidden;
}

.bar i {
    display: block;
    height: 100%;
    background: var(--green);
    border-radius: 20px;
}

.bar-item b {
    color: var(--green);
}

.chart-note {
    color: #929995;
    font-size: 10px;
}


/* METHODOLOGY */

.process {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.process-step {
    text-align: center;
    width: 180px;
}

.process-circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid var(--gold);
    display: grid;
    place-items: center;
    margin: auto auto 18px;
    color: var(--gold);
    font-weight: 800;
}

.process-step h3 {
    font-size: 16px;
}

.process-step p {
    font-size: 12px;
    color: var(--muted);
    margin-top: 5px;
}

.process-line {
    height: 1px;
    background: var(--border);
    flex: 1;
    margin-top: 35px;
}


/* INSIGHTS */

.insights {
    background: #f8f8f6;
}

.insights-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 22px;
}

.insight-card {
    background: #fff;
    overflow: hidden;
    border: 1px solid var(--border);
}

.insight-card img {
    width: 100%;
    height: 230px;
    object-fit: cover;
}

.insight-content {
    padding: 25px;
}

.insight-content > span {
    color: var(--gold);
    font-size: 11px;
    font-weight: 800;
}

.insight-content h3 {
    font-size: 19px;
    line-height: 1.5;
    margin: 10px 0 20px;
}

.insight-content a {
    color: var(--green);
    font-size: 13px;
    font-weight: 800;
}


/* WHY */

.why-grid {
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 100px;
}

.why-list {
    border-top: 1px solid var(--border);
}

.why-item {
    display: grid;
    grid-template-columns: 65px 1fr;
    gap: 20px;
    padding: 28px 0;
    border-bottom: 1px solid var(--border);
}

.why-item > strong {
    color: var(--gold);
    font-size: 22px;
}

.why-item h3 {
    font-size: 18px;
}

.why-item p {
    color: var(--muted);
    font-size: 14px;
}


/* CTA */

.cta {
    background:
        linear-gradient(100deg, rgba(2,44,37,.97), rgba(6,63,53,.94)),
        url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85");
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: 75px 0;
}

.cta-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.cta-content span {
    color: var(--gold-light);
}

.cta h2 {
    font-size: clamp(30px,4vw,48px);
    margin-top: 5px;
}


/* CONTACT */

.contact {
    background: var(--cream);
}

.contact-grid {
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 80px;
}

.contact-details {
    margin-top: 35px;
}

.contact-details > div {
    display: flex;
    gap: 15px;
    margin: 20px 0;
}

.contact-details > div > span {
    color: var(--gold);
    font-size: 25px;
}

.contact-details strong {
    display: block;
}

.contact-details p {
    color: var(--muted);
    margin: 0;
}

.contact-form {
    background: #fff;
    padding: 35px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
}

.form-group {
    margin-bottom: 18px;
}

.form-group label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 7px;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    border: 1px solid #ddd;
    padding: 13px 15px;
    outline: none;
    background: #fafafa;
    border-radius: 6px;
    font-size: 13px;
}

.form-group textarea {
    resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    border-color: var(--gold);
}

.full {
    width: 100%;
}

.form-message {
    text-align: center;
    margin-top: 15px;
    font-size: 13px;
    color: var(--green);
}


/* FOOTER */

.footer {
    background: #021f1a;
    color: #fff;
}

.footer-grid {
    padding: 70px 0;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 50px;
}

.footer-brand img {
    width: 190px;
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 18px;
}

.footer p {
    color: rgba(255,255,255,.55);
    font-size: 13px;
}

.footer h4 {
    color: var(--gold-light);
    margin-bottom: 18px;
}

.footer a {
    display: block;
    color: rgba(255,255,255,.65);
    font-size: 13px;
    margin: 8px 0;
}

.footer a:hover {
    color: #fff;
}

.footer-bottom {
    border-top: 1px solid rgba(255,255,255,.1);
    padding: 20px 0;
}

.footer-bottom .container {
    display: flex;
    justify-content: space-between;
    color: rgba(255,255,255,.45);
    font-size: 11px;
}


/* RESPONSIVE */

@media (max-width: 950px) {

    .nav-links {
        position: absolute;
        top: 88px;
        right: 4%;
        left: 4%;
        display: none;
        flex-direction: column;
        align-items: stretch;
        background: var(--green-dark);
        padding: 20px;
        border-radius: 10px;
    }

    .nav-links.active {
        display: flex;
    }

    .menu-btn {
        display: block;
    }

    .hero {
        min-height: 760px;
    }

    .hero-content,
    .two-columns,
    .dashboard-grid,
    .contact-grid,
    .why-grid {
        grid-template-columns: 1fr;
    }

    .hero-card {
        display: none;
    }

    .services-grid,
    .insights-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .sector-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .footer-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .process {
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
    }

    .process-line {
        display: none;
    }

    .process-step {
        width: 180px;
    }

}


@media (max-width: 650px) {

    .nav {
        height: 75px;
    }

    .brand img {
        width: 135px;
    }

    .nav-links {
        top: 75px;
    }

    .hero {
        min-height: 720px;
        background-position: 60% center;
    }

    .hero h1 {
        font-size: 43px;
    }

    .hero p {
        font-size: 16px;
    }

    .stats-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .stat {
        padding: 25px 10px;
    }

    .stat strong {
        font-size: 30px;
    }

    .section {
        padding: 75px 0;
    }

    .intro-grid {
        gap: 30px;
    }

    .image-box img {
        height: 400px;
    }

    .features {
        grid-template-columns: 1fr;
    }

    .services-grid,
    .insights-grid,
    .sector-grid {
        grid-template-columns: 1fr;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .contact-form {
        padding: 22px;
    }

    .cta-content {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .footer-bottom .container {
        flex-direction: column;
        gap: 5px;
    }

    .bar-item {
        grid-template-columns: 70px 1fr 40px;
        gap: 8px;
    }

}
