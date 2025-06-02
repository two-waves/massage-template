import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function Booking() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    { id: 'klassisch', name: 'Klassische Ganzkörpermassage', durations: ['30', '60', '90', '120'] },
    { id: 'aromaoil', name: 'Aromaölmassage', durations: ['30', '60', '90', '120'] },
    { id: 'hotstone', name: 'Hot Stone Massage', durations: ['60', '90', '120'] },
    { id: 'fussreflex', name: 'Fußreflexzonenmassage', durations: ['30', '45', '60'] },
    { id: 'schulter', name: 'Schulter- und Nackenmassage', durations: ['20', '30', '45'] },
    { id: 'sport', name: 'Sportmassage', durations: ['30', '60', '90'] }
  ];

  const timeSlots = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking submitted:', {
      service: selectedService,
      duration: selectedDuration,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    alert('Vielen Dank für Ihre Buchungsanfrage! Wir melden uns in Kürze bei Ihnen.');
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section for Booking */}
      <section className="py-32 bg-deep-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </section>

      {/* Title Section */}
      <div className="py-8 bg-warm-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-2xl lg:text-3xl font-light text-deep-charcoal mb-3">
            Termin buchen
          </h1>
          <p className="font-playfair text-base text-deep-charcoal/70 max-w-2xl mx-auto">
            Wählen Sie Ihre gewünschte Massage und buchen Sie Ihren persönlichen Termin
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Selection */}
            <div className="bg-cream-white rounded-lg p-6 shadow-sm">
              <h2 className="font-playfair text-xl font-medium text-deep-charcoal mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Massage auswählen
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label key={service.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="service"
                      value={service.id}
                      checked={selectedService === service.id}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-4 h-4 text-sage-gray"
                    />
                    <span className="font-playfair text-deep-charcoal">{service.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration Selection */}
            {selectedServiceData && (
              <div className="bg-cream-white rounded-lg p-6 shadow-sm">
                <h2 className="font-playfair text-xl font-medium text-deep-charcoal mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Dauer auswählen
                </h2>
                <div className="flex flex-wrap gap-3">
                  {selectedServiceData.durations.map((duration) => (
                    <label key={duration} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="duration"
                        value={duration}
                        checked={selectedDuration === duration}
                        onChange={(e) => setSelectedDuration(e.target.value)}
                        className="w-4 h-4 text-sage-gray"
                      />
                      <span className="font-playfair text-deep-charcoal">{duration} Minuten</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Date and Time Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cream-white rounded-lg p-6 shadow-sm">
                <h2 className="font-playfair text-xl font-medium text-deep-charcoal mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Datum wählen
                </h2>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-sage-gray/30 rounded-lg font-playfair"
                  required
                />
              </div>

              <div className="bg-cream-white rounded-lg p-6 shadow-sm">
                <h2 className="font-playfair text-xl font-medium text-deep-charcoal mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Uhrzeit wählen
                </h2>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-3 border border-sage-gray/30 rounded-lg font-playfair"
                  required
                >
                  <option value="">Uhrzeit auswählen</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time} Uhr</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-cream-white rounded-lg p-6 shadow-sm">
              <h2 className="font-playfair text-xl font-medium text-deep-charcoal mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Ihre Kontaktdaten
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-playfair text-deep-charcoal mb-2">Vorname</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full p-3 border border-sage-gray/30 rounded-lg font-playfair"
                    required
                  />
                </div>
                <div>
                  <label className="block font-playfair text-deep-charcoal mb-2">Nachname</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full p-3 border border-sage-gray/30 rounded-lg font-playfair"
                    required
                  />
                </div>
                <div>
                  <label className="block font-playfair text-deep-charcoal mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    E-Mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-sage-gray/30 rounded-lg font-playfair"
                    required
                  />
                </div>
                <div>
                  <label className="block font-playfair text-deep-charcoal mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 border border-sage-gray/30 rounded-lg font-playfair"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block font-playfair text-deep-charcoal mb-2">Nachricht (optional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full p-3 border border-sage-gray/30 rounded-lg font-playfair"
                  placeholder="Haben Sie besondere Wünsche oder Anmerkungen?"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-sage-gray hover:bg-sage-gray/90 text-cream-white font-normal py-4 px-8 rounded-full transition-all duration-300"
                disabled={!selectedService || !selectedDuration || !selectedDate || !selectedTime}
              >
                Buchungsanfrage senden
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}