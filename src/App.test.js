import React from "react";
import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor, within } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";
import ModuleList, {
  ALL_MODULES,
} from "./components/course/students/ModuleList";
import CourseModule, {
  CourseModuleProps,
} from "./components/course/students/CourseModule";

const GET_MODULES_SUCCESS_MOCK = {
  request: {
    query: ALL_MODULES,
  },
  result: {
    data: {
      allCourseModules: [
        {
          id: "1",
          moduleTitle: "Histoire",
          course: {
            id: "1",
            courseTitle: "Moyen Age",
            comments: "J'aime le moyen age",
            isValidated: "TRUE",
          },
        },
        {
          id: "2",
          moduleTitle: "Français",
          course: {
            id: "1",
            courseTitle: "Grammaire",
            comments: "jest se mock de nous",
            isValidated: "FALSE",
          },
        },
        {
          id: "3",
          moduleTitle: "Maths",
          course: {
            id: "1",
            courseTitle: "additions",
            comments: "au secours ! ",
            isValidated: "INPROGRESS",
          },
        },
      ],
    },
  },
};

const GET_MODULES_ERROR_MOCK = {
  request: {
    query: ALL_MODULES,
  },
  error: new Error("Unable to reach server."),
};

describe("ModuleList", () => {
  describe("while fetching modules", () => {
    it("renders loading", () => {
      render(
        <MockedProvider mocks={[GET_MODULES_SUCCESS_MOCK]} addTypename={false}>
          <ModuleList />
        </MockedProvider>
      );

      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("when unable to reach server", () => {
    it("renders error", async () => {
      render(
        <MockedProvider mocks={[GET_MODULES_ERROR_MOCK]} addTypename={false}>
          <ModuleList />
        </MockedProvider>
      );

      const errorMessage = await waitFor(() => screen.getByText("Error :"));

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("when fetching wilders succeeded", () => {
    it("renders modules", async () => {
      render(
        <MockedProvider mocks={[GET_MODULES_SUCCESS_MOCK]} addTypename={false}>
          <ModuleList />
        </MockedProvider>
      );

      const list = await waitFor(() => screen.find("CardRow"));

      const listItems = within(list).find("CourseModule");
      expect(listItems).toHaveLength(3);

      expect(listItems[0]).toHaveTextContent("Histoire");
      expect(listItems[1]).toHaveTextContent("Français");
      expect(listItems[2]).toHaveTextContent("Maths");
    });
  });
});

// it("should render module", async () => {
//   const component = TestRenderer.create(
//     <MockedProvider mocks={[GET_MODULES_SUCCESS_MOCK]} addTypename={false}>
//       <ModuleList moduleTitle="Histoire" />
//     </MockedProvider>
//   );

//   await new Promise((resolve) => setTimeout(resolve, 0));

//   const p = component.root.findByType("p");
//   expect(p.children.join("")).toContain("Histoire is a module course");
// });

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
