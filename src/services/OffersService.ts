import config from "../config";
import { CreateOfferRequest, Offers } from "../services/models";

interface OffersServiceProps {
  createOffer: (createOfferRequest: CreateOfferRequest) => Promise<string>;
  getAllOffers: () => Promise<Offers>
}

const OffersService: OffersServiceProps = {

  createOffer: async (createOfferRequest) => {
    const response = await fetch(`${config.API_URL}/offers`, { 
      method: 'post',
      body: JSON.stringify(createOfferRequest),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const id = await response.json();
    if (response.ok) {
      return id;
    }

    throw new Error("Erreur lors de la création d'annonce");
  },

  getAllOffers: async () => {
    const response = await fetch(`${config.API_URL}/offers`, {
      method: 'get'
    })

    if (response.ok) {
      await response.json();
    }

    throw new Error("Erreur pour obtenir la liste des annonces")
  }
}

export default OffersService;