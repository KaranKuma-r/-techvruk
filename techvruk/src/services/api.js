export const getComponents = () => {
  return Promise.resolve([
    { id: 1, name: "Resistor" },
    { id: 2, name: "Capacitor" },
    { id: 3, name: "Diode" },
    { id: 4, name: "Transistor" }
  ]);
};