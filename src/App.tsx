import { Filterform } from 'components/FilterForms';
import { DataTable } from 'components/studentTable';
import { Spinner } from 'components/spinner';
import { useEffect, useState } from 'react';
import { IAllDataResources } from 'responseTypes';

function App() {
   const [data, setData] = useState<IAllDataResources | undefined>();
   const [loading, setLoading] = useState<boolean>(true);
   const [noData, setNoData] = useState<boolean>(true);

   const allData = async () => {
      try {
         const data = await fetch('https://test.omniswift.com.ng/api/viewAllData');
         if (!data.ok) {
            throw new Error('Failed to fetch data');
         }
         const response: IAllDataResources = await data.json();

         if (!response.data) {
            setNoData(true);
         } else {
            setData(response);
            setNoData(false);
            setLoading(false);
         }
      } catch (error) {
         console.error(error);
         // Handle error state here, for example:
         setNoData(true);
      }
   };

   useEffect(() => {
      allData();
   }, []);

   if (loading) {
      return <Spinner />;
   }

   return (
      <>
         <div className="flex flex-col space-y-5 bg-gray-200 p-7">
            <div className="text-4xl text-[#343434] font-extrabold capitalize">
               student data table
            </div>
            <div className="flex flex-col space-y-5 w-full">
               <div className="bg-white p-4 flex flex-col space-y-3">
                  <span className="capitalize text-2xl font-thin">filter student table by:</span>
                  <Filterform setFilterData={setData} />
               </div>
            </div>
            <div className="flex flex-col space-y-5 w-full bg-white">
               {!data?.data ? (
                  <span className="text-center">{data?.message}</span>
               ) : (
                  <DataTable studentData={data?.data.students} />
               )}
            </div>
         </div>
      </>
   );
}

export default App;
