import React from 'react';
import { CAFE_NAME, ABOUT_TEXT_TITLE, ABOUT_TEXT_P1, ABOUT_TEXT_P2 } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center">
        <h2 className="handwritten text-3xl md:text-4xl font-bold text-primary mb-2">
          {CAFE_NAME} について
        </h2>
        <p className="text-lg text-gray-600">私たちのカフェが大切にしていること</p>
      </section>

      {/* Main Concept - Notebook Style */}
      <section className="max-w-4xl mx-auto">
        <div className="notebook-bg p-6 sm:p-8 rounded shadow-md">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
                <div className="md:w-1/2">
                <img 
                    src="https://picsum.photos/seed/aboutinterior/600/400"
                    alt="カフェの雰囲気" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                </div>
                <div className="md:w-1/2">
                <h3 className="handwritten text-2xl font-bold mb-4 text-secondary">{ABOUT_TEXT_TITLE}</h3>
                <p className="mb-4 text-gray-700 leading-relaxed">{ABOUT_TEXT_P1}</p>
                <p className="text-gray-700 leading-relaxed">{ABOUT_TEXT_P2}</p>
                </div>
            </div>
        </div>
      </section>

      <div className="section-divider"></div>
      
      {/* Our Mission and Offerings */}
      <section className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          <div className="p-6 bg-primary bg-opacity-5 rounded-md">
            <h4 className="handwritten text-xl font-semibold text-primary mb-3"><i className="ri-rocket-line mr-2"></i>私たちのミッション</h4>
            <p className="mb-2 text-gray-700 leading-relaxed">
              「科学と音楽のカフェ」は、ただの休憩場所ではありません。ここは、異なる分野の知識や感性が交差し、新しいアイデアやインスピレーションが生まれる触媒となることを目指しています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              学生、研究者、地域住民、そして遠方から訪れる方々まで、誰もが気軽に立ち寄り、学び、語らい、そして心豊かな時間を過ごせる、そんなコミュニティハブを創造します。
            </p>
          </div>

          <div className="p-6 bg-secondary bg-opacity-5 rounded-md">
            <h4 className="handwritten text-xl font-semibold text-secondary mb-3"><i className="ri-service-line mr-2"></i>提供するもの</h4>
            <ul className="list-none space-y-2 text-gray-700 leading-relaxed">
              <li className="flex items-start"><i className="ri-check-line mr-2 text-secondary mt-1"></i>バリスタが淹れるスペシャルティコーヒーと自家製スイーツ</li>
              <li className="flex items-start"><i className="ri-check-line mr-2 text-secondary mt-1"></i>科学や芸術に関する書籍が楽しめるライブラリースペース</li>
              <li className="flex items-start"><i className="ri-check-line mr-2 text-secondary mt-1"></i>定期的なセミナー、ワークショップ、ライブ演奏</li>
              <li className="flex items-start"><i className="ri-check-line mr-2 text-secondary mt-1"></i>無料Wi-Fiと快適な作業スペース</li>
              <li className="flex items-start"><i className="ri-check-line mr-2 text-secondary mt-1"></i>知的好奇心を刺激する展示やインスタレーション</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to action or image gallery (optional) */}
      <section className="text-center">
          <img 
            src="https://picsum.photos/seed/cafeexterior/800/400" 
            alt="カフェの外観イメージ"
            className="rounded-lg shadow-md w-full max-w-3xl mx-auto h-auto object-cover"
            />
            <p className="text-sm text-gray-500 mt-2">くつろぎの空間をご用意してお待ちしております。</p>
      </section>

    </div>
  );
};

export default AboutPage;