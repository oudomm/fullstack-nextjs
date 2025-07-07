// components/LottieAnimation.tsx
import Lottie from "lottie-react";
import rocketAnimation from "../../../public/animations/desktop.json";

export default function LottieAnimation() {
  return <Lottie animationData={rocketAnimation} loop={true} />;
}
