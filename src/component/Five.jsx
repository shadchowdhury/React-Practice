function LoginStatus(status){
  if (status) {
    return <button>Log Out</button>
  } else {
    return <button>Log In</button>
  }
}

function Five() {
  
  return (
    <>
      <div>
        <h1>Auth Status:</h1>
        {LoginStatus(true)}
      </div> 
    </>
  )
}

export default Five