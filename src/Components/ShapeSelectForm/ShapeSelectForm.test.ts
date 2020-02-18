import React from "react";
import { render } from "@testing-library/react";

//Basic level testing initiated, next to test is the UI interactions and clicks
//Specifically the mounting and unmounting of components

test('Expect Rectangle side A length to be of type number', () => {
    expect(typeof rectangleSideALength).toBe('number');
});

test('Expect Rectangle side B length to be of type number', () => {
    expect(typeof rectangleSideBLength).toBe('number');
});

test('Expect circle circumference to be of type number', () => {
    expect(typeof circleCircumference).toBe('number');
});

