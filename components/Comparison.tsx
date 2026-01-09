import React from 'react';
import { Check, X } from 'lucide-react';

const comparisonData = [
  { feature: "Criação personalizada", common: false, mandie: true },
  { feature: "Sabores artesanais", common: false, mandie: true },
  { feature: "Montagem profissional", common: false, mandie: true },
  { feature: "Curadoria visual", common: false, mandie: true },
  { feature: "Garantia de qualidade", common: false, mandie: true },
];

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-[#FEFEFE]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#522B00]">
            Compare: Mesa Comum vs Mesa Mandiê
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#FFE4CB] shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-[#FFF4E7]">
                <th className="py-6 px-4 text-left text-[#522B00] font-bold md:pl-10 w-1/3">Característica</th>
                <th className="py-6 px-4 text-center text-[#522B00]/60 font-medium w-1/3">Mesa Comum</th>
                <th className="py-6 px-4 text-center text-[#522B00] font-bold bg-[#FFE4CB] w-1/3 border-b-4 border-[#FDAE9C]">Mesa Mandiê ✓</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                  <td className="py-4 px-4 md:pl-10 text-[#522B00] font-medium border-b border-gray-100">{row.feature}</td>
                  <td className="py-4 px-4 text-center border-b border-gray-100">
                    <X className="inline-block text-gray-300" size={24} />
                  </td>
                  <td className="py-4 px-4 text-center bg-[#FFF9F2] border-b border-[#FFE4CB]">
                     <div className="flex items-center justify-center gap-2 text-[#522B00] font-semibold">
                       <div className="bg-[#FDAE9C] rounded-full p-1">
                          <Check className="text-[#522B00]" size={14} strokeWidth={3} />
                       </div>
                       <span className="hidden md:inline text-sm">{row.mandie ? 'Exclusiva' : ''}</span>
                     </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;