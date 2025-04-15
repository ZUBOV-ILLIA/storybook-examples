const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {year} Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 