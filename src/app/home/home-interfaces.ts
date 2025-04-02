export interface CourseI{
    name: string;
    id: string;
}
export interface VehichleApiresponseI{
    count: number;
    message: string;
    Results: VehichleDetailsI[];
    SearchCriteria: string;
}
export interface VehichleDetailsI{
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;

}