import { toASCII } from "punycode";

const HashPass = (password: string, salt: number) => {
  let hashedPass: string = "";
  const spcChar: string = "!#$%^&*_-+=)(:]@[;><.`,/+|`~";
  for (let j: number = 0; j < salt; j++) {
    for (let i: number = 0; i < password.length; i++) {
      let asc: string = toASCII(password[i]);

      if (i % 2 === 0) {
        hashedPass += spcChar[i] + String(j % 2);
      } else {
        hashedPass += spcChar[i % 3] + spcChar[i - (i % 5)] + asc;
      }

      if (j % 3 == 0) hashedPass += spcChar[j];
    }
  }
  return hashedPass;
};

export default HashPass;
