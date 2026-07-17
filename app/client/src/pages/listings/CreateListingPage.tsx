import CreateListingForm from '@/features/listings/components/CreateListingForm'
import ReturnButton from '@/components/ui/buttons/ReturnButton'
import HeroSection from '@/components/layout/HeroSection'

const CreateListingPage = () => {

    

    return(
        <>
            <HeroSection />
            <CreateListingForm />
            <ReturnButton />
        </>
    )
}

export default CreateListingPage;