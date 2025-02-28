describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});


describe("Primer ejemplo de test",()=>{
  it('El numero 2 es igual a uno mas uno', () => {
    expect(2).toEqual(1+1)
  })
})