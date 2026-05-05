import { Phone, MapPin, Wifi, Car, Wind, Tv, Waves, Users, Star, Calendar, ChevronRight, MessageCircle } from "lucide-react";

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  
  const phoneNumber = "+995593502643";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const telLink = `tel:${phoneNumber}`;

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-[#1E6091]">აიეტი</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#rooms" className="text-gray-700 hover:text-[#1E6091] transition">ოთახები</a>
              <a href="#services" className="text-gray-700 hover:text-[#1E6091] transition">სერვისები</a>
              <a href="#location" className="text-gray-700 hover:text-[#1E6091] transition">ლოკაცია</a>
              <a href="#contact" className="text-gray-700 hover:text-[#1E6091] transition">კონტაქტი</a>
            </div>
            <a 
              href={telLink}
              className="bg-[#1E6091] text-white px-4 py-2 rounded-lg hover:bg-[#174a73] transition flex items-center gap-2"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">დარეკეთ</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E6091]/90 to-[#1E6091]/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ქობულეთის გულში —<br />
              <span className="text-[#E8A87C]">ზღვა, აუზი და სითბო</span>
            </h1>
            <p className="text-xl md:text-2xl mb-2 opacity-90">
              44 ოთახი, 150 საწოლი, ოჯახური ატმოსფერო
            </p>
            <p className="text-lg mb-8 opacity-80">
              📍 დ. აღმაშენებლის ქ., 844 ა, ქობულეთი
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E8A87C] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d4966a] transition flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar size={20} />
                ოთახის დაჯავშნა
              </a>
              <a 
                href={telLink}
                className="bg-white text-[#1E6091] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                დარეკეთ ახლა
              </a>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-flex">
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <span className="text-white">240+ დადებითი შეფასება Facebook-ზე</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#1E6091] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E8A87C]">44</div>
              <div className="text-sm opacity-80">ოთახი</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E8A87C]">150</div>
              <div className="text-sm opacity-80">საწოლი</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E8A87C]">800მ</div>
              <div className="text-sm opacity-80">ზღვამდე</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#E8A87C]">ივნ-სექ</div>
              <div className="text-sm opacity-80">სეზონი</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E6091] mb-4">სერვისები</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ყველაფერი რაც გჭირდებათ კომფორტული დასვენებისთვის
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Waves, title: "ღია აუზი", desc: "სეზონური" },
              { icon: Wind, title: "კონდიციონერი", desc: "ყველა ოთახში" },
              { icon: Wifi, title: "უფასო WiFi", desc: "მთელ ტერიტორიაზე" },
              { icon: Car, title: "პარკინგი", desc: "უფასო" },
              { icon: Tv, title: "ტელევიზორი", desc: "ყველა ოთახში" },
              { icon: MapPin, title: "ლოკაცია", desc: "ქობულეთის ცენტრი" },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
                <service.icon className="w-10 h-10 text-[#1E6091] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E6091] mb-4">ოთახები</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              44 კომფორტული ოთახი ნებისმიერი საჭიროებისთვის
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "სტანდარტი",
                beds: "2 სტუმარი",
                price: "₾100-120",
                count: "15 ოთახი",
                features: ["WiFi", "TV", "AC", "სველი წერტილი"],
                image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80"
              },
              {
                name: "ოჯახური",
                beds: "4 სტუმარი",
                price: "₾150-180",
                count: "20 ოთახი",
                features: ["WiFi", "TV", "AC", "მაცივარი", "ბალკონი"],
                image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80"
              },
              {
                name: "ჯგუფური",
                beds: "6+ სტუმარი",
                price: "₾200-250",
                count: "9 ოთახი",
                features: ["WiFi", "TV", "AC", "მაცივარი", "ბალკონი", "მისაღები"],
                image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80"
              },
            ].map((room, idx) => (
              <div key={idx} className="bg-[#F5F0E8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${room.image}')` }}
                ></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#1E6091]">{room.name}</h3>
                    <span className="text-sm text-gray-500">{room.count}</span>
                  </div>
                  <p className="text-gray-600 mb-3 flex items-center gap-1">
                    <Users size={16} /> {room.beds}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feat, i) => (
                      <span key={i} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                        {feat}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-[#E8A87C] font-bold text-lg">{room.price}/ღამე</div>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1E6091] text-white px-4 py-2 rounded-lg hover:bg-[#174a73] transition text-sm"
                    >
                      დაჯავშნა
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E6091] mb-4">ლოკაცია</h2>
            <p className="text-gray-600">ქობულეთის ცენტრში, ზღვასთან ახლოს</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#1E6091] text-white p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">მისამართი</h3>
                  <p className="text-gray-600">დ. აღმაშენებლის ქ., 844 ა<br />ქობულეთი, აჭარა, საქართველო</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#1E6091] text-white p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">ტელეფონი</h3>
                  <a href={telLink} className="text-[#1E6091] hover:underline">(+995) 593 50 26 43</a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold text-[#1E6091] mb-4">მანძილები</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>🏖️ ზღვა</span>
                    <span className="font-medium">800 მ (10 წთ)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🏙️ ცენტრი</span>
                    <span className="font-medium">500 მ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🌳 ავადხანი</span>
                    <span className="font-medium">3 კმ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🚂 რკინიგზა</span>
                    <span className="font-medium">1.5 კმ</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.5!2d41.82!3d41.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQ5JzEyLjAiTiA0McKwNDknMTIuMCJF!5e0!3m2!1ska!2sge!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E6091] mb-4">სტუმრების შეფასებები</h2>
            <p className="text-gray-600">240+ დადებითი შეფასება Facebook-ზე</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "ნინო კ.",
                text: "ძალიან მომეწონა! აუზი საოცარია, ოთახები სუფთაა, მასპინძლები გულისხმიერები. ოჯახთან ერთად კიდევ დავბრუნდებით.",
                rating: 5
              },
              {
                name: "გიორგი მ.",
                text: "საუკეთესო ფასი-ხარისხის თანაფარდობა ქობულეთში. ზღვასთან ახლოს, მაგრამ მშვიდ ადგილას. რეკომენდირებულია!",
                rating: 5
              },
              {
                name: "თამარ ლ.",
                text: "ჯგუფური ოთახი დავჯავშნეთ მეგობრებთან ერთად. სივრცე საკმარისი იყო, ყველაფერი კომფორტული. მადლობა!",
                rating: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-[#F5F0E8] rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-[#1E6091]">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E6091]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            დაჯავშნეთ პირდაპირ და დაზოგეთ 15%
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Booking.com-ზე უფრო იაფად — პირდაპირი ჯავშნით
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8A87C] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d4966a] transition flex items-center justify-center gap-2 shadow-lg animate-pulse"
            >
              <MessageCircle size={20} />
              WhatsApp-ში დაჯავშნა
            </a>
            <a 
              href={telLink}
              className="bg-white text-[#1E6091] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              (+995) 593 50 26 43
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E6091] mb-4">კონტაქტი</h2>
            <p className="text-gray-600">დაგვიკავშირდით ნებისმიერ დროს</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href={telLink} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center group">
              <div className="bg-[#1E6091]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1E6091] transition">
                <Phone className="text-[#1E6091] group-hover:text-white transition" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">ტელეფონი</h3>
              <p className="text-[#1E6091]">(+995) 593 50 26 43</p>
            </a>
            
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center group">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition">
                <MessageCircle className="text-green-600 group-hover:text-white transition" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
              <p className="text-green-600">მწერეთ ახლავე</p>
            </a>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-[#1E6091]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#1E6091]" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">მისამართი</h3>
              <p className="text-gray-600 text-sm">დ. აღმაშენებლის ქ., 844 ა</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B4965] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">სასტუმრო აიეტი</h3>
              <p className="text-white/60 text-sm">თქვენი სახლი ზღვასთან</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © {currentYear} სასტუმრო აიეტი | შექმნილია SiTech-ის მიერ
              </p>
              <p className="text-white/40 text-xs mt-1">
                📍 ქობულეთი, აჭარა, საქართველო
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
