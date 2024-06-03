import Filter from "../filter";
export default function SideBar({ lang }) {
    return (
        <>
            <div className="divide-y divide-gray-200 space-y-5">
                <Filter lang={lang} />
            </div>
        </>
    )
}