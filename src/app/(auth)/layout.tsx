import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (

			
			



			<div className="h-screen w-full hero-bg" >
				<header className="max-w-6xl mx-auto flex items-center justify-between p-4">
					<Link href={'/'}>
						<Image src="/media/netflix-logo.png" alt="logo" className="w-52" width={300} height={50}/>
					</Link>
				</header>
				{children}
			</div>






	
	);
}
