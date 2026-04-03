// =========================================================
// Mobile Conferences 2026 — App Logic
// =========================================================

(function () {
  "use strict";

/* 
 * © 2026 Mobile Conferences. All Rights Reserved.
 * The data contained in this file is proprietary. 
 * Scraping, copying, reproduction, or redistribution 
 * of this dataset without explicit permission is strictly prohibited.
 */
const CONFERENCES = [
  {
    id: "ios-conf-sg",
    name: "iOS Conf SG",
    date: "Jan 21-23, 2026",
    location: "Singapore, SG",
    tags: ["iOS", "Swift", "SwiftUI", "Asia"],
    url: "https://www.iosconf.sg",
    description: "Singapore's flagship iOS conference with workshops, talks, and deep technical sessions from the best Apple developers across Asia and the world.",
    platform: "iOS",
    image: "https://avatars.githubusercontent.com/u/42413810?s=200&v=4"
  },
  {
    id: "arctic-conf",
    name: "Arctic Conference",
    date: "Feb 10-12, 2026",
    location: "Oulu, FI",
    tags: ["iOS", "Swift", "Apple", "Nordic"],
    url: "https://arcticonference.com/",
    description: "Apple developer conference in Oulu, Finland combining iOS/Swift talks with sauna, ice swimming, and Northern Lights.",
    platform: "iOS",
    image: "https://pbs.twimg.com/profile_images/1777784334813933569/nvDfi2hE_400x400.png"
  },
  {
    id: "appdevcon",
    name: "AppDevCon",
    date: "Mar 10-13, 2026",
    location: "Amsterdam, NL",
    tags: ["iOS", "Android", "Cross-platform", "Europe"],
    url: "https://appdevcon.nl",
    description: "Multi-platform app development conference covering iOS, Android, and cross-platform in Amsterdam.",
    platform: "Cross-platform",
    image: "https://pbs.twimg.com/profile_images/2019465017075159041/OohJ-pFu_400x400.png"
  },
  {
    id: "try-swift-tokyo",
    name: "try! Swift Tokyo 2026",
    date: "Apr 12-14, 2026",
    location: "Tokyo, JP",
    tags: ["Swift", "iOS", "Global", "Tokyo", "Workshops"],
    url: "https://tryswift.jp/en",
    description: "Japan's premier Swift conference with developers worldwide. Practical Swift development with AI-powered simultaneous interpretation.",
    featured: true,
    platform: "iOS",
    image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=280,height=280/event-covers/2c/916f2185-068c-4bcf-8096-23deadca2200.png"
  },
  {
    id: "deep-dish-swift",
    name: "Deep Dish Swift",
    date: "Apr 12-14, 2026",
    location: "Chicago, US",
    tags: ["Swift", "iOS", "Indie Dev", "Not-for-Profit"],
    url: "https://deepdishswift.com",
    description: "Chicago's premier Swift/iOS developer conference. Inclusive, not-for-profit. 3 days covering indie dev, Swift, iOS.",
    featured: true,
    platform: "iOS",
    image: "https://deepdishswift.com/assets/images/2026/deep-dish-logo.png"
  },
  {
    id: "communitykit",
    name: "CommunityKit 2026",
    date: "Jun 9-11, 2026",
    location: "Cupertino, US",
    tags: ["iOS", "Swift", "Community", "WWDC", "Free", "Indie Dev", "Meetup"],
    url: "https://communitykit.social",
    description: "Free community event running alongside WWDC26 at Residence Inn Cupertino. Meetups, live podcast recordings, workshops, and an Indie Fair for the Swift/iOS developer community.",
    platform: "iOS",
    image: "https://pbs.twimg.com/profile_images/1918456324947423232/043OlCnb_400x400.jpg"
  },
  {
    id: "ioskonf",
    name: "iOSKonf26",
    date: "May 4-6, 2026",
    location: "Skopje, MK",
    tags: ["iOS", "Swift", "Europe", "Balkans"],
    url: "https://ioskonf.mk",
    description: "Eastern Europe's iOS/Swift conference in Skopje, Macedonia. Growing community event.",
    platform: "iOS",
    image: "https://www.ioskonf.mk/assets/logos/iOSKonf25_logo_bw.webp"
  },
  {
    id: "mobius-spring",
    name: "Mobius 2026 Spring",
    date: "May 12-13, 2026",
    location: "Moscow, RU",
    tags: ["iOS", "Android", "Cross-platform", "Mobile", "Russia"],
    url: "https://mobiusconf.com/en/",
    description: "Bi-annual Russian mobile development conference. Covers iOS, Android, cross-platform, architecture, DevOps for mobile.",
    platform: "Cross-platform",
    image: "https://yt3.googleusercontent.com/zg2Tgihd9bNouq3Z922_4qSmmO6YvMiQu-fs5t3KbEmry3H6ON8tYWgr3sjdc2fls3xMEmvl0gw=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: "swift-craft",
    name: "Swift Craft 2026",
    date: "May 18-20, 2026",
    location: "Folkestone, GB",
    tags: ["Swift", "iOS", "UK", "Single-track", "Workshops"],
    url: "https://swiftcraft.uk",
    description: "UK Swift conference at Leas Cliff Hall, Folkestone, overlooking the English Channel. Single-track: 1 workshop day + 2 conference days + gala dinner.",
    platform: "iOS",
    image: "https://swiftcraft.uk/static/img/logos/swiftcraft-logo-sq-text.png"
  },
  {
    id: "mau-vegas",
    name: "MAU Vegas 2026",
    date: "May 19-21, 2026",
    location: "Las Vegas, US",
    tags: ["iOS", "Mobile Marketing", "Growth", "Monetization", "UA"],
    url: "https://mauvegas.com",
    description: "Mobile user acquisition, growth, and marketing conference in Las Vegas.",
    platform: "iOS",
    image: "https://pbs.twimg.com/profile_images/1843372094463029248/SUbzLMZk_400x400.jpg"
  },
  {
    id: "mdevcamp",
    name: "mDevCamp 2026",
    date: "Jun 3-4, 2026",
    location: "Prague, CZ",
    tags: ["iOS", "Android", "Mobile", "Prague", "Europe"],
    url: "https://mdevcamp.eu",
    description: "Festival-like mobile conference in Prague. 3 stages covering iOS, Android, and mobile technologies with hands-on workshops.",
    platform: "Cross-platform",
    image: "https://pbs.twimg.com/profile_images/1980264392517206016/OWM_jhji_400x400.jpg"
  },
  {
    id: "wwdc26",
    name: "WWDC26",
    date: "Jun 8-12, 2026",
    location: "Cupertino, US",
    tags: ["iOS", "Swift", "SwiftUI", "macOS", "visionOS", "Apple", "Free"],
    url: "https://developer.apple.com/wwdc26/",
    description: "Apple's annual flagship developer conference. Keynote, State of the Union, and 100s of technical sessions on iOS, macOS, watchOS, visionOS, Swift.",
    featured: true,
    platform: "iOS",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Apple_WWDC_wordmark_2024.svg/500px-Apple_WWDC_wordmark_2024.svg.png"
  },
  {
    id: "mac-admins",
    name: "MacAdmins Conference",
    date: "Jul 7-10, 2026",
    location: "State College, US",
    tags: ["Apple", "macOS", "MDM", "Enterprise", "IT Admin"],
    url: "https://macadmins.psupsu.edu",
    description: "Annual conference for Apple IT professionals and device management administrators. MDM, deployment, security, and enterprise Apple ecosystem.",
    platform: "iOS",
    image: "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/4/24696/files/2026/01/WhiteAndBlueCircle.png"
  },
  {
    id: "fluttercon-usa",
    name: "flutterCon USA 2026",
    date: "Jul 16-17, 2026",
    location: "Orlando, US",
    tags: ["Flutter", "Dart", "iOS", "Cross-platform", "Mobile"],
    url: "https://fluttercon.dev",
    description: "US-based Flutter/Dart conference. Cross-platform mobile for iOS, Android, web, and desktop with Flutter.",
    platform: "Cross-platform",
    image: "https://static.wixstatic.com/media/6e1ab2_7d2c38ab9595476781d3f49d55a430fb~mv2.png/v1/fill/w_1286,h_223,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FlutterCon_logo.png"
  },
  {
    id: "swift-rockies",
    name: "Swift Rockies 2026",
    date: "Jul 22-23, 2026",
    location: "Calgary, CA",
    tags: ["Swift", "iOS", "Canada", "Community"],
    url: "https://swiftrockies.ca",
    description: "Swift developer conference in Calgary, Canada. Community-focused with talks and workshops on Swift and iOS.",
    platform: "iOS",
    image: "https://swiftrockies.com/logo.svg"
  },
  {
    id: "swift-island",
    name: "Swift Island 2026",
    date: "Sep 7-11, 2026",
    location: "Texel, NL",
    tags: ["Swift", "iOS", "Workshops", "Hands-on", "Netherlands"],
    url: "https://swiftisland.nl",
    description: "Unique workshop-focused Swift conference on Texel island, Netherlands. Highly interactive small-group sessions with expert mentors.",
    platform: "iOS",
    image: "https://pbs.twimg.com/profile_images/971171451058491393/KbCUu1Ag_400x400.jpg"
  },
  {
    id: "iosdevuk",
    name: "iOSDevUK",
    date: "Sep 7-10, 2026",
    location: "Aberystwyth, GB",
    tags: ["iOS", "Swift", "UK", "University"],
    url: "https://www.iosdevuk.com",
    description: "One of the UK's longest-running iOS conferences at Aberystwyth University, Wales.",
    platform: "iOS",
    image: "https://media.licdn.com/dms/image/v2/D4E0BAQGG65yyxhhoJg/company-logo_200_200/company-logo_200_200/0/1719527301724?e=2147483647&v=beta&t=GMT-DLPICx_PMxCkenxl78UnfP2RotO0lBJSv9EGfqU"
  },
  {
    id: "flutter-conf-latam",
    name: "Flutter Conf Latam 2026",
    date: "Sep 22-23, 2026",
    location: "Cancun, MX",
    tags: ["Flutter", "Dart", "iOS", "LatAm", "Cross-platform"],
    url: "https://flutterconflatam.com",
    description: "Flutter developer conference for Latin America in Cancun, Mexico.",
    platform: "Cross-platform",
    image: "https://pbs.twimg.com/profile_images/2002355419935539200/Mgzocn1m_400x400.png"
  },
  {
    id: "macsysadmin",
    name: "MacSysAdmin 2026",
    date: "Sep 29 - Oct 2, 2026",
    location: "Gothenburg, SE",
    tags: ["Apple", "macOS", "MDM", "SysAdmin", "Enterprise"],
    url: "https://macsysadmin.se",
    description: "Scandinavian conference for Apple IT professionals. macOS, MDM, scripting, and Apple enterprise deployment.",
    platform: "iOS",
    image: "https://macsysadmin.se/index_files/image-41-E44.png"
  },
  {
    id: "swiftcon-berlin",
    name: "swiftCon",
    date: "Oct 7-9, 2026",
    location: "Berlin, DE",
    tags: ["Swift", "iOS", "macOS", "Workshops", "Berlin", "Leadership"],
    url: "https://www.nextappcon.com/swiftcon",
    description: "Dedicated Swift track within next.app devcon at CityCube Berlin. 120 speakers, 110 sessions & workshops, 1000+ Swift developers.",
    platform: "iOS",
    image: "https://static.wixstatic.com/media/6e1ab2_40c86a6dbaea4eaf92fd84b73ee113b1~mv2.png/v1/fill/w_1286,h_243,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SwiftCon_logo.png"
  },
  {
    id: "swift-leeds",
    name: "SwiftLeeds 2026",
    date: "Oct 12-14, 2026",
    location: "Leeds, GB",
    tags: ["Swift", "iOS", "UK", "Community", "Non-profit", "Indie Dev"],
    url: "https://swiftleeds.co.uk",
    description: "Community-run non-profit Swift conference at Leeds Playhouse. 300+ attendees from 30+ countries.",
    featured: true,
    platform: "iOS",
    image: "https://pbs.twimg.com/profile_images/1547322441327861760/oqyre2i7_400x400.jpg"
  },
  {
    id: "do-ios",
    name: "Do iOS",
    date: "Nov 11-12, 2026",
    location: "Amsterdam, NL",
    tags: ["iOS", "Swift", "Europe", "Amsterdam"],
    url: "https://do-ios.com",
    description: "One of Europe's top iOS conferences. High-quality technical talks, community networking, canal-side social events in Amsterdam.",
    platform: "iOS",
    image: "https://do-ios.com/_astro/logo.CY2UbghY.png"
  },
  {
    id: "swiftsonic",
    name: "Swiftsonic '26",
    date: "Nov 20-22, 2026",
    location: "Nashville, US",
    tags: ["Swift", "iOS", "Music", "Nashville"],
    url: "https://swiftsonic.dev",
    description: "Nashville-based Swift conference with a music-inspired theme. Technical Swift sessions blended with vibrant Nashville culture.",
    platform: "iOS",
    image: "https://swiftsonicconf.com/swiftsonic.png"
  },
  {
    id: "swift-bharat",
    name: "Swift Bharat",
    date: "Dec 2026",
    location: "Bangalore, IN",
    tags: ["iOS", "Swift", "India", "Bangalore", "Community"],
    url: "https://swiftbharat.com",
    description: "India's premier iOS and Swift developer conference in Bangalore.",
    platform: "iOS",
    image: "https://pbs.twimg.com/profile_images/1909184084129030144/GaYGPHUz_400x400.jpg"
  }
];

  // --- State ---
  let currentFilter = "All";
  let searchQuery = "";

  // --- SVG Icons (inline) ---
  const icons = {
    calendar: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
    mapPin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    externalLink: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>',
  };

  // --- DOM References ---
  const featuredGrid = document.getElementById("featured-grid");
  const directoryList = document.getElementById("directory-list");
  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("search-input");
  const filterPills = document.querySelectorAll(".filter-pill");
  const navbar = document.getElementById("navbar");

  // --- Utility ---
  function platformClass(platform) {
    if (platform === "iOS") return "ios";
    if (platform === "Android") return "android";
    return "cross";
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // --- Render Featured Cards ---
  function renderFeatured() {
    // Specific order: WWDC, CommunityKit, Deep Dish, try Swift
    const featuredOrder = ["wwdc26", "communitykit", "deep-dish-swift", "try-swift-tokyo"];
    const featured = featuredOrder
      .map(id => CONFERENCES.find(c => c.id === id))
      .filter(Boolean);
    featuredGrid.innerHTML = featured
      .map(
        (conf, idx) => `
      <div class="featured-card" data-delay="${idx * 100}" id="featured-${conf.id}">
        <div class="featured-card-img">
          <img src="${conf.image}" alt="${escapeHtml(conf.name)}" referrerpolicy="no-referrer" loading="lazy" onerror="this.src='https://picsum.photos/seed/${conf.id}/400/200'">
        </div>
        <div class="featured-tags">
          ${conf.tags
            .slice(0, 2)
            .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
            .join("")}
        </div>
        <h3 class="featured-card-title">${escapeHtml(conf.name)}</h3>
        <div class="featured-card-meta">
          ${icons.calendar} ${escapeHtml(conf.date)}
          <span class="meta-dot">•</span>
          ${icons.mapPin} ${escapeHtml(conf.location)}
        </div>
        <p class="featured-card-desc">${escapeHtml(conf.description)}</p>
        <a href="${conf.url}" target="_blank" rel="noopener noreferrer" class="featured-card-link">
          View Website ${icons.externalLink}
        </a>
      </div>
    `
      )
      .join("");

    // Animate cards on scroll
    observeFeaturedCards();
  }

  // --- IntersectionObserver for Featured Cards ---
  function observeFeaturedCards() {
    const cards = document.querySelectorAll(".featured-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || "0", 10);
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
  }

  // --- Render Directory List ---
  function renderDirectory() {
    const filtered = CONFERENCES.filter((conf) => {
      const matchesFilter =
        currentFilter === "All" || conf.platform === currentFilter;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        conf.name.toLowerCase().includes(q) ||
        conf.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        conf.location.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      directoryList.innerHTML = "";
      emptyState.classList.remove("hidden");
      return;
    }

    emptyState.classList.add("hidden");

    directoryList.innerHTML = filtered
      .map(
        (conf, idx) => `
      <div class="dir-item" id="dir-${conf.id}" style="animation-delay: ${idx * 40}ms">
        <div class="dir-item-info">
          <div class="dir-item-header">
            <h4 class="dir-item-name">${escapeHtml(conf.name)}</h4>
            <span class="platform-badge ${platformClass(
              conf.platform
            )}">${escapeHtml(conf.platform)}</span>
          </div>
          <p class="dir-item-desc">${escapeHtml(conf.description)}</p>
        </div>
        <div class="dir-item-actions">
          <div class="dir-meta-chip">
            ${icons.calendar}
            <span>${escapeHtml(conf.date)}</span>
          </div>
          <div class="dir-meta-chip">
            ${icons.mapPin}
            <span>${escapeHtml(conf.location)}</span>
          </div>
          <a href="${conf.url}" target="_blank" rel="noopener noreferrer" class="dir-item-link">
            Official Site ${icons.externalLink}
          </a>
        </div>
      </div>
    `
      )
      .join("");
  }

  // --- Event Handlers ---
  // Search
  searchInput.addEventListener("input", function (e) {
    searchQuery = e.target.value;
    renderDirectory();
  });

  // Filter pills
  filterPills.forEach((pill) => {
    pill.addEventListener("click", function () {
      filterPills.forEach((p) => p.classList.remove("active"));
      this.classList.add("active");
      currentFilter = this.dataset.filter;
      renderDirectory();
    });
  });

  // Navbar scroll effect
  let scrollTicking = false;
  window.addEventListener("scroll", function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(function () {
        if (window.scrollY > 10) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // --- Initialize ---
  renderFeatured();
  renderDirectory();
})();
