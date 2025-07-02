import "./globals.css";
import "./index.css"
import 'lenis/dist/lenis.css'
import {ReactLenis} from "@/utils/lenis";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <ReactLenis root>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
      </ReactLenis>
    </html>
  );
}
