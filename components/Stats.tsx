import React from 'react';

const stats = [
  { id: 1, value: "150+", label: "Mesas Criadas" },
  { id: 2, value: "4.9", label: "Avaliação Google" },
  { id: 3, value: "98%", label: "Clientes Recomendam" },
  { id: 4, value: "15", label: "Anos de Experiência" },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFF4E7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#522B00]">
            Números que Comprovam Nossa Excelência
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-[#FEFEFE] p-8 rounded-2xl shadow-sm text-center transform hover:-translate-y-1 transition-transform">
              <div className="text-4xl md:text-5xl font-bold text-[#522B00] mb-2 font-serif">
                {stat.value}
              </div>
              <div className="text-[#522B00]/60 uppercase tracking-wide text-sm font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;