const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const clients = [
  ["Barrick", "barrick.png"], ["Glencore", "glencore.png"], ["Veladero", "veladero.png"],
  ["Mansfield Minera", "mansfield.png"], ["LDC", "ldc.png"], ["Bunge", "bunge.png"],
  ["Molinos Agro", "molinos.png"], ["ADM", "adm.png"], ["Puerto Las Losas", "pll.png"],
  ["Puerto Ventanas", "pvsa.png"], ["YPF", "ypf.png"],
];

export function ClientLogoStrip() {
  return <section className="trust trust-service" aria-label="Empresas que confían en KRK"><div className="container trust-head"><span>EMPRESAS QUE CONFÍAN EN KRK</span><span>CLIENTES &amp; PROYECTOS</span></div><div className="logo-marquee"><div className="logo-track">{[...clients, ...clients].map(([name, file], index) => <div className="client-logo" key={`${name}-${index}`}><img src={`${base}/logos/${file}`} alt={name} /></div>)}</div></div></section>;
}
