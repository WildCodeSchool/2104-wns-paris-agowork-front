import React from "react";
import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";
import ModuleList, {
  ALL_MODULES,
} from "./components/course/students/ModuleList";

it("should render module", async () => {
  const moduleMock = {
    request: {
      query: ALL_MODULES,
    },
    result: {
      data: {
        allCourseModules: {
          id: "1",
          moduleTitle: "Histoire",
          course: {
            id: "1",
            courseTitle: "Moyen Age",
            comments: "J'aime le moyen age",
            isValidated: 1,
          },
        },
      },
    },
  };

  const component = TestRenderer.create(
    <MockedProvider mocks={[moduleMock]} addTypename={false}>
      <ModuleList moduleTitle="Histoire" />
    </MockedProvider>
  );

  await new Promise((resolve) => setTimeout(resolve, 0));

  const p = component.root.findByType("p");
  expect(p.children.join("")).toContain("Histoire is a module course");
});

// test("renders learn react text", () => {
//   render(
//     <MockedProvider>
//       <App />
//     </MockedProvider>
//   );
//   const user = screen.getByText(/Loading/i);
//   expect(user).toBeInTheDocument();
// });

// const url: string = "/msg.json";
// const fakeData:any = {msg:mocks[result.data]};
// const server = setupServer(
//   rest.get(url, (req, res, ctx) => {
//     const data = ctx.json(fakeData);
//     return res(data);
//   })
// );

// const server = setupServer(
//   rest.get('/greeting', (req, res, ctx) => {
//     return res(ctx.json({ greeting: 'hello there' }))
//   })
// )

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
