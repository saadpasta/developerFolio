import React, {Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default function DisplayLottie({animationData}) {
  return (
    <Suspense fallback={<Loading />}>
      <Lottie animationData={animationData} />
    </Suspense>
  );
}
