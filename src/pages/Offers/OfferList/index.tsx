import { Card, CardHeader, CardBody, Button } from "../../../components"
import { Offer } from "../../../services/models/offer"
import OfferItem from "./OfferItem"

type OfferListProps = {
    offers: Offer[]
}

const OfferList = ({offers}: OfferListProps) => {
    return <>
    {offers.length > 0 
    ? offers.map((offer) => (
        <OfferItem offer={offer} key={offer.id} />
      ))
    : <div>Pas d'annonce pour le moment. Si vous avez des objets fonctionnels que vous voulez vous en débarasser, un autre propriétaire pourra en prendre soin si vous créez une annonce. Luttons contre le gaspillage industriel</div>}</>
}

export default OfferList;