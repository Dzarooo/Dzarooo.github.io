export const HomeArticle = ({ image, altText, rtl }) => {
    return (
        <div className="flex items-center gap-5 bg-slate-50 p-5 rounded-xl [box-shadow:0_5px_10px_5px_rgba(0,0,0,0.1)] w-[70vw] h-full">
            {
            rtl &&
            <div className="h-full">
                <img className="h-full max-h-[300px] object-cover object-center rounded-lg" src={image} alt={altText} />
            </div>
            }
            <div className="flex-1 flex flex-col gap-3">
                <h1 className="text-2xl">Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis harum, odio quisquam esse, et tenetur ab deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis harum, odio quisquam esse, et tenetur ab deleniti    </p>
            </div>
            {
            !rtl &&
            <div className="h-full">
                <img className="h-full max-h-[300px] object-cover object-center rounded-lg" src={image} alt={altText} />
            </div>
            }
        </div>
    );
}