import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import NextTopLoader from "nextjs-toploader";
import AuthProvider from "@/authprovider/authprovider";
import "./globals.css";


export const metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: {
    default: "Ecom - Your Online Shopping Destination",
    template: "%s | Ecom",
  },
  description:
    "Discover the best deals on electronics, household items, and more at Ecom.",
  keywords: ["ecommerce", "online shopping", "electronics", "household"],
  authors: [{ name: "Ecom" }],
  openGraph: {
    title: "Ecom - Online Shopping",
    description: "Your one-stop shop for all electronic and household needs.",
    url: "/",
    siteName: "Ecom",
    images: [
      {
        url: "#",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({ children }) {

    
  return (
    <AuthProvider>
      <html lang="en" className="scroll-smooth">
        <body>
          <NextTopLoader color="#ff0000" height={3} showSpinner={true} />
          <Navbar />
          <main className="min-h-screen">
            <div className=" mt-18 md:mt-[84px] lg:max-w-[1500px] mx-auto px-6 lg:px-8">
              {children}
            </div>
          </main>

          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
