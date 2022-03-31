export type PrimeGroup = {
    N: bigint; // the prime
    g: bigint; // a generator of the multiplicative group Zn
};

export type HashFunction = (data: Uint8Array) => Uint8Array;

export type CompatibleCrypto = {
    hashFunctions: { [algo: string]: HashFunction };
    randomBytes: (length: number) => Uint8Array;
};