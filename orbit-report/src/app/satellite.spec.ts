import { Satellite } from "./satellite";

describe("Satellite", () => {
  it("should create an instance", () => {
    expect(
      new Satellite("My Ride", "a type", "a launchDate", "an orbit type", true)
    ).toBeTruthy();
  });

  it("shouldShowWarning returns TRUE if type === space debris", () => {
    let satellite = new Satellite(
      "My Ride",
      "space debris",
      "a launchDate",
      "an orbit type",
      true
    );
    expect(satellite.shouldShowWarning()).toBeTruthy();
  });
});
