


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
const projects = [
  {
    title: 'Rahlaty',
    category: 'design',
    categoryLabel: 'UI/UX Design',
    description: 'Flight booking app that helps travelers easily search, compare, and book flights. With a simple design, secure payments',
    tags: ['Figma', 'User Research', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    title: 'BookHaven',
    category: 'design',
    categoryLabel: 'UI/UX Design',
    description: 'A digital library platform that helps users browse, track, and manage their reading, combining simplicity.',
    tags: ['Figma', 'User Research', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    title: 'Medinote',
    category: 'design',
    categoryLabel: 'UI/UX Design',
    description: 'A doctor booking and medical notes platform designed to simplify healthcare access and improve patient-doctor interactions.',
    tags: ['Figma', 'User Research', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    title: 'Fintech Dashboard',
    category: 'development',
    categoryLabel: 'Development',
    description: 'A real-time financial tracking dashboard with automated expense categorization and wealth management insights.',
    tags: ['React', 'D3.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    title: 'EdTech Platform',
    category: 'development',
    categoryLabel: 'Development',
    description: 'An interactive learning management system featuring live classes, course progression, and collaborative tools.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    title: 'Inventory System',
    category: 'development',
    categoryLabel: 'Development',
    description: 'Scalable inventory and order management system with QR scanning and real-time stock notifications.',
    tags: ['TypeScript', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  }
];

// Populate Projects
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

const createProjectCard = (project) => {
  return `
    <div class="group relative bg-black rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(22,163,74,0.2)] transition-all duration-500 reveal" data-category="${project.category}">
      <div class="h-64 overflow-hidden relative">
        <div class="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
          <span class="text-white text-xs font-bold">Bē</span>
        </div>
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
      </div>
      <div class="p-6">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-2xl font-bold text-white">${project.title}</h3>
          <span class="text-[10px] font-bold px-3 py-1 rounded-full border border-green-600 text-green-500 tracking-wider">
            ${project.categoryLabel.toUpperCase()}
          </span>
        </div>
        <p class="text-slate-400 text-sm mb-6 leading-relaxed">
          ${project.description}
        </p>
        <div class="flex flex-wrap gap-2">
          ${project.tags.map(tag => `
            <span class="text-[10px] px-3 py-1.5 rounded-full border border-green-600/30 text-green-500/80 bg-green-600/5 hover:bg-green-600/10 transition-colors cursor-default">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
};

const renderProjects = (filter = 'all') => {
  if (!projectsGrid) return;

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  projectsGrid.innerHTML = filteredProjects.map(createProjectCard).join('');

  // Re-trigger scroll reveal for new elements
  setTimeout(revealOnScroll, 100);
};

// Filter Functionality
if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active', 'bg-green-600'));
      btn.classList.add('active', 'bg-green-600');

      const filter = btn.getAttribute('data-filter');
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
