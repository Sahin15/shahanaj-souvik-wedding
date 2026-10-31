import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CountdownTimer } from '../components/CountdownTimer';
import { CoupleStory } from '../components/CoupleStory';
import { FamilyGallery } from '../components/FamilyGallery';
import { WeddingEvents } from '../components/WeddingEvents';
import { InvitationSection } from '../components/InvitationSection';
import { PhotoGallery } from '../components/PhotoGallery';
import { VenueSection } from '../components/VenueSection';
import { RSVPSection } from '../components/RSVPSection';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <CountdownTimer />
        <CoupleStory />
        <FamilyGallery />
        <WeddingEvents />
        <InvitationSection />
        <PhotoGallery />
        <VenueSection />
        <RSVPSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
