import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <div className="max-w-md">
            <h3 className="font-headline text-lg font-semibold">Gender Lens</h3>
            <p className="text-sm text-muted-foreground">
              A final project for ECE 439 (Child and Media), Faculty of Education, Summer 2025.
              Findings are based on a content analysis of 30 "Like Nastya" YouTube videos.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a href="mailto:unal.hasanli@gmail.com" className="hover:text-primary transition-colors">
              unal.hasanli@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>Group: Normstormers (Adil Han, Fuat Gökçe, Helen Karatekin, Ünal Hasanlı)</p>
          <p>&copy; {new Date().getFullYear()} Gender Lens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
