import { findAllByTestId, getByText, render, screen } from "@testing-library/react"
import OfferList from "."
import { Offer } from "../../../services/models/offer"

describe("OfferList", () => {
    const noOfferInformationTextRegex = /Pas d'annonce.+/;

    describe("when properties contains 1 offer", () => {
        const offer: Offer = {
            id: "z65f4zf",
            address: {
                city: "Paris",
                country: "France",
                street: "rue champs de mars",
                streetNumber: 15,
                zipcode: "75001"
            },
            description: "description",
            title: "title",
            user: {
                email: "user@email.1"
            },
            availabilityDate: new Date(2022, 10, 16),
            expirationDate: new Date(2022, 10, 22)
        }
        const props: { offers: Offer[] } = {
            offers: [offer]
        }
        it("should render 1 offer", () => {
            render(<OfferList offers={props.offers}/>)
            const offerItem = screen.getAllByTestId('offer-item');
            expect(offerItem.length).toBe(1);
    
            const concernedOffer = offerItem[0];
            getByText(concernedOffer, offer.title);
            // offer.availabilityDate && 
            // getByText(concernedOffer, offer.availabilityDate?.toLocaleDateString());
            // offer.expirationDate && 
            // getByText(concernedOffer, offer.expirationDate?.toLocaleDateString());
            // getByText(concernedOffer, offer.address.country);
            // getByText(concernedOffer, offer.address.city);
            // getByText(concernedOffer, offer.address.zipcode);  
        });

        it("should not show no offer information", () => {
            render(<OfferList offers={props.offers}/>)

            expect(screen.queryByText(noOfferInformationTextRegex)).not.toBeInTheDocument();
        })
    })
    
    it("when properties doesn't contain offer should inform no offer information", () => {
        render(<OfferList offers={[]} />)

        const offerItem = screen.queryAllByTestId('offer-item');
        expect(offerItem.length).toBe(0);

        screen.getByText(noOfferInformationTextRegex);
    })
})