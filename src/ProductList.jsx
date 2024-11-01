import './App.css';
import React, {useState, useEffect} from 'react'
import ProductService from './services/Product';
import Product from './Product';
import ProductAdd from './ProdcutAdd';
import ProductEdit from './ProductEdit';


const ProductList = ({setIsPositive, setShowMessage, setMessage}) => {

  //komponentin tilan määritys
const [products, setProducts] = useState([])
const [näytäProducts, setNäytäProducts] = useState(false)
const [lisäystila, setLisäysTila] = useState(false)
const [muokkaustila, setMuokkausTila] = useState(false)
const [reload, reloadNow] = useState(false)
const [muokattavaProduct, setMuokattavaProduct] = useState(false)
const [search, setSearch] = useState("")


useEffect( () => {

  const token = localStorage.getItem('token')
  ProductService
      .setToken(token)
      
 ProductService.getAll()
 .then(data => {
    setProducts(data)
 })
},[lisäystila, reload, muokkaustila]
)   

//hakukentän onChange tapahtumankäsittelijä
const handleSearchInputChange = (event) => {
  setNäytäProducts(true)
  setSearch(event.target.value.toLowerCase())
}

const editProduct = (product) => {
setMuokattavaProduct(product)
setMuokkausTila(true)
}

  return (
    <>
    
    <h1><nobr style={{ cursor: 'pointer' }}
            onClick={() => setNäytäProducts(!näytäProducts)}>Products</nobr>

            
            {!lisäystila && <button className='nappi' onClick={() => setLisäysTila(true)}>Add new</button>}</h1>

            <div>
            {!lisäystila && !muokkaustila &&
            <input placeholder='Search by product name' value={search} onChange={handleSearchInputChange} />
            }
           </div>

            {lisäystila && <ProductAdd setLisäystila={setLisäysTila}
            setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
            />}

            {muokkaustila && <ProductEdit setMuokkaustila={setMuokkausTila}
            setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
            muokattavaProduct={muokattavaProduct}
            />}
            
            {
            !lisäystila && !muokkaustila && näytäProducts && products && products.map( p => 
              {
                const lowerCaseName = p.productName.toLowerCase()
                if (lowerCaseName.indexOf(search) > -1) {
              return(
            <Customer key={p.productId} product={p} reloadNow={reloadNow} reload={reload}
            setIsPositive={setIsPositive} setShowMessage={setShowMessage} setMessage={setMessage}
            editProduct={editProduct}
            />
            
           )
          }
        }
          )
           }   
   </>
  )
          }
          

export default ProductList