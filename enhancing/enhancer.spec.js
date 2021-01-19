const enhancer = require('./enhancer.js');


describe("enhancing unit tests", () => {
  const item = {
    name: "item",
    durability: 15,
    enhancement: 0
  }

  it("repairs", () => {
    expect(enhancer.repair(item)).toEqual({
      ...item,
      durability: 100
    })
  })
  
})
