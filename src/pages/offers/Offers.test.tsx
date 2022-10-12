import { rest } from "msw";
import { setupServer } from "msw/node";
import OffersResponse from "../../services/models/OffersResponse";
import Offers from "./Offers";
import { render, screen, waitFor } from "@testing-library/react";
import config from "../../config";

const server = setupServer(
  rest.get(`${config.API_URL}/offers`, (req, res, ctx) => {
    const offersResponse: OffersResponse = {
      content: [
        {
          naturalId: "6546541",
          address: "address",
          availabilityDate: new Date(),
          expirationDate: new Date(),
          user: {
            email: {
              value: "user@test.fr",
            },
          },
          description: "description",
          title: "title",
        },
        {
          naturalId: "543251352",
          address: "address2",
          availabilityDate: new Date(),
          expirationDate: new Date(),
          user: {
            email: {
              value: "user2@test.fr",
            },
          },
          description: "description2",
          title: "title2",
        },
      ],
      total: 2,
    };
    return res(ctx.json(offersResponse));
  })
);
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

const mountOffers = () => {
  render(<Offers />);
};

describe("Offers", () => {
  it("should display 2 offers", async () => {
    await waitFor(() => {
      mountOffers();
    });

    const offersListElement = screen.queryAllByTestId("offer-item");

    expect(offersListElement.length).toBe(2);
  });
});
