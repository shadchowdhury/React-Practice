

function Four() {
  let city = ['Dhaka', 'Barishal', 'Rangpur', 'Dinajpur'];

  return (
    <>
      <div>
        <select>
          {
            city.map((item, i)=>{
              return <option key={i.toString()}>{ item }</option>
            })
          }
        </select>
      </div> 
    </>
  )
}

export default Four