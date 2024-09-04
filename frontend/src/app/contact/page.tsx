import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import Sidebar from "@/components/public/Sidebar";

export default function Contact() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-100">
          <h2 className="text-3xl font-semibold mb-6">問い合わせ</h2>
          
          <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-1">お名前:</label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="例: 山田 太郎"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-1">メールアドレス:</label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="example@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-lg font-medium mb-1">タイトル:</label>
              <input
                type="text"
                id="title"
                required
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="例: お問い合わせについて"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-1">お問い合わせ内容:</label>
              <textarea
                id="message"
                required
                className="w-full p-2 border border-gray-300 rounded"
                rows={6}
                placeholder="ここにお問い合わせ内容を入力してください"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              送信
            </button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
}
