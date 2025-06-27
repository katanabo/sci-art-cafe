import React from 'react';
import { CONTACT_PAGE_TITLE } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center">
        <h2 className="handwritten text-3xl md:text-4xl font-bold text-primary mb-3">
          {CONTACT_PAGE_TITLE}
        </h2>
        <p className="text-lg text-gray-600">お問い合わせはこちらから</p>
      </section>

      <section className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h3 className="handwritten text-xl font-bold mb-6 text-primary">お問い合わせフォーム</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="お名前"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="your@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">お問い合わせ内容</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="お問い合わせ内容を具体的にご記入ください。"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="handwritten w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Optional: Newsletter Section (if not in footer) */}
      <section className="py-16 bg-primary bg-opacity-5 rounded-lg">
            <div className="container mx-auto px-4 text-center">
                <h2 className="handwritten text-2xl md:text-3xl font-bold mb-6 text-primary">イベント情報をお届けします</h2>
                <p className="mb-8 max-w-2xl mx-auto text-gray-700">メールマガジンに登録いただくと、最新のイベント情報やカフェの新メニュー情報をいち早くお届けします。</p>
                
                <form className="max-w-md mx-auto flex">
                    <input 
                        type="email" 
                        placeholder="メールアドレス" 
                        className="flex-grow px-4 py-3 border border-gray-300 !rounded-l-button focus:ring-1 focus:ring-primary focus:border-primary"
                        aria-label="メールアドレス"
                    />
                    <button 
                        type="submit" 
                        className="handwritten px-6 py-3 bg-primary text-white font-medium !rounded-r-button hover:bg-opacity-90 transition-colors whitespace-nowrap"
                    >
                        登録する
                    </button>
                </form>
            </div>
        </section>

    </div>
  );
};

export default ContactPage;