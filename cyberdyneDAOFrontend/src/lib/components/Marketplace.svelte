<script lang="ts">
    import MarketplaceProduct from './MarketplaceProducts.svelte';
  </script>
  
  <section class="marketplace-section">
    <h2 class="title">Produtos em Destaque</h2>
  
    <div class="product-grid">
      <MarketplaceProduct
        nome="Guia Completo de Yield Farming"
        categoria="DEFI"
        descricao="Domine as estratégias de yield farming e liquidity mining nos principais protocolos DeFi."
        preco={49}
        tag="HOT"
        emoji="🏦"
      >
        <li>150+ páginas de conteúdo</li>
        <li>Estratégias práticas testadas</li>
        <li>Análise de riscos detalhada</li>
        <li>Templates de Excel inclusos</li>
      </MarketplaceProduct>
  
      <MarketplaceProduct
        nome="IA para Trading Automatizado"
        categoria="INTELIGÊNCIA ARTIFICIAL"
        descricao="Construa bots de trading inteligentes usando machine learning e análise técnica."
        preco={89}
        tag="NEW"
        emoji="🧐"
      >
        <li>Código Python completo</li>
        <li>Modelos de ML treinados</li>
        <li>API integrations</li>
        <li>Backtesting framework</li>
      </MarketplaceProduct>
  
      <MarketplaceProduct
        nome="Smart Contracts Masterclass"
        categoria="BLOCKCHAIN"
        descricao="Do zero ao deploy: aprenda Solidity, segurança e otimização de contratos inteligentes."
        preco={69}
        emoji="⚖"
      >
        <li>200+ exemplos de código</li>
        <li>Testes automatizados</li>
        <li>Gas optimization tips</li>
        <li>Security best practices</li>
      </MarketplaceProduct>
    </div>
  </section>
  
  <style>
    .marketplace-section {
      padding: 4rem 2rem;
      background: radial-gradient(circle at center, #0f0f1a 0%, #08080c 100%);
      color: white;
      text-align: center;
      max-width: 70%;
      margin: 0 auto; 
    }
  
    .title {
      font-size: 2.2rem;
      color: var(--neon-blue, #00f9ff);
      margin-bottom: 3rem;
      text-shadow: 0 0 10px var(--neon-blue);
    }
  
    .product-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
        max-width: 100%;
    }
  </style>
  