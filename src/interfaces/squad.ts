import { Player } from "./player";

export interface Squad {
  name: string;
  description: string;
  players: Array<Player>;
}
