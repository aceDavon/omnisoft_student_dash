import { IStudentDataResource, IStudentResultResponse } from 'responseTypes';
import { DataTableHead } from './componentConstatnts';
import { useEffect, useState } from 'react';
import { ResultModal } from './Result';

interface DataTableProps {
   studentData: IStudentDataResource[] | undefined;
}

export function DataTable({ studentData }: DataTableProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const [showModal, setShowModal] = useState<boolean>(false);
   const [data, setData] = useState<IStudentResultResponse>();

   const handleViewResult = async (id: number) => {
      try {
         const data = await fetch(`https://test.omniswift.com.ng/api/viewResult/${id}`, {
            method: 'POST',
         });

         const response: IStudentResultResponse = await data.json();
         if (response.data) {
            setData(response);
            setShowModal(true);
            console.log(response);
         }
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      studentData && studentData.length && setLoading(false);
   }, [studentData]);

   return (
      <table className="table-auto my-4 w-11/12 mx-auto relative">
         <thead>
            <tr className="bg-gray-200 p-4">
               {DataTableHead.map((header, index) => (
                  <th key={index} className="text-md font-medium capitalize text-start px-2 w-fit">
                     {header}
                  </th>
               ))}
               <th className="text-md font-medium capitalize text-start px-2 w-fit">action</th>
            </tr>
         </thead>
         <tbody className="h-20 overflow-scroll">
            {studentData && !loading ? (
               studentData.map((data) => (
                  <tr key={data.id} className="border-y">
                     <td className="pl-3 capitalize  py-2">{data.id}</td>
                     <td className="pl-3 capitalize  py-2">{data.surname}</td>
                     <td className="pl-3 capitalize  py-2">{data.firstname}</td>
                     <td className="pl-3 capitalize  py-2">{data.age}</td>
                     <td className="pl-3 capitalize  py-2">{data.gender}</td>
                     <td className="pl-3 capitalize  py-2">{data.level}</td>
                     <td className="pl-3 capitalize  py-2">{data.state}</td>
                     <td>
                        <button
                           onClick={() => handleViewResult(data.id)}
                           className="bg-green-700 px-3 py-1 text-white capitalize hover:bg-green-500"
                        >
                           download result
                        </button>
                     </td>
                  </tr>
               ))
            ) : (
               <tr>
                  <td colSpan={DataTableHead.length} className="text-center py-4">
                     Loading...
                  </td>
               </tr>
            )}
            {showModal && (
               <ResultModal
                  data={data?.data}
                  logo={data?.logo}
                  profile_picture={data?.profile_picture}
                  onClose={setShowModal}
               />
            )}
         </tbody>
      </table>
   );
}
