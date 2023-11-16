import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Custom404() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex justify-center items-center">
                <h1>404 Page</h1>
            </main>
            <Footer />
        </>
    )
}