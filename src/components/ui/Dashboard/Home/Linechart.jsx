import { BiSolidCheckbox } from "react-icons/bi";
import { DonutChart } from "@mantine/charts";
import { IconDots } from "@tabler/icons-react";
import { data2 } from "./Data";
import { LineChart } from "@mantine/charts";
import { data } from "./Data";

export const Linechart = () => {
  return (
    <div className="flex flex-row w-[100%] gap-5">
      <div className="basis-8/12 rounded-lg  bg-white flex flex-col gap-8  w-full h-full">
        <div className="flex-1  pt-5  pr-5  pl-5 flex justify-between">
            <h3 className=" text-lg text-gray-500 font-bold">Reports</h3>
            <IconDots className='pt-2'/>
        </div>  
        <div className="flex-grow pl-5 pb-5">  
            <LineChart
              h={250}
              w={"99%"}
              data={data}
              series={[{ name: "temperature", label: "Avg. Temperature" }]}
              dataKey="date"
              type="gradient"
              gradientStops={[
                { offset: 30, color: "violet.6" },
                { offset: 10, color: "pink.6" },
                { offset: 80, color: "indigo.5" },
                { offset: 10, color: "lavendar.5" },
                { offset: 80, color: "cyan.5" },
                { offset: 50, color: "blue.5" },
              ]}
              strokeWidth={5}
              curveType="natural"
              yAxisProps={{ domain: [-25, 40] }} valueFormatter={(value) => `${value}°C`}/>
        </div>
      </div>

      <div className="  w-full h-full rounded-lg  bg-white p-5 flex flex-col basis-4/12 ">
          <div className="flex-1 flex justify-between" >
            <h3 className=" text-lg text-gray-500 font-bold">Analytics</h3>
            <IconDots className='pt-2'/>
          </div>
          <div className="flex-grow items-center flex flex-col gap-10  justify-center"> 
                <DonutChart data={data2} className="" chartLabel="80% Transactions"></DonutChart>
                <div className="flex lg:flex-row gap-5 sm:flex-col">
                    <div className="flex flex-row lg:items-center sm:items-start lg:justify-center gap-1 sm:justify-start">
                        <BiSolidCheckbox className="text-blue-500 size-6" />
                        <label className="text-gray-600">Sale</label>
                    </div>
                    <div className="flex flex-row lg:items-center sm:items-start lg:justify-center gap-1 sm:justify-start">
                        <BiSolidCheckbox className="text-yellow-200 size-6" />
                        <label  className="text-gray-600">Distribute</label>
                    </div>
                    <div className="flex flex-row lg:items-center sm:items-start lg:justify-center gap-1 sm:justify-start">
                       <BiSolidCheckbox className="text-red-200 size-6" />
                       <label  className="text-gray-600">Return</label>
                    </div>   
                </div>
          </div> 
       
          
        
      </div>
    </div>
  );
};
