import './App.css';
import React, {useState} from 'react'
import ProductService from './services/Product';



const ProductAdd = ({setLisäystila, setIsPositive, setShowMessage, setMessage }) => {

  //komponentin tilan määritys

const [newProductId, setNewProductId] = useState('')
const [newProductName, setNewProductName] = useState('')
const [newSupplierId, setNewSupplierId] = useState('')
const [newCategoryId, setNewCategoryId] = useState('')
const [newQuantityPerUnit, setNewQuantityPerUnit] = useState('')
const [newUnitPrice, setNewUnitPrice] = useState('')
const [newUnitsInStock, setNewUnitsInStock] = useState('')
const [newUnitsOnOrder, setNewUnitsOnOrder] = useState('')
const [newReorderLevel, setNewReorderLevel] = useState('')
const [newDiscontinued, setNewDiscontinued] = useState('')

const handleSubmit = (event) => {
        event.preventDefault()
        var newProduct = {
        productId: newProductId.toUpperCase(),
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
        ProductService.create(newProduct)
        .then(response => {
            if (response.status === 200) {
                setMessage("Added new product: " + newProduct.productName)
                setIsPositive(true)
                setShowMessage(true)

                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)

                setLisäystila(false)
            }

            })
            .catch(error => {
                setMessage("Error")
                setIsPositive(false)
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 6000)

                setLisäystila(false)
            })         
            
            }
 
  return (
    <div id="addNew">
    <h2>Product add</h2>

    <form onSubmit={handleSubmit}>
        <div>
        <input type='text' value={newProductId} placeholder='ID with 5 capital letters'  maxLength="5" minLength="5" onChange={({target}) => setNewProductId(target.value)} required/>
        </div>

        <div>
        <input type='text' value={newProductName} placeholder='ProductName' onChange={({target}) => setNewProductName(target.value)} required />
        </div>

        <div>
        <input type='text' value={newSupplierId} placeholder='Supplier Id' onChange={({target}) => setNewSupplierId(target.value)} />
        </div>

        <div>
        <input type='text' value={newCategoryId} placeholder='Category Id'  onChange={({target}) => setNewCategoryId(target.value)} />
        </div>

        <div>
        <input type='text' value={newQuantityPerUnit} placeholder='Quantity PerUnit' onChange={({target}) => setNewQuantityPerUnit(target.value)} />
        </div>

        <div>
        <input type='text' value={newUnitPrice} placeholder='Unit Price' onChange={({target}) => setNewUnitPrice(target.value)} />
        </div>

        <div>
        <input type='text' value={newUnitsInStock} placeholder='Units In Stock' onChange={({target}) => setNewUnitsInStock(target.value)} />
        </div>

        <div>
        <input type='text' value={newUnitsOnOrder} placeholder='Units On Order' onChange={({target}) => setNewUnitsOnOrder(target.value)} />
        </div>

        <div>    
        <input type='text' value={newReorderLevel} placeholder='Reorder Level' onChange={({target}) => setNewReorderLevel(target.value)} />
        </div>

        <div>
        <input type='text' value={newDiscontinued} placeholder='Discontinued' onChange={({target}) => setNewDiscontinued(target.value)} />
        </div>

        <input type='submit' value='save'/>
        <input type='button' value='back' onClick={() => setLisäystila(false)} />
    </form>
  
   </div>
  )
}

export default ProductAdd;