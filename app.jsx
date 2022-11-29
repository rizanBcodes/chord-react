import React from 'react'

const Blip = (fretPos) => {
  if (fretPos == 0) {
    return (
      <div className='text-black flex justify-center text-lg rounded-full items-center text-center w-12 h-12 translate-x-1/2 border-2 border-red-400'>{fretPos}</div>
    )
  } else {
    return (
      <div className='flex justify-center text-white text-lg rounded-full items-center text-center w-12 h-12 translate-x-1/2 bg-red-400'>{fretPos}</div>
    )
  }
}

const position = [0, 5, 3, 2, 1, 0];

const App = () => {
  return (
    <>
      <div className='flex flex-wrap flex-row'>
        {
          position.map(
            (e) => {
              return (
                <div className='w-12 flex flex-col bg-amber-100 '>
                  <div className='w-12 h-16 bg-yellow text-center'>{e == 0 ? (Blip(e)) : null}</div>
                  <div className='w-12 h-4 bg-gray-500 border-black'></div>

                  <div className='flex flex-wrap flex-col justify-center w-12 h-16 bg-yellow border-2 border-gray-500'>{e == 1 ? (Blip(e)) : null}</div>
                  <div className='flex flex-wrap flex-col justify-center w-12 h-16 bg-yellow border-2 border-gray-500'>{e == 2 ? (Blip(e)) : null}</div>
                  <div className='flex flex-wrap flex-col justify-center w-12 h-16 bg-yellow border-2 border-gray-500'>{e == 3 ? (Blip(e)) : null}</div>
                  <div className='flex flex-wrap flex-col justify-center w-12 h-16 bg-yellow border-2 border-gray-500'>{e == 4 ? (Blip(e)) : null}</div>
                  <div className='flex flex-wrap flex-col justify-center w-12 h-16 bg-yellow border-2 border-gray-500'>{e == 5 ? (Blip(e)) : null}</div>
                </div>
              )

            }
          )
        }
      </div>
    </>
  )
}

export default App
