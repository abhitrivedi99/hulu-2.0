import Image from 'next/Image';
import HeaderItem from './HeaderItem';
import { HomeIcon, LightningBoltIcon, CollectionIcon, SearchIcon, UserIcon, BadgeCheckIcon } from '@heroicons/react/outline';

function Header() {
	return (
		<header className="m-5 justify-between flex flex-col sm:flex-row items-center h-auto">
			<div className="flex flex-grow justify-evenly max-w-2xl">
				<HeaderItem title="HOME" Icon={HomeIcon} />
				<HeaderItem title="TRENDIGN" Icon={LightningBoltIcon} />
				<HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
				<HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
				<HeaderItem title="SEARCH" Icon={SearchIcon} />
				<HeaderItem title="ACCOUNT" Icon={UserIcon} />
			</div>
			<Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100} alt="Header" />
		</header>
	);
}

export default Header;
