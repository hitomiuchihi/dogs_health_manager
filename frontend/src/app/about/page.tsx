import Image from "next/image";
import Link from 'next/link';
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import Sidebar from "@/components/public/Sidebar";
import homeImage from '@/public/images/home_image.png';
import icon from '@/public/images/icon.png'

export default function About() {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-8 bg-gray-100">
                    <h2 className="text-3xl font-semibold mb-6">ABOUT USなメッセージ</h2>
                    
                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">ウェルカムメッセージ</h3>
                        <p className="mb-4">
                            ここにサービス紹介文を挿入
                        </p>
                        <Image
                            src={homeImage} // サービスに関連する画像を追加
                            alt="私たちについて"
                            width={400}
                            height={200}
                            className="rounded-lg"
                        />
                    </section>
                    
                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">機能紹介</h3>
                        <ul className="list-disc list-inside mb-4">
                            <li className="mb-2">機能1:説明1</li>
                            <li className="mb-2">機能2:説明2</li>
                            <li className="mb-2">機能3:説明3</li>
                            <li className="mb-2">機能4:説明4</li>
                        </ul>
                    </section>
                    
                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">開発者</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
                                <Image
                                    src={icon} // チームメンバーの画像を追加
                                    alt="チームメンバー 1"
                                    width={200}
                                    height={200}
                                    className="rounded-full mb-4"
                                />
                                <h4 className="text-xl font-semibold">めめ</h4>
                                <p className="text-gray-600">プログラミング勉強中。</p>
                                <p className="text-gray-600">7歳と5歳のミニチュアピンシャーと北海道の田舎暮らし。</p>
                                <p className="text-gray-600">シンプルな愛犬の体重やワクチン接種歴の管理アプリが欲しかったので、練習がてら開発しました。</p>
                            </div>
                        </div>
                    </section>
                    
                    <section>
                        <h3 className="text-2xl font-semibold mb-4">お問い合わせ</h3>
                        <p className="mb-4">
                            ご質問やサポートが必要な場合は、<Link href="/contact" className="text-blue-500 hover:underline">こちら</Link>。
                        </p>
                    </section>

                    
                </main>
            </div>
            <Footer />
        </div>
    );
}
