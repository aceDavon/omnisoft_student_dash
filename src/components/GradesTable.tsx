import { ICummlative } from 'responseTypes';
import { cummulativeTableHead } from './componentConstatnts';

export function GradeTable({ gpatd, gpats, gptd, gpts, remarks, untd, unts }: ICummlative) {
   return (
      <div className="flex flex-col space-y-2">
         {/* Table for displaying cumulative grades */}
         <table className="table-auto w-10/12 my-4 relative">
            <thead>
               {/* Table header */}
               <tr className="bg-[#0D7590] p-4">
                  {/* Mapping through table headers */}
                  {cummulativeTableHead.map((header, index) => (
                     <th
                        key={index}
                        className="text-sm font-normal uppercase text-center text-white px-2 w-fit"
                     >
                        {header}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {/* Table body with cumulative data */}
               <tr>
                  {/* Individual cumulative data cells */}
                  <td className="pl-3 py-2 text-center text-sm font-light">{unts}</td>
                  <td className="pl-3 py-2 text-center text-sm font-light">{untd}</td>
                  <td className="pl-3 py-2 text-center text-sm font-light">{gpts}</td>
                  <td className="pl-3 py-2 text-center text-sm font-light">{gptd}</td>
                  <td className="pl-3 py-2 text-center text-sm font-light">{gpats}</td>
                  <td className="pl-3 py-2 text-center text-sm font-light">{gpatd}</td>
               </tr>
            </tbody>
         </table>
         {/* Remarks */}
         <span className="text-sm font-bold">
            Remark: {/* Remarks text */}
            <span className="font-semibold capitalize text-[12px]">{remarks}</span>
         </span>
      </div>
   );
}
