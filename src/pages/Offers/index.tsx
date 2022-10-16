import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader } from "../../components";
import OffersService from "../../services/OffersService";
import { Offer } from "../../services/models/offer/Offer";

const Offers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [sortBy, setSortBy] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    OffersService.getAllOffers({
      pageNumber,
      pageSize,
      sortBy,
      sortOrder
    }).then((response) => {
      setOffers(response.content);
    });
  }, []);
  return (
    <div>
      {offers.map((offer) => (
        <Card key={offer.id}>
          <CardHeader>{offer.title}</CardHeader>
          <CardBody style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {offer.description}
            <div>
              <Button>Voir l'annonce</Button>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Offers;
