export const pageFormIndex = (pathname: string): number => {
    const stepMap: { [key: string]: number } = {
      "/": 1,
      "/step-2": 2,
      "/step-3": 3,
      "/step-4": 4,
      "/step-5": 5,
      "/step-6": 6,
    };
    return stepMap[pathname] || 1;
  };