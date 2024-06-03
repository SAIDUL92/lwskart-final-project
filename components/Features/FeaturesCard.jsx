export default function FeaturesCard({ children }) {

    return (
        <>
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                {children}

            </div>
        </>
    )
}