const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 text-center font-montserrat">
      <p className="text-sm">
        © {new Date().getFullYear()} ACFR • Todos os direitos reservados
      </p>
      <div className="flex-shrink-0">
          <img src="/logo1.png" alt="Logo ACFR" className="h-20 w-auto" />
      </div>
    </footer>
  );
};

export default Footer;
