import { IStudentDataResource, IStudentResultResponse } from 'responseTypes';
import { DataTableHead } from './componentConstatnts';
import { useEffect, useState } from 'react';
import { ResultModal } from './Result';

interface DataTableProps {
   studentData: IStudentDataResource[] | undefined;
}

export function DataTable({ studentData }: DataTableProps) {
   // State variables for loading state and modal visibility
   const [loading, setLoading] = useState<boolean>(false);
   const [showModal, setShowModal] = useState<boolean>(false);
   const [data, setData] = useState<IStudentResultResponse>();

   // Function to handle viewing result details
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

   // Effect to update loading state when student data changes
   useEffect(() => {
      studentData && studentData.length && setLoading(false);
   }, [studentData]);

   return (
      // Table for displaying student data
      <table className="table-auto my-4 w-full mx-auto relative">
         <thead>
            {/* Table header */}
            <tr className="bg-gray-200 p-4">
               {/* Mapping through table headers */}
               {DataTableHead.map((header, index) => (
                  <th key={index} className="text-md font-medium capitalize text-center px-2 w-fit">
                     {header}
                  </th>
               ))}
               {/* Action column header */}
               <th className="text-md font-medium capitalize text-center px-2 w-fit">action</th>
            </tr>
         </thead>
         <tbody className="h-20 overflow-scroll">
            {/* Render student data rows */}
            {studentData && !loading ? (
               studentData.map((data) => (
                  <tr key={data.id} className="border-y">
                     {/* Individual student data cells */}
                     <td className="pl-3 capitalize py-2 text-center">{data.id}</td>
                     <td className="pl-3 capitalize py-2 text-center">{data.surname}</td>
                     <td className="pl-3 capitalize py-2 text-center">{data.firstname}</td>
                     <td className="pl-3 capitalize py-2 text-center">{data.age}</td>
                     <td className="pl-3 capitalize py-2 text-center">{data.gender}</td>
                     <td className="pl-3 capitalize py-2 text-center">{data.level}</td>
                     <td className="pl-3 capitalize py-2 text-center">{data.state}</td>
                     {/* Button to view result */}
                     <td className='mx-auto w-40'>
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
               // Display loading message if data is still loading
               <tr>
                  <td colSpan={DataTableHead.length} className="text-center py-4">
                     Loading...
                  </td>
               </tr>
            )}
            {/* Render modal if showModal state is true */}
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
