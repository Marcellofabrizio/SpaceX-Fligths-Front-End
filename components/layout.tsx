import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header className="flex items-center justify-center py-4 gap-2">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Space X
                </h1>
            </header>
            {children}
            <footer className="py-5 flex justify-center items-center text-gray-400">
                Challenge Coodesh &copy;
            </footer>
        </>
    );
}
