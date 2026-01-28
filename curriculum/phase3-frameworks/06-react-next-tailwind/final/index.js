// <!-- HANDS ON CHALLENGE -->

//1. Add New Contact Page
export default function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
        </div>
    )
} 

//=================================================================================

//2. Update the Navbar to include contact page

// Make a section for CTA (Call to action)

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-blue-400 transition-colors">
                            About
                        </Link>
                        <Link href="/profile" className="hover:text-blue-400 transition-colors">
                            Profile
                        </Link>
                        <Link href="/contact" className="hover:text-blue-400 transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
} 

//=================================================================================

// 3. Make a section for CTA (Call to action)

import Button from "../button.js";

export default function CTA() {
    return (
        <section>
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Call to Action
                </h2>
                <div className="flex justify-center">
                    <Button text="Contact Us" />
                </div>
            </div>
        </section>
    )
} 

//=================================================================================
// 4. Add a footer and update the layout -->
 
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
} 