/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Camera,
  ArrowRight,
  Star,
  Award,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, ReactNode } from 'react';

const WHATSAPP_LINK = "https://wa.me/558694073994";

const images = {
  hero: "https://i.imgur.com/FAx9Lrs.jpg",
  results: [
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000",
    "https://i.imgur.com/pjGSOZc.jpg",
    "https://i.imgur.com/kMUPU7f.jpg",
    "https://i.imgur.com/e4ktzmE.jpg",
    "https://i.imgur.com/HP0vpOT.jpg",
    "https://i.imgur.com/rnZoh24.jpg"
  ]
};

const Section = ({ children, className = "", id = "", as: Tag = "section" }: { children: ReactNode, className?: string, id?: string, as?: any }) => (
  <Tag id={id} className={`py-16 px-6 md:py-24 lg:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </Tag>
);

const CTAButton = ({ children, className = "", secondary = false, pulse = false }: { children: ReactNode, className?: string, secondary?: boolean, pulse?: boolean }) => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
    whileTap={{ scale: 0.95 }}
    animate={pulse ? { 
      scale: [1, 1.03, 1],
      boxShadow: ["0 0 0 0px rgba(34, 197, 94, 0.4)", "0 0 0 15px rgba(34, 197, 94, 0)", "0 0 0 0px rgba(34, 197, 94, 0)"]
    } : {}}
    transition={pulse ? { repeat: Infinity, duration: 2 } : {}}
    className={`inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl ${
      secondary 
        ? "bg-white text-blue-600 hover:bg-blue-50 border border-blue-100" 
        : "bg-green-500 text-white hover:bg-green-600"
    } ${className}`}
  >
    <MessageCircle className="w-6 h-6" />
    {children}
  </motion.a>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-bold text-xl text-gray-800 hover:text-blue-600 transition-colors group"
      >
        <span className="pr-8">{question}</span>
        <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-all group-hover:bg-blue-50 ${isOpen ? 'rotate-180 bg-blue-50' : ''}`}>
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-400'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <header className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 md:pt-40">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.hero} 
            alt="Paciente sorrindo após tratamento na Master Sorriso Caxias" 
            className="w-full h-full object-cover brightness-[0.35] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-2xl text-blue-200 text-sm font-bold mb-8 uppercase tracking-widest">
              <Award className="w-5 h-5 text-blue-400" />
              <span>A Clínica Odontológica nº 1 de Caxias - MA</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-8">
              Seu sorriso pode estar te fazendo <span className="text-blue-400">perder oportunidades</span> valiosas.
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-medium">
              Não deixe a insegurança travar sua vida pessoal e profissional. Recupere sua autoestima com o melhor <span className="text-white font-bold">dentista em Caxias MA</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <CTAButton pulse className="w-full sm:w-auto">Agendar no WhatsApp Agora</CTAButton>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown className="w-10 h-10" />
        </motion.div>
      </header>

      {/* 2. SEÇÃO DE IDENTIFICAÇÃO (DOR) */}
      <Section className="bg-white overflow-hidden" as="main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Identificação</span>
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-gray-900 leading-tight">
              Você já sentiu vontade de <span className="text-blue-600 italic">esconder o rosto</span> em uma foto importante?
            </h2>
            <div className="space-y-6">
              {[
                "Evita sorrir em público por causa de dentes amarelados ou falhas?",
                "Sente que as pessoas te julgam pela aparência do seu sorriso?",
                "Deixou de ir a uma entrevista ou encontro por baixa autoestima?"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-base md:text-lg font-semibold text-gray-700 leading-snug">{text}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-10 text-lg md:text-xl font-bold text-gray-900 leading-relaxed border-l-4 border-blue-600 pl-6">
              Isso acaba hoje. Na <span className="text-blue-600">Master Sorriso</span>, nós não apenas tratamos dentes, nós devolvemos a sua vontade de aparecer para o mundo com orgulho.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-100 border-[8px] md:border-[12px] border-white relative z-10">
              <img 
                src={images.results[0]} 
                alt="Transformação de sorriso antes e depois na Master Sorriso Caxias" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-2xl shadow-blue-100 max-w-[220px] md:max-w-[280px] z-20 border border-blue-50">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                  <Users className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="font-black text-xl md:text-2xl text-blue-600">5k+</span>
              </div>
              <p className="text-xs md:text-sm font-bold text-gray-800 leading-tight">Vidas transformadas pela nossa clínica odontológica em Caxias.</p>
            </div>
            <div className="absolute top-1/2 -right-12 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </Section>

      {/* 3. PROVA VISUAL (RESULTADOS) */}
      <Section id="resultados" className="bg-gray-50">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Galeria de Sucesso</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Olha o que já fizemos por nossos pacientes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">Resultados reais que provam por que somos a escolha número 1 em Caxias - MA.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.results.slice(1).map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200/50 bg-white p-3"
            >
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <img 
                  src={img} 
                  alt={`Resultado de tratamento odontológico Master Sorriso ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-black text-sm uppercase tracking-widest">Caso Real</p>
                      <p className="text-xs text-white/70">Transformação Master Sorriso</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <CTAButton>Quero um resultado assim também</CTAButton>
        </div>
      </Section>

      {/* 5. SERVIÇOS PRINCIPAIS */}
      <Section id="servicos" className="bg-white">
        <div className="text-center mb-24">
          <span className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Especialidades</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Tudo o que você precisa em um só lugar</h2>
          <p className="text-xl text-gray-600 font-medium">Tratamentos rápidos, sem dor e com o padrão Master Sorriso de qualidade.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Clareamento Dental",
              desc: "Dentes brancos de verdade para você sorrir com orgulho em todas as fotos e momentos especiais.",
              icon: <Sparkles className="w-10 h-10 text-blue-600" />,
              tag: "Mais Procurado"
            },
            {
              title: "Restauração Estética",
              desc: "Corrija falhas, quebras ou manchas de forma natural e totalmente imperceptível aos olhos.",
              icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
              tag: "Alta Tecnologia"
            },
            {
              title: "Limpeza Profissional",
              desc: "Remoção completa de tártaro e placas para manter sua saúde bucal em dia e hálito sempre fresco.",
              icon: <CheckCircle2 className="w-10 h-10 text-blue-600" />,
              tag: "Saúde Preventiva"
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15, boxShadow: "0 30px 60px -12px rgba(50, 50, 93, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.2)" }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-gray-100/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{service.tag}</span>
              </div>
              <div className="mb-8 w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg font-medium">{service.desc}</p>
              <a href={WHATSAPP_LINK} className="inline-flex items-center gap-3 text-blue-600 font-black uppercase text-sm tracking-widest hover:gap-5 transition-all">
                Saber mais <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 6. CTA FORTE */}
      <Section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gray-900 -z-10" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter leading-tight">Chega de adiar o seu bem-estar e sua felicidade!</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">Clique no botão ao lado e fale agora com nossa equipe. Tiramos todas as suas dúvidas em minutos e agendamos sua avaliação.</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full lg:w-auto"
          >
            <CTAButton className="w-full lg:w-auto text-2xl py-8 px-16 rounded-[2rem]" pulse>
              Falar agora no WhatsApp
            </CTAButton>
          </motion.div>
        </div>
      </Section>

      {/* 7. LOCALIZAÇÃO E CONFIANÇA */}
      <Section id="contato" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Visite-nos</span>
            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter">Onde estamos em Caxias</h2>
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-500">
                  <MapPin className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-2 uppercase tracking-tight">Endereço Premium</h4>
                  <p className="text-gray-600 text-lg font-medium">Rua Benedito Leite, Clinimed nº 807, Caxias - MA</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-500">
                  <Clock className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-2 uppercase tracking-tight">Horário de Atendimento</h4>
                  <p className="text-gray-600 text-lg font-medium">Segunda a sexta: 07:30 às 18:00</p>
                  <p className="text-gray-600 text-lg font-medium">Sábado: 07:30 às 13:00</p>
                </div>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-16 p-10 rounded-[2.5rem] bg-blue-600 text-white shadow-2xl shadow-blue-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Smile className="w-24 h-24" />
              </div>
              <p className="text-xl font-bold italic leading-relaxed relative z-10">
                "Ambiente climatizado, atendimento humanizado e os melhores profissionais da região esperando por você para transformar sua vida."
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] h-[400px] md:h-[600px] bg-gray-100 relative border-[8px] md:border-[16px] border-white mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-blue-50/50 backdrop-blur-sm">
              <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-200 mb-8">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tighter">Estamos na Clinimed</h3>
              <p className="text-gray-600 text-lg font-medium mb-10 max-w-xs">Localizados no coração de Caxias, com fácil acesso e estacionamento.</p>
              <a 
                href="https://www.google.com/maps/search/Rua+Benedito+Leite,+Clinimed+n%C2%BA+807,+Caxias+-+MA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-black uppercase text-sm tracking-widest shadow-xl hover:bg-blue-600 hover:text-white transition-all"
              >
                Abrir no Google Maps <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 8. FAQ SIMPLES */}
      <Section className="bg-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Dúvidas</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 font-medium">Tudo o que você precisa saber antes de sua visita.</p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100">
            <FAQItem 
              question="Dói fazer os procedimentos na Master Sorriso?" 
              answer="Absolutamente não! Trabalhamos com as técnicas mais modernas e anestesias eficazes para garantir que você não sinta nenhum desconforto. Nosso foco é o seu conforto total e uma experiência relaxante."
            />
            <FAQItem 
              question="Os tratamentos são muito caros?" 
              answer="Temos os preços mais competitivos de Caxias e oferecemos diversas facilidades de pagamento. Acreditamos que cuidar do sorriso é um investimento essencial na sua autoestima e saúde, por isso tornamos tudo acessível."
            />
            <FAQItem 
              question="Preciso agendar com muita antecedência?" 
              answer="Temos uma equipe robusta para te atender com agilidade. Chamando no WhatsApp agora, conseguimos verificar a vaga mais próxima para você, muitas vezes para a mesma semana!"
            />
            <FAQItem 
              question="Quais serviços o dentista em Caxias MA da Master Sorriso oferece?" 
              answer="Oferecemos uma gama completa: clareamento dental, restaurações estéticas, limpeza profunda, próteses, implantes e muito mais. Tudo com tecnologia de ponta."
            />
          </div>
        </div>
      </Section>

      {/* 9. CTA FINAL */}
      <Section className="relative overflow-hidden py-40">
        <div className="absolute inset-0 bg-blue-600 -z-10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white relative z-10"
        >
          <p className="text-2xl md:text-3xl mb-16 opacity-90 font-medium max-w-3xl mx-auto">Não deixe para amanhã a confiança e o sucesso que você pode ter hoje.</p>
          <CTAButton pulse className="text-2xl py-10 px-20 rounded-[2.5rem] shadow-2xl shadow-blue-900/40">
            Quero meu novo sorriso agora!
          </CTAButton>
        </motion.div>
      </Section>

      {/* FOOTER */}
      <footer className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Smile className="text-white w-6 h-6" />
              </div>
              <span className="font-black text-xl tracking-tighter">MASTER SORRISO</span>
            </div>
            <p className="text-gray-500 leading-relaxed font-medium">A clínica odontológica referência em Caxias - MA. Transformando vidas através de sorrisos perfeitos e acessíveis.</p>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-gray-900">Links Rápidos</h4>
            <ul className="space-y-4 font-bold text-gray-600">
              <li><a href="#servicos" className="hover:text-blue-600 transition-colors">Nossos Serviços</a></li>
              <li><a href="#resultados" className="hover:text-blue-600 transition-colors">Casos de Sucesso</a></li>
              <li><a href="#contato" className="hover:text-blue-600 transition-colors">Localização</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-blue-600 transition-colors">Agendar Consulta</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-8 text-gray-900">Contato Direto</h4>
            <ul className="space-y-4 font-bold text-gray-600">
              <li className="flex items-center gap-3"><MessageCircle className="w-5 h-5 text-green-500" /> (86) 9407-3994</li>
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-blue-600" /> Clinimed, Caxias - MA</li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-100 text-center text-gray-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} Master Sorriso Caxias. Todos os direitos reservados.</p>
          <p className="mt-4 text-[10px] opacity-60 italic max-w-2xl mx-auto uppercase tracking-widest">As imagens são ilustrativas de resultados reais obtidos em nossa clínica. Responsável Técnico: Dr. Exemplo (CRO-MA 0000).</p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-8 right-8 z-[100]">
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 bg-green-500 text-white rounded-[2rem] flex items-center justify-center shadow-[0_20px_50px_rgba(34,197,94,0.4)] relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-green-500 animate-ping opacity-20" />
          <MessageCircle className="w-10 h-10 relative z-10" />
        </motion.a>
      </div>
    </div>
  );
}
