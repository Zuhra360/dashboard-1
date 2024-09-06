import React from 'react'
import '@mantine/core/styles.css';
import { BiSolidCheckbox } from "react-icons/bi";
import { DonutChart } from '@mantine/charts';
import { data2 } from '../components/data2';
import { LineChart } from '@mantine/charts';
import { data } from './data';
import { MantineProvider } from '@mantine/core';
import '@mantine/charts/styles.css'
export const Linechart = () => {
  return (
    <div className='flex flex-row bg-zinc-50 mb-8 ml-56 w-11/12 '>
        <MantineProvider>
       <div className=' h-80 w-2/4  bg-white '>
       <h3 className='ml-8 text-2xl text-bold  mb-4'>Reports</h3>
       <LineChart
        h={250}
        w={600}
        data={data}
        series={[{ name: 'temperature', label: 'Avg. Temperature' }]}
        dataKey="date"
        type="gradient"
        gradientStops={[
          { offset: 0, color: 'red.6' },
          { offset: 20, color: 'orange.6' },
          { offset: 40, color: 'yellow.5' },
          { offset: 70, color: 'lime.5' },
          { offset: 80, color: 'cyan.5' },
          { offset: 100, color: 'blue.5' },
        ]}
        strokeWidth={5}
        curveType="natural"
        yAxisProps={{ domain: [-25, 40] }}
        valueFormatter={(value) => `${value}°C`}
      />
      
       </div>
       <div className='h-80 w-4/12 bg-white mx-8 pr-24 pl-24'>
       <h3 className='text-2xl py-4 items-start'>Analytics</h3>
       < DonutChart data={data2} className='items-center' chartLabel="80% Transactions" />
       <div className='flex flex-row '>
          <label className='flex flex-row mt-8 mr-4'>
          <BiSolidCheckbox className='text-blue-200' />Sale</label>
          <label className='flex flex-row mt-8 mr-4 '>
          <BiSolidCheckbox className='text-yellow-200'/>Distribute</label>
          <label className='flex flex-row mt-8  mr-4'>
          <BiSolidCheckbox className='text-red-200'/>Return</label>
       </div>

       </div>
       </MantineProvider>
    </div>
  )
}
