import React, { useState } from 'react';

function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formdata,setformdata]=useState({
    username:"",
    password:"",
    email:""
    
  })
  const changeHandler=(e)=>{
    setformdata({
      ...formdata,[e.target.name]:e.target.value
    })
  }
 const handleLogin = async () => {
  console.log("Login Function", formdata);
  let responseData;

  try {
    const res = await fetch("https://stylemart-ecom-backend.onrender.com/api/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    });

   

    responseData = await res.json();

    if (responseData && responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    } else {
      console.error('Login failed: ', responseData);
      alert(responseData.error)
    }
  } catch (error) {
    console.error('Error in login:', error);
  }
};

const handleSignUp = async () => {
  console.log("Sign Up Function", formdata);
  let responseData;

  try {
    const res = await fetch("https://stylemart-ecom-backend.onrender.com/api/signUp", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',  // Corrected Accept header
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    });

   

    responseData = await res.json();

    if (responseData && responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
     alert("User Created SuccessFully")
      window.location.replace('/login');

    } else {
      console.error('Sign Up failed: ', responseData);
      alert(responseData.error)
    }
  } catch (error) {
    console.error('Error in sign-up:', error);
  }
};

  return (
    <div className='py-[15rem] md:py-[6rem]'>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                {state}
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                {state === "Sign Up" ? (
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Name
                    </label>
                    <input type="text" name="username" value={formdata.username} onChange={changeHandler} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
                  </div>
                ) : null}
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Email
                  </label>
                  <input type="email" name="email" id="email" value={formdata.email} onChange={changeHandler} placeholder="Enter your email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input type="password" name="password" value={formdata.password} onChange={changeHandler}  id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                      I accept the <a className="font-medium text-blue-700 " href="#">Terms and Conditions</a>
                    </label>
                  </div>
                </div>
                
                {state === "Sign Up" ? (
                  <button onClick={handleSignUp} type="button" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-700">
                    Create an account
                  </button>
                ) : (
                  <button onClick={handleLogin} type="button" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-700">
                    LOGIN
                  </button>
                )}

                {state === "Sign Up" ? (
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="#" onClick={() => setState("Login")} className="font-medium text-blue-700">Login here</a>
                  </p>
                ) : (
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Create New account? <a href="#" onClick={() => setState("Sign Up")} className="font-medium text-blue-700">Sign Up</a>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginSignup;
