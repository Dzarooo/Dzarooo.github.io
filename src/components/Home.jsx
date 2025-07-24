import { HomeArticle } from "./HomeArticle";

export const Home = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 mt-10">
            <HomeArticle image={"images/code1.png"} altText={"Placeholder"} rtl={false}/>
            <HomeArticle image={"images/code1.png"} altText={"Placeholder"} rtl={true}/>
        </div>
    );
}