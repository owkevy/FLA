export default function FLAPlatform() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="border-b border-red-700 bg-gradient-to-r from-black to-red-950">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-widest text-red-600">FLA</h1>
            <p className="text-sm text-gray-300">Financial Liquidity Assurance</p>
          </div>

          <nav className="flex gap-6 text-sm text-gray-300">
            <a href="#sobre" className="hover:text-red-500 transition">Sobre</a>
            <a href="#servicos" className="hover:text-red-500 transition">Serviços</a>
            <a href="#seguranca" className="hover:text-red-500 transition">Segurança</a>
            <a href="#contato" className="hover:text-red-500 transition">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-red-900/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full border border-red-700 text-red-400 text-sm mb-6">
              Plataforma de estabilidade bancária
            </div>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Protegendo bancos com
              <span className="text-red-600"> inteligência financeira</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              A FLA monitora liquidez, riscos operacionais e estabilidade de instituições financeiras em tempo real.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-red-900/40">
                Solicitar Demonstração
              </button>

              <button className="border border-red-700 hover:bg-red-950 transition px-6 py-3 rounded-2xl font-semibold">
                Ver Plataforma
              </button>
            </div>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8 shadow-2xl shadow-red-950/30">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Painel de Estabilidade</h3>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                Sistema Online
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Liquidez Bancária</span>
                  <span className="text-red-400">92%</span>
                </div>
                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 w-[92%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Segurança Digital</span>
                  <span className="text-red-400">98%</span>
                </div>
                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[98%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Monitoramento de Risco</span>
                  <span className="text-red-400">87%</span>
                </div>
                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-700 w-[87%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="servicos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black mb-4">Soluções Inteligentes</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ferramentas desenvolvidas para aumentar a estabilidade, transparência e proteção financeira.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:scale-105 transition">
            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-2xl mb-6">
              📊
            </div>
            <h4 className="text-2xl font-bold mb-4">Análise de Liquidez</h4>
            <p className="text-gray-400 leading-relaxed">
              Monitoramento contínuo de fluxo financeiro e reservas bancárias.
            </p>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:scale-105 transition">
            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-2xl mb-6">
              🛡️
            </div>
            <h4 className="text-2xl font-bold mb-4">Segurança Bancária</h4>
            <p className="text-gray-400 leading-relaxed">
              Proteção contra fraudes e monitoramento de ameaças em tempo real.
            </p>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:scale-105 transition">
            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-2xl mb-6">
              ⚡
            </div>
            <h4 className="text-2xl font-bold mb-4">Alertas Inteligentes</h4>
            <p className="text-gray-400 leading-relaxed">
              Notificações automáticas sobre riscos críticos e oscilações financeiras.
            </p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="seguranca" className="bg-zinc-950 border-y border-red-950">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-black mb-6">
              Tecnologia focada em estabilidade financeira
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Nossa plataforma utiliza inteligência artificial e análise preditiva para detectar riscos antes que afetem o sistema bancário.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Monitoramento em tempo real</li>
              <li>✔ Inteligência artificial preditiva</li>
              <li>✔ Criptografia avançada</li>
              <li>✔ Painéis executivos modernos</li>
            </ul>
          </div>

          <div className="bg-black border border-red-900 rounded-3xl p-10">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Eficiência Operacional</span>
                  <span>95%</span>
                </div>
                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 w-[95%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Precisão Analítica</span>
                  <span>99%</span>
                </div>
                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[99%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Confiabilidade</span>
                  <span>97%</span>
                </div>
                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-700 w-[97%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 border-t border-red-950 pt-10">
          <div>
            <h4 className="text-3xl font-black text-red-600 mb-2">FLA</h4>
            <p className="text-gray-500">
              Financial Liquidity Assurance © 2026
            </p>
          </div>

          <div className="text-gray-400 space-y-2">
            <p>contato@fla-finance.com</p>
            <p>Monitoramento bancário inteligente</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
