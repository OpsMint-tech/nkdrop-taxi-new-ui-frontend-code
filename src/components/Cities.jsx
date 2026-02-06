import { FiMapPin } from 'react-icons/fi';
import Reveal from './Reveal';

// All cities (can be any number)
const cities = [
  'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Kanchipuram', 'Kanyakumari',
  'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Salem',
  'Sivaganga', 'Thanjavur', 'Theni', 'Nilgiris', 'Ooty', 'Thiruvallur', 'Thiruvarur', 'Thoothukkudi', 'Trichy',
  'Tirunelveli', 'Tiruppur', 'Tiruvannamalai', 'Vellore', 'Viluppuram', 'Virudhunagar', 'Bangalore', 'Tirupati',
  'Pondicherry', 'Ranipet', 'Tenkasi', 'Tirupathur', 'Erode', 'Kallakurichi',
];

// Function to dynamically split cities into N columns
const splitIntoColumns = (items, columns) => {
  const perCol = Math.ceil(items.length / columns);
  return Array.from({ length: columns }, (_, i) =>
    items.slice(i * perCol, (i + 1) * perCol)
  );
};

export default function Cities() {
  const mobileColumns = splitIntoColumns(cities, 2); // For mobile
  const desktopColumns = splitIntoColumns(cities, 5); // For desktop

  return (
    <section className="w-full py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
            One Way Taxi Service in <span className="text-primary-600">Cities</span>
          </h2>
        </Reveal>

        {/* Responsive design: 2 columns on mobile, 5 on desktop */}
        <div className="grid grid-cols-2 md:hidden gap-6">
          {mobileColumns.map((col, index) => (
            <ul key={index} className="space-y-3">
              {col.map(city => (
                <li
                  key={city}
                  className="flex items-center gap-2 text-gray-800 hover:text-primary-600 transition"
                >
                  <FiMapPin className="text-primary-500" />
                  <span className="text-base font-medium">{city}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-5 gap-6">
          {desktopColumns.map((col, index) => (
            <ul key={index} className="space-y-3">
              {col.map(city => (
                <li
                  key={city}
                  className="flex items-center gap-2 text-gray-800 hover:text-primary-600 transition"
                >
                  <FiMapPin className="text-primary-500" />
                  <span className="text-base font-medium">{city}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
