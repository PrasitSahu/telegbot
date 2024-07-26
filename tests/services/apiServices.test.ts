import dotenv from "dotenv";
import { describe, it, expect } from "@jest/globals";
import ApiServices from "../../services/apiServices";

dotenv.config();
const key = process.env.API_KEY as string;
describe("Api Services", () => {
  const apiServices = new ApiServices(key);
  const apiServicesNR = new ApiServices(key + "0");

  it("gets error in fetching due to invalid bot api key", () => {
    expect(apiServicesNR.get).rejects.toThrow();
  });

  it("get bot details", () => {
    const bot = apiServices.get();
    expect(bot).resolves.toMatchObject({
      id: 7207348604,
      is_bot: true,
      first_name: "Stooze",
      username: "stoozebot",
      can_join_groups: true,
      can_read_all_group_messages: false,
      supports_inline_queries: false,
      can_connect_to_business: false,
    });
  });
});
