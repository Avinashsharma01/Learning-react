import { useState } from "react";

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    let HandleClick = () => {
        const data1 = {
            name: name,
            email : email,
            password : password
        }
        console.log(data1);
    }


    return (
        <div className="w-96 h-96 bg-cyan-700 p-5">
            <div>
                <h1 className="text-emerald-400">Avinash Sharma</h1>
                <label htmlFor="">Name: </label>
                <input onChange={(e)=> setName(e.target.value)} className="w-full p-2 outline-none text-red-600  " type="text" placeholder="Enter Name"  />
                <label htmlFor="">Email: </label>
                <input onChange={(e)=>setEmail(e.target.value ) } className="w-full p-2 outline-none text-red-600  " type="email" placeholder="Enter Email"  />
                <label htmlFor="">Password: </label>
                <input onChange={(e)=> setPassword(e.target.value) } className="w-full p-2 outline-none text-red-600  " type="password" placeholder="Enter Password"  />
                <button onClick={()=> HandleClick()}  className="bg-yellow-600 p-2 relative left-36 top-10  ">Submit</button>
            </div>
        </div>
    );
};

export default Form;
