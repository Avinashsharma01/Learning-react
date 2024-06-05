function SingleItem() {
    return (
        <>
            <div className="item  border-2 px-5 pt-2 border-slate-400  flex justify-between  items-center">
                <div className="name">
                    <h3 className="underline">Avinash</h3>
                </div>
                <div className="btn">
                    <button className=" bg-cyan-950 px-5 py-1 text-white rounded-lg ">
                        Buy now
                    </button>
                </div>
            </div>
        </>
    );
}

export default SingleItem