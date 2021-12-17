import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItem from "./HeaderItem";

export default function Header() {
    return (
        <header className="flex flex-row justify-between">
            <div className="flex flex-row justify-around">
                <HeaderItem title='HOME' Icon={<HomeIcon width={50}  className="text-xs h-2 mb-1 group-hover:animate-bounce"/>} />
                <HeaderItem title='TRENDING' Icon={<LightningBoltIcon width={50} className="h-2 mb-1 group-hover:animate-bounce"/>} />
                <HeaderItem title='VERIFIED' Icon={<BadgeCheckIcon width={50} className="h-2 mb-1 group-hover:animate-bounce"/>} />
                <HeaderItem title='COLLECTIONS' Icon={<CollectionIcon width={50} className="h-2 mb-1 group-hover:animate-bounce"/>} />
                <HeaderItem title='SEARCH' Icon={<SearchIcon width={50} className="h-2 mb-1 group-hover:animate-bounce"/>} />
                <HeaderItem title='ACCOUNT' Icon={<UserIcon width={50} className="h-8 mb-1 group-hover:animate-bounce"/>} />
            </div>
            <Image 
            className="object-contained"
            src="https://links.papareact.com/ua6" 
            width={200} 
            height={100}  />
        </header>
    )
}
