import React, { useState } from 'react';
import { CONTACT_PAGE_TITLE } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const encode = (data: { [key: string]: string }) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      setSubmitMessage("お問い合わせありがとうございます。メッセージは正常に送信されました。");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage("メッセージの送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form name="contact" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="お名前"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="your@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">お問い合わせ内容</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="お問い合わせ内容を具体的にご記入ください。"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="handwritten w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400"
              >
                {isSubmitting ? '送信中...' : '送信'}
              </button>
            </div>
            {submitMessage && (
              <p className={`mt-4 text-sm ${submitMessage.includes('失敗') ? 'text-red-500' : 'text-green-600'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
