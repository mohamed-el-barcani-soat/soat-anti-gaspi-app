import { useParams } from "react-router-dom"

const CreateContact = () => {
    const {offerId} = useParams();

    return <>
    contact form not implement yet, id is '{offerId}'
    </>
}

export default CreateContact;