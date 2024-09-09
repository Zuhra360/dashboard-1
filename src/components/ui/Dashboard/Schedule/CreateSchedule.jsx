import React from 'react'
import { IconPlus } from '@tabler/icons-react'
function CreateSchedule() {
  return (
    <div className='flex-grow basis-1/4 w-full h-full bg-white rounded-md p-6 flex flex-col gap-5'>
        <button className='bg-indigo-500 p-4 flex items-center gap-2 justify-center rounded-md'>
            <IconPlus color='white' size={20}/>
            <p className='text-white'>Create Schedule</p>
        </button>
        <div className='basis-1/3 border-2 border-gray-100 rounded-md'>

        </div>
    </div>
  )
}

export default CreateSchedule