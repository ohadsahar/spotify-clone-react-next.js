import { LoadingWrapper } from "./StyledLoading"
import Lottie from 'react-lottie';
import * as animationData from '../../public/static/loading.json';

const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <LoadingWrapper>
            <Lottie options={defaultOptions}
                height={400}
                width={400}
            />
        </LoadingWrapper>
    )
}

export default Loading
