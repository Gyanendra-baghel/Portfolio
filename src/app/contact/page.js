import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Contact() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex items-center justify-center flex-col pt-15">
                <h1 className="m-4 text-5xl font-bold text-center mb-6">Contact</h1>
                <p className="text-center mb-4">Feel free to reach out to me for any questions or opportunitines</p>
                <div className="p-6 rounded shadow-md max-w-md w-full border">
                    <h2 className="text-2xl font-bold">Email Me</h2>
                    <form className="flex flex-col">
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Name</label>
                            <input type="text" className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <input type="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Message</label>
                            <textarea className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Enter Message..."></textarea>
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded ">Send Message</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}