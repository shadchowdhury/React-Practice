

function One() {
  return (
    <>
      <div>
        <button style={{ color:'red', backgroundColor:'black', padding:'10px 40px 10px 40px', borderRadius: '5px', border: 'none' }} onClick={()=>alert('Hello, Shad!')}>Submit</button>
        <h1>{new Date().getTime()}</h1>
      </div> 
    </>
  )
}

export default One