import React, {useState} from 'react'
import Header from './components/Header'

function App() {

  const [boardModalOpen, setBoardModalOpen] = useState(false)


  return (
    <div>
      {/* Le Header Section */}
      <Header />

      {/* Le Center Section  */}

    </div>
  )
}

export default App