import Navbar from '@/components/Navbar'
import PrivacyPolicy from '@/components/PrivacyPolicy';

export const metadata = {
  title: "Privacy Policy | Buy From India At Nepal"
};

function page() {
  return (
    <>
      <Navbar />
      <div className="relative top-16">
        <PrivacyPolicy />
      </div>
    </>
  )
}

export default page