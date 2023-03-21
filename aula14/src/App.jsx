import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);


  async function getProducts() {
    setLoad(true);
    try{
      const response = await fetch(`https://dummyjson.com/products`);
      const data = await response.json();
      setProducts(data.products);
      console.log(data);
    } catch(e) {
      alert("Erro ao buscar produtos");
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return(
    <div>
      <h1>Produtos</h1>
      {load === true ? "Carregando..." : null}

      {load === false && products.length < 1 ? "Nenhum produto encontrado" : null}
      
      <ul>
        {products.map((product)=> (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.thumbnail} width={100} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
