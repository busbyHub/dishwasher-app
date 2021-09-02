import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Dishwasher from "../Dishwasher";

test("displays image, with correct size and url", async () => {
  const dishwasher = render(
    <Dishwasher
      title={"Test Dishwasher"}
      price={{ now: "200" }}
      image={"imageurl"}
      productId={"123"}
      width={686}
      height={915}
    />
  );
  const dishwasherImage = await dishwasher.findByTestId("image-testid");
  expect(dishwasherImage.src).toBe("https://imageurl/?wid=686&hei=915");
});
