export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 MetaDota. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
