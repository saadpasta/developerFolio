import React, {Component, Suspense} from "react";
import Lottie from "react-lottie";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
    const height = this.props.height;
    const width = this.props.width;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          options={defaultOptions}
          height={height}
          width={width}
          isClickToPauseDisabled={true}
        />
      </Suspense>
    );
  }
}
