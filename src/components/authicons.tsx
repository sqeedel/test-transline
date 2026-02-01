import { MapPin, Truck } from 'lucide-react';

export default function AuthIcons() {
  return (
    <div className="fixed">
      <div className="fixed bottom-9 right-8 z-50">
        <MapPin className="w-14 h-14 text-blue-400" />
      </div>
      <div className="fixed bottom-8 left-8 z-50 text-white">
        <div className="mb-4">
          <Truck className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
}
