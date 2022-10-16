import { rest } from "msw";
import { setupServer } from "msw/node";
import Offers from ".";
import { render, screen, waitFor } from "@testing-library/react";
import config from "../../config";

const server = setupServer(
  rest.get(`${config.API_URL}/offers`, (req, res, ctx) => {
    // TODO : complete test
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
