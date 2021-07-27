import { BackButtonWrapper } from './StyledBackButton';
import { useRouter } from 'next/router';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const BackButton = () => {

    const router = useRouter();
    const goBack = () => {
        router.back();
    }

    return (
        <BackButtonWrapper onClick={goBack}>
            <ArrowBackIosIcon className="icon" />
        </BackButtonWrapper>
    )
}

export default BackButton
