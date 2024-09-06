import React, { useState } from 'react';
import AddDogForm from './AddDogForm'; // AddDogForm のパスを適宜修正してください

const ToggleAddDog = () => {
    // フォームの表示・非表示を管理するための状態
    const [showForm, setShowForm] = useState(false);

    // ボタンがクリックされたときにフォームの表示状態を切り替える関数
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    // 愛犬情報を追加するためのハンドラー関数
    const handleAddDog = (newDogData: any) => {
        // 新しい愛犬情報の処理をここに書く
        console.log(newDogData);
        // フォーム送信後にフォームを非表示にする
        setShowForm(false);
    };

    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4">
                <button onClick={toggleForm} className="text-blue-500 hover:underline">
                    新しく愛犬情報を追加する
                </button>
            </h3>

            {/* フォームを表示する状態の場合にのみ表示 */}
            {showForm && <AddDogForm onSubmit={handleAddDog} />}
        </div>
    );
}

export default ToggleAddDog;
