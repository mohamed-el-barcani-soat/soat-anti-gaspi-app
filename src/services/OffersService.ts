import config from "../config";
import { Offers } from "../pages/offers/models";
import { CreateOfferRequest, GetAllOffersRequest as GetAllOffersRequestParams } from "../services/models";

interface OffersServiceProps {
  createOffer: (createOfferRequest: CreateOfferRequest) => Promise<string>;
  getAllOffers: (getAllOffersRequest: GetAllOffersRequestParams) => Promise<Offers>;
}

const OffersService: OffersServiceProps = {
  createOffer: async (createOfferRequest) => {
    const response = await fetch(`${config.API_URL}/offers`, {
      method: "post",
      body: JSON.stringify(createOfferRequest),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const id = await response.json();
    if (response.ok) {
      return id;
    }

    throw new Error("Erreur lors de la création d'annonce");
  },

  getAllOffers: async (requestParams: GetAllOffersRequestParams): Promise<Offers> => {
    // TODO : send real request after api'll be ready to get all offers

    return Promise.resolve({
      content: [
        {
          title: "offer title 1",
          description: "offer title description",
          id: "id1",
          user: {
            email: "user1@gmail.com"
          },
        },
        {
          title: "offer title 2",
          description: "offer title description",
          id: "id2",
          user: {
            email: "user2@gmail.com"
          },
        },
        {
          title: "offer title 3",
          description: "offer title description",
          id: "id3",
          user: {
            email: "user3@gmail.com"
          }
        }
      ],
      total: 3
    })
  },
};

export default OffersService;
