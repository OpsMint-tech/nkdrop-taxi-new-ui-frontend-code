import HeroSection from '../HeroSection';
import Cities from '../Cities';
import OurVehicles from '../OurVehicles';
import OurServices from '../OurServices';
import WhatsAppButton from '../WhatsappButton';
import PhoneButton from '../PhoneButton';
import Form from '../Form';
import Reveal from '../Reveal';
import Nkdrop from '../Nkdrop';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Form />
      <Reveal>
        <OurServices />
      </Reveal>
      <Reveal>
        <OurVehicles />
      </Reveal>
      <Reveal>
        <Nkdrop />
      </Reveal>
      {/* <Reveal>
        <Cities />
      </Reveal> */}
      <WhatsAppButton />
      <PhoneButton />
    </>
  );
};

export default Home;