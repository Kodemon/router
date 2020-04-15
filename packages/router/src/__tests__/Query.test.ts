import { createBrowserHistory } from "history";

import { Query } from "../Query";

describe("Query", () => {
  let query: Query;

  it("should create a Query instance", () => {
    query = new Query(createBrowserHistory(), "?foo=bar&bar=foo");
    expect(query).toBeDefined();
  });

  it(".get() on a valid key should return expected value", () => {
    expect(query.get("foo")).toEqual("bar");
    expect(query.get("bar")).toEqual("foo");
  });

  it(".get() on an invalid key should return undefined", () => {
    expect(query.get("foobar")).toBeUndefined();
  });

  it(".set() should update a key if already defined", () => {
    query.set("foo", "foobar");
    query = new Query(query.history, query.history.location.search);
    expect(query.get("foo")).toEqual("foobar");
  });

  it(".set() should create a new key if not already defined", () => {
    query.set("epsilon", "x");
    query = new Query(query.history, query.history.location.search);
    expect(query.get("epsilon")).toEqual("x");
  });

  it(".unset() should remove key if it exists", () => {
    query.unset("foo");
    query = new Query(query.history, query.history.location.search);
    expect(query.get("foo")).toBeUndefined();
  });

  it(".toString() should return a stringified search string", () => {
    expect(query.toString()).toEqual("?bar=foo&epsilon=x");
  });
});
