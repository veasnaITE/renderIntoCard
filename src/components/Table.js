import React from 'react'
function Table({products}) {
  return (
    <>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product)=>(
      <tr key={product.id}>
      <th scope="row">{product.id}</th>
      <td>
        <img src={product.image} alt='' style={{width:150}}/>
      </td>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
    </tr>
    )) 
    }
  </tbody>
</table>
    </>
  )
}

export default Table