import './App.css';
import React, {useState} from 'react'
import ProductService from './services/Product'

// props on nimeltään product
const Product = ({product, editProduct, setIsPositive, setShowMessage, setMessage, reload, reloadNow}) => {

  //komponentin tilan määritys
const [näytäDetails, setNäytäDetails] = useState(false)

const deleteProduct = (product) => {
  let vastaus = window.confirm(`Remove Product ${product.productName}`)

  if (vastaus === true){

  ProductService.remove(product.productId)
    .then(res => {
      if (res.status === 200) {
        setMessage(`Succesfully removed product ${product.productName}`)
        setIsPositive(true)
        setShowMessage(true)

        window.scrollBy(0, -10000)  //scrollataan ylös jotta nähdään alert

        //ilmoituksen piilotus
        setTimeout(() => {
          setShowMessage(false)
      }, 5000)
      reloadNow(!reload)
      }
    }


    )
    .catch(error => {
      setMessage(error.message)
      setIsPositive(false)
      setShowMessage(true)
      window.scrollBy(0, -10000) 

      setTimeout(() => {
          setShowMessage(false)
      }, 6000)
  }
    )
   
}
    //jos poisto halutaankin perua
    else{
      setMessage('Poisto peruttu onnistuneesti')
      setIsPositive(true)
      setShowMessage(true)

      //ilmoituksen piilotus
      setTimeout(() => {
        setShowMessage(false)
    }, 5000)}
}


  return (
    <div className='productDiv'>

    <h4 onClick={() => setNäytäDetails(!näytäDetails)}>
    {product.productName} </h4>


    {näytäDetails && <div className="productDetails">

            <h3>Product name: {product.productName}</h3>

            <button onClick={() => deleteProduct(product)}>Delete</button> 
            <button onClick={() => editProduct(product)}>Edit</button>
            <table>
                <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>ProductName</th>
                        <th>SupplierId</th>
                        <th>CategoryId</th>
                        <th>QuantityPerUnit</th>
                        <th>UnitPrice</th>
                        <th>UnitsInStock</th>
                        <th>UnitsOnOrder</th>
                        <th>ReorderLevel</th>
                        <th>Discontinued</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.productId}</td>
                        <td>{product.productName}</td>
                        <td>{product.SupplierId}</td>
                        <td>{product.CategoryId}</td>
                        <td>{product.QuantityPerUnit}</td>
                        <td>{product.UnitPrice}</td>
                        <td>{product.UnitsInStock}</td>
                        <th>{product.UnitsOnOrder}</th>
                        <th>{product.ReorderLevel}</th>
                        <th>{product.Discontinued}</th>
                        
                        
                    </tr>
                </tbody>
            </table></div>}

    
   </div>
  )
}

export default Product;