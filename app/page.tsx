"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Home() {
  const [senha, setSenha] = useState("");
  const [status, setStatus] = useState("aguardando");
  const router = useRouter(); 

  const iniciarLeitura = () => {
    if (senha.trim() !== "") {
      setStatus("processando");
      setTimeout(() => {
        setStatus("sucesso");
        
        // Redireciona para o painel após mostrar a tela de sucesso por 2 segundos
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);

      }, 1500);
    } else {
      setStatus("erro");
      setTimeout(() => {
        setStatus("aguardando");
      }, 1500);
    }
  };

  return (
    <main className="bg-black text-gray-100 flex items-center justify-center min-h-screen font-sans overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 z-0"></div>

      <div className="relative z-10 bg-gray-950/80 backdrop-blur-md p-8 md:p-12 rounded-xl border border-cyan-500/30 w-[90%] md:w-[420px] text-center shadow-[0_0_15px_rgba(6,182,212,0.2),inset_0_0_10px_rgba(6,182,212,0.1)] h-[500px] flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75"></div>

        <div className={`transition-all duration-500 ${status === 'sucesso' ? 'hidden' : 'block'}`}>
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-widest mb-1 uppercase">
              Sherlock<span className="text-cyan-400" style={{ textShadow: '0 0 5px #06b6d4, 0 0 20px #06b6d4' }}> Ads</span>
            </h1>
            <p className="text-[10px] md:text-xs text-cyan-500/70 uppercase tracking-[0.3em] font-mono">Advance Protocol</p>
          </div>

          <div className="space-y-6">
            <div className="text-left relative">
              <label className="text-[10px] font-mono text-cyan-500/80 uppercase tracking-widest mb-2 block">Chave de Decodificação</label>
              <input
                type="password"
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className={`w-full bg-black/80 border text-cyan-50 px-4 py-3 rounded-md outline-none transition-all text-center tracking-[0.5em] font-mono z-10 relative placeholder-cyan-900/50 ${status === 'erro' ? 'border-red-500 ring-1 ring-red-500 focus:border-red-500 focus:ring-red-500' : 'border-cyan-900 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'}`}
              />
            </div>
            
            <button onClick={iniciarLeitura} className="w-full flex flex-col items-center justify-center gap-2 outline-none group mt-4">
              <svg viewBox="0 0 50 80" className="w-16 h-24 mx-auto hover:scale-105 transition-transform duration-500 cursor-pointer">
                <defs>
                  <linearGradient id="gradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#00ffff', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0088ff', stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="gradPink" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ff00ff', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#ff0055', stopOpacity: 1 }} />
                  </linearGradient>
                  
                  <filter id="neonGlowCyan" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="neonGlowPink" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path d="M 15 20 L 25 10 L 35 20" fill={status === 'processando' ? 'url(#gradCyan)' : 'none'} stroke="url(#gradCyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#neonGlowCyan)" />
                <path d="M 15 32 L 25 22 L 35 32" fill={status === 'processando' ? 'url(#gradCyan)' : 'none'} stroke="url(#gradCyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#neonGlowCyan)" />
                
                <g filter="url(#neonGlowPink)">
                  <path d="M 10 48 L 25 28 L 40 48 L 28 48 L 25 75 L 22 48 Z" fill={status === 'processando' ? 'url(#gradPink)' : 'none'} stroke="url(#gradPink)" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 25 28 L 25 75" fill="none" stroke="url(#gradPink)" strokeWidth="2" />
                </g>
              </svg>

              <span className={`text-[10px] font-mono uppercase tracking-widest transition-colors mt-2 ${status === 'erro' ? 'text-red-500' : status === 'processando' ? 'text-cyan-400' : 'text-cyan-600/60 group-hover:text-cyan-400'}`}>
                {status === 'erro' ? 'INSIRA A CHAVE' : status === 'processando' ? 'VERIFICANDO CHAVE...' : 'INICIAR CONEXÃO'}
              </span>
            </button>
          </div>
        </div>

        <div className={`flex-col items-center justify-center space-y-4 animate-[pulse_2s_ease-in-out_infinite] ${status === 'sucesso' ? 'flex' : 'hidden'}`}>
          <svg className="w-20 h-24" viewBox="0 0 50 80">
            <path d="M 15 20 L 25 10 L 35 20" fill="url(#gradCyan)" filter="url(#neonGlowCyan)"/>
            <path d="M 15 32 L 25 22 L 35 32" fill="url(#gradCyan)" filter="url(#neonGlowCyan)"/>
            <path d="M 10 48 L 25 28 L 40 48 L 28 48 L 25 75 L 22 48 Z" fill="url(#gradPink)" filter="url(#neonGlowPink)"/>
          </svg>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-cyan-400 tracking-widest uppercase" style={{ textShadow: '0 0 5px #06b6d4, 0 0 20px #06b6d4' }}>Acesso Liberado</h2>
            <p className="text-sm font-mono text-cyan-500/80 uppercase tracking-widest mt-1">Com Sucesso</p>
          </div>
        </div>

      </div>
    </main>
  );
}