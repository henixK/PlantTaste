export default function FooterLayout({ children, className }) {
    return (
        <>
            <footer className={`w-full py-3 flex items-center justify-between px-10 shadow-2xl bg-white ${className}`}>
                {children}
            </footer>
        </>

    )
}