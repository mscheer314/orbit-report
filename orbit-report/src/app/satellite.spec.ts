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

  it("shouldShowWarning returns FALSE if type !== space debris", () => {
    let satellite = new Satellite(
      "My Ride",
      "not space debris",
      "a launchdate",
      "an orbit type",
      true
    );
    expect(satellite.shouldShowWarning()).toBeFalsy();
  });
});
