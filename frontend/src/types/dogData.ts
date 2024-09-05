import { StaticImageData } from "next/image";

interface Dog {
    id: number;
    name: string;
    birthday: string;
    profileImage: StaticImageData|File;
}

export default Dog;