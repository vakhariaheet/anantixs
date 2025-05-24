import React, { useState } from 'react';
import Container from '../ui/Container';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  position: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Anantix Accounting transformed our financial operations. Their expert team provided strategic insights that helped us optimize our tax strategy and improve our bottom line.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc."
    },
    {
      content: "Working with Anantix has been a game-changer for our small business. Their personalized approach and attention to detail have saved us both time and money.",
      author: "Michael Chen",
      position: "Owner, Chen's Retail Group"
    },
    {
      content: "The team at Anantix Accounting brings both precision and creativity to the table. They've helped us navigate complex financial challenges with confidence.",
      author: "Lisa Rodriguez",
      position: "CFO, Innovative Solutions"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const goToPrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-primary-900 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg opacity-80">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-center px-4 md:px-8 py-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 text-primary-300 opacity-30">
              <Quote size={60} />
            </div>
            
            <div 
              key={currentIndex}
              className={`relative z-10 transition-all duration-500 ${
                direction === 'right' 
                  ? 'animate-slide-in-right' 
                  : direction === 'left'
                  ? 'animate-slide-in-left'
                  : ''
              }`}
            >
              <p className="text-xl md:text-2xl italic mb-8">
                {testimonials[currentIndex].content}
              </p>
              
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors transform hover:scale-110 duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors transform hover:scale-110 duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;