<script lang="ts">
  export let nome: string;
  export let categoria: string;
  export let descricao: string;
  export let preco: number;
  export let tag = '';
  export let emoji: string;

  // Mapeamento de cor por categoria
  $: corGradiente = categoria.toUpperCase() === 'DEFI'
    ? 'linear-gradient(to right, #00ff99, #00e0ff)'
    : categoria.toUpperCase() === 'INTELIGÊNCIA ARTIFICIAL'
    ? 'linear-gradient(to right, #ff00ff, #9900ff)'
    : 'linear-gradient(to right, #00f9ff, #9f00ff)';

  $: corGlow = categoria.toUpperCase() === 'DEFI'
    ? '#00ff99'
    : categoria.toUpperCase() === 'INTELIGÊNCIA ARTIFICIAL'
    ? '#ff00ff'
    : '#00f9ff';
</script>

<div class="product-card">
  <div class="product-top-bar" style="background: {corGradiente}"></div>

  <div class="product-header">
    <span class="emoji" style="text-shadow: 0 0 10px {corGlow};">{emoji}</span>
    {#if tag}
      <span class="tag">{tag}</span>
    {/if}
  </div>

  <div class="product-body">
    <h4 class="categoria">{categoria}</h4>
    <h3 class="nome">{nome}</h3>
    <p class="descricao">{descricao}</p>
    <ul class="benefits">
      <slot />
    </ul>
  </div>

  <div class="product-footer">
    <span class="preco">${preco}</span>
    <button class="comprar">Comprar Agora</button>
  </div>
</div>

<style>
  .product-card {
    background: linear-gradient(to bottom, #0a0a0f 0%, #181820 100%);
    border-radius: 1rem;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.06);
    overflow: hidden;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(0, 255, 255, 0.08);
    position: relative;
  }

  .product-top-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
    width: 100%;
    box-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .product-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.25);
  }

  .product-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  .emoji {
    font-size: 2.5rem;
    transition: text-shadow 0.3s ease;
  }

  .tag {
    background: #00ff84;
    color: black;
    padding: 0.2rem 0.6rem;
    border-radius: 1rem;
    font-size: 0.7rem;
    font-weight: bold;
  }

  .categoria {
    color: var(--neon-cyan, #00fff7);
    margin: 1rem 0 0.3rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  .nome {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .descricao {
    font-size: 0.9rem;
    line-height: 1.3;
    color: #ccc;
    margin-bottom: 1rem;
  }

  .benefits {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #8fffbd;
    font-size: 0.85rem;
    text-align: left;
  }

  .benefits li {
    margin-bottom: 0.5rem;
    padding-left: 1.4rem;
    position: relative;
  }

  .benefits li::before {
    content: '⚡';
    position: absolute;
    left: 0;
    color: #00ff99;
  }

  .product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1rem;
  }

  .preco {
    font-size: 1.2rem;
    color: var(--matrix-green, #00ff99);
    font-weight: bold;
  }

  .comprar {
    background: linear-gradient(to right, #9f00ff, #00e0ff);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.8rem;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .comprar:hover {
    box-shadow: 0 0 10px #00e0ff;
    transform: scale(1.05);
  }
</style>