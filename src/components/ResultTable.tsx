import { IResult } from 'responseTypes';
import { ResultTableHead } from './componentConstatnts';

interface Props {
   result: IResult[] | undefined;
}

export function ResultTable({ result }: Props) {
   return (
      // Table for displaying result data
      <table className="table-auto my-4 relative">
         <thead>
            {/* Table header */}
            <tr className="bg-[#0D7590] p-4">
               {/* Mapping through table headers */}
               {ResultTableHead.map((header, index) => (
                  <th
                     key={index}
                     className="text-sm font-normal capitalize text-center text-white px-2 w-fit"
                  >
                     {header}
                  </th>
               ))}
            </tr>
         </thead>
         <tbody>
            {/* Table body with result data */}
            {result &&
               result.map((rowData, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                     {/* Individual result data cells */}
                     <td className="pl-3 capitalize py-2 text-center text-sm font-light">
                        {index + 1}
                     </td>
                     <td className="pl-3 capitalize py-2 text-center text-sm font-light">
                        {rowData.coursecode}
                     </td>
                     <td className="pl-3 capitalize py-2 text-center text-sm font-light">
                        {rowData.title}
                     </td>
                     <td className="pl-3 capitalize py-2 text-center text-sm font-light">
                        {rowData.credit_unit}
                     </td>
                     <td className="pl-3 capitalize py-2 text-center text-sm font-light">
                        {rowData.grade}
                     </td>
                     <td className="pl-3 capitalize py-2 text-center text-sm font-light">
                        {rowData.total_point}
                     </td>
                  </tr>
               ))}
         </tbody>
      </table>
   );
}
