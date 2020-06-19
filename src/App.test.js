import React from "react";
import { render, act, waitForElement, fireEvent } from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils"; // ES6
// import "@testing-library/jest-dom/extend-expect";
import Home from "./screens/Home";
import ListAll from "./screens/ListAll";
import Edit from "./screens/Edit";
import { UserProvider } from "./contexts/users";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import {
  Route,
  MemoryRouter,
} from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });
describe("App component", () => {
  test("Tenta cadastrar um usuário com rg errado", async () => {
    const container = render(
      <UserProvider>
        <Home />
      </UserProvider>
    );

    const [rg, emissao, expedidor, sexo, submit] = await waitForElement(() => [
      container.getByTestId("rg-field"),
      container.getByTestId("emissao-field"),
      container.getByTestId("expedidor-field"),
      container.getByTestId("Masculino-button"),
      container.getByTestId("submit-button"),
    ]);

    act(() => {
      ReactTestUtils.Simulate.change(rg, {
        target: { value: "43.607.000-2" },
      });
      ReactTestUtils.Simulate.change(emissao, {
        target: { value: "18/06/2020" },
      });
      ReactTestUtils.Simulate.change(expedidor, {
        target: { value: "SSP" },
      });
      fireEvent.click(sexo);
    });

    expect(submit.disabled).toEqual(true);
  });

  test("Tenta cadastrar um usuário com rg correto", async () => {
    const container = render(
      <UserProvider>
        <Home />
      </UserProvider>
    );

    const [rg, emissao, expedidor, sexo, submit] = await waitForElement(() => [
      container.getByTestId("rg-field"),
      container.getByTestId("emissao-field"),
      container.getByTestId("expedidor-field"),
      container.getByTestId("Masculino-button"),
      container.getByTestId("submit-button"),
    ]);

    ReactTestUtils.Simulate.change(rg, {
      target: { value: "43.607.000-5" },
    });

    ReactTestUtils.Simulate.change(emissao, {
      target: { value: "18/06/2020" },
    });

    ReactTestUtils.Simulate.change(expedidor, {
      target: { value: "SSP" },
    });

    fireEvent.click(sexo);

    expect(submit.disabled).toEqual(false);
  });

  test("Tenta cadastrar um usuário com data de emissao incorreta", async () => {
    const container = render(
      <UserProvider>
        <Home />
      </UserProvider>
    );

    const [rg, emissao, expedidor, sexo, submit] = await waitForElement(() => [
      container.getByTestId("rg-field"),
      container.getByTestId("emissao-field"),
      container.getByTestId("expedidor-field"),
      container.getByTestId("Masculino-button"),
      container.getByTestId("submit-button"),
    ]);

    act(() => {
      ReactTestUtils.Simulate.change(rg, {
        target: { value: "43.607.000-5" },
      });
      ReactTestUtils.Simulate.change(emissao, {
        target: { value: "18/26/2020" },
      });
      ReactTestUtils.Simulate.change(expedidor, {
        target: { value: "SSP" },
      });
      fireEvent.click(sexo);
    });

    expect(submit.disabled).toEqual(true);
  });

  test("Tenta cadastrar um usuário com data de emissao correta", async () => {
    const container = render(
      <UserProvider>
        <Home />
      </UserProvider>
    );

    const [rg, emissao, expedidor, sexo, submit] = await waitForElement(() => [
      container.getByTestId("rg-field"),
      container.getByTestId("emissao-field"),
      container.getByTestId("expedidor-field"),
      container.getByTestId("Masculino-button"),
      container.getByTestId("submit-button"),
    ]);

    act(() => {
      ReactTestUtils.Simulate.change(rg, {
        target: { value: "43.607.000-5" },
      });
      ReactTestUtils.Simulate.change(emissao, {
        target: { value: "18/06/2020" },
      });
      ReactTestUtils.Simulate.change(expedidor, {
        target: { value: "SSP" },
      });
      fireEvent.click(sexo);
    });

    expect(submit.disabled).toEqual(false);
  });
  test("Cadastra um usuário e vê se ele foi cadastrado", async () => {
    const container = render(
      <UserProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Route component={Home} path="/" exact />
          <Route component={ListAll} path="/list-all" />
        </MemoryRouter>
      </UserProvider>
    );

    const [
      rg,
      emissao,
      expedidor,
      sexo,
      submit,
      listLink,
    ] = await waitForElement(() => [
      container.getByTestId("rg-field"),
      container.getByTestId("emissao-field"),
      container.getByTestId("expedidor-field"),
      container.getByTestId("Masculino-button"),
      container.getByTestId("submit-button"),
      container.getByTestId("go-to-list-home"),
    ]);

    act(() => {
      ReactTestUtils.Simulate.change(rg, {
        target: { value: "33.802.284-3" },
      });
      ReactTestUtils.Simulate.change(emissao, {
        target: { value: "18/06/2020" },
      });
      ReactTestUtils.Simulate.change(expedidor, {
        target: { value: "SSP" },
      });
      fireEvent.click(sexo);
    });

    fireEvent.click(submit);

    fireEvent.click(listLink);

    expect(container.getByText("33.802.284-3"));
  });
  test("Cadastra um usuário e o exclui", async () => {
    const container = render(
      <UserProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Route component={Home} path="/" exact />
          <Route component={ListAll} path="/list-all" />
        </MemoryRouter>
      </UserProvider>
    );

    const [
      rg,
      emissao,
      expedidor,
      sexo,
      submit,
      listLink,
    ] = await waitForElement(() => [
      container.getByTestId("rg-field"),
      container.getByTestId("emissao-field"),
      container.getByTestId("expedidor-field"),
      container.getByTestId("Masculino-button"),
      container.getByTestId("submit-button"),
      container.getByTestId("go-to-list-home"),
    ]);

    act(() => {
      ReactTestUtils.Simulate.change(rg, {
        target: { value: "33.802.284-3" },
      });
      ReactTestUtils.Simulate.change(emissao, {
        target: { value: "18/06/2020" },
      });
      ReactTestUtils.Simulate.change(expedidor, {
        target: { value: "SSP" },
      });
      fireEvent.click(sexo);
    });

    fireEvent.click(submit);

    fireEvent.click(listLink);

    const [deleteButton] = await waitForElement(() => [
      container.getByTestId("excluir-33.802.284-3"),
    ]);

    fireEvent.click(deleteButton);

    expect(container.queryByTestId("excluir-33.802.284-3")).toBeNull();
  });
  test("Cadastra um usuário e o edita", async () => {
    const container = render(
      <UserProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Route component={Home} path="/" exact />
          <Route component={ListAll} path="/list-all" />
          <Route component={Edit} path="/edit/:id" />
        </MemoryRouter>
      </UserProvider>
    );

    const [
      rg,
      emissao,
      expedidor,
      sexo,
      submit,
      listLink,
    ] = await waitForElement(() => [
      container.getByTestId("rg-field"),
      container.getByTestId("emissao-field"),
      container.getByTestId("expedidor-field"),
      container.getByTestId("Masculino-button"),
      container.getByTestId("submit-button"),
      container.getByTestId("go-to-list-home"),
    ]);

    act(() => {
      ReactTestUtils.Simulate.change(rg, {
        target: { value: "33.802.284-3" },
      });
      ReactTestUtils.Simulate.change(emissao, {
        target: { value: "18/06/2020" },
      });
      ReactTestUtils.Simulate.change(expedidor, {
        target: { value: "SSP" },
      });
      fireEvent.click(sexo);
    });

    fireEvent.click(submit);

    fireEvent.click(listLink);

    const [editButton] = await waitForElement(() => [
      container.getByTestId("editar-33.802.284-3"),
    ]);

    fireEvent.click(editButton);

    const [
      rgEdit,
      emissaoEdit,
      expedidorEdit,
      sexoEdit,
      submitEdit,
      listLinkEdit,
    ] = await waitForElement(() => [
      container.getByTestId("rg-field"),
      container.getByTestId("emissao-field"),
      container.getByTestId("expedidor-field"),
      container.getByTestId("Feminino-button"),
      container.getByTestId("submit-button"),
      container.getByTestId("go-to-list-edit"),
    ]);

    act(() => {
      ReactTestUtils.Simulate.change(rgEdit, {
        target: { value: "37.453.182-1" },
      });
      ReactTestUtils.Simulate.change(emissaoEdit, {
        target: { value: "19/06/2020" },
      });
      ReactTestUtils.Simulate.change(expedidorEdit, {
        target: { value: "SSP" },
      });
      fireEvent.click(sexoEdit);
    });

    fireEvent.click(submitEdit);

    fireEvent.click(listLinkEdit);

    expect(container.getByText("37.453.182-1"));
  });
});
