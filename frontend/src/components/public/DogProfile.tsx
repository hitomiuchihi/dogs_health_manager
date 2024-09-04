import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dogs from '../../dummyData/dogsDummyData'
import { differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';

const DogProfile: React.FC = () => {
    return(
        <div className="grid gap-1 md:grid-cols-2">
        {
            dogs.map((dog, index)=>{
                // 誕生日をDateオブジェクトに変換
                const birthday = new Date(dog.birthday);
                const today = new Date();

                // 年齢を計算
                const years = differenceInYears(today, birthday);
                const months = differenceInMonths(today, birthday) % 12;
                const days = differenceInDays(today, new Date(today.getFullYear(), today.getMonth(), birthday.getDate()));

                return (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 border border-gray-200">
                        <div className="relative w-full h-80">
                            <Image
                                className="absolute inset-0 object-contain"
                                src={dog.profileImage}
                                alt={`${dog.name}の画像`}
                                layout="fill"
                                />
                        </div>
                        <div className="px-6 py-4">
                            <h1 className="text-xl font-bold text-green-600">{dog.name}</h1>
                            <p className="text-gray-700 text-base mt-2 font-bold">
                                誕生日: {dog.birthday}
                            </p>
                            <p className="text-gray-700 text-base font-bold">
                                年齢: {years}歳{months}ヶ月{days}日
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 flex justify-between">
                            <Link href={`/health/${dog.id}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                健康記録
                            </Link>
                            <Link href={`/vaccine/${dog.id}`} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                                ワクチン履歴
                            </Link>
                        </div>
                    </div>
                );
            })
        }
    </div>
    )
};

export default DogProfile;
