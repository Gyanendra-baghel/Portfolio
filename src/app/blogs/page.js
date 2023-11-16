import BlogContainer from "@/components/blogContainer";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Resume() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-16">
                {/* <div className="">
                    <input type="text" placeholder="Search Blogs.." className="py-2 px-4 border rounded" />
                </div> */}
                <h1 className="text-4xl text-center font-bold m-6">Recent Articles</h1>
                <div className="flex flex-col items-center">
                    <BlogContainer title="How to generate random Number in C" desc="A comprehensive guide to generating random number in C using the rand() and srand() functions" />
                    <BlogContainer title="How to generate random Number in C" desc="A comprehensive guide to generating random number in C using the rand() and srand() functions" />
                    <BlogContainer title="How to generate random Number in C" desc="A comprehensive guide to generating random number in C using the rand() and srand() functions" />
                    <BlogContainer title="How to generate random Number in C" desc="A comprehensive guide to generating random number in C using the rand() and srand() functions" />
                    <BlogContainer title="How to generate random Number in C" desc="A comprehensive guide to generating random number in C using the rand() and srand() functions" />
                </div>
            </main>
            <Footer />
        </>
    )
}