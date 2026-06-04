const Footer = () => {
    const getCurrentYear = () => {
        const date = new Date();

        return date.getFullYear();
    }
    return(
        <footer className='flex justify-center bg-secondary text-white mt-40'>
            <span>
                &copy; {getCurrentYear()}  ClearListing - All rights reserved
            </span>
        </footer>
    )
}
// TODO: Add relevant information in footer

export default Footer