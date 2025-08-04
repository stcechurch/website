import { Button } from '@mui/material';

export const Whatsapp = () => {
  const whatsappLink = "https://chat.whatsapp.com/DDKXevnKUEtIRv7z33Bhz1?mode=ac_t"; // Link to your WhatsApp group

  return (
    <div className="h-[35vh] bg-stone-100 flex justify-center text-center">
      <div className="flex h-full max-w-lg md:max-w-2xl flex-col items-center justify-center space-y-5">
        <h1 className="font-bold uppercase text-sm sm:text-lg md:text-xl">
          For Regular Updates
        </h1>

        <h1 className="text-center text-sm max-w-xs sm:max-w-lg">
          Join Our Church WhatsApp Group!
        </h1>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="sendbtn">JOIN</button>
        </a>
      </div>
    </div>
  );
};
