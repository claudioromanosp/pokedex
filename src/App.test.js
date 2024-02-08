import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("procura por termo no campo de busca", () => {
    const { getByPlaceholderText } = render(<App />);
    const searchInput = getByPlaceholderText(
      "Pesquisar por nome ou número nacional"
    );
    fireEvent.change(searchInput, { target: { value: "charmander" } });
    expect(searchInput.value).toBe("charmander");
  });

  test("testando o filtro do select", () => {
    const { getByLabelText } = render(<App />);
    const select = getByLabelText("Ordenar por");
    fireEvent.change(select, { target: { value: "national_number" } });
    expect(select.value).toBe("national_number");
  });
});
