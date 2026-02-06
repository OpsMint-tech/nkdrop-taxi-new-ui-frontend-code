import crypto from 'node:crypto';

if (!crypto.hash) {
  crypto.hash = (algorithm, data, outputEncoding) => {
    const hash = crypto.createHash(algorithm);
    hash.update(data);
    if (outputEncoding) {
      return hash.digest(outputEncoding);
    }
    return hash.digest();
  };
}
