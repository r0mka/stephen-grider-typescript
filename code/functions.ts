const add = (a: number, b: number): number => {
  return a + b;
};

// there's a problem here return type any FIXME:
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// rarely used
const throwError = (message: string): never => {
  throw new Error(message);
};

// instead more common
const throwErr = (message: string): string => {
  if (!message) throw new Error(message);

  return message;
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(`
//         Date: ${forecast.date}
//         Weather: ${forecast.weather}
//     `);
// };

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(`
        Date: ${date}
        Weather: ${weather}
    `);
};

logWeather(forecast);
