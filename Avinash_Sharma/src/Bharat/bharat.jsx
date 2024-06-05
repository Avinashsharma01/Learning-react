function Bharat() {
    let date = new Date();
    let todayDate = date.toLocaleDateString();
    let todayTime = date.toLocaleTimeString();
    console.log(date.toLocaleTimeString());
    console.log(date.toLocaleDateString());

    let name = [
        "Avinash",
        "Amresh",
        "Brijesh",
        "Rahul",
        "Ajay",
        "Ashutosh",
        "Shubham",
        'Avinash',
        'Hello'
    ];
    // if(name.length===0){
    //     return <h4>items is not there</h4>
    // }

    return (
        <>
            <div className="bharat p-10  w-full h-screen bg-gray-900  flex justify-center items-center text-white flex-col">
                <div className="container md:w-2/4 h-60 bg-cyan-600 ">
                    <div className="heading w-full mb-10">
                        <h1 className="bg-blue-500 text-5xl text-center p-2">
                            Bharat Clock.
                        </h1>
                    </div>
                    <div className="clockText mb-10">
                        <h1 className="text-3xl text-center">
                            This is the clock that show the time of india
                        </h1>
                    </div>
                    <div className="time"></div>
                    <h1 className="text-center text-2xl">
                        This is the current time:- {todayDate} -- {todayTime}
                    </h1>
                </div>

            {/* this is conditional rndring  */}
            {name.length===0 ? <h1>hello</h1>:null}

                <div className="list mt-10">
                    <h1>Student Name</h1>
                    <ul>
                        {name.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>



            </div>
        </>
    );
}

export default Bharat;
