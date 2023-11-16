export default function BlogContainer({ title, desc, url }) {
    return (
        <div className="border p-4 max-w-xl rounded m-2">
            <h3 className="font-semibold text-xl">{title}</h3>
            <p>{desc}</p>
            <button className="border rounded mt-2"><a href={url} className="px-3 py-2">Read More</a></button>
        </div>
    )
}