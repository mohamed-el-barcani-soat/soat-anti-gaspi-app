import { getByText, render, screen } from "@testing-library/react";
import OfferItem from ".";
import { Offer } from "../../../../services/models/offer";
import { renderWithRouteProvider } from "../../../helper/test/renderWithRouteProvider";

describe("OfferItem", () => {
  it("should render offer", () => {
    const offer: Offer = {
      offerId: "z65f4zf",
      address: {
        city: "Paris",
        country: "France",
        street: "rue champs de mars",
        zipcode: "75001",
      },
      description: "description",
      title: "title",
      user: {
        username: "username",
        email: "user@email.1",
      },
      availabilityDate: new Date(2022, 10, 16),
      expirationDate: new Date(2022, 10, 22),
    };
    renderWithRouteProvider(<OfferItem offer={offer} />);

    screen.getByText(offer.title);
    screen.getByText(offer.address.city);
    screen.getByText(offer.address.zipcode);
    screen.getByText(offer.description);
    if (offer.availabilityDate)
      screen.getByText(offer.availabilityDate.toLocaleDateString());
  });
});
