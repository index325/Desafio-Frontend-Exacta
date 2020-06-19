import React from "react";
import { render } from "@testing-library/react";
import Home from "./screens/Home";
import ListAll from "./screens/ListAll";

test("renderiza o componente Home", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/dados pessoais/i);
  expect(linkElement).toBeInTheDocument();
});

test("renderiza o componente de listagem", () => {
  const { getByText } = render(<ListAll />);
  const linkElement = getByText(/usuários cadastrados/i);
  expect(linkElement).toBeInTheDocument();
});

test("Cadastra um novo usuário", () => {
  const { getByText } = render(<ListAll />);
  const linkElement = getByText(/usuários cadastrados/i);
  expect(linkElement).toBeInTheDocument();
});