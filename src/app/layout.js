import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import PrivateLayout from "@/components/Layout/private";
import { Providers } from "./providers";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Hackathon Markas",
  description: "Hackathon Markas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={lexendDeca.className}>
        <Providers>
          <PrivateLayout>{children}</PrivateLayout>
        </Providers>
      </body>
    </html>
  );
}
