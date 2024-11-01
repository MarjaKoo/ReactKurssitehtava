import './App.css';
import React, {useState} from 'react'
import ProductService from './services/Product';



const ProductEdit = ({setMuokkaustila, setIsPositive, setShowMessage, setMessage, muokattavaProduct }) => {

  //komponentin tilan määritys

  const [newProductId, setNewProductId] = useState(muokattavaProduct.productId)
  const [newProductName, setNewProductName] = useState(muokattavaProduct.productName)
  const [newSupplierId, setNewSupplierId] = useState(muokattavaProduct.supplierId)
  const [newCategoryId, setNewCategoryId] = useState(muokattavaProduct.categoryId)
  const [newQuantityPerUnit, setNewQuantityPerUnit] = useState(muokattavaProduct.quantityPerUnit)
  const [newUnitPrice, setNewUnitPrice] = useState(muokattavaProduct.unitPrice)
  const [newUnitsInStock, setNewUnitsInStock] = useState(muokattavaProduct.unitsInStock)
  const [newUnitsOnOrder, setNewUnitsOnOrder] = useState(muokattavaProduct.unitsOnOrder)
  const [newReorderLevel, setNewReorderLevel] = useState(muokattavaProduct.reorderLevel)
  const [newDiscontinued, setNewDiscontinued] = useState(muokattavaProduct.discontinued)

const handleSubmit = (event) => {
        event.preventDefault()
        var newProduct = {
        productId: newProductId,
        productName: newProductName,
        supplierId: newSupplierId,
        categoryId: newCategoryId,
        quantityPerUnit: newQuantityPerUnit,
        unitPrice: newUnitPrice,
        unitsInStock: newUnitsInStock,
        unitsOnOrder: newUnitsOnOrder,
        reorderLevel: newReorderLevel,
        discontinued: newDiscontinued
    }



        ProductService.update(newProduct)
        .then(response => {
            if (response.status === 200) {
                setMessage("Edited product: " + newProduct.productName)
                setIsPositive(true)
                setShowMessage(true)

                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)

                setMuokkaustila(false)
            }

            })
            .catch(error => {
                setMessage("Error")
                setIsPositive(false)
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 6000)

                setMuokkaustila(false)
            })         
            
            }
 
  return (
    <div id="edit">
    <h2>Product Edit</h2>

    <form onSubmit={handleSubmit}>
        <div>
        <input type='text' value={newProductId} disabled/>
        </div>

        <div>
            <label>Product name:</label>
            </div>
            <div>
        <input type='text' value={newProductName} placeholder='Product Name' onChange={({target}) => setNewProductName(target.value)} required />
        </div>

        <div>
        <label>SupplierId:</label>
        </div>
            <div>
        <input type='text' value={newSupplierId} placeholder='Supplier Id' onChange={({target}) => setNewSupplierId(target.value)} />
        </div>

        <div>
        <label>Category Id:</label>
        </div>
            <div>
        <input type='text' value={newCategoryId} placeholder='Category Id'  onChange={({target}) => setNewCategoryId(target.value)} />
        </div>

        <div>
        <label>QuantityPerUnit:</label>
        </div>
            <div>
        <input type='text' value={newQuantityPerUnit} placeholder='Quantity Per Unit' onChange={({target}) => setNewQuantityPerUnit(target.value)} />
        </div>

        <div>
        <label>Unit Price:</label>
        </div>
            <div>
        <input type='text' value={newUnitPrice} placeholder='Unit Price' onChange={({target}) => setNewUnitPrice(target.value)} />
        </div>

        <div>
        <label>Units In Stock:</label>
        </div>
            <div>
        <input type='text' value={newUnitsInStock} placeholder='Units In Stock' onChange={({target}) => setNewUnitsInStock(target.value)} />
        </div>

        <div>
        <label>Units On Order:</label>
        </div>
            <div>
        <input type='text' value={newUnitsOnOrder} placeholder='Units On Order' onChange={({target}) => setNewUnitsOnOrder(target.value)} />
        </div>

        <div>   
        <label>Reorder Level:</label>
        </div>
            <div>
        <input type='text' value={newReorderLevel} placeholder='Reorder Level' onChange={({target}) => setNewReorderLevel(target.value)} />
        </div>

        <div>
        <label>Discontinued:</label>
        </div>
            <div>
        <input type='text' value={newDiscontinued} placeholder='Discontinued' onChange={({target}) => setNewDiscontinued(target.value)} />
        </div>

        <input type='submit' value='save'/>
        <input type='button' value='back' onClick={() => setMuokkaustila(false)} />
    </form>
  
   </div>
  )
}

export default ProductEdit;