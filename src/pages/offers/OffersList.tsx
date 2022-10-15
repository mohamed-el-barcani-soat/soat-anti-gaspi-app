import { useEffect, useState } from "react";
import OffersService from "../../services/OffersService";
import { Offer } from "./models";

const Offers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    OffersService.getAllOffers({
      pageNumber: 1,
      pageSize: 3,
      sortBy: "all",
      sortOrder: "desc"
    }).then((response) => {
      console.log(response);
      setOffers(response.content);
    });
  }, []);
  return (
    <div>
      {offers.map((offer) => (
        <div data-testid="offer-item" key={offer.id}>
          <div>{offer.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
