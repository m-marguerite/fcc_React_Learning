const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [count, setCount] = useState(0);
  const [otpCode, setOtpCode] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [count]);

  const generate = () => {
    setOtpCode(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
    setCount(5);
  };

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otpCode === null ? "Click 'Generate OTP' to get a code" : otpCode}
      </h2>
      <p id="otp-timer" aria-live="assertive">
        {otpCode === null
          ? ""
          : count > 0
            ? `Expires in: ${count} seconds`
            : `OTP expired. Click the button to generate a new OTP.`}
      </p>
      <button id="generate-otp-button" onClick={generate} disabled={count > 0}>
        Generate OTP
      </button>
    </div>
  );
};
