import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader } from "../../components";
import OffersService from "../../services/OffersService";
import { Offer } from "../../services/models/offer/Offer";
import OfferList from "./OfferList";

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
      <OfferList offers={offers} />
    </div>
  );
};

export default Offers;
