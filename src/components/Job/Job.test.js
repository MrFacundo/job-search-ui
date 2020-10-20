import React from "react";
import { mount } from "enzyme";
// import Adapter from 'enzyme-adapter-react-15';

import Job from "./Job";

describe("Job", () => {
	//    beforeEach(() => beforeEachTest());
	//    afterEach(() => afterEachTest());

	it("renders without crashing without data", () => {
		mount(<Job />);
	});

	it("renders without crashing with data", () => {
		mount(<Job {...jobs} />);
	});

	snapshot;
});
