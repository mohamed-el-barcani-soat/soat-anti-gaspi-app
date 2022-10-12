import { useEffect, useState } from "react";
import { Offer } from "../../services/models";
import OffersService from "../../services/OffersService";

const Offers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    OffersService.getAllOffers().then((response) => {
      console.log(response);
      setOffers(response.content);
    });
  }, []);
  return (
    <div>
      {offers.map((offer) => (
        <div data-testid="offer-item" key={offer.naturalId}>
          <div>{offer.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
