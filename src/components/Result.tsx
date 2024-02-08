import { Dispatch, SetStateAction } from 'react';
import { IResultData } from 'responseTypes';

interface Props {
   data: IResultData | undefined;
   logo: string | undefined;
   profile_picture: string | undefined;
   onClose: Dispatch<SetStateAction<boolean>>;
}

export function ResultModal({ data, logo, profile_picture, onClose }: Props) {
   return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
         <div className="bg-white rounded-lg p-8">
            {/* Close button */}
            <button
               onClick={() => onClose}
               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M6 18L18 6M6 6l12 12"
                  />
               </svg>
            </button>
            {/* Modal content */}
            <div className="w-[595px] h-[742px] flex flex-col space-y-4">
               {/* Result header */}
               <div className="w-full flex justify-between items-center">
                  <div className="object-cover">
                     <img src={logo} alt="school_logo" className="w-full" />
                  </div>
                  <div className="w-2/3 flex flex-col space-y-2 text-center">
                     <span className="text-xl font-bold">FREMONT COLLEGE OF EDUCATION</span>
                     <span className="text-sm w-8/12 mx-auto font-light">
                        No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.
                     </span>
                     <div className="flex flex-col space-y-2">
                        <span className="text-xl font-bold">
                           Post Graduate Diploma in Education
                        </span>
                        <span className="font-bold text-sm">
                           Student First Semester Statement Of Result
                        </span>
                     </div>
                  </div>
                  <div className="object-contain">
                     <img src={profile_picture} alt="student_profile_picture" className="w-full" />
                  </div>
               </div>
               {/* Bio Data */}
               <div className="flex w-full justify-between items-center pt-10">
                  <div className="flex flex-col space-y-2 w-1/3">
                     <span className="text-sm font-bold">
                        Name:{' '}
                        <span className="font-semibold capitalize text-[10px] w-1/2 float-end clear-both">{`${data?.surname} ${data?.firstname}`}</span>
                     </span>
                     <span className="text-sm font-bold">
                        Level:{' '}
                        <span className="font-semibold capitalize text-[10px] w-1/2 float-end clear-both">{`${data?.level}`}</span>
                     </span>
                  </div>
                  <div className="flex flex-col space-y-2 w-1/3">
                     <span className="text-sm font-bold">
                        Reg. No.:{' '}
                        <span className="font-semibold capitalize text-[10px] w-1/2 float-end clear-both">{`${data?.reg_no}`}</span>
                     </span>
                     <span className="text-sm font-bold">
                        Session:{' '}
                        <span className="font-semibold capitalize text-[10px] w-1/2 float-end clear-both">{`${data?.session}`}</span>
                     </span>
                  </div>
           </div>
           {/* Result Table */}
            </div>
         </div>
      </div>
   );
}
