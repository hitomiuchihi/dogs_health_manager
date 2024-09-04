import Image from "next/image";
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import Sidebar from "@/components/public/Sidebar";
import DogProfile from "@/components/public/DogProfile";

export default function Home() {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-8 bg-gray-100">
                {/* ここにメインコンテンツを追加 */}
                <h2 className="text-3xl font-semibold mb-4">Dogs🐾</h2>
                <DogProfile />
                </main>
            </div>
            <Footer />
        </div>
    );
}