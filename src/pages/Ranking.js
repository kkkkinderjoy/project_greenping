import React, { useState } from "react";
import dataList from "./../data/data";


function Detail() {
  const [data, setData] = useState(dataList);
  const [allData, setAllData] = useState();
  const [kind, setKind] = useState("전체");
  
  const FilterData =
    data &&
    data.filter((e) => {
      return kind === "전체" || kind === e.induty;
    });


  const FilterKind = [...new Set(allData && allData.map((e) => e.induty))];
  const [isActive, setIsActive] =useState(-1)

  return (
    <>
      <div className="w-full ">
        <div className="w-7xl mx-auto">
          <img
            className="mt-3 mx-auto"
            src="http://via.placeholder.com/1080x200"
            alt="1200x300"
          />
          <h3 className="ml-[120px] mt-9 text-[30px]">랭킹</h3>
          <ul className=" w-[400px] mt-3 flex justify-around mx-auto">
            {/* <li className={`${isActive === -1 && "bg-black"}`></li> */}
          </ul>

          <ul className="w-auto mx-auto pl-[60px] mt-10 ml-[40px]">
            {data &&
              FilterData.slice(0,10).map((e, i) => {
                return (
                  <>
                  
                    <li className="basis-[24%] mr-[5px] flex mb-4">
                      <p className="p-[19px] h-[50px] mr-[30px] text-center text-[25px] bg-green-100 rounded-sm">
                        {i + 1}
                      </p>
                      {e.firstImageUrl !== "" && 
                        <img
                          className="w-[250px] h-[160px] mr-3"
                          src={e.firstImageUrl}
                          alt="{e.firstImageUrl}"
                        />
                      }
                      <div className="w-[800px]">
                        <p className="text-[20px]">{e.facltNm}</p>
                        <p className="text-[15px]">{e.addr1}</p>
                        {e.featureNm !== "" &&  
                        <p className="text-[13px]">{e.featureNm}</p>
                         }
                        <p className="text-[15px]">{e.resveUrl}</p>
                      </div>
                    </li>
                  </>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Detail;
