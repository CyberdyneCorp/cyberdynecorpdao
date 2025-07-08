class CyberdyneEnhancer {
  constructor() {
    this.init();
    this.createBackgroundEffects();
    this.setupInteractions();
    this.setupScrollEffects();
  }

  init() {
    setTimeout(() => {
      document.getElementById('loadingScreen')?.classList.add('hidden');
    }, 2000);

    this.setupCustomCursor();
    this.setupMenu();
    this.setupMarketplace();
  }

  setupCustomCursor() {
    const cursor = document.getElementById('cursor') as HTMLElement;
    const trails: HTMLElement[] = [];

    for (let i = 0; i < 10; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
      trails.push(trail);
    }

    let mouseX = 0, mouseY = 0;
    let trailIndex = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';

      const currentTrail = trails[trailIndex];
      currentTrail.style.left = mouseX + 'px';
      currentTrail.style.top = mouseY + 'px';

      trailIndex = (trailIndex + 1) % trails.length;
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  }

  createFooterParticles() {
    const container = document.getElementById('footerParticles');
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'footer-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      container?.appendChild(particle);
    }
  }

  createBackgroundEffects() {
    this.createNeuralNetwork();
    this.createQuantumParticles();
    this.createFloatingShapes();
    this.createMatrixRain();
    this.createFooterParticles();
  }

  createMatrixRain() {
    const container = document.getElementById('matrixRain')!;
    const columnCount = 15;
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      let text = '';
      const lineCount = Math.floor(Math.random() * 10) + 15;
      for (let j = 0; j < lineCount; j++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        text += char + '<br>';
      }
      column.innerHTML = text;
      column.style.left = Math.random() * 100 + '%';
      column.style.animationDelay = Math.random() * 5 + 's';
      column.style.animationDuration = (Math.random() * 8 + 12) + 's';
      container.appendChild(column);
    }

    setInterval(() => {
      if (container.children.length < 20) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        let text = '';
        const lineCount = Math.floor(Math.random() * 8) + 10;
        for (let j = 0; j < lineCount; j++) {
          const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          text += char + '<br>';
        }
        column.innerHTML = text;
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDuration = (Math.random() * 6 + 10) + 's';
        container.appendChild(column);

        setTimeout(() => {
          column.remove();
        }, 15000);
      }
    }, 3000);
  }

  createNeuralNetwork() {
    const container = document.getElementById('neuralNetwork')!;
    const nodeCount = 30;

    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.className = 'neural-node';
      node.style.left = Math.random() * 100 + '%';
      node.style.top = Math.random() * 100 + '%';
      node.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(node);

      if (i > 0 && Math.random() > 0.7) {
        const connection = document.createElement('div');
        connection.className = 'neural-connection';
        connection.style.left = Math.random() * 100 + '%';
        connection.style.top = Math.random() * 100 + '%';
        connection.style.width = Math.random() * 200 + 50 + 'px';
        connection.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(connection);
      }
    }
  }

  createQuantumParticles() {
    const container = document.getElementById('quantumParticles')!;
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'quantum-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
      const colors = ['var(--neon-blue)', 'var(--electric-purple)', 'var(--matrix-green)', 'var(--cyber-orange)'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(particle);
    }
  }

  createFloatingShapes() {
    const container = document.getElementById('floatingShapes')!;
    const shapeCount = 20;

    for (let i = 0; i < shapeCount; i++) {
      const shape = document.createElement('div');
      const shapeTypes = ['circle', 'triangle', 'square'];
      const randomShape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

      shape.className = `floating-shape ${randomShape}`;
      shape.style.left = Math.random() * 100 + '%';
      shape.style.top = Math.random() * 100 + '%';
      shape.style.width = Math.random() * 40 + 20 + 'px';
      shape.style.height = shape.style.width;
      shape.style.animationDelay = Math.random() * 20 + 's';

      container.appendChild(shape);
    }
  }

  setupMenu() {
    const menuToggle = document.getElementById('menuToggle')!;
    const sideMenu = document.getElementById('sideMenu')!;
    const menuOverlay = document.getElementById('menuOverlay')!;

    const toggleMenu = () => {
      const isActive = sideMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      menuOverlay.classList.toggle('active');

      if (isActive) {
        document.body.style.overflow = 'overlay';
        document.body.style.paddingRight = '';
      } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }
    };

    const closeMenu = () => {
      sideMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };

    menuToggle?.addEventListener('click', toggleMenu);
    menuOverlay?.addEventListener('click', closeMenu);

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  setupMarketplace() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    const carousel = document.getElementById('productsCarousel')!;

    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;
        productCards.forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            (card as HTMLElement).style.display = 'block';
          } else {
            (card as HTMLElement).style.display = 'none';
          }
        });

        carousel.scrollLeft = 0;
      });
    });

    productCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        (card as HTMLElement).style.transform = 'translateY(-15px) rotateY(5deg) scale(1.02)';
      });

      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = 'translateY(0) rotateY(0) scale(1)';
      });
    });
  }

  setupScrollEffects() {
    const header = document.getElementById('header')!;
    const scrollProgress = document.getElementById('scrollProgress')!;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled / (document.body.scrollHeight - window.innerHeight);
      scrollProgress.style.width = (rate * 100) + '%';

      if (scrolled > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      const parallaxElements = document.querySelectorAll('.hologram');
      parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.card, .character-card, .product-card').forEach(el => {
      const elem = el as HTMLElement;
      elem.style.opacity = '0';
      elem.style.transform = 'translateY(50px)';
      elem.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });
  }

  setupInteractions() {
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
      const button = btn as HTMLElement;
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px) scale(1.05)';
      });
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
      });
    });

    document.getElementById('fab')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    this.typewriterEffect();
  }

  typewriterEffect() {
    const terminalText = document.querySelector('.terminal-text') as HTMLElement;
    if (terminalText) {
      const text = terminalText.textContent || '';
      terminalText.textContent = '';
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          terminalText.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 50);
        }
      };
      setTimeout(typeWriter, 3000);
    }
  }
}

export default CyberdyneEnhancer;