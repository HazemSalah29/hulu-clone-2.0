
export default function HeaderItem({Icon, title}) {
    return (
        <div className="flex items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
            {Icon}
            <p className="opacity-100 group-hover:opacity-100 tracking-widest">
                {title}
            </p>
        </div>
    );
}
