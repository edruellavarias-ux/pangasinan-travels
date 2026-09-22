import "./globals.css";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

export const metadata = {
  title: "Pangasinan Travels",
  description:
    "Explore the places, stories, and experiences of Pangasinan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}