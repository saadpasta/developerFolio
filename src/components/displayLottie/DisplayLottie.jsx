import React, {Suspense} from "react";
//import Lottie from "react-lottie";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default function DisplayLottie({animationData}) {
  //const animationData = this.props.animationData;
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData
  // };

  return (
    <Suspense fallback={<Loading />}>
      <Lottie animationData={animationData} />
    </Suspense>
  );
}

//isClickToPauseDisabled={true} />
