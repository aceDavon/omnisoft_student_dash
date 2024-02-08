export function Spinner() {
  return (
     <div className="flex flex-1 justify-center items-center h-screen">
        <div className="lds-roller">
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
        </div>
     </div>
  );
}