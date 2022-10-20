import config from "../config";
import {
  CreateOfferRequest,
  GetAllOffersRequest as GetAllOffersRequestParams,
  Offers,
} from "./models/offer";
import GetAllOffersResponse from "./models/offer/GetAllOffersResponse";

interface OffersServiceProps {
  createOffer: (createOfferRequest: CreateOfferRequest) => Promise<string>;
  getAllOffers: (
    getAllOffersRequest: GetAllOffersRequestParams
  ) => Promise<Offers>;
}

const mapToDateWhenParamIsString = (dateToMap: string | Date | undefined) => {
  return typeof dateToMap === "string" ? new Date(dateToMap) : dateToMap;
};

const OffersService: OffersServiceProps = {
  createOffer: async (createOfferRequest) => {
    try {
      const response = await fetch(`${config.API_URL}/offers`, {
        method: "post",
        body: JSON.stringify(createOfferRequest),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const id = response.headers.get("Location");
        console.log(id);
        return id === null ? "" : id;
      } else {
        console.log(response);
      }
    } catch (e) {
      console.error(e);
    }

    throw new Error("Erreur lors de la création d'annonce");
  },

  getAllOffers: async (
    requestParams: GetAllOffersRequestParams
  ): Promise<Offers> => {
    const response = await fetch(
      `${config.API_URL}/offers?pageNumber=${requestParams.pageNumber}&pageSize=${requestParams.pageSize}&sortBy=${requestParams.sortBy}&sortOrder=${requestParams.sortOrder}`
    );
    const offersPage: GetAllOffersResponse = await response.json();
    const offersElements = offersPage.elements.map((offer) => {
      const availabilityDate = mapToDateWhenParamIsString(
        offer.availabilityDate
      );
      const expirationDate = mapToDateWhenParamIsString(offer.expirationDate);
      return {
        ...offer,
        availabilityDate,
        expirationDate,
      };
    });
    return {
      elements: offersElements,
      pageCount: offersPage.pageCount,
    };
  },
};

export default OffersService;
