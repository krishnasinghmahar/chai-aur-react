import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#212121")

  return (
    <div className="h-screen w-full duration-200" style={{ backgroundColor: color }}>
      <div className='rounded-full fixed flex  flex-wrap justify-evenly bottom-12 px-2 py-2 inset-x-4 bg-slate-200 shadow-xl'>
        <button
          onClick={() => setColor('red')}
          className='outline-none py-2 px-3 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'red' }}
        >
          Red
        </button>
        <button
          onClick={() => setColor('green')}
          className='outline-none py-2 px-3 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'green' }}
        >
          Green
        </button>
        <button
          onClick={() => setColor('blue')}
          className='outline-none py-2 px-3 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'blue' }}
        >
          blue
        </button>
        <button
          onClick={() => setColor('yellow')}
          className='outline-none py-2 px-3 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'yellow' }}
        >
          yellow
        </button>
        <button
          onClick={() => setColor('violet')}
          className='outline-none py-2 px-3 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'violet' }}
        >
          violet
        </button>
        <button
          onClick={() => setColor('pink')}
          className='outline-none py-2 px-3 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'pink' }}
        >
          pink
        </button>
        <button
          onClick={() => setColor('white')}
          className='outline-none py-2 px-3 rounded-full text-black shadow-2xl' style={{ backgroundColor: 'white' }}
        >
          white
        </button>
        <button
          onClick={() => setColor('orange')}
          className='outline-none py-2 px-3 rounded-full text-white shadow-black' style={{ backgroundColor: 'orange' }}
        >
          orange
        </button>
        <button
          onClick={() => setColor('magenta')}
          className='outline-none py-2 px-3 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'magenta' }}
        >
          magenta
        </button>
        <button
          onClick={() => setColor('black')}
          className='outline-none py-2 px-3 rounded-full text-white shadow-2xl' style={{ backgroundColor: 'black' }}
        >
          black
        </button>
      </div>
    </div>
  )
}

export default App
