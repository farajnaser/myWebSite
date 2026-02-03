

// Projects Data
const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A modern dashboard for online retailers with real-time analytics and inventory management.',
    tags: ['Vue.js', 'Tailwind', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    title: 'Travel App',
    description: 'Booking platform for unique travel experiences with interactive maps and user reviews.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  },
  {
    title: 'AI Image Generator',
    description: 'Web application that uses AI API to generate images from text descriptions.',
    tags: ['JavaScript', 'OpenAI API', 'CSS'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#'
  }
];

// Populate Projects
const projectsGrid = document.getElementById('projects-grid');

const createProjectCard = (project) => {
  return `
    <div class="group relative glass-panel rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 reveal">
      <div class="h-48 overflow-hidden relative">
        <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
      </div>
      <div class="p-6">
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.tags.map(tag => `<span class="text-xs font-semibold px-2 py-1 rounded bg-slate-800 text-purple-300 border border-purple-500/20">${tag}</span>`).join('')}
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">${project.title}</h3>
        <p class="text-slate-400 text-sm mb-6 line-clamp-2">${project.description}</p>
        <a href="${project.link}" class="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
          View Project 
          <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
  `;
};

if (projectsGrid) {
  projectsGrid.innerHTML = projects.map(createProjectCard).join('');
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

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  revealElements.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// Parallax/Gradient cursor effect (Optional subtle polish)
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  // You could update custom properties here for more complex effects
  // document.documentElement.style.setProperty('--mouse-x', x);
  // document.documentElement.style.setProperty('--mouse-y', y);
});
