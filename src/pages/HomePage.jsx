import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
    Menu, X, MessageCircle, MapPin, Mail, Phone, ArrowRight, Check,
    Cog, HeartHandshake, Glasses, Users, ShieldCheck, Target,
    AlertTriangle, TrendingDown, Layers, Brain, Cpu, LineChart, Quote,
} from 'lucide-react';
import AthenaLogo from '@/components/AthenaLogo';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

const OXFORD = '#0B2545';
const CORP = '#134074';
const TURQ = '#00B4D8';
const INDIGO = '#7209B7';
const ORANGE = '#F77F00';

const WHATSAPP = 'https://wa.me/528681581443?text=Hola%20Athenea%2C%20me%20interesa%20agendar%20una%20demo%20de%20Realidad%20Virtual';

const NAV = [
    { label: 'El Problema', href: '#problema' },
    { label: 'Solución', href: '#solucion' },
    { label: 'VR Experience', href: '#vr' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Casos', href: '#casos' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
];

function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B2545]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="mx-auto max-w-[90rem] px-5 sm:px-8 flex items-center justify-between h-20">
                <a href="#top" className="flex items-center gap-3 text-white">
                    <AthenaLogo className="h-9 w-9" color={TURQ} /> 
                    <span className="font-display text-2xl tracking-[0.15em] font-semibold">ATHENEA</span>
                </a>
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV.map((n) => (
                        <a key={n.href} href={n.href} className="text-sm font-medium text-slate-200 hover:text-[#00B4D8] transition-colors">{n.label}</a>
                    ))}
                    <a href="#contacto" className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: ORANGE }}>Agendar Demo VR</a>
                </nav>
                <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menú">
                    {open ? <X /> : <Menu />}
                </button>
            </div>
            {open && (
                <div className="lg:hidden bg-[#0B2545] border-t border-white/10 px-5 py-4 flex flex-col gap-3">
                    {NAV.map((n) => (
                        <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-slate-200 py-1.5 font-medium">{n.label}</a>
                    ))}
                    <a href="#contacto" onClick={() => setOpen(false)} className="rounded-full px-5 py-3 text-center text-sm font-semibold text-white mt-2" style={{ backgroundColor: ORANGE }}>Agendar Demo VR</a>
                </div>
            )}
        </header>
    );
}

function Hero() {
    return (
        <section id="top" className="relative min-h-[100dvh] flex items-center overflow-hidden">
            <img src="https://images.hostinger.com/52eea311-b71a-43e6-9d43-b50799f2d145.png" alt="Liderazgo y tecnología en la frontera" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(11,37,69,0.96) 0%, rgba(19,64,116,0.85) 45%, rgba(11,37,69,0.55) 100%)' }} />
            <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8 w-full pt-28 pb-16">
                <div className="max-w-3xl ath-rise">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#00B4D8]/40 bg-[#00B4D8]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#63e3ff]">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ORANGE }} /> COACHING · VOZ · LIDERAZGO · DESARROLLO HUMANO
                    </span>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mt-6">
                        Humanizamos el liderazgo para <span style={{ color: TURQ }}>transformar</span> las organizaciones.
                    </h1>
                    <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-2xl">
                        La primera firma de consultoría que fusiona la <strong className="text-white">Ingeniería de Procesos</strong>, la <strong className="text-white">Realidad Virtual</strong>, la <strong className="text-white">Administración Estratégica con el desarrollo de la Cultura Organizacional</strong> para impulsar la evolución de las empresas.
                    </p>
<div className="mt-9 flex flex-col sm:flex-row gap-4">
                        <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: ORANGE }}>
                            Agendar Demo de Realidad Virtual <ArrowRight className="h-5 w-5" />
                        </a>
                        <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors">
                            Solicitar Asesoría Empresarial
                        </a>
                    </div>
                    <p className="mt-10 text-sm italic text-slate-300 border-l-2 pl-4 max-w-xl" style={{ borderColor: TURQ }}>
                        "Sincronizando la Ingeniería de Procesos, Automatización, Tecnología con IA, Administración Estratégica y Cultura Organizacional para el Emprendedor y Empresario."
                    </p>
                </div>
            </div>
        </section>
    );
}

