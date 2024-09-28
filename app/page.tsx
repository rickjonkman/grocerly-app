import Header from "@/app/components/Header";
import SearchContainer from "@/app/components/SearchContainer";
import FeaturesGrid from "@/app/components/FeaturesGrid";

export default function Home() {
    return (
        <>
            <Header/>
            <main className="w-full flex flex-col justify-between items-center">
                <SearchContainer/>
                <FeaturesGrid/>
            </main>
        </>
    );
}
