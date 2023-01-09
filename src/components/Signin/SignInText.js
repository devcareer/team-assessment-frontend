import chrome from '../../assets/chrome.png';
import firefox from '../../assets/firefox.png';
import explorer from '../../assets/explorer.png';

const SignInText = () => {
  return (
    // <div className="sign-text text-white w-1/2 flex ju items-center">
    <div className="">
      <div className="font-medium text-3xl mb-1">
        Give your best shot while answering the questions
      </div>
      <div className="text-xs mb-10">Wish you the best in it.</div>
      <div className="text-medium mb-4 font-medium">
        Browser Compatibility works best with
      </div>
      <div className="flex flex-row space-x-10 mb-8">
        <img src={chrome} alt="chrome" />
        <img src={firefox} alt="firefox" />
        <img src={explorer} alt="explorer" />
      </div>
      <div className="text-medium mb-2 font-medium">Network Speed</div>
      <div className="text-sm leading-relaxed">
        Check if you have a decent internet speed. This can be done by logging
        into your email account. A decent internet connection should enable you
        to login within seconds.
      </div>
    </div>
    // </div>
  );
};

export default SignInText;
