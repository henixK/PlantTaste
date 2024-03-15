
// TODO : sistemare le card

export default function Card({ img, title, description }) {
    return (
        <div className="lg:w-full lg:h-[600px] rounded-2xl overflow-hidden lg:my-2 border content-grid bg-white">
            <div className="w-full lg:h-[350px] object-contain rounded-t-lg overflow-hidden ">
                <img className="object-contain md:object-scale-down" src={img} alt="" />
            </div>
            <div className="p-4 content-grid">
                <h2 className="text-2xl mb-auto">{title}</h2>
                <p className=" text-base text-justify m-auto">{description}</p>
            </div>
        </div>
    )
}