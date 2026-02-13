import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} R.Vimal Raj. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
          </p>
        </div>
      </div>
    </footer>
  );
};
