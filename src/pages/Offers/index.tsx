import { useEffect, useState } from "react";
import OffersService from "../../services/OffersService";
import { Offer } from "../../services/models/offer/Offer";
import OfferList from "./OfferList";

const Offers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("desc");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    OffersService.getAllOffers({
      pageNumber,
      pageSize,
      sortBy,
      sortOrder,
    }).then((response) => {
      setOffers(response.elements);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  return <div>{offers && <OfferList offers={offers} />}</div>;
};

export default Offers;
