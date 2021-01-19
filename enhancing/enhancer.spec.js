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

  it("succeeds", () => {
    expect(enhancer.success(item)).toEqual({
      ...item,
      enhancement: 1,
      durability: 15
    })
    expect(enhancer.success({...item, enhancement: 20})).toEqual({
      ...item,
      enhancement: 20,
      durability: 15
    })
  })
  
})
