import { useNavigate } from "react-router-dom"
import { Card, CardHeader, CardBody, Button } from "../../../../components"
import { Offer } from "../../../../services/models/offer"
import "./index.css"

type OfferItemProps = {
    offer: Offer
}

const OfferItem = ({ offer }: OfferItemProps) => {
    const navigate = useNavigate();

    const navigateToOfferPage = (offerId: string) => {
        navigate(`/offer/${offerId}`)
    }
    
    return <>
        <Card key={offer.id} data-testid="offer-item">
            <CardHeader>{offer.title}</CardHeader>
            <CardBody
                className="offer-item-body"
            >
                <div>{offer.description}</div>
                <div>
                    <div>{offer.address.city}</div>
                    <div>{offer.address.zipcode}</div>
                </div>

                <div className="availability-date-section">
                    <div>Disponible le : </div>
                    <div>{offer.availabilityDate?.toLocaleDateString()}</div>
                </div>

                <div>
                    <Button onClick={() => navigateToOfferPage(offer.id)}>Voir l'annonce</Button>
                </div>
            </CardBody>
        </Card>
    </>
}

export default OfferItem;