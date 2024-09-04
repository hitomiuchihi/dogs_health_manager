import Image from "next/image";
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import Sidebar from "@/components/public/Sidebar";
import DogProfile from "@/components/public/DogProfile";

export default function LP() {
  return (
    <div className="flex h-screen flex-col">
      <Header />

          <main className="flex-1 p-8 bg-gray-100">
            愛犬の健康管理、ワクチン管理をこれひとつで。
          </main>

      <Footer />
    </div>
  );
}
