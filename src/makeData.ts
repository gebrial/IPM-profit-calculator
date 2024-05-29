const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5),
    lastName: Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
        ? "complicated"
        : "single",
  };
};

export default function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): any[] => {
    // Add return type annotation
    const len = lens[depth];
    return range(len).map((_d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}