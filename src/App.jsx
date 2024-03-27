
import './App.css'
import Cart from './components/Cart'
import Products from './components/Products'

function App() {
 


  return (
    <>
      <div class="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      <Products name="HP Laptop" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" imgSrc="https://images.unsplash.com/photo-1618410320928-25228d811631?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Products name="Nike Airmax v2
" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" imgSrc="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
      <Products name="Iphone 15 pro max" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" imgSrc="https://images.unsplash.com/photo-1695048064926-4da0dd8259d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Products name="Macbook Pro" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" imgSrc="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      
      </div>
  
      <div>
        <Cart/>
      </div>
    </>
  )
}

export default App
