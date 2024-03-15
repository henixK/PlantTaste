

export default function NavLayout({ children, className }) {
    return (
        <>
            <header className={`bg-white w-full lg:flex lg:justify-between items-center fixed top-0 z-[999] shadow-lg ${className}`}>
                {children}
            </header>
        </>
    )
}