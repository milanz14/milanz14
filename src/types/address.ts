import Coords from "./coords";

export default interface Address {
  street: string;
  suite: string;
  city: string;
  zip: string;
  geo: Coords;
}
