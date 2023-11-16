import Image from "next/image"

export default function CourseBlock({ poster, title, desc, href }) {
    return (
        <div className="border p-2 m-2 max-w-sm">
            <div>
                <Image src={poster} width={640} height={360} className="rounded-sm" />
            </div>
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm/4">{desc}</p>
                <button className="watch-btn"><a href={href}>Go!</a></button>
            </div>
        </div>
    )
}