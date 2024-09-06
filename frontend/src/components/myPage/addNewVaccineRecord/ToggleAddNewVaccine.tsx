import React, { useState } from 'react';
import AddVaccineRecordForm from './NewVaccineRecordForm'; // AddVaccineRecordForm のパスを適宜修正してください
import Dog from '@/types/dogData'; // Dog 型のインポートもお忘れなく

interface MyComponentProps {
    dogs: Dog[];
    handleAddVaccineRecord: (data: any) => void;
}

const ToggleAddNewVaccineRecord: React.FC<MyComponentProps> = ({ dogs, handleAddVaccineRecord }) => {
    // フォームの表示・非表示を管理するための状態
    const [showForm, setShowForm] = useState(false);

    // ボタンがクリックされたときにフォームの表示状態を切り替える関数
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4">
                <button onClick={toggleForm} className="text-blue-500 hover:underline">
                    新しくワクチン記録を追加する
                </button>
            </h3>

            {/* フォームを表示する状態の場合にのみ表示 */}
            {showForm && <AddVaccineRecordForm dogs={dogs} onSubmit={handleAddVaccineRecord} />}
        </div>
    );
};

export default ToggleAddNewVaccineRecord;
