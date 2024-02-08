export interface IAllDataResources {
   message: string;
   data: { students: IStudentDataResource[] };
}

export interface IStudentDataResource {
   id: number;
   surname: string;
   firstname: string;
   age: number;
   gender: 'male' | 'female';
   level: string;
   state: string;
}

export interface IFilterParams {
   age: number;
   state: string;
   level: string;
   gender: 'male' | 'female';
   [key: string]: string | number;
}

export interface IStudentResultResponse {
   message: string;
   data: IResultData;
   logo: string;
   profile_picture: string;
}

export interface IResultData {
   id: number;
   surname: string;
   firstname: string;
   age: number;
   gender: string;
   level: string;
   state: string;
   reg_no: string;
   session: string;
   result: IResult[];
   cummulative: ICummlative;
}

export interface IResult {
   coursecode: string;
   title: string;
   credit_unit: number;
   grade: string;
   total_point: number;
}

export interface ICummlative {
   unts: number;
   untd: number;
   gpts: number;
   gptd: number;
   gpats: number;
   gpatd: number;
   remarks: string;
}
