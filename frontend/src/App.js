import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getAll, create, update, deleted } from './service'
import Blog from './components/Blog'
const App = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    getAll().then((data) => setBlogs(data))
  }, [])

  // const handleDelete = (id) => {
  //   const person = blogs.find((p) => p.id === id)
  //   deleted(id, person).then((deleted) => {
  //     setBlogs(blogs.filter((person) => person.id !== id))
  //   })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   create(null)
  //     .then((data) => {
  //       setBlogs([...blogs, data])
  //     })
  //     .catch((error) => null)
  // }
  console.log(blogs)
  return (
    <div className='container-fluid w-100 h-100 m-0 p-0 bg-white'>
      <div
        className='m-auto w-95 container rounded border'
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#eeeeee',
        }}
      >
        <nav
          class='navbar sticky-top navbar-expand-lg navbar-light'
          style={{ backgroundColor: '#e3f2fd' }}
        >
          <h1>Blog post</h1>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
        </nav>
        <Blog {...{ blogs }} />
      </div>
    </div>
  )
}

export default App
