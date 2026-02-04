


// Scroll Reveal Animation Logic
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 150;
  const revealElements = document.querySelectorAll('.reveal');

  revealElements.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    }
  });
};

// Projects Data
// Projects Data
const projects = [
  {
    title: 'Personal Portfolio',
    category: 'web development',
    categoryLabel: 'Frontend Development',
    description: 'Built with HTML, Tailwind CSS, and JavaScript to showcase UI/UX projects and interactive prototypes.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
    image: 'dist/assets/images/portfolio_v2_raw.png',
    github: 'https://github.com/farajnaser/myWebSite',
    behance: '#',
    link: 'https://farajnaser.github.io/myWebSite'
  },
  {
    title: 'تعلم – Learning Platform',
    category: 'web development',
    categoryLabel: 'Frontend Development',
    description: 'Developed a responsive educational platform using HTML, CSS, and JavaScript, focusing on user-centered design and intuitive navigation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'dist/assets/images/learning_v2_raw.png',
    github: 'https://github.com/farajnaser/EduWebProject',
    behance: '#',
    link: 'https://farajnaser.github.io/EduWebProject/'
  },
  {
    title: 'Library System',
    category: 'web development',
    categoryLabel: 'Frontend Development',
    description: 'Designed and developed a responsive web platform for the Electronic Technology College using HTML, CSS, JavaScript, and PHP. Focused on user-friendly navigation and dynamic book management.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/farajnaser/phpProject0',
    behance: '#',
    link: 'https://github.com/farajnaser/phpProject0'
  }
];

// Pagination State
let currentPage = 1;
const projectsPerPage = 3;
let currentFilter = 'all';

// Populate Projects
const projectsGrid = document.getElementById('projects-grid');
const paginationContainer = document.getElementById('project-pagination');
const filterBtns = document.querySelectorAll('.filter-btn');

const createProjectCard = (project) => {
  return `
    <div class="group relative bg-[#050505] rounded-3xl overflow-hidden hover:shadow-[0_0_50px_rgba(10,193,126,0.1)] transition-all duration-500 reveal" data-category="${project.category}">
      <div class="h-80 overflow-hidden relative bg-[#0a0a0a] flex items-center justify-center pt-8">
        <!-- Realistic Laptop Mockup -->
        <div class="project-laptop">
          <div class="laptop-wrapper">
            <div class="laptop-screen">
              <div class="laptop-display">
                <img src="${project.image}" alt="${project.title}">
              </div>
            </div>
            <div class="laptop-base"></div>
          </div>
        </div>

        <!-- Floating Icons -->
        <div class="absolute top-6 right-6 z-20 flex flex-col gap-3">
          <a href="${project.github}" target="_blank" class="w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:bg-[#0AC17E] hover:border-[#0AC17E] hover:text-white transition-all duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>
      <div class="p-8">
        <div class="flex justify-between items-center mb-5">
          <h3 class="text-2xl font-bold text-white tracking-tight">${project.title}</h3>
          <span class="text-[10px] font-bold px-4 py-1.5 rounded-full border border-[#0AC17E]/30 text-[#0AC17E] tracking-widest bg-[#0AC17E]/5 uppercase">
            ${project.categoryLabel}
          </span>
        </div>
        <p class="text-slate-400 text-sm mb-8 leading-relaxed font-medium">
          ${project.description}
          <a href="${project.link}" target="_blank" class="inline-flex items-center ml-3 text-[#0AC17E] font-bold hover:underline group/link">
            Visit Here
            <svg class="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </p>
        <div class="flex flex-wrap gap-3">
          ${project.tags.map(tag => `
            <span class="text-[10px] font-bold px-5 py-2 rounded-full border border-white/5 text-slate-400 bg-white/5 hover:border-[#0AC17E]/50 hover:text-[#0AC17E] transition-all duration-300">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
};

const renderPagination = (totalItems) => {
  if (!paginationContainer) return;

  const totalPages = Math.ceil(totalItems / projectsPerPage);
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }

  let paginationHtml = `
    <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} class="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:border-purple-500 hover:text-purple-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
    </button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    paginationHtml += `
      <button onclick="changePage(${i})" class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${currentPage === i ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' : 'border border-white/10 text-slate-400 hover:border-purple-500 hover:text-purple-500'}">
        ${i}
      </button>
    `;
  }

  paginationHtml += `
    <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''} class="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:border-purple-500 hover:text-purple-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </button>
  `;

  paginationContainer.innerHTML = paginationHtml;
};

// Global function for pagination buttons
window.changePage = (page) => {
  const filteredProjects = currentFilter === 'all'
    ? projects
    : projects.filter(p => p.category === currentFilter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  renderProjects(currentFilter);

  // Scroll to projects top smoothly
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
};

const renderProjects = (filter = 'all') => {
  if (!projectsGrid) return;

  currentFilter = filter;
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  // Pagination Slice
  const start = (currentPage - 1) * projectsPerPage;
  const end = start + projectsPerPage;
  const paginatedProjects = filteredProjects.slice(start, end);

  projectsGrid.innerHTML = paginatedProjects.map(createProjectCard).join('');
  renderPagination(filteredProjects.length);

  // Re-trigger scroll reveal for new elements
  setTimeout(revealOnScroll, 100);
};

// Filter Functionality
if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active', 'bg-purple-600'));
      btn.classList.add('active', 'bg-purple-600');

      const filter = btn.getAttribute('data-filter');
      currentPage = 1; // Reset to page 1 on filter
      renderProjects(filter);
    });
  });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
  });
}

// Event Listeners
window.addEventListener('scroll', revealOnScroll);

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  revealOnScroll();
});

// Cursor parallax effect
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  // document.documentElement.style.setProperty('--mouse-x', x);
  // document.documentElement.style.setProperty('--mouse-y', y);
});
// --- Contact Form Handling (EmailJS) ---
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');

// Initialize EmailJS (You can replace 'PUBLIC_KEY' with your actual key from EmailJS)
if (window.emailjs) {
  emailjs.init("PUBLIC_KEY"); // Replace with your Public Key
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable button and show loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    formStatus.className = 'hidden';

    // Get Form Data
    const formData = new FormData(contactForm);

    try {
      // --- FORMSPREE INTEGRATION ---
      // Replace the URL below with your actual Formspree endpoint
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrelndrz";

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
        formStatus.className = 'text-sm font-medium p-4 rounded-xl bg-green-500/10 text-green-500 mb-6';
        contactForm.reset();

        // Optional: Still save locally for quick access on this device if desired
        const data = Object.fromEntries(formData.entries());
        data.id = Date.now().toString().slice(-6);
        data.timestamp = new Date().toLocaleString();
        const existingMessages = JSON.parse(localStorage.getItem('sent_messages') || '[]');
        existingMessages.unshift(data);
        localStorage.setItem('sent_messages', JSON.stringify(existingMessages));

      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
        } else {
          formStatus.textContent = "Oops! There was a problem submitting your form";
        }
        formStatus.className = 'text-sm font-medium p-4 rounded-xl bg-red-500/10 text-red-500 mb-6';
      }
    } catch (error) {
      formStatus.textContent = "Oops! There was a problem submitting your form";
      formStatus.className = 'text-sm font-medium p-4 rounded-xl bg-red-500/10 text-red-500 mb-6';
    } finally {
      submitBtn.disabled = false;
      btnText.textContent = 'Send Message';
      formStatus.classList.remove('hidden');
    }
  });
}

// --- Quick Admin Access (Shift + M) ---
window.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.key.toLowerCase() === 'm') {
    window.location.href = 'messages.html';
  }
});
