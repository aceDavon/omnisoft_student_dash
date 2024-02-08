import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IAllDataResources, IFilterParams } from 'responseTypes';

interface Props {
   setFilterData: Dispatch<SetStateAction<IAllDataResources | undefined>>;
}

export function Filterform({ setFilterData }: Props) {
   const [value, setValue] = useState<{ [key: string]: string | number }>();

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = {
         ...value,
         [e.target.name]: e.target.name === 'age' ? parseInt(e.target.value) : e.target.value,
      };
      setValue(newValue);
   };

   const validate = (): boolean => {
      if (value !== undefined) {
         const data: IFilterParams = value as IFilterParams;

         return Object.keys(data).length > 0;
      }
      return false;
   };

   const handleSubmit = async (): Promise<void> => {
      if (validate()) {
         try {
            const response = await fetch('https://test.omniswift.com.ng/api/filterData', {
               method: 'POST',
               body: JSON.stringify(value),
               headers: {
                  Accept: 'application/json',
                  'content-type': 'application/json',
               },
            });

            if (!response.ok) {
               throw new Error('Network response was not ok');
            }

            const data: IAllDataResources = await response.json();
            setFilterData(data);
         } catch (error) {
            console.error(error);
         }
      }
   };

   return (
      <>
         <div className="flex justify-evenly flex-wrap">
            <div className="relative max-w-96 mx-4 lg:mx-0 grow my-2">
               <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="age"
                  className="w-full border border-black px-2 py-1.5 text-sm"
                  placeholder="select age"
               />
               <span className="bg-white absolute -top-2 left-3 text-xs font-thin capitalize px-2">
                  age
               </span>
               <div className="absolute right-2 top-2.5">
                  <IoIosArrowDown />
               </div>
            </div>
            <div className="relative max-w-96 mx-4 lg:mx-0 grow my-2">
               <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="state"
                  className="w-full border border-black px-2 py-1.5 text-sm"
                  placeholder="select state"
               />
               <span className="bg-white absolute -top-2 left-3 text-xs font-thin capitalize px-2">
                  state
               </span>
               <div className="absolute right-2 top-2.5">
                  <IoIosArrowDown />
               </div>
            </div>
            <div className="relative max-w-96 mx-4 lg:mx-0 grow my-2">
               <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="level"
                  className="w-full border border-black px-2 py-1.5 text-sm"
                  placeholder="select level"
               />
               <span className="bg-white absolute -top-2 left-3 text-xs font-thin capitalize px-2">
                  level
               </span>
               <div className="absolute right-2 top-2.5">
                  <IoIosArrowDown />
               </div>
            </div>
         </div>
         <div className="flex justify-evenly flex-wrap">
            <div className="relative max-w-96 mx-4 lg:mx-0 grow my-2">
               <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="gender"
                  className="w-full border border-black px-2 py-1.5 text-sm"
                  placeholder="select age"
               />
               <span className="bg-white absolute -top-2 left-3 text-xs font-thin capitalize px-2">
                  gender
               </span>
               <div className="absolute right-2 top-2.5">
                  <IoIosArrowDown />
               </div>
            </div>
            <div className="relative max-w-96 grow my-2">
               <button
                  onClick={handleSubmit}
                  className="bg-green-700 px-4 py-1 text-white capitalize w-44"
               >
                  search
               </button>
            </div>
            <div className="relative max-w-96 grow my-2"></div>
         </div>
      </>
   );
}
