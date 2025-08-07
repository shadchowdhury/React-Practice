

function Three() {
  let Marks = 90;
  return (
    <>
      <div>
        {
          (
            () => {
              if(Marks>=80){
                return <h1>Briliant Result</h1>
              }else{
                return <h1>Avarage Result</h1>
              }
            }
          )()
        }
      </div> 
    </>
  )
}

export default Three