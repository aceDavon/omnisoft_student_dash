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
   result: [
      {
         coursecode: string;
         title: string;
         credit_unit: number;
         grade: string;
         total_point: number;
      },
      {
         coursecode: string;
         title: string;
         credit_unit: number;
         grade: 'A';
         total_point: number;
      },
      {
         coursecode: string;
         title: string;
         credit_unit: number;
         grade: 'C';
         total_point: number;
      },
      {
         coursecode: string;
         title: string;
         credit_unit: number;
         grade: string;
         total_point: number;
      },
   ];
   cummulative: {
      unts: number;
      untd: number;
      gpts: number;
      gptd: number;
      gpats: number;
      gpatd:number;
      remarks: string;
   };
}