import { StaticImageData } from "next/image";
type VaccineType = '5種' | '６種' | '７種' | '8種' | '狂犬病';

interface VaccineData{
    id: number;
    dogId: number;
    vaccineType: VaccineType;
    date: string; // ISO 8601形式の日付文字列、カレンダーから選択して入力できるようにする予定;
    certificateImage?: StaticImageData;
}

export default VaccineData;