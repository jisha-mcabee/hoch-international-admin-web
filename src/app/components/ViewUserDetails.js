import React from "react";

function ViewUserDetails({viewpopup}) {
  return (
    <div className="h-full w-full backdrop-blur-[2px] absolute left-0 top-0 flex justify-center items-center">
      <div className=" w-[500px] py-4  px-5 bg-white shadow-2xl  rounded-2xl p-2 relative backdrop-blur-xl">
        <div
          onClick={viewpopup}
          className="text-4xl rotate-45 absolute right-2 top-0 cursor-pointer"
        >
          +
        </div>

        <div>


           

        <p className="py-5 font-semibold text-xl"> Sebastian Andrews</p>
        <p className="py-5"> 7575778575</p>
        <p className="py-5"> fgdg@gmail.com</p>
        <p className="py-5"> Job Abroad</p>

        <p className="border-gray-300 border-t-[2px] py-1"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat culpa facere illum architecto alias, reiciendis harum obcaecati consequatur minus rerum vero perferendis. Rerum tempora veritatis unde corporis debitis, cum ipsam?</p>



        </div>




      </div>
    </div>
  );
}

export default ViewUserDetails;
