export default function Dashboard() {
  return (
    <div className="bg-black min-h-screen p-8 text-cyan-50 font-sans">
      
      {/* Cabeçalho do Painel */}
      <header className="border-b border-cyan-900/50 pb-4 mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-widest text-white">
            Sherlock<span className="text-cyan-400" style={{ textShadow: '0 0 10px #06b6d4' }}> Ads</span>
          </h1>
          <p className="text-[10px] text-cyan-600/60 font-mono uppercase tracking-widest mt-1">Painel do Produtor</p>
        </div>
        <span className="text-[10px] bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded border border-cyan-800 uppercase font-mono tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Sistema Online
        </span>
      </header>

      {/* Área de Trabalho Central */}
      <div className="border border-dashed border-cyan-800/50 rounded-xl p-12 text-center bg-gray-950/30">
        <svg className="w-12 h-12 text-cyan-900 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        <p className="text-cyan-600/60 font-mono text-xs tracking-widest uppercase mb-2">Módulo de Análise de Criativos</p>
        <p className="text-gray-500 text-sm">Aguardando integração com Google Drive e Motor de IA...</p>
      </div>

    </div>
  );
}