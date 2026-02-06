import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSuitcase, FaCarSide, FaSnowflake } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';

export default function VehicleCard({
  image = '/images/car.png',
  name = 'SWIFT, ZEST, XCENT _ Equivalent',
  oneWayPrice = 14,
  roundTripPrice = 13,
  type = 'SEDAN',
  seat = '4+1',
  ac = true,
}) {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="max-w-sm w-full bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="relative w-full h-52 bg-gradient-to-tr from-gray-50 to-white overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain scale-105 hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6 text-center flex-1 flex flex-col justify-between bg-gray-50">
        <div>
          <h3 className="text-lg font-extrabold text-gray-900 mb-3 leading-tight tracking-wide uppercase">
            {name}
          </h3>

          <div className="space-y-1">
            <p className="text-sm text-primary-600 font-medium">
              One Way Tariff -{' '}
              <span className="text-gray-800 font-semibold">{oneWayPrice} Rs/KM</span>
            </p>
            <p className="text-sm text-primary-700 font-medium">
              Round Trip Tariff -{' '}
              <span className="text-gray-800 font-semibold">{roundTripPrice} Rs/KM</span>
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-6 text-gray-700 text-sm font-medium mt-4">
             <div className="flex items-center gap-2">
              <FaCarSide className="text-primary-600" /> {type}
            </div>
            <div className="flex items-center gap-2">
              <MdAirlineSeatReclineNormal className="text-primary-600" /> {seat}
            </div>
            {ac && (
              <div className="flex items-center gap-2">
                <FaSnowflake className="text-primary-600" /> AC
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center mt-6 gap-4">
          <button onClick={handleBookNow} className="w-full bg-secondary-900 hover:bg-black text-white py-2.5 rounded-xl text-sm font-semibold shadow transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}