function convertToSnakeCase(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, "_");
}

console.log(convertToSnakeCase("name should be a string"));