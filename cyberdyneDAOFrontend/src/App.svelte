<script lang="ts">
  import CyberdyneEnhancer from './lib/utils/enhancer';
  import Footer from './lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  import './app.css';

  onMount(() => {
    new CyberdyneEnhancer();
  });
</script>

<main>
  <!-- Loading Screen -->
  <div class="loading-screen" id="loadingScreen">
    <div class="cyber-loader">
      <div class="loader-ring"></div>
      <div class="loader-ring"></div>
      <div class="loader-ring"></div>
    </div>
    <div class="loading-text">INICIALIZANDO CYBERDYNE...</div>
  </div>

  <!-- Scroll Progress Bar -->
  <div class="scroll-progress" id="scrollProgress"></div>

  <!-- Custom Cursor -->
  <div class="custom-cursor" id="cursor"></div>

  <!-- Enhanced Animated Background -->
  <div class="enhanced-bg">
    <div class="cyber-grid"></div>
    <div class="neural-network" id="neuralNetwork"></div>
    <div class="quantum-particles" id="quantumParticles"></div>
    <div class="matrix-rain" id="matrixRain"></div>
  </div>

  <!-- Floating Shapes -->
  <div class="floating-shapes" id="floatingShapes"></div>

  <!-- Header -->
  <header id="header">
    <div class="nav-container">
      <div class="nav-left">
        <button class="menu-toggle" id="menuToggle">
          <div class="menu-lines">
            <div class="menu-line"></div>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
          </div>
        </button>
        <a href="#" class="logo hologram">CYBERDYNE</a>
      </div>
      <div class="nav-right">
        <button class="connect-btn">Conectar Wallet</button>
      </div>
    </div>
  </header>

  <!-- Menu Overlay -->
  <div class="menu-overlay" id="menuOverlay"></div>

  <!-- Side Menu -->
  <div class="side-menu glass-strong" id="sideMenu">
    <div class="menu-header">
      <h3 class="menu-title">NAVIGATION</h3>
      <p class="menu-subtitle">Explore a Cyberdyne DAO</p>
    </div>
    <ul class="nav-links">
      <li><a href="#about"><span class="nav-icon">👥</span>Quem Somos</a></li>
      <li><a href="#features"><span class="nav-icon">⚡</span>O que Fazemos</a></li>
      <li><a href="#marketplace"><span class="nav-icon">🛒</span>Marketplace</a></li>
      <li><a href="#characters"><span class="nav-icon">🤖</span>Personagens</a></li>
      <li><a href="#docs"><span class="nav-icon">📚</span>Documentação</a></li>
      <li><a href="#community"><span class="nav-icon">💬</span>Discord</a></li>
      <li><a href="#github"><span class="nav-icon">⚡</span>GitHub</a></li>
    </ul>
  </div>

  <!-- Hero Section -->
  <section class="hero hologram">
    <div class="hero-content">
      <h1>Build the Future</h1>
      <p class="subtitle">
        Uma DAO para nerds, desenvolvedores e visionários que querem transformar o mundo com AI, Blockchain e Games.
        <span class="terminal-text">Junte-se a nós e ganhe dividendos reais</span>
      </p>
      <div class="cta-buttons">
        <a href="#" class="btn-primary">Entrar no Discord</a>
        <a href="#" class="btn-secondary">Ver Produtos</a>
      </div>
      <div class="hero-stats">
        <div class="hero-stat card">
          <div class="hero-stat-number">1,337</div>
          <div class="hero-stat-label">Builders Ativos</div>
        </div>
        <div class="hero-stat card">
          <div class="hero-stat-number">42</div>
          <div class="hero-stat-label">Produtos Shipped</div>
        </div>
        <div class="hero-stat card">
          <div class="hero-stat-number">$2.5M</div>
          <div class="hero-stat-label">Dividendos Pagos</div>
        </div>
        <div class="hero-stat card">
          <div class="hero-stat-number">99.9%</div>
          <div class="hero-stat-label">Uptime</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Floating Action Button -->
  <button class="fab" id="fab">⚡</button>

  <!-- Audio Visualizer -->
  <div class="audio-visualizer">
    <div class="audio-bar"></div>
    <div class="audio-bar"></div>
    <div class="audio-bar"></div>
    <div class="audio-bar"></div>
    <div class="audio-bar"></div>
    <div class="audio-bar"></div>
  </div>

  <Footer />
</main>