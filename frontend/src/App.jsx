import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <button className='btn btn-neutral'  onClick={() => toast.success('Successfully toasted')}>Create Toast</button>
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/create" element= {<CreatePage />} />
        <Route path="/note/:id" element= {<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App