// frontend/src/components/LogoMP.tsx

import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo_mp.png'; // logo_mp.png をインポート

const Logo = () => {
    return (
        <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo MP" width={50} height={50} />
            {/* 画像サイズは width と height の値で調整 */}
        </div>
    );
};

export default Logo;
