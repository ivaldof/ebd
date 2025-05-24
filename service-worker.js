const CACHE_NAME = "versao-7.01"; // Alterar versão para forçar atualização
const urlsToCache = [
  "/",
  /app/,
    "/ebd/imagens/",
  "https://escola-ebd.com/wp-content/uploads/2024/12/cropped-ebd-logo-1.png",
  "/", // Página inicial
    "/wp-content/themes/occasio/style.css", // Estilos do tema
    "/wp-content/themes/occasio/", // Scripts do tema
    "/wp-content/uploads/", // Pasta de uploads (imagens, PDFs, etc.)
    "https://escola-ebd.com/perguntas-com-respostas-do-livro-de-genesis/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-exodo/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-levitico/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-numeros/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-deuteronomio/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-josue/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-juizes/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-rute/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-1-e-2-samuel/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-1-e-2-reis/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-1-e-2-cronicas/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-esdras/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-neemias/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-ester/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-jo/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-salmos/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-proverbios/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-eclesiastes/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-canticos/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-isaias/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-jeremias/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-lamentacoes/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-ezequiel/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-daniel/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-oseias/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-joel/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-amos/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-obadias/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-jonas/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-miqueias/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-naum/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-habacuque/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-sofonias/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-ageu/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-zacarias/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-malaquias/",
"https://escola-ebd.com/perguntas-com-respostas-dos-evangelhos-mateus-marcos-lucas-e-joao/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-atos/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-romanos/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-1-e-2-corintios/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-galatas/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-efesios/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-filipenses/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-colossenses/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-1a-e-2a-tessalonicenses/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-1-e-2-timoteo/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-tito/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-filemom/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-hebreus/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-tiago/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-1a-e-2a-pedro/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-1a-2a-e-3a-joao/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-judas/",
"https://escola-ebd.com/perguntas-com-respostas-do-livro-de-apocalipse/",
"https://escola-ebd.com/perguntas-sagradas-biblicas/",
"https://escola-ebd.com/caderneta-da-ebd/",
"https://escola-ebd.com/certificado-da-ebd-gratuito/",
"https://escola-ebd.com/harpa-crista/",
"https://escola-ebd.com/api/harpa_crista_640_hinos.json",
"https://escola-ebd.com/sobre/",
"https://escola-ebd.com/termos-de-uso/",
"https://escola-ebd.com/privacy-policy/",
"https://escola-ebd.com/leitura-diaria-1-trimestre-2025-cpad-adultos/",
"https://escola-ebd.com/leitura-diaria-4-trimestre-2024-cpad-adultos/",
"https://escola-ebd.com/leitura-diaria-3-trimestre-2024-cpad/",
"https://escola-ebd.com/leitura-diaria-2-trimestre-2024-cpad/",
"https://escola-ebd.com/leitura-diaria-1-trimestre-2024-cpad/",
"https://escola-ebd.com/leitura-diaria-4-trimestre-2023-cpad/"
];

// Instalação do Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Arquivos adicionados ao cache");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Ativa imediatamente a nova versão
});

// Ativação do Service Worker (remove caches antigos)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Removendo cache antigo:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim(); // Garante que o novo SW tome controle imediato
});

// Intercepta requisições e atualiza cache automaticamente
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return fetch(event.request)
        .then((response) => {
          cache.put(event.request, response.clone()); // Atualiza o cache com novos arquivos
          return response;
        })
        .catch(() => caches.match(event.request)); // Usa o cache offline caso não tenha internet
    })
  );
});