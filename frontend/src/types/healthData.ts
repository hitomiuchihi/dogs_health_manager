import Status from "./Status";
import Stool from "./Stool";

interface HealthData{
    id: number;
    dogId: number;
    status: Status;
    stool: Stool;
    weight: number;
    date: string; // ISO 8601形式
}

export default HealthData;