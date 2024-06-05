
import Btn from "./btn";
function Mainpage() {
    return (
        <>
            <div className="hero md:flex bg  bg-sky-700">
                <div className="left md:w-1/2 bg-slate-500 h-screen flex justify-center items-center w-full rounded-r-full border-2 border-red-700">
                    <div className="heading p-10 text-white flex flex-col items-center">
                        <h1 className="  md:text-5xl">
                            Hi, My name is
                            <span className="text-emerald-400">
                                {" "}
                                avinash Sharma
                            </span>{" "}
                            and i am fullStack Developer
                        </h1>
                        <p className="para mt-10">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Perferendis incidunt neque maiores, sed earum
                            itaque deserunt quos aliquid, sunt facilis amet
                            delectus? Doloremque aliquam quos accusantium fugiat
                            architecto amet? Labore, accusamus repellat
                            similique quos itaque quisquam ratione quo veniam
                            impedit blanditiis totam error cum quibusdam quidem
                            odit minima! Dolorum, aut.
                        </p>
                        <Btn />
                    </div>
                </div>
                <div className="right  md:w-1/2 h-screen bg-slate-600 flex justify-center items-center w-full rounded-l-full border-2 border-lime-600 ">
                    <div className="img">
                        <img
                            src=".\IMG-20231105-WA0008.jpg"
                            alt=""
                            className="md:w-96  w-60"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mainpage;
