import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative z-10 pt-16 md:pt-20 lg:pt-24">
      <div className="bg-primary/10 py-8">
        <div className="container">
          <p className="text-center text-base text-body-color dark:text-white">
            &copy; {new Date().getFullYear()} invoiceautomatic.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
