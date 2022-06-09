
function App() {

  return (
    <BrowserRouter>
    <nav className='navbar'>
      <Link to="/">Purveyor</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/knowledge">Knowledges</Link>
      <Link to="/portafolium">Portafolium</Link>
      {state.logged&&<Link to="/blog/form">Blog form</Link>}
      {state.logged?<button>Log out</button>:<button>Log in</button>}
    </nav>
    {state.logged?
      <Routes>
        <Route path="/" element={<AboutMe />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/knowledge" element={<Knowledges />}/>
        <Route path="/portafolium" element={<Portafolium />}/>
        <Route path="/blog/form" element={<BlogForm />}/>
      </Routes>:
      <Routes>
        <Route path="/" element={<AboutMe />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/knowledge" element={<Knowledges />}/>
        <Route path="/portafolium" element={<Portafolium />}/>
      </Routes>}      
    <footer className='footer'>This is my footer</footer>
  </BrowserRouter>

  )
}

export default App
