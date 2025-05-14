import "../styles/globals.css";
// import { Poppins, Roboto } from "next/font/google";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ['400', '500']
// })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
