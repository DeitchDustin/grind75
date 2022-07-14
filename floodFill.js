// I - Array of Arrays
// O - Array of Arrays
// C -
// E - if all same color return same array of arrays.

var floodFill = function(image, sr, sc, color) {
  const current = image[sr][sc];

  if (current === color) {
      return image;
      }

  fill(image, sr, sc, color, current);

      return image;
  }

    const fill = (image, sr, sc, color, current)  => {
      if (sr < 0) {
          return;
      }

      if (sc < 0) {
          return;
          }

      if (sr > image.length - 1) {
          return;
          }

      if (sc > image[sr].length - 1) {
          return;
          }

      if (image[sr][sc] !== current) {
          return;
          }

      image[sr][sc] = color;

      fill(image, sr - 1, sc, color, current);
      fill(image, sr + 1, sc, color, current);
      fill(image, sr, sc - 1, color, current);
      fill(image, sr, sc + 1, color, current);
  }