import React from 'react'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Login = () => {
    const {showUserLogin, setShowUserLogin, setUser} = useAppContext();
  
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
 
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        // Basic validation
        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }
        
        if (state === "register" && !name) {
            toast.error("Please enter your name");
            return;
        }
        
        // Dummy authentication - accepts any email/password for testing
        try {
            if (state === "login") {
                // For login, just use the provided email and a default name
                const userName = email.split('@')[0]; // Use part before @ as name
                setUser({
                    name: userName, 
                    email: email, 
                    password: password
                });
                toast.success(`Welcome back, ${userName}!`);
            } else {
                // For registration, use all provided fields
                setUser({
                    name: name, 
                    email: email, 
                    password: password
                });
                toast.success(`Account created successfully! Welcome, ${name}!`);
            }
            
            setShowUserLogin(false);
            
            // Reset form
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            toast.error("Login failed. Please try again.");
        }
    }

    return (
        <div onClick={() => setShowUserLogin(false)} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        
        <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                <span className="text-indigo-500">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
            </div>
            {state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-indigo-500 cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("register")} className="text-indigo-500 cursor-pointer">click here</span>
                </p>
            )}
            <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                {state === "register" ? "Create Account" : "Login"}
            </button>
        </form>
        </div>
    );
};

export default Login