import { createStore } from ".";
import { formatDate } from "../utils";

const formattedDate = formatDate(new Date());

export const pixCreditCardStore = createStore({
  code: "qr-code.svg",
  dueDate: formattedDate,
  identifier: "3c1a951c356c3444p55ba1c9fc123c48",
});

export type ValuesPixStore = ReturnType<typeof pixCreditCardStore.getState>;
