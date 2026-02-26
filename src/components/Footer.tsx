import logo from "@/assets/logo.svg";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
      <img src={logo} alt="LinaGlow" className="h-10 opacity-70" />
      <p className="font-body text-xs text-muted-foreground text-center">
        © 2026 AQ Naturals. All rights reserved. Where Elegance Begins.
      </p>
    </div>
  </footer>
);

export default Footer;
