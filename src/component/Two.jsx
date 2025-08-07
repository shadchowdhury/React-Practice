

function Two() {
  let Marks = 90;
  return (
    <>
      <div>
        {
          Marks>80 ? <h1>Brilliant Result </h1> : <h1>Avarage Result</h1>
        }
      </div> 
    </>
  )
}

export default Two