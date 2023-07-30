import React from 'react'
import {motion} from 'framer-motion'

const Progress = ({value}) => {
  return (
    <div className='w-full h-2 rounded-lg bg-gray-400 overflow-hidden shadow-sm'>
        <motion.div className="h-2 bg-indigo-600 w-0" animate={{width: `${value}%`}} transition={{duration: 2}}/>
    </div>
  )
}

export default Progress