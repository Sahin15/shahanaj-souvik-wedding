import React from 'react';
import { Header } from '../components/Header';
import { WelcomeScreen } from '../components/WelcomeScreen';
import { Hero } from '../components/Hero';
import { PersonalInvitationBanner } from '../components/PersonalInvitationBanner';
import { CountdownTimer } from '../components/CountdownTimer';
import { SaveTheDateSection } from '../components/SaveTheDateSection';
import { CoupleStory } from '../components/CoupleStory';
import { FamilyGallery } from '../components/FamilyGallery';
import { WeddingEvents } from '../components/WeddingEvents';
import { InvitationSection } from '../components/InvitationSection';
import { PhotoGallery } from '../components/PhotoGallery';
import { VenueSection } from '../components/VenueSection';
import { RSVPSection } from '../components/RSVPSection';
import { ClosingBlessingSection } from '../components/ClosingBlessingSection';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink overflow-x-hidden">
      <WelcomeScreen />
      <Header />
      <main className="flex-1">
        <Hero />
        <PersonalInvitationBanner />
        <CountdownTimer />
        <SaveTheDateSection />
        <CoupleStory />
        <FamilyGallery />
        <WeddingEvents />
        <InvitationSection />
        <PhotoGallery />
        <VenueSection />
        <RSVPSection />
        <ClosingBlessingSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
