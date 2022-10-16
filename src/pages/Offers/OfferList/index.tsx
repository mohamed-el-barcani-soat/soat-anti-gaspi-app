import { Card, CardHeader, CardBody, Button } from "../../../components"
import { Offer } from "../../../services/models/offer"

type OfferListProps = {
    offers: Offer[]
}

const OfferList = ({offers}: OfferListProps) => {
    return <>
    {offers.length > 0 
    ? offers.map((offer) => (
        <Card key={offer.id} data-testid="offer-item">
          <CardHeader>{offer.title}</CardHeader>
          <CardBody style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {offer.description}
            <div>
              <Button>Voir l'annonce</Button>
            </div>
          </CardBody>
        </Card>
      ))
    : <div>Pas d'annonce pour le moment. Si vous avez des objets fonctionnels que vous voulez vous en débarasser, un autre propriétaire pourra en prendre soin si vous créez une annonce. Luttons contre le gaspillage industriel</div>}</>
}

export default OfferList;