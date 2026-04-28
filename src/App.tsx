function App() {
  const posts = [
    {
      id: 1,
      title: 'Introdução ao Security by Design',
      excerpt: 'Aprenda os princípios fundamentais para integrar segurança no ciclo de desenvolvimento de software desde a arquitetura.',
      date: '15 Jan 2026',
      tag: 'Arquitetura'
    },
    {
      id: 2,
      title: 'Autenticação em Microserviços',
      excerpt: 'Como implementar autenticação robusta em ecossistemas Spring Boot e Cloud, focando em alta escalabilidade.',
      date: '12 Jan 2026',
      tag: 'DevOps'
    },
    {
      id: 3,
      title: 'OWASP Top 10 e Injeção SQL',
      excerpt: 'Técnicas essenciais de Clean Code para proteger seu banco de dados contra vulnerabilidades críticas.',
      date: '10 Jan 2026',
      tag: 'Segurança'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-blue-600/20">
              SD
            </div>
            <span className="text-2xl font-bold text-white tracking-tight hidden sm:block">Security by Design</span>
          </div>
          <nav className="flex gap-8">
            <a href="#sobre" className="text-base font-medium text-slate-400 hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#posts" className="text-base font-medium text-slate-400 hover:text-blue-400 transition-colors">Artigos</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-40">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              Construa software <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">seguro desde o primeiro bit.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Compartilhando mais de 25 anos de experiência em arquitetura de sistemas e segurança da informação para elevar o nível do desenvolvimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cadastro" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 hover:-translate-y-1 transition-all">
                Cadastre-se
              </a>
              <a href="#sobre" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-300 border border-slate-700 rounded-xl hover:bg-slate-800 transition-all">
                Conheça minha trajetória
              </a>
            </div>
          </div>
        </section>

        {/* SEÇÃO SOBRE */}
        <section id="sobre" className="bg-slate-800/30 py-24 border-y border-slate-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-slate-800 border border-slate-700 p-8 rounded-3xl shadow-2xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Resumo Profissional</h2>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Sou de Brasília e atuo na área de TI desde 2000. Como desenvolvedor sênior e arquiteto de software há mais de 25 anos, meu foco sempre foi a alta escalabilidade, segurança e modernização de silos e sistemas críticos.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Sou formado em Segurança da Informação, com pós-graduações em Cybersecurity, Cybercrimes e Arquitetura de Software e Soluções. Minha missão é aplicar princípios rígidos de segurança diretamente na arquitetura e no código.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500 mb-4">Minha Filosofia</h2>
                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">Arquitetura Segura como Base, não como Adicional.</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 w-6 h-6 text-emerald-400">✓</div>
                    <p className="text-lg text-slate-400"><span className="text-slate-200 font-semibold">Experiência Real:</span> Atuação direta na modernização de arquiteturas legadas para microsserviços em nuvem.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 w-6 h-6 text-emerald-400">✓</div>
                    <p className="text-lg text-slate-400"><span className="text-slate-200 font-semibold">Tecnologia Moderna:</span> Especialista no ecossistema Java (Spring Boot, Spring WebFlux, Quarkus, Docker, Kubernetes).</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 w-6 h-6 text-emerald-400">✓</div>
                    <p className="text-lg text-slate-400"><span className="text-slate-200 font-semibold">Equilíbrio:</span> Fora das telas, busco disciplina e energia no ciclismo e nas artes marciais.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE POSTS */}
        <section id="posts" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">Conhecimento Técnico</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all group">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 block">{post.tag}</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">{post.excerpt}</p>
                  <button className="text-blue-400 font-bold hover:underline">Ler artigo →</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULÁRIO DE CADASTRO */}
        <section id="cadastro" className="max-w-4xl mx-auto px-6 py-24">
          <div className="bg-white rounded-3xl p-8 md:p-14 shadow-2xl">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
              Cadastre-se para receber mais informações
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-slate-600">Primeiro nome</label>
                  <input 
                    id="firstName"
                    name="firstName"
                    type="text" 
                    className="bg-white text-slate-900 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-slate-600">Último nome</label>
                  <input 
                    id="lastName"
                    name="lastName"
                    type="text" 
                    className="bg-white text-slate-900 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-600">Endereço de e-mail</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    className="bg-white text-slate-900 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-600">Número de telefone</label>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    className="bg-white text-slate-900 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600 transition-all"
                  />
                </div>

              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-[#c026d3] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#a21caf] transition-all shadow-lg"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-16 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-2xl font-bold text-white">Security by Design</span>
            <p className="text-slate-500 mt-2 text-lg">© 2026 arquiteturasegura.dev.br</p>
          </div>
          <div className="flex gap-8 text-lg font-medium text-slate-400">
            <a href="https://www.linkedin.com/in/claudioarquiteto/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/claudiocostapontes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;