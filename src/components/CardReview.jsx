export default function CardReview({ img, title, description }) {
    return (
        <div className="grid grid-cols-1 place-content-evenly rounded-xl overflow-hidden border bg-white shadow-lg">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="">
                <h1 className="text-center text-xl mt-4 px-2 lg:px-0">
                    {title}
                </h1>
                <p className="p-4 text-justify">
                    {description}
                </p>
            </div>
        </div>
    )
}