function Marquee() {
    const items = ['NOM-035 STPS', 'John Maxwell Method', 'Realidad Virtual', 'Automatización & KPIs', 'Toastmasters', 'Coaching Ejecutivo', 'CRM & IA', 'Master Mind'];
    const row = [...items, ...items];
    return (
        <div className="bg-[#0B2545] py-4 overflow-hidden border-y border-white/10">
            <div className="ath-marquee flex whitespace-nowrap gap-10 w-max">
                {row.map((t, i) => (
                    <span key={i} className="flex items-center gap-10 text-sm font-medium tracking-wide text-slate-300">
                        {t} <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
                    </span>
                ))}
            </div>
        </div>
    );
}

function Section({ id, children, className = '' }) {
    return <section id={id} className={`mx-auto max-w-[80rem] px-5 sm:px-8 py-20 sm:py-28 ${className}`}>{children}</section>;
}

function Eyebrow({ children }) {
    return <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: TURQ }}>{children}</p>;
}

function Problema() {
    const items = [
        { icon: TrendingDown, t: 'Alta rotación de personal', d: 'Costos ocultos y pérdida de talento que erosionan la productividad y el margen de utilidad.' },
        { icon: AlertTriangle, t: 'Riesgos psicosociales (NOM-035)', d: 'Exposición a sanciones de la STPS por incumplimiento de factores de riesgo psicosocial.' },
        { icon: Layers, t: 'Cuellos de botella administrativos', d: 'Empresas que crecieron sin estructura, atrapadas en procesos manuales y desorganizados.' },
        { icon: Brain, t: 'Falta de habilidades blandas', d: 'Equipos gerenciales sin liderazgo, comunicación persuasiva ni capacidad de cierre.' },
    ];
    return (
        <Section id="problema" className="bg-white">
            <div className="max-w-2xl">
                <Eyebrow>El Problema</Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: OXFORD }}>El empresario fronterizo enfrenta un doble frente: gente y procesos.</h2>
                <p className="mt-4 text-lg text-slate-600">La dinámica del comercio binacional y el sector maquilador exige velocidad. Estos son los focos rojos que frenan a las empresas de Matamoros.</p>
            </div>
            <div className="mt-14 grid sm:grid-cols-2 gap-6">
                {items.map((it) => (
                    <div key={it.t} className="flex gap-5 rounded-2xl border border-slate-200 bg-slate-50/60 p-7 hover:border-[#F77F00]/50 transition-colors">
                        <div className="shrink-0 h-12 w-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(247,127,0,0.12)' }}>
                            <it.icon className="h-6 w-6" style={{ color: ORANGE }} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg" style={{ color: CORP }}>{it.t}</h3>
                            <p className="mt-1.5 text-slate-600 leading-relaxed">{it.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

function Solucion() {
    return (
        <Section id="solucion" className="bg-[#0B2545] max-w-none" >
            <div className="mx-auto max-w-[80rem]">
                <div className="max-w-2xl">
                    <Eyebrow>Nuestra Solución</Eyebrow>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">La Dualidad Perfecta</h2>
                    <p className="mt-4 text-lg text-slate-300">El único equipo que integra el rigor de la ingeniería con la profundidad del desarrollo humano. Dos fuerzas, un solo modelo.</p>
                </div>
                <div className="mt-14 grid lg:grid-cols-2 gap-6">
                    <div className="rounded-3xl p-8 sm:p-10 border border-white/10" style={{ background: 'linear-gradient(160deg, rgba(0,180,216,0.14), rgba(255,255,255,0.02))' }}>
                        <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0,180,216,0.18)' }}>
                            <Cpu className="h-7 w-7" style={{ color: TURQ }} />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-white">Ingeniería de Procesos</h3>
                        <p className="text-sm font-medium mt-1" style={{ color: TURQ }}>Liderado por la Ing. Gloria del Abra · Mecatrónica, IA/RV</p>
                        <ul className="mt-6 space-y-3">
                            {['Automatización de procesos operativos', 'Tableros de KPIs y control en tiempo real', 'Diseño de CRMs personalizados', 'Eficiencias operativas medibles'].map((x) => (
                                <li key={x} className="flex gap-3 text-slate-200"><Check className="h-5 w-5 shrink-0" style={{ color: TURQ }} />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-3xl p-8 sm:p-10 border border-white/10" style={{ background: 'linear-gradient(160deg, rgba(114,9,183,0.20), rgba(255,255,255,0.02))' }}>
                        <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(114,9,183,0.25)' }}>
                            <HeartHandshake className="h-7 w-7" style={{ color: '#c78bff' }} />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-white">Desarrollo Humano</h3>
                        <p className="text-sm font-medium mt-1" style={{ color: '#c78bff' }}>Liderado por la Dra. Minerva Sauceda · Coaching, Liderazgo</p>
                        <ul className="mt-6 space-y-3">
                            {['Liderazgo transformacional', 'Resiliencia y certidumbre gerencial', 'Metodologías John C. Maxwell', 'Cumplimiento normativo NOM-025 / NOM-035'].map((x) => (
                                <li key={x} className="flex gap-3 text-slate-200"><Check className="h-5 w-5 shrink-0" style={{ color: '#c78bff' }} />{x}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}

function VR() {
    return (
        <Section id="vr" className="bg-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-30" style={{ background: `radial-gradient(circle, ${TURQ}, transparent 70%)` }} />
                    <img src="https://images.hostinger.com/c051a7a0-3ca5-4df2-957b-298292a08e70.png" alt="Athenea VR Experience" className="relative rounded-3xl shadow-2xl w-full object-cover ath-float" />
                </div>
                <div>
                    <Eyebrow>Innovación Inmersiva</Eyebrow>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: OXFORD }}>Athenea <span style={{ color: INDIGO }}>Nexus VR</span> Experience</h2>
                    <p className="mt-4 text-lg text-slate-600">Un laboratorio de experimentación conductual donde tu equipo entrena habilidades críticas en entornos 3D interactivos, sin riesgo real.</p>
                    <div className="mt-8 space-y-5">
                        {[
                            { icon: Target, t: 'Resolución de crisis', d: 'Simulaciones de escenarios de alta presión para decisiones bajo estrés.' },
                            { icon: MessageCircle, t: 'Manejo de objeciones', d: 'Entrena el cierre de ventas con clientes virtuales realistas.' },
                            { icon: Glasses, t: 'Liderazgo situacional', d: 'Practica conversaciones difíciles y feedback en un entorno seguro.' },
                        ].map((it) => (
                            <div key={it.t} className="flex gap-4">
                                <div className="shrink-0 h-11 w-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(114,9,183,0.10)' }}>
                                    <it.icon className="h-5 w-5" style={{ color: INDIGO }} />
                                </div>
                                <div>
                                    <h3 className="font-semibold" style={{ color: CORP }}>{it.t}</h3>
                                    <p className="text-slate-600 text-sm mt-0.5">{it.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="#contacto" className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: INDIGO }}>
                        Agendar Demo de Realidad Virtual <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </Section>
    );
}

function Servicios() {
    const plans = [
        { name: 'Básico', price: '$6,500', iva: '$7,540/mes con IVA', tag: 'Asesor que ya domina su sistema', feats: ['3 hrs Dra. Minerva', '1 hr Ing. Gloria', 'Soporte por suscripción'], featured: false },
        { name: 'Estándar', price: '$12,000', iva: '$13,920/mes con IVA', tag: 'Asesor en crecimiento activo', feats: ['6 hrs Dra. Minerva', '2 hrs Ing. Gloria', '1 taller mensual', 'Coaching individual'], featured: true },
        { name: 'Premium', price: '$19,500', iva: '$22,620/mes con IVA', tag: 'Agencia o asesor senior', feats: ['8 hrs Dra. Minerva', '4 hrs Ing. Gloria', 'RH avanzada NOM', 'Maxwell Master Mind'], featured: false },
    ];
    return (
        <Section id="servicios" className="bg-slate-50">
            <div className="max-w-2xl">
                <Eyebrow>Servicios y Acompañamiento</Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: OXFORD }}>Modelos de acompañamiento a tu medida</h2>
                <p className="mt-4 text-lg text-slate-600">Desde talleres intensivos hasta blindaje humano permanente y proyectos personalizados.</p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
                {[
                    { icon: Users, t: 'Programas Intensivos', d: 'Talleres grupales y el programa Maxwell Master Mind para alinear a tu equipo de ventas y liderazgo.' },
                    { icon: ShieldCheck, t: 'Blindaje Humano', d: 'Suscripción de soporte Premium: acompañamiento mensual con respuesta prioritaria en menos de 24 horas.' },
                    { icon: Target, t: 'Proyecto Personalizado', d: 'Diagnóstico gratuito, cotización a la medida y compromiso Premium por 3 meses con 15% de descuento.' },
                ].map((s) => (
                    <div key={s.t} className="rounded-2xl bg-white border border-slate-200 p-7 shadow-sm">
                        <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(19,64,116,0.08)' }}>
                            <s.icon className="h-6 w-6" style={{ color: CORP }} />
                        </div>
                        <h3 className="font-display text-xl font-bold" style={{ color: OXFORD }}>{s.t}</h3>
                        <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.d}</p>
                    </div>
                ))}
            </div>

            <h3 className="font-display text-2xl font-bold mt-20 mb-8 text-center" style={{ color: OXFORD }}>Planes de Suscripción Mensual</h3>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
                {plans.map((p) => (
                    <div key={p.name} className={`relative rounded-3xl p-8 flex flex-col ${p.featured ? 'text-white shadow-2xl scale-[1.02]' : 'bg-white border border-slate-200'}`} style={p.featured ? { backgroundColor: OXFORD } : {}}>
                        {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-white" style={{ backgroundColor: ORANGE }}>MÁS POPULAR</span>}
                        <h4 className="font-display text-xl font-bold" style={{ color: p.featured ? TURQ : CORP }}>{p.name}</h4>
                        <div className="mt-3 flex items-baseline gap-1">
                            <span className="font-display text-4xl font-bold" style={{ color: p.featured ? '#fff' : OXFORD }}>{p.price}</span>
                            <span className={p.featured ? 'text-slate-300' : 'text-slate-500'}>/mes</span>
                        </div>
                        <p className={`text-xs mt-1 ${p.featured ? 'text-slate-400' : 'text-slate-400'}`}>{p.iva}</p>
                        <p className={`text-sm mt-3 italic ${p.featured ? 'text-slate-300' : 'text-slate-500'}`}>{p.tag}</p>
                        <ul className="mt-6 space-y-3 flex-1">
                            {p.feats.map((f) => (
                                <li key={f} className={`flex gap-2.5 text-sm ${p.featured ? 'text-slate-200' : 'text-slate-700'}`}>
                                    <Check className="h-4.5 w-4.5 shrink-0" style={{ color: p.featured ? TURQ : ORANGE, width: 18, height: 18 }} />{f}
                                </li>
                            ))}
                        </ul>
                        <a href="#contacto" className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${p.featured ? 'text-white' : 'text-white'}`} style={{ backgroundColor: p.featured ? ORANGE : CORP }}>Contratar {p.name}</a>
                    </div>
                ))}
            </div>
        </Section>
    );
}

function MisionVision() {
    return (
        <Section id="mision" className="bg-white">
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="rounded-3xl p-9 border-l-4" style={{ borderColor: TURQ, backgroundColor: 'rgba(0,180,216,0.05)' }}>
                    <h3 className="font-display text-2xl font-bold mb-4" style={{ color: OXFORD }}>Misión</h3>
                    <p className="text-lg leading-relaxed text-slate-700">"Creemos en el potencial de cada persona como la fuerza centrífuga de la empresa. Transformamos los problemas diarios en soluciones inteligentes, construyendo un lugar de trabajo donde todos crecemos."</p>
                </div>
                <div className="rounded-3xl p-9 border-l-4" style={{ borderColor: ORANGE, backgroundColor: 'rgba(247,127,0,0.05)' }}>
                    <h3 className="font-display text-2xl font-bold mb-4" style={{ color: OXFORD }}>Visión</h3>
                    <p className="text-lg leading-relaxed text-slate-700">"Hacer que las empresas funcionen de forma más simple, equipando a su gente con la tecnología y el liderazgo del futuro."</p>
                </div>
            </div>
        </Section>
    );
}

function Equipo() {
    const team = [
        {
            img: 'https://horizons-cdn.hostinger.com/523c6dd2-7ecf-4580-82fc-371b89ba0209/4df2aad01864e367dc8bf9d29e1fd4a3.png',
            n: 'Ing. Gloria del Abra (MAI & MIT)',
            title: 'Directora de Sistemas e Innovación',
            specs: ['Sistemas', 'Tecnología', 'IA / RV'],
            desc: 'Encabeza la ingeniería de procesos y la innovación tecnológica de Athenea, integrando inteligencia artificial y realidad virtual para simplificar y potenciar las empresas.',
            c: TURQ,
        },
        
        {
            img: 'https://horizons-cdn.hostinger.com/523c6dd2-7ecf-4580-82fc-371b89ba0209/aa824465d5f204425cb542d582faa4eb.png',
            n: 'Dra. Minerva Sauceda',
            title: 'Directora de Desarrollo Humano',
            specs: ['Coaching', 'Liderazgo', 'Cumplimiento Normativo'],
            desc: 'Lidera la transformación humana de las organizaciones a través del coaching ejecutivo, el desarrollo de líderes y el acompañamiento en cumplimiento normativo con enfoque en las personas.',
            c: INDIGO,
        },

    ];
    return (
        <Section id="equipo" className="bg-white">
            <div className="max-w-2xl">
                <Eyebrow>Nuestro Equipo</Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: OXFORD }}>Las mentes detrás de Athenea</h2>
                <p className="mt-4 text-lg text-slate-600">Consultoras que combinan experiencia humana y dominio tecnológico para transformar el liderazgo y los procesos de tu organización.</p>
            </div>
            <div className="mt-14 grid md:grid-cols-2 gap-10 lg:gap-16">
                {team.map((p) => (
                    <div key={p.n} className="flex flex-col items-center text-center ath-rise">
                        <div className="relative p-2 rounded-[1.75rem] bg-gradient-to-br from-white to-slate-100 shadow-[0_20px_50px_-15px_rgba(11,37,69,0.35)]" style={{ boxShadow: `0 0 0 1px rgba(11,37,69,0.08), 0 24px 55px -20px ${p.c}66` }}>
                            <div className="p-1.5 rounded-[1.4rem]" style={{ background: `linear-gradient(150deg, ${p.c}, ${OXFORD})` }}>
                                <div className="overflow-hidden rounded-[1.1rem] bg-slate-200">
                                    <img src={p.img} alt={`Retrato profesional de ${p.n}`} className="w-full h-[24rem] object-cover object-top" loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <h3 className="font-display text-2xl font-bold mt-8" style={{ color: OXFORD }}>{p.n}</h3>
                        <p className="text-sm font-semibold mt-1 uppercase tracking-wide" style={{ color: p.c }}>{p.title}</p>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {p.specs.map((s) => (
                                <span key={s} className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${p.c}18`, color: p.c }}>{s}</span>
                            ))}
                        </div>
                        <p className="mt-5 text-base leading-relaxed text-slate-600 max-w-md">{p.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

function Casos() {
    return (
        <Section id="casos" className="bg-[#0B2545] max-w-none">
            <div className="mx-auto max-w-[80rem]">
                <div className="max-w-2xl">
                    <Eyebrow>Casos de Éxito</Eyebrow>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Un modelo ya validado con clientes reales</h2>
                </div>
                <div className="mt-12 grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 rounded-3xl p-8 sm:p-10 border border-white/10" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))' }}>
                        <Quote className="h-9 w-9 mb-4" style={{ color: ORANGE }} />
                        <p className="text-xl sm:text-2xl font-display italic text-white leading-relaxed">"Sistema Administrativo Integral para Asesor de Ventas de Seguros. Un cliente real y pagante validó nuestro modelo antes de escalarlo."</p>
                        <div className="mt-6 flex items-center gap-3">
                            <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: 'rgba(0,180,216,0.15)', color: TURQ }}>Folio CIE-2026-001</span>
                            <span className="text-slate-400 text-sm">Heroica Matamoros, Tamaulipas</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                        {[
                            { k: '8', l: 'semanas de proyecto' },
                            { k: '40/40/20', l: 'esquema de pago' },
                            { k: '>60%', l: 'meta de retención' },
                        ].map((m) => (
                            <div key={m.l} className="rounded-2xl p-6 border border-white/10 bg-white/5">
                                <div className="font-display text-3xl font-bold" style={{ color: ORANGE }}>{m.k}</div>
                                <div className="text-sm text-slate-300 mt-1">{m.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="mt-10 text-center text-lg italic max-w-3xl mx-auto" style={{ color: '#c78bff' }}>
                    "Fusionamos ingeniería de procesos, automatización e inteligencia artificial para desbloquear el máximo potencial humano." — Filosofía Athenea
                </p>
            </div>
        </Section>
    );
}

function Contacto() {
    const { toast } = useToast();
    const [form, setForm] = useState({ nombre: '', empresa: '', email: '', mensaje: '' });
    const onSubmit = (e) => {
        e.preventDefault();
        toast({ title: 'Solicitud enviada', description: 'Gracias, ' + (form.nombre || '') + '. El equipo de Athenea te contactará en menos de 24 horas.' });
        setForm({ nombre: '', empresa: '', email: '', mensaje: '' });
    };
    const field = 'w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent';
    return (
        <Section id="contacto" className="bg-slate-50">
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <Eyebrow>Contáctanos</Eyebrow>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: OXFORD }}>Comienza con un diagnóstico gratuito</h2>
                    <p className="mt-4 text-lg text-slate-600">Agenda tu demo de VR o solicita una Asesoría empresarial. Respondemos en menos de 24 horas.</p>
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-3 text-slate-700"><MapPin className="h-5 w-5" style={{ color: ORANGE }} /> Heroica Matamoros, Tamaulipas, México</div>
                        <div className="flex items-center gap-3 text-slate-700"><Mail className="h-5 w-5" style={{ color: ORANGE }} /> info@weareathenea.com</div>
                        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-[#134074]"><MessageCircle className="h-5 w-5" style={{ color: ORANGE }} /> WhatsApp directo</a>
                    </div>
                    <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 h-56">
                        <iframe title="Ubicación Athenea" className="w-full h-full" loading="lazy" src="https://www.google.com/maps?q=Heroica+Matamoros,+Tamaulipas&output=embed" />
                    </div>
                </div>
                <form onSubmit={onSubmit} className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm self-start">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <label className="text-sm font-medium" style={{ color: CORP }}>Nombre</label>
                            <input required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className={field} placeholder="Tu nombre" />
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium" style={{ color: CORP }}>Empresa</label>
                            <input value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} className={field} placeholder="Nombre de tu empresa" />
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium" style={{ color: CORP }}>Correo</label>
                            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} placeholder="correo@empresa.com" />
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium" style={{ color: CORP }}>¿En qué te podemos ayudar?</label>
                            <textarea rows={4} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className={field} placeholder="Cuéntanos tu reto..." />
                        </div>
                        <button type="submit" className="rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5" style={{ backgroundColor: ORANGE }}>Solicitar diagnóstico gratuito</button>
                    </div>
                </form>
            </div>
        </Section>
    );
}

function Footer() {
    return (
        <footer className="bg-[#0B2545] text-slate-300 pt-14 pb-8 border-t border-white/10">
            <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-center gap-3 text-white">
                        <AthenaLogo className="h-9 w-9" color={TURQ} />
                        <span className="font-display text-2xl tracking-[0.15em] font-semibold">ATHENEA</span>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        {NAV.map((n) => <a key={n.href} href={n.href} className="hover:text-[#00B4D8]">{n.label}</a>)}
                    </div>
                </div>
                <p className="mt-6 text-sm text-slate-400 max-w-xl">Coaching · Voz · Liderazgo · Desarrollo Humano. weareathenea.com · @WeAreAthenea</p>
                <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
                    <span>© {new Date().getFullYear()} Athenea Coaching & Consultoría. Heroica Matamoros, Tamaulipas.</span>
                    <span>Todos los derechos reservados.</span>
                </div>
            </div>
        </footer>
    );
}

function WhatsAppButton() {
    return (
        <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full shadow-xl transition-transform hover:scale-110"
            style={{ backgroundColor: '#25D366' }}>
            <MessageCircle className="h-7 w-7 text-white" fill="white" />
        </a>
    );
}

function HomePage() {
    return (
        <div className="bg-[#fafbfc]">
            <Helmet>
                <title>Athenea Coaching & Consultoría | Liderazgo, Tecnología y VR</title>
                <meta name="description" content="Humanizamos el liderazgo para transformar las organizaciones. Consultoría que fusiona Ingeniería de Procesos, Realidad Virtual y Psicología Organizacional en Heroica Matamoros." />
            </Helmet>
            <Header />
            <Hero />
            <Marquee />
            <Problema />
            <Solucion />
            <VR />
            <Servicios />
            <MisionVision />
            <Equipo />
            <Casos />
            <Contacto />
            <Footer />
            <WhatsAppButton />
            <Toaster />
        </div>
    );
}

export default HomePage;
