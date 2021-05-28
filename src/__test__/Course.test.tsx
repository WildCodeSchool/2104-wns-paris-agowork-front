import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import {
  render,
  screen,
  waitFor,
  within,
  fireEvent,
} from "@testing-library/react";
import Course from "../components/course/students/CourseContainer";

describe("when button fuction", () => {
  it("function button", async () => {
    const { getAllByTestId } = render(
      <MockedProvider>
        <Course
          id="1"
          courseTitle="Moyen Age"
          comments="J'aime le moyen age"
          isValidated="TRUE"
          handleSubmit
        />
      </MockedProvider>
    );
    const onSubmit = jest.fn();
    fireEvent.click(getAllByTestId("submit-btn")[0]);
    expect(onSubmit).toHaveBeenCalled();
  });
});
