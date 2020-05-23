// export const relativePathRegexp = new RegExp(/^(\.?\.?\/)+/ig);
export const relativePathRegexp = new RegExp(/^(\.?\.?\/)+[a-z0-9]?[^<>;=-]/ig);

export default relativePathRegexp;
