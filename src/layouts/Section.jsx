export default function Section({ className, children }) {
    return (
        <section className={`flex justify-center items-center ${className}`}>
            {children}
        </section>
    )
}
