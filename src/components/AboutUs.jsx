export const AboutUs = () => {
    return (
        <div className="w-full h-full flex flex-col items-center mt-12">

            <div className="w-[70vw] bg-slate-50 flex flex-col items-center gap-3 rounded-xl [box-shadow:0_5px_10px_5px_rgba(0,0,0,0.1)] p-5">
                <h1 className="text-2xl">About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis harum, odio quisquam esse, et tenetur ab deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis harum, odio quisquam esse, et tenetur ab deleniti.</p>
            </div>

            <div className="w-[70vw] flex gap-5 mt-5">
                <div className="flex-1/3 bg-slate-50 rounded-xl p-5">
                    <p>lorem ipsum</p>
                </div>
                <div className="flex-2/3 bg-slate-50 rounded-xl p-5">
                    <p>lorem ipsum 2</p>
                </div>
            </div>
            <div className="w-[70vw] flex gap-5 mt-5 bg-slate-50 rounded-xl flex-col items-center p-5">
                <h1 className="text-xl">Leave us a review!</h1>
                <input className="[appearance:none] border border-gray-300 rounded-md p-2 w-full" placeholder="Write your review here..."></input>
                <button className="cursor-pointer bg-blue-500 text-white rounded-md p-2 mt-2">Submit</button>
            </div>
        </div>
    )
}