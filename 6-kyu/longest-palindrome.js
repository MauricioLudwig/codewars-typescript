export function longestPalindrome(s) {
  let arr = s.split('');
  let n = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let z = arr.length - 1; z >= i; z--) {
      const sub = arr.slice(i, z + 1);

      if (sub.join('') === [...sub].reverse().join('') && sub.length > n) {
        n = sub.length;
      }
    }
  }

  return n;
}
