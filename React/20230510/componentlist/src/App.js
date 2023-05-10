import Blog from "./Components/Blog";
import MyList from "./Components/MyList";
import ProductList from "./Components/ProductList";
import Counter from "./Components/Counter";
import Name from "./Components/Name";


const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

function App() {
  return (
    // <Blog posts={posts} />
    // <MyList />
    // <ProductList />
    // <Counter />
    <Name />
  );
}
export default App;
