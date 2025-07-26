import React from 'react';
import { CAFE_NAME } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center">
        <h2 className="handwritten text-3xl md:text-4xl font-bold text-primary mb-2">
          {CAFE_NAME} について
        </h2>
        <p className="text-lg text-gray-600">私たちのカフェが大切にしていること</p>
      </section>

      {/* Main Concept */}
      <section className="max-w-4xl mx-auto flex items-center">
        <img src="/gakucafekun_02.png" alt="がくカフェくん" className="h-48 mr-8" />
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 flex-1">
          <h3 className="handwritten text-2xl font-bold mb-4 text-secondary">専門知をもっと身近に</h3>
          <p className="mb-4 text-gray-700 leading-relaxed">仙台は“学都”として大学や研究機関が集積していますが、専門的な知識に日常の中で触れる機会はまだ限られています。「科学と音楽のカフェ」は、カフェのようなリラックスした空間で、科学や音楽に関する話題を気軽に楽しめる場を提供します。このイベントをきっかけに、仙台はもっと気軽に学びにふれられる、知的で楽しい街へと変わっていきます。科学や音楽について話し合えるこの場所が、仙台の新しい魅力のひとつになっていくことを目指しています。</p>
        </div>
      </section>

      <div className="section-divider"></div>
      
      {/* Our Mission and Offerings */}
      <section className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          <div className="p-6 bg-primary bg-opacity-5 rounded-md">
            <h4 className="handwritten text-xl font-semibold text-primary mb-3"><i className="ri-rocket-line mr-2"></i>音楽と科学の融合による文化発信</h4>
            <p className="text-gray-700 leading-relaxed">
            仙台には多様な文化コミュニティが存在するものの、それぞれが個別に活動しているのが現状です。本事業では、市民に親しまれているジャズフェスティバルをはじめとした音楽文化を活かし、音楽と科学の両面から知的好奇心を刺激する、新たな文化体験の場を創出します。音楽と科学の融合によって、従来の来場者層とは異なるコミュニティへの働きかけが可能となり、これまでにない文化的価値の提供が期待されます。
            </p>
          </div>

          <div className="p-6 bg-secondary bg-opacity-5 rounded-md">
            <h4 className="handwritten text-xl font-semibold text-secondary mb-3"><i className="ri-service-line mr-2"></i>まちの魅力向上に向けた定例イベント</h4>
            <p className="text-gray-700 leading-relaxed">
            仙台おにぎり屋「織はや」を会場に、毎月定期的に開催される「科学と音楽のカフェ」は、まちに新たなリズムをもたらします。継続的な開催を通じて、地域に根ざした文化の流れを生み出し、日常の中で自然と学びや交流が生まれる環境を育てていきます。この取り組みが、仙台の新たなカルチャーシーンの一端となり、まちの魅力を内外に発信していくことを目指しています。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;