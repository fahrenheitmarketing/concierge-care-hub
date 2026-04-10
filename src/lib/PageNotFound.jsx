import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PageNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-7xl text-muted-foreground/30 mb-4">404</h1>
        <h2 className="font-heading text-2xl text-foreground mb-3">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}