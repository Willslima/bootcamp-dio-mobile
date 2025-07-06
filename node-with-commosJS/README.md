## Por que modularizar?

- O código vai se tornando <b>complexo</b>

- Difícil de dar <b>manutenção</b>

- Difícil de <b>fazer mudanças</b>

- Um código dividido em pequenos arquivos

### CommonJS

O CommonJS utiliza uma sintaxe mais simples com as palavras chave <b>require</b> para carregar módulos e <b>module.exports</b> para exportar funcionalidades

### ES Modules

Os módulos ESM introduzem uma sintaxe unificada com as palavras-chave <b>import</b> e <b>export</b> alinhada com padrões de outras linguagens modernas.

- CommonJS

Síncrono por padrão
Uso principal em servidor (Node.js)
Sintaxe: `require` e `module.exports`
Carregamento Dinâmico

- ESM

Assíncrono por padrão
Suportado nativamente em navegadores
Sintaxe: `import` e `export`
Carregamento estático (Análise estática)