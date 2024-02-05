import Footer from "@/components/shared/Footer";
import Hearder from "@/components/shared/Hearder";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="flex h-screen flex-col">
    <Hearder />
    <main className="flex-1">
        {children}
    </main>
    <Footer />
   </div>
  );
}
