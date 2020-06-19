import React from "react";
import { render, act } from "@testing-library/react";
import TestUtils from 'react-dom/test-utils';
import Home from "./screens/Home";
import ListAll from "./screens/ListAll";

const wait = (amount = 0) => {
  return new Promise((resolve) => setTimeout(resolve, amount));
};

const actWait = async (amount = 0) => {
  await act(async () => {
    await wait(amount);
  });
};

test("Tenta cadastrar um usuário com rg errado", async () => {
  const wrapper = document.createElement('div');
  const {getByTestId} = render(
    <Home />,
    wrapper
  );
  const rg = getByTestId('rg-field');
  const emissao = getByTestId('emissao-field');
  const expedidor = getByTestId('expedidor-field');
  const sexo = getByTestId('Masculino-button');
  const submit = getByTestId('submit-button');

  await actWait(1000);
  TestUtils.Simulate.change(rg, { target: { value: '43.607.000-2' } });
  TestUtils.Simulate.change(emissao, { target: { value: '18/06/2020' } });
  TestUtils.Simulate.change(expedidor, { target: { value: 'SSP' } });
  TestUtils.Simulate.click(sexo);
  await actWait(1000);
  
  expect(submit.disabled).toEqual(true);
});

// test("Cadastra um novo usuário", () => {
//   const { getByText } = render(<ListAll />);
//   const linkElement = getByText(/usuários cadastrados/i);
//   expect(linkElement).toBeInTheDocument();
// });