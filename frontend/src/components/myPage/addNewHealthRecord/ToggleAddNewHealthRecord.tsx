
import React, { useState } from 'react';
import NewHealthRecordForm from './NewHealthRecordForm'; // NewHealthRecordForm のパスを適宜修正してください
import Dog from '@/types/dogData'; // Dog 型のインポートもお忘れなく

interface MyComponentProps {
    dogs: Dog[];
    handleAddHealthRecord: (data: any) => void;
}

const ToggleAddNewHealthRecord: React.FC<MyComponentProps> = ({ dogs, handleAddHealthRecord }) => {
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
                    新しく健康記録を追加する
                </button>
            </h3>

            {/* フォームを表示する状態の場合にのみ表示 */}
            {showForm && <NewHealthRecordForm dogs={dogs} onSubmit={handleAddHealthRecord} />}
        </div>
    );
};

export default ToggleAddNewHealthRecord;
