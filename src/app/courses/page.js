import Header from "@/components/header"
import Footer from "@/components/footer"
import CourseBlock from "@/components/course-block"

export default function About() {
    return (
        <>
            <Header />
            <main className="mx-auto min-h-screen pt-16">
                <h1 className="text-5xl font-bold text-center m-3">Premium Courses</h1>
                <p className="text-center">These are the courses which are premium but I am providing it -free</p>
                <hr className="my-10" />
                <div className="flex flex-row flex-wrap justify-center mx-auto w-fit">
                    <CourseBlock poster="/images/c-thumbnail.png" title="C Course" desc="Let's dive in the amazing world of JavaScript" href="#" />
                    <CourseBlock poster="/images/cpp-thumbnail.png" title="C++ Course" desc="Let's dive in the amazing world of JavaScript" href="#" />
                    <CourseBlock poster="/images/java-thumbnail.png" title="Java Course" desc="Let's dive in the amazing world of JavaScript" href="#" />
                    <CourseBlock poster="/images/html-thumbnail.png" title="HTML Course" desc="Let's dive in the amazing world of JavaScript" href="#" />
                    <CourseBlock poster="/images/css-thumbnail.png" title="CSS Course" desc="Let's dive in the amazing world of JavaScript" href="#" />
                    <CourseBlock poster="/images/javascript-thumbnail.png" title="JavaScript Course" desc="Let's dive in the amazing world of JavaScript" href="#" />
                    <CourseBlock poster="/images/php-thumbnail.png" title="PHP Course" desc="Let's dive in the amazing world of JavaScript" href="#" />
                    <CourseBlock poster="/images/javascript-thumbnail.png" title="ExpressJs Course" desc="Let's dive in the amazing world of JavaScript" href="#" />
                </div>
            </main>
            <Footer />
        </>
    )
}