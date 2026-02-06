import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import AutocompleteComponent from "./AutocompleteSecond";
import { LoadScript } from "@react-google-maps/api";
import { toast as toastify } from "react-toastify/unstyled";

const libraries = ["places"];

const Form = ({ activeTab: propActiveTab, setActiveTab: propSetActiveTab, toast: propToast }) => {
  // Use local state if props are not provided (e.g., when called from Home.jsx without props)
  const [localActiveTab, setLocalActiveTab] = useState("oneWay");
  const activeTab = propActiveTab || localActiveTab;
  const setActiveTab = propSetActiveTab || setLocalActiveTab;
  const toast = propToast || toastify;

  const initialState = {
    vehicleType: "",
    fullName: "",
    email: "",
    mobileNumber: "",
    pickupLocation: "",
    dropLocation: "",
    date: "",
    time: "",
    returnDate: "",
    pickupTime: "",
    distance: "",
    price: "",
    tripType: "",
    ratePerKm: "",
    extraPerKm: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showEstimation, setShowEstimation] = useState(false);

  const today = new Date();
  const minReturnDate = today.toISOString().split("T")[0];

  const [location1, setLocation1] = useState(null);
  const [location2, setLocation2] = useState(null);
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);
  const [autocomplete1, setAutocomplete1] = useState(null);
  const [autocomplete2, setAutocomplete2] = useState(null);
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const pricingConfig = {
    Sedan: { oneWay: 14, roundTrip: 13 },
    SUV: { oneWay: 19, roundTrip: 18 },
    Innova: { oneWay: 20, roundTrip: 19 },
    Etios: { oneWay: 15, roundTrip: 13 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobileNumber") {
      if (value.length > 10) return;
      if (!/^\d*$/.test(value)) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.vehicleType) newErrors.vehicleType = "Vehicle type is required";
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    }
    if (!formData.pickupLocation) newErrors.pickupLocation = "Pickup location is required";
    if (!formData.dropLocation) newErrors.dropLocation = "Drop location is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time && activeTab === "oneWay") newErrors.time = "Time is required";

    if (activeTab === "roundTrip") {
      if (!formData.returnDate) newErrors.returnDate = "Return date is required";
      if (!formData.pickupTime) newErrors.pickupTime = "Pickup time is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmBooking = async () => {
    const rawData = localStorage.getItem("bookingFormData");
    if (!rawData) return;
    const data = JSON.parse(rawData);
    try {
      const response = await fetch(import.meta.env.VITE_DEV_API_URL + "/book-now", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send booking request");
    } catch (error) {
      console.error(error);
    } finally {
      localStorage.removeItem("bookingFormData");
      setShowEstimation(false);
      setFormData(initialState);
      window.location.reload();
    }
  };

  const handleBackToForm = () => {
    setShowEstimation(false);
  };

  const handlePlaceChanged1 = () => {
    if (autocomplete1 !== null) {
      const place = autocomplete1.getPlace();
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();
      if (lat && lng) {
        setLocation1({ lat, lng });
        setFormData((prev) => ({ ...prev, pickupLocation: place.formatted_address || place.name }));
      }
    }
  };

  const handlePlaceChanged2 = () => {
    if (autocomplete2 !== null) {
      const place = autocomplete2.getPlace();
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();
      if (lat && lng) {
        setLocation2({ lat, lng });
        setFormData((prev) => ({ ...prev, dropLocation: place.formatted_address || place.name }));
      }
    }
  };

  const calculateRouteDistance = async (origin, destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: new window.google.maps.LatLng(origin.lat, origin.lng),
      destination: new window.google.maps.LatLng(destination.lat, destination.lng),
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    return {
      distance: results.routes[0].legs[0].distance.text,
      time: results.routes[0].legs[0].duration.text,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill all required fields correctly");
      return;
    }
    if (location1 && location2) {
      const result = await calculateRouteDistance(location1, location2);
      setDistance(result.distance);
      setTime(result.time);
      let distVal = parseInt(result.distance);
      if (activeTab === "roundTrip") distVal *= 2;
      let distanceKm = distVal + " Km";

      const pricing = pricingConfig[formData.vehicleType];
      let ratePerKm = activeTab === "roundTrip" ? pricing.roundTrip : pricing.oneWay;
      let price = distVal * ratePerKm;

      if (activeTab === "oneWay") {
        if (distVal <= 400) price += 400;
        else price += 600;
      }

      setCalculatedPrice(price);
      const updatedData = {
        ...formData,
        distance: distanceKm,
        tripType: activeTab,
        price: "Rs " + price,
        ratePerKm: ratePerKm,
        extraPerKm: ratePerKm
      };

      let time24 = activeTab === "roundTrip" ? formData.pickupTime : formData.time;
      let [hours, minutes] = time24.split(":").map(Number);
      let period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      updatedData.time = `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;

      localStorage.setItem("bookingFormData", JSON.stringify(updatedData));
      setShowEstimation(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setShowEstimation(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pricePerKm = formData.vehicleType && pricingConfig[formData.vehicleType]
    ? (activeTab === "roundTrip" ? pricingConfig[formData.vehicleType].roundTrip : pricingConfig[formData.vehicleType].oneWay)
    : "";

  if (showEstimation) {
    return (
      <div className="mt-8 rounded-2xl overflow-hidden bg-[#1D1D1D]/90 backdrop-blur-sm shadow-2xl border border-white/10 w-full max-w-2xl mx-auto z-20 p-8 md:p-10 text-white">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-6 bg-orange-500 rounded-full" />
          <h3 className="text-2xl font-bold tracking-tight">Trip Estimation</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-white/5 rounded-xl p-6 border border-white/5">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Selected Car</span>
            <p className="font-medium">{formData.vehicleType || "Not Selected"}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Name</span>
            <p className="font-medium">{formData.fullName || "Not specified"}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Distance</span>
            <p className="font-medium">{distance || "Calculating..."}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Duration</span>
            <p className="font-medium">{time || "Calculating..."}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Estimated Amount</span>
            <p className="text-2xl font-bold text-orange-500">
              {calculatedPrice ? `Rs. ${calculatedPrice.toFixed(0)}` : "Calculating..."}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Trip Type</span>
            <p className="font-medium capitalize">{activeTab.replace(/([A-Z])/g, ' $1')}</p>
          </div>
        </div>
        <div className="space-y-4 bg-black/20 rounded-xl p-6 mb-10 border border-white/5">
          <div className="flex items-start gap-4">
            <div className="w-1 h-1 rounded-full bg-orange-500 mt-2 shrink-0" />
            <div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Pickup</span>
              <p className="text-sm text-gray-300 font-medium">{formData.pickupLocation || "Not specified"}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-1 h-1 rounded-full bg-orange-500 mt-2 shrink-0" />
            <div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Drop</span>
              <p className="text-sm text-gray-300 font-medium">{formData.dropLocation || "Not specified"}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-1 h-1 rounded-full bg-orange-500 mt-2 shrink-0" />
            <div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Schedule</span>
              <p className="text-sm text-gray-300 font-medium">
                {formData.date || "Not specified"} at {formData.time || formData.pickupTime || "Not specified"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-[0.98]"
            onClick={handleConfirmBooking}
          >
            CONFIRM BOOKING
          </button>
          <button
            className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors py-4 px-8 text-sm font-semibold group"
            onClick={handleBackToForm}
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            BACK TO FORM
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 w-full max-w-6xl mx-auto flex flex-col md:flex-row relative z-20">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col pt-10">
        <button
          type="button"
          onClick={() => setActiveTab("oneWay")}
          className={`relative px-8 py-8 text-left text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-between group ${activeTab === "oneWay" ? "bg-[#b27e36] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
        >
          One Way
          {activeTab === "oneWay" && (
            <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-[#b27e36] z-10" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("roundTrip")}
          className={`relative px-8 py-8 text-left text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-between group ${activeTab === "roundTrip" ? "bg-[#b27e36] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
        >
          Round Trip
          {activeTab === "roundTrip" && (
            <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-[#b27e36] z-10" />
          )}
        </button>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="flex-1 p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white tracking-wide">Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Name"
              className={`w-full bg-white border ${errors.fullName ? 'border-red-500' : 'border-gray-100'} text-gray-800 px-5 py-3.5 rounded-sm focus:outline-none transition-all placeholder:text-gray-300 shadow-sm`}
            />
            {errors.fullName && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.fullName}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white tracking-wide">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              maxLength="10"
              className={`w-full bg-white border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-100'} text-gray-800 px-5 py-3.5 rounded-sm focus:outline-none transition-all placeholder:text-gray-300 shadow-sm`}
            />
            {errors.mobileNumber && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.mobileNumber}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white tracking-wide">Vehicle Type</label>
            <div className="relative">
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className={`w-full bg-white border ${errors.vehicleType ? 'border-red-500' : 'border-gray-100'} text-gray-600 px-5 py-3.5 rounded-sm focus:outline-none appearance-none shadow-sm`}
              >
                <option value="">Select Vehicle Type</option>
                <option value="Sedan">Sedan</option>
                <option value="Etios">Etios</option>
                <option value="SUV">SUV</option>
                <option value="Innova">Innova</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {errors.vehicleType && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.vehicleType}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white tracking-wide">Vehicle Price</label>
            <div className="w-full bg-white border border-gray-100 text-gray-400 px-5 py-3.5 rounded-sm shadow-sm">
              {pricePerKm ? `${pricePerKm} Rs/KM` : "18 Rs/KM"}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white tracking-wide">Pickup Location</label>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={libraries}>
              <AutocompleteComponent
                onLoad={setAutocomplete1}
                onPlaceChanged={handlePlaceChanged1}
                placeholder="Enter Pickup Location"
                className={`w-full bg-white border ${errors.pickupLocation ? 'border-red-500' : 'border-gray-100'} text-gray-800 px-5 py-3.5 rounded-sm focus:outline-none transition-all placeholder:text-gray-300 shadow-sm`}
              />
            </LoadScript>
            {errors.pickupLocation && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.pickupLocation}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white tracking-wide">Drop Location</label>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={libraries}>
              <AutocompleteComponent
                onLoad={setAutocomplete2}
                onPlaceChanged={handlePlaceChanged2}
                placeholder="Enter Drop Location"
                className={`w-full bg-white border ${errors.dropLocation ? 'border-red-500' : 'border-gray-100'} text-gray-800 px-5 py-3.5 rounded-sm focus:outline-none transition-all placeholder:text-gray-300 shadow-sm`}
              />
            </LoadScript>
            {errors.dropLocation && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.dropLocation}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white tracking-wide">Pickup Date/Time</label>
            <div className="flex gap-2">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={minReturnDate}
                className={`flex-[1.5] bg-white border ${errors.date ? 'border-red-500' : 'border-gray-100'} text-gray-800 px-4 py-3.5 rounded-sm focus:outline-none transition-all shadow-sm`}
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`flex-1 bg-white border ${errors.time ? 'border-red-500' : 'border-gray-100'} text-gray-800 px-4 py-3.5 rounded-sm focus:outline-none transition-all shadow-sm`}
              />
            </div>
            {errors.date && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.date}</p>}
            {errors.time && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.time}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white tracking-wide">Return Date/Time</label>
            {activeTab === "roundTrip" ? (
              <div className="flex gap-2">
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  min={formData.date || minReturnDate}
                  className={`flex-[1.5] bg-white border ${errors.returnDate ? 'border-red-500' : 'border-gray-100'} text-gray-800 px-4 py-3.5 rounded-sm focus:outline-none transition-all shadow-sm`}
                />
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className={`flex-1 bg-white border ${errors.pickupTime ? 'border-red-500' : 'border-gray-100'} text-gray-800 px-4 py-3.5 rounded-sm focus:outline-none transition-all shadow-sm`}
                />
              </div>
            ) : (
              <div className="w-full bg-white border border-gray-100 text-gray-300 px-5 py-3.5 rounded-sm shadow-sm cursor-not-allowed">
                Enter Return Date/Time
              </div>
            )}
            {errors.returnDate && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.returnDate}</p>}
            {errors.pickupTime && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.pickupTime}</p>}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="submit"
            className="bg-[#b27e36] hover:bg-[#9a6a2a] text-white font-bold py-4 px-12 rounded-md transition-all duration-300 shadow-[0_10px_20px_rgba(178,126,54,0.3)] transform hover:-translate-y-0.5 active:translate-y-0 tracking-wide text-sm"
          >
            Book A Taxi
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
