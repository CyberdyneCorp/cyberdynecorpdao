<script lang="ts">
    export let nome: string;
    export let categoria: string;
    export let descricao: string;
    export let preco: number;
    export let tag?: string; // ex: "HOT", "NEW"
    export let emoji: string;
  </script>
  
  <div class="product-card">
    <div class="product-header">
      <span class="emoji">{emoji}</span>
      {#if tag}
        <span class="tag">{tag}</span>
      {/if}
    </div>
  
    <div class="product-body">
      <h4 class="categoria">{categoria}</h4>
      <h3 class="nome">{nome}</h3>
      <p class="descricao">{descricao}</p>
      <ul class="benefits">
        <slot /> <!-- permite passar <li> de fora -->
      </ul>
    </div>
  
    <div class="product-footer">
      <span class="preco">${preco}</span>
      <button class="comprar">Comprar Agora</button>
    </div>
  </div>
  
  <style>
    .product-card {
      background: linear-gradient(to top, #0a0a0f, #181820);
      border-radius: 1rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
      overflow: hidden;
      max-width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.5rem;
      color: white;
      transition: transform 0.3s ease;
    }
  
    .product-card:hover {
      transform: translateY(-6px);
    }
  
    .product-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
    }
  
    .emoji {
      font-size: 2rem;
    }
  
    .tag {
      background: lime;
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
    }
  
    .benefits {
      list-style: none;
      padding-left: 1rem;
      margin: 1rem 0;
      color: #8fffbd;
      font-size: 0.85rem;
    }
  
    .benefits li::before {
      content: '✔️';
      margin-right: 0.5rem;
    }
  
    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      border-top: 1px solid rgba(255,255,255,0.1);
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
    }
  </style